# Reaction Core Component Library and Style Guide

## Installation

Clone the repo and `npm install` in the repo folder. (Make sure to use NPM 5+)

## Run Locally

```bash
npm start
```

Leave it running while developing and documenting components so that you can quickly see what they look like and manually test them.

## Adding a New Component

1. Add a folder in /src/components.
    - Name the folder the same as the component name, in title case without any spaces.
    - Do not create any additional layers of subfolders
1. In the folder, add a .js file, a .md file, and a .test.js file, all of them named the same as the component name. If the component needs styles, add a file named `styles.js`. If the component needs any component-specific helper functions (to keep the code in the .js file clean), add a file named `helpers.js` Here is an example folder structure:
    ```text
    /src
      /components
        /Button
          Button.js
          Button.test.js
          Button.md
          styles.js
          helpers.js
    ```
1. Define a single React component in the .js file. Export it as default. (Refer to "Component Guidelines" section.)
1. Write tests in the .test.js file, using Jest. (Refer to "Writing and Running Tests" section.)
1. Write style guide documentation and examples for the component in the .md file.
1. If you have inline styles, define them in styles.js and import that into the component .js file.
1. Add your component to an appropriate style guide section in styleguide.config.js
1. If any helper functions used by your component can be helpful to other components, too, put them in `/src/helpers/helperFunctionName.js` instead of the component-specific `helpers.js`

## Component Guidelines

- Use ES6
- Include a `static propTypes = {};` at the top of the component class definition.
- Include a description comment above each propType property, wrapped in `/** */`. The style guide will automatically pull these in as the prop description in the Properties table.
- If the component takes and renders children, use `children: PropTypes.node` as the propType definition.
- For all props that are `PropTypes.func`, define a default no-op function:
    ```js
    static defaultProps = {
      onClick() {}
    };
    ```
- Wrap all `onClick` handlers in the `preventAccidentalDoubleClick` helper function. See the `Button` component for an example.

## Writing and Running Tests

Every component and helper in this style guide, with rare exceptions for extremely simple helper functions, must have a corresponding file containing component tests. All tests are written using, and run by, the [Jest](https://facebook.github.io/jest/) test framework, which is based on the Jasmine framework. If you haven't used Jest, you should read their documentation to get familiar.

### Test Files

Files containing tests for a component must end in `.test.js` and be named after the component. Files containing tests for a helper must end in `.test.js` and be named after the helper function.

### Code Style for Tests

- Follow the same eslint rules as for the components themselves.
- Jest tests are automatically file scoped. This means that your test file does not need a `describe` block in it. You _may_ add multiple `describe` blocks to group related tests within the file, but you _should not_ have a file with only a single `describe` block in it. (It will not break anything, but it diminishes simplicity and readability.)
- Jest test functions can be defined using either `it()` or `test()`. Because it is more understandable, we will always use `test()`.
- `describe`, `test`, `jasmine`, and `expect` are automatic globals in all test files. You do not need to import them from anywhere.
- Use arrow functions for all `describe` and `test` functions.
- Use `expect` for assertions. See [the documentation](https://facebook.github.io/jest/docs/en/expect.html#content).

### Rendering Components In Tests

To render your component in your tests, use either `react-test-renderer` or `enzyme`. `react-test-renderer` is primarily for snapshots, while `enzyme` is for whenever you need to actually interact with the component, like simulate clicking it, feed it new props and see how it changes, etc. There is a good explanation of both of them [here](https://facebook.github.io/jest/docs/en/tutorial-react.html).

### Mocking Functions

https://facebook.github.io/jest/docs/en/mock-function-api.html

### Running Tests

Run `npm test` command to run all tests in watch mode. This command runs only the tests that have changed since the last commit.

In a CI container, `npm test` will not run in watch mode. This is because the `CI` environment variable is set in CI containers. If you need to run tests in non-watch mode locally, you can do the same: `CI=true npm test`

## Pre-commit Checks

When you `git commit` from this repo, it automatically runs eslint and all tests. It will not push if anything fails. This runs through the `pre-commit` package. If you really need to skip this hook for a commit, see [the docs](https://www.npmjs.com/package/pre-commit).

## Theming the Guide

You can change the theme styles for the guide in `/src/styles.css`. Be careful to define styles only for specific style guide classes. If you define styles for something generic, like `div`, then it will alter the appearance of all of the components that render that element and will confuse people.

The exception to the above rule, is that the default theme styles should be defined in `/src/styles.css`, in the "Default Components Theme" section.

## Adding or Editing Sections in the Guide

Sections are defined in `styleguide.config.js`. The format is easy to understand by looking at the existing section definitions. Put the markdown content for a section in the `/docs` folder, and name the `.md` file the same as the section `name` from `styleguide.config.js`, with spaces removed.
