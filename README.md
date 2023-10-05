## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

Additionally this projects adds the following functionality:

- User registration with email/password
- User authentication with JWT
- User registration with Google
- 2FA with Google Authenticator
- Custom decorator for role-based authorization
- Custom decorator to make resources public/private
- Custom user context decorator

## Tech stack

- [NestJS](https://nestjs.com/) as framework
- [TypeORM](https://typeorm.io/#/) as ORM
- [Docker](https://www.docker.com/) for containerization
- [PostgreSQL](https://www.postgresql.org/) as database
- [Redis](https://redis.io/) for refresh token management
- [Swagger](https://swagger.io/) for API documentation
- [JWT](https://jwt.io/) for authorization

## Documentation

```bash
http://localhost:3000/api
```

````

## Installation

```bash
$ npm install
$ docker-compose up -d
````

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
