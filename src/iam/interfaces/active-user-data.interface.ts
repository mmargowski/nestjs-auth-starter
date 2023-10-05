import { Role } from 'src/users/enums/role.enum';

export interface ActiveUserData {
  /**
   * The user's unique identifier.
   */
  sub: number;

  /**
   * The user's email address.
   */
  email: string;

  /**
   * The user's role.
   */

  role: Role;
}
