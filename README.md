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

## How to

### Enforce auth on a route

You can use the `@Auth()` decorator to enforce authentication on a route. This will check if the user is authenticated and if the user has a valid JWT token. If the user is not authenticated or the JWT token is invalid, a `401 Unauthorized` response will be returned.

`AuthType.None`: Makes a route public
`AuthType.Bearer`: Required the `Authorization: Bearer <token>` header

```typescript
@Auth(AuthType.Bearer)
@Auth(AuthType.None)
```

### Role based authorization

You can use the `Roles()` decorator to enforce role based authorization on a route. This will check if the user has the required role. If the user does not have the required role, a `403 Forbidden` response will be returned.

Two roles are supported: `Role.Regular` and `Role.Admin`. You can use the decorator multiple times to require multiple roles. You can add more roles in the `src/users/enums/role.enum.ts` file.

```typescript
@Roles(Role.Regular)
@Roles(Role.Admin)
```

### Accessing the active user

You can use the `@ActiveUser()` decorator to access the active user. This will return the user object of the authenticated user.

```typescript
@ActiveUser() activeUser: ActiveUserData
```

### General

- Both the `@Auth()` and `@Roles()` decorators can be used on the same route.
- Both decorators can be used on a controller or route level. You can also make the whole controller private and override one route to make it public.

## Documentation

```bash
http://localhost:3000/api
```

## Installation

```bash
$ npm install
$ docker-compose up -d
```

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
