#  Skill graph wiht React Starter Kit and ForceGraph2D



This project was bootstrapped with [React Starter Kit](https://github.com/kriasoft/react-starter-kit).


## Directory Structure

`├──`[`.github`](.github) — GitHub configuration including CI/CD workflows<br>
`├──`[`.vscode`](.vscode) — VSCode settings including code snippets, recommended extensions etc.<br>
`├──`[`common`](./common) — common (shared) React components<br>
`├──`[`core`](./core) — core modules and utility functions<br>
`├──`[`dialogs`](./dialogs) — React components implementing modal dialogs<br>
`├──`[`fragments`](./fragments) — common (shared) Relay fragments<br>
`├──`[`hooks`](./hooks) — React hooks such as `useLocation()`, `useCurrentUser()`, etc.<br>
`├──`[`icons`](./icons) — custom icon React components<br>
`├──`[`menu`](./menu) — React components implementing popup menus<br>
`├──`[`public`](./public) — static assets such as robots.txt, index.html etc.<br>
`├──`[`routes`](./routes) — application routes and page (screen) components<br>
`├──`[`scripts`](./scripts) — automation scripts such as `yarn deploy`<br>
`├──`[`theme`](./theme) — application theme - colors, fonts, paddings, etc.<br>
`├──`[`workers`](./workers) — Cloudflare Worker scripts (reverse proxy, SSR)<br>
`├──`[`config`](./config.ts) — client-side application settings per environment<br>
`└──`[`index.ts`](./index.ts) — application entry point<br>

## Tech Stack

- [React](https://reactjs.org/), [Relay](https://relay.dev/),
  [Emotion](https://emotion.sh/), [Material UI v5](https://next.material-ui.com/)
- [TypeScript](https://www.typescriptlang.org/), [Babel](https://babeljs.io/),
  [ESLint](https://eslint.org/), [Prettier](https://prettier.io/),
  [Jest](https://jestjs.io/), [Yarn](https://yarnpkg.com/) v2 with PnP,
  [Webpack v5](https://webpack.js.org/)

## Requirements

- [Node.js](https://nodejs.org/) v14 or newer, [Yarn](https://yarnpkg.com/) package manager
- [VS Code](https://code.visualstudio.com/) editor with [recommended extensions](.vscode/extensions.json)

## Getting Started

- Clone the repo<br />
  `git clone -o seed -b main --single-branch https://github.com/kriasoft/react-starter-kit.git`
- Install project dependencies — `yarn install`
- Launch the app — `yarn start`, it will become available at [http://localhost:3000](http://localhost:3000/)

**IMPORTANT**: Ensure that VSCode is using the workspace versions of TypeScript and ESLint.

![](https://files.tarkus.me/typescript-workspace.png)

## Scripts

- `yarn start` — Launches the app in development mode on [`http://localhost:3000`](http://localhost:3000/)
- `yarn update-schema` — Update GraphQL API schema by running an introspection query
- `yarn relay` — Updates GraphQL fragments used in the code
- `yarn build` — Compiles and bundles the app for deployment
- `yarn lint` — Validate code using ESLint
- `yarn tsc` — Validate code using TypeScript compiler
- `yarn test` — Run unit tests with Jest, Supertest
- `yarn deploy` — Deploys the app to Cloudflare

## How to Deploy

Ensure that client-side application settings for `test` (QA) and `prod`
(production) environments are up-to-date found in the [`config.ts`](./config.ts)
file, as well as Cloudflare account credentials found in the `.env` file:

```bash
# Cloudflare
# https://dash.cloudflare.com/
# https://developers.cloudflare.com/api/tokens/create
CLOUDFLARE_ACCOUNT_ID=
CLOUDFLARE_ZONE_ID=
CLOUDFLARE_API_TOKEN=
```

Compile and deploy the app by running:

```
$ yarn build
$ yarn deploy [--env #0]
```

Where `--env` argument is the target environment, e.g. `yarn deploy --env=prod`.

## How to Update

- `yarn set version latest` — Bump Yarn to the latest version
- `yarn upgrade-interactive` — Update Node.js modules (dependencies)
- `yarn pnpify --sdk vscode` — Update TypeScript, ESLint, and Prettier settings in VSCode

