## About
Default template for codeceptjs
For usage with test websites - check out the branches available

## Setup

```bash
$ npm i
```
Install node.
Rename the `.env.example` to `.env` file and fill the test data.

```bash
$ nvm install 15 && nvm use 15
```

Node version >= 15 may be required to run tests. You can use `nvm` node version manager.

## CODECEPTJS

## Run CodeceptJS

```bash
$ npm run e2e:chrome
```

```bash
$ npm run e2e:chrome:smoke
```

Possible values are: `chrome`, `firefox`, `safari`.

Also you can start the CodeceptJS server or the Electron App, to ease the test execution:

```bash
$ npm run e2e:app
```

```bash
$ npm run e2e:server
```

After starting the server, by default the runner it's available on http://localhost:3333
These tools are buggy sometimes, it's in beta stage.

## Run CodeceptJS in Docker

Create a file with the environment variables at`.env`, there's a sample
`.env.example` help file in the directory. The variables must match the TDEV/QA/PROD environment URL and respective user
accounts.

If you're in the root dir of the project, to execute the tests with Playwright, simply run:

```bash
$ docker-compose up acceptance
```

## Notes

In order to provide TypeScript Definitions to your IDE, execute the command:
```
npx codeceptjs def
```
