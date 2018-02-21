# Reaction Core Component Library and Style Guide

## Installation

Clone the repo and `npm install` in the repo folder. (Make sure to use NPM 5+)

### Editor Extensions

https://www.styled-components.com/docs/tooling#syntax-highlighting

## Run Locally

```bash
npm start
```

Leave it running while developing and documenting components so that you can quickly see what they look like and manually test them.

## Adding a New Component

1. Add a folder in /src/components.
    - Name the folder the same as the component name, in title case without any spaces.
    - Beneath that, add a `v1` folder. Each new version of the component that changes its appearance will get a new version folder.
    - Do not create any additional layers of subfolders
1. In the folder, add a .js file, a .md file, and a .test.js file, all of them named the same as the component name. If the component needs any component-specific helper functions (to keep the code in the .js file clean), add a folder named `helpers` and put them in there with an `index.js` file that exports them by name. Here is an example folder structure:
    ```text
    /src
      /components
        /Button
          /v1
            Button.js
            Button.test.js
            Button.md
            helpers
              index.js
              myHelperFunction.js
              myHelperFunction.test.js
    ```
1. Define a single React component in the .js file. Export it as default. (Refer to "Component Guidelines" section.)
1. Write tests in the .test.js file, using Jest. (Refer to "Writing and Running Tests" section.)
1. Write style guide documentation and examples for the component in the .md file.
1. Add your component to an appropriate style guide section in `styleguide.config.js`
1. Export your component from the package by adding it in `/src/components/v1`, or whichever version matches the version folder in which it lives.
1. If any helper functions used by your component can be helpful to other components, too, put them in a `/src/helpers/helperFunctionName` folder instead of the component-specific `helpers` folder

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
- Wrap all `onClick` handlers in the `preventAccidentalDoubleClick` helper function. See the `Button` component for an example.

### Component Themes

Components must use the [styled-components](https://www.styled-components.com/) package to style all HTML elements they render, and allow certain styles to be specified by a [styled-components theme](https://www.styled-components.com/docs/advanced#theming). Add the default values for any theme properties you use in /src/defaultComponentTheme.js. All theme properties must start with `rui_` followed by a camelcased identifier.

## Writing and Running Tests

Every component and helper in this style guide must have a corresponding file containing component tests. All tests are written using, and run by, the [Jest](https://facebook.github.io/jest/) test framework, which is based on the Jasmine framework. If you haven't used Jest, you should read their documentation to get familiar.

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

You can change the theme styles for the style guide app in `/src/styleguide/styles.css`. Be careful to define styles only for specific style guide classes. If you define styles for something generic, like `div`, then it may alter the appearance of all of the components that render that element and will confuse people.

## Adding or Editing Sections in the Guide

Sections are defined in `styleguide.config.js`. The format is easy to understand by looking at the existing section definitions. Put the markdown content for a section in the `/docs` folder, and name the `.md` file the same as the section `name` from `styleguide.config.js`, with spaces removed.
