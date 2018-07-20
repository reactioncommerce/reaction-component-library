# Reaction Core Component Library and Style Guide

[![npm (scoped)](https://img.shields.io/npm/v/@reactioncommerce/components.svg)](https://www.npmjs.com/package/@reactioncommerce/components)
 [![CircleCI](https://circleci.com/gh/reactioncommerce/reaction-component-library.svg?style=svg)](https://circleci.com/gh/reactioncommerce/reaction-component-library)

This is a single project in which all reusable Reaction UI components AND our UI style guide are maintained. The components are published on NPM as an [`@reactioncommerce/components`](https://www.npmjs.com/package/@reactioncommerce/components) package. (See the package.json in `/package` folder.) The style guide is built and hosted on a `reactioncommerce.com` subdomain. Currently, master is deployed by Netlify to https://stoic-hodgkin-c0179e.netlify.com/ and all branches are pushed to their own preview URL. (See the root package.json.)

We use the `react-styleguidist` package to run and build the style guide, and running the style guide locally doubles as an interactive playground for developing and testing the components.

## Getting Started

```sh
# Clone
git clone git@github.com:reactioncommerce/reaction-component-library.git

cd reaction-component-library

# Setup - puts an .env in place
bin/setup

# Start in current process
docker-compose up

# OR Start in background and stream logs to current process
docker-compose up -d && docker-compose logs -f
```

Then go to `http://localhost:4040` in a browser on the same computer.

Leave it running while developing and documenting components so that you can quickly see what they look like and manually test them.

### Editor Extensions

https://www.styled-components.com/docs/tooling#syntax-highlighting

## Local Development

Development should be done in Docker Compose. The project directory is mounted
into the Docker container at runtime so that files may be edited from the host
machine. This means that you can choose any editor you'd like and work in a
comfortable development environment. But, be sure to run all `yarn` commands
with Docker Compose (e.g., `docker-compose run --rm web [...]`)!

If things go wrong, it can be useful to destroy the whole Docker setup (image, volume, containers) and start over:

```sh
docker-compose down -v --rmi local
docker-compose up
```

### Yarn

Do NOT run `yarn add` or `yarn install` commands on your local host machine. Always run them with `docker-compose run --rm web` before them. If you accidentally do run on your host machine, you'll see files in `node_modules`. Just `rm -rf node_modules` to correct your mistake.

Exception: You may have to install some dev dependencies such as the ESLint packages on your host machine in order for your IDE to properly show inline lint errors.

After running `yarn add`, you need to stop and restart if the app container was running. It should not be necessary to do a full rebuild of the image, but if the new package does not seem to be found, try `docker-compose up --build`.

### Automatic Restarts

When you have the Style Guide app running in Docker Compose and you make a change to a file, the page in the browser should refresh to show your changes automatically. The exceptions are changing yarn dependencies or changing anything in `styleguide.config.js`, both of which require you to stop and restart the app (`docker-compose down` + `docker-compose up`).

### Running Tests

All tests are written using, and run by, the [Jest](https://facebook.github.io/jest/) test framework, which is based on the Jasmine framework. If you haven't used Jest, you should read their documentation to get familiar.

Run `npm test` command to run all tests in watch mode. This command runs only the tests that have changed since the last commit.

In a CI container, `npm test` will not run in watch mode. This is because the `CI` environment variable is set in CI containers. If you need to run tests in non-watch mode locally, you can do the same: `CI=true npm test`

## Full Documentation

See [the docs](./docs/README.md)

## Commit Messages

To ensure that all contributors follow the correct message convention, each time you commit your message will be validated with the [commitlint](https://www.npmjs.com/package/@commitlint/cli) package, enabled by the [husky](https://www.npmjs.com/package/husky) Git hooks manager.

Examples of commit messages: https://github.com/semantic-release/semantic-release

For this project specifically:

- Start with “feat:” for a new component, a new version of a component, or an improvement of a component.
- Start with “fix:” for a component bug fix.
- You should almost never include "BREAKING CHANGES" because we’re duplicating components to avoid that. Consult with others before doing it.
- All other prefixes (docs, chore, etc.) do NOT trigger a release.

## Components Package Publication

The `@reactioncommerce/components` package is automatically published by CI when commits are merged or pushed to the `master` branch. This is done using [semantic-release](https://www.npmjs.com/package/semantic-release), which also determines version bumps based on conventional Git commit messages.

## Style Guide Publication

The site is built by (`react-styleguidist`)[https://github.com/styleguidist/react-styleguidist] and automatically published by CI and Netlify when commits are pushed to pull requests and the `master` branch.

Test the build locally by running `docker-compose run --rm web yarn run styleguide:build` and opening `styleguide/dist/index.html` in your browser.

## License

Copyright © [GNU General Public License v3.0](./LICENSE.md)
