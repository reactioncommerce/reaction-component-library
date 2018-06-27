# Reaction Core Component Library and Style Guide

This is a single project in which all reusable Reaction UI components AND our UI style guide are maintained. The components are published on NPM as an [`@reactioncommerce/components`](https://www.npmjs.com/package/@reactioncommerce/components) package. (See the package.json in `/package` folder.) The style guide is built and hosted on a `reactioncommerce.com` subdomain. (See the root package.json.)

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

## Adding a New Component

1. In the project root directory, run `node .reaction/scripts/addcomponent MyComponent` using Node 8+, where `MyComponent` is the name of the component you want to add. The necessary files will be added in `/src/components`.
1. Add your component to an appropriate style guide section in `styleguide.config.js`
1. If any utility functions used by your component can be helpful to other components, too, put them in a `/src/utils/[functionName].js` file instead of the component-specific `utils` folder

## Making a New Version of a Component

This should be done only when you have to make changes that are not backwards compatible, which includes any changes to styling that might be unexpected.

```
node .reaction/scripts/addcomponent MyComponent next
```

Where `MyComponent` is the name of the component, which must already exist and have at least one `v`-prefixed subfolder. This command will copy the latest version into the next version folder.

## Component Guidelines

- Use ES6
- Include a `static propTypes = {};` at the top of the component class definition.
- Include a description comment above each propType property, wrapped in `/** */`. The style guide will automatically pull these in as the prop description in the Properties table.
- If the component takes and renders children, use `children: PropTypes.node` as the propType definition.
- If the component relies on a prop being set and cannot provide a defaultProp for it, add `.isRequired` to the prop type.
- Add `static defaultProps` below `static propTypes` if necessary.
- For all props that are `PropTypes.func`, define a default no-op function. You then do not have to check whether that prop exists before calling the function.
    ```js
    static defaultProps = {
      onClick() {}
    };
    ```
- Wrap all `onClick` handlers in the `preventAccidentalDoubleClick` function from `utils`. See the `Button` component for an example.

### Component Themes

Components must use the [styled-components](https://www.styled-components.com/) package to style all HTML elements they render, and allow certain styles to be specified by a [styled-components theme](https://www.styled-components.com/docs/advanced#theming). Add the default values for any theme properties you use in /src/defaultComponentTheme.js. All theme properties must start with `rui_` followed by a camelcased identifier.

## Writing and Running Tests

Every component and utility function in this style guide must have a corresponding file containing component tests. All tests are written using, and run by, the [Jest](https://facebook.github.io/jest/) test framework, which is based on the Jasmine framework. If you haven't used Jest, you should read their documentation to get familiar.

### Writing Tests

Review and follow all guidelines in [Writing Jest Unit Tests](https://docs.reactioncommerce.com/reaction-docs/master/writing-jest-unit-tests)

### Running Tests

Run `npm test` command to run all tests in watch mode. This command runs only the tests that have changed since the last commit.

In a CI container, `npm test` will not run in watch mode. This is because the `CI` environment variable is set in CI containers. If you need to run tests in non-watch mode locally, you can do the same: `CI=true npm test`

## Pre-commit Checks

When you `git commit` from this repo, it automatically runs eslint and all tests. It will not push if anything fails. This runs through the `pre-commit` package. If you really need to skip this hook for a commit, see [the docs](https://www.npmjs.com/package/pre-commit).

## Theming the Guide

You can change the theme styles for the style guide app in `/src/styleguide/styles.css`. Be careful to define styles only for specific style guide classes. If you define styles for something generic, like `div`, then it may alter the appearance of all of the components that render that element and will confuse people.

## Adding or Editing Sections in the Guide

Sections are defined in `styleguide.config.js`. The format is easy to understand by looking at the existing section definitions. Put the markdown content for a section in the `/src/styleguide/sections` folder, and name the `.md` file the same as the section `name` from `styleguide.config.js`, with spaces removed.

## Publish the Components Package

Bump the version in package.json and then do these on your host machine (NOT in a Docker container):

```bash
yarn install
cd package
yarn install
yarn release
```

## License

Copyright © [GNU General Public License v3.0](./LICENSE.md)