# Running and Developing Locally

These instructions are the same regardless of whether you're developing components within the Reaction Storefront Component Library or developing the Reaction Storefront Component Library website itself.

## Run for Development

You can start in the current process:

```sh
docker-compose up
```

Or start in the background and the stream the logs to the correct process:

```sh
docker-compose up -d && docker-compose logs -f
```

Then go to `http://localhost:4040` in a browser on the same computer.

Leave it running while developing and documenting components so that you can quickly see what they look like and manually test them.

If you ran with `-d` (background), then terminating will only terminate the log streaming; the Docker container running the app will still be up. This can be a good thing, but eventually all good things must come to an end. When you're done developing, be sure to stop and remove the project containers to free up memory and CPU:

```sh
docker-compose down
```

### Automatic restarts

When you have the Style Guide app running in Docker Compose and you make a change to a file, the page in the browser should refresh to show your changes automatically. The exceptions are changing yarn dependencies or changing anything in `styleguide.config.js`, both of which require you to stop and restart the app (`docker-compose down` + `docker-compose up`).

### If things go wrong

If things go wrong, it can be useful to destroy the whole Docker setup (image, volume, containers) and start over:

```sh
docker-compose down -v --rmi local
docker-compose up
```

## Run Tests

All tests are written using, and run by, the [Jest](https://facebook.github.io/jest/) test framework, which is based on the Jasmine framework. If you haven't used Jest, you should read their documentation to get familiar.

- Run `yarn test` command to run all tests in watch mode. This command runs only the tests that have changed since the last commit.

- Add the `-u` flag to update snapshots: `docker-compose run --rm web yarn run test -u`

In a CI container, `yarn test` will not run in watch mode. This is because the `CI` environment variable is set in CI containers. If you need to run tests in non-watch mode locally, you can do the same: `CI=true yarn test`

## Pull Changes

Whenever you pull changes, be sure to check the `.env.example` file to see if any variables have been added that you need to set up in your `.env` file. (`.env` is not committed in Git.)

Also, it's a good idea to run `yarn install` on your local machine after each pull. It's automatically run within the Docker containers whenever you run the app, but running it on your machine ensures that your IDE will have the correct ESLint and Babel packages available.

## Adding an NPM Dependency

In general, remember the following when adding a new NPM package dependency:
- Use Yarn
- Run the `yarn add` command inside the Docker container
- Do `docker-compose down` before adding it
- Make sure to add it to the correct package.json file (there are two)

For a package imported by style guide code, add it with Yarn in the root package.json:

```bash
docker-compose run --rm web sh
yarn add some-package
```

For a package imported by a component library component, add it with Yarn in the `package` folder package.json:

```bash
docker-compose run --rm web sh
cd package
yarn add some-package
```

For a dev dependency, it's usually safest to add it to both package.json files.

### Peer dependencies

When adding a new dependency to the NPM package (the `package/package.json` file), it's best to make it a peer dependency if it's large or if it's important that there be only one copy of that package installed, for example if it uses React context.

To add a peer dependency, you simply need to add it in the `"peerDependencies"` list in the `package/package.json` manually. No need to do `yarn add` because peer dependencies are not actually installed. But you DO then need to `yarn add` it to the style guide app (the root `package.json`) because that app uses the components package.

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

The site is built by [`react-styleguidist`](https://github.com/styleguidist/react-styleguidist) and automatically published by CI and Netlify when commits are pushed to pull requests and the `master` branch.

Test the build locally by running `docker-compose run --rm web yarn run styleguide:build` and opening `styleguide/dist/index.html` in your browser.

## What's Next?

Be sure to familiarize yourself with the [Repo Structure](./repo-structure.md).

If you're going to create components, learn the [Component Development Guidelines](./component-development-guidelines.md) and read about [Creating a New Component](./creating-new-component.md).

If you're going to work on the Reaction Storefront Component Library website, check out the [Style Guide Development](./style-guide-development.md) docs.
