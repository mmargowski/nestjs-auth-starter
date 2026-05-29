import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { authenticator } from 'otplib';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { TfaSecretStorage } from './tfa-secret.storage';

@Injectable()
export class OtpAuthenticationService {
  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly tfaSecretStorage: TfaSecretStorage,
  ) {}

  async generateSecret(email: string) {
    const user = await this.userRepository.findOneOrFail({
      where: { email },
      select: { id: true, isTfaEnabled: true },
    });
    if (user.isTfaEnabled) {
      throw new BadRequestException('2FA is already enabled');
    }

    const secret = authenticator.generateSecret();
    const appName = this.configService.getOrThrow('TFA_APP_NAME');
    const uri = authenticator.keyuri(email, appName, secret);

    await this.tfaSecretStorage.insert(user.id, secret);

    return {
      uri,
    };
  }

  verifyCode(code: string, secret: string) {
    return authenticator.verify({ token: code, secret });
  }

  async activateTfa(userId: number, email: string, code: string) {
    const user = await this.userRepository.findOneOrFail({
      where: { id: userId },
      select: { id: true, isTfaEnabled: true },
    });
    if (user.isTfaEnabled) {
      throw new BadRequestException('2FA is already enabled');
    }

    const secret = await this.tfaSecretStorage.get(userId);
    if (!secret) {
      throw new BadRequestException('No pending TFA secret found');
    }

    const isValid = this.verifyCode(code, secret);
    if (!isValid) {
      throw new UnauthorizedException('Invalid 2FA code');
    }
    await this.enableTfaForUser(email, secret);
    await this.tfaSecretStorage.invalidate(userId);
  }

  private async enableTfaForUser(email: string, secret: string) {
    const { id } = await this.userRepository.findOneOrFail({
      where: { email },
      select: { id: true },
    });

    await this.userRepository.update(
      { id },
      { tfaSecret: secret, isTfaEnabled: true },
    );
  }
}
