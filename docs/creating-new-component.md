# Creating a New Component

Follow this checklist when creating a new component. The overall steps are:

1. Understand the structure of this repo.
2. Run a script to create the component files.
3. Add your component to the style guide config.
4. Run the style guide app.
5. Write documentation for your component in its markdown file.
6. Write tests for your component.
7. Write the component code.

## Understand the structure of this repo

[Repo Structure](./repo-structure.md)

## Run a script to create the component files

In the project root directory, run the following command, where `MyComponent` is the name of the component you want to add:

```bash
docker-compose run --rm web yarn
docker-compose run --rm web node .reaction/scripts/addcomponent MyComponent
```

The necessary files will be added in `/src/components`.

## Add your component to the style guide config

Add your component to an appropriate style guide section in `styleguide.config.js`.

- If it fits into an existing component section, just add the name of the component to the `componentNames` array. This must match exactly the name you passed to the `addcomponent` script.
- If you need to add a new section, add a new `generateSection` block following the example of the existing ones. Create the content for the section in a new markdown file in `/styleguide/src/sections`, with the same name as the section. Add your component in the `componentNames` array. This must match exactly the name you passed to the `addcomponent` script.

## Run the style guide app

```bash
docker-compose up -d
```

See the repo README for full instructions.

## Write documentation for your component in its markdown file

This will be documented better in the future. For now, refer to existing component documentation. At a minimum, describe and show live examples for all of the possible states in which the component can be and all likely prop combinations.

## Write tests for your component

Every component and utility function in this style guide must have a corresponding file containing component tests. All tests are written using, and run by, the [Jest](https://facebook.github.io/jest/) test framework, which is based on the Jasmine framework. If you haven't used Jest, you should read their documentation to get familiar.

Review and follow all guidelines in [Writing Jest Unit Tests](https://docs.reactioncommerce.com/reaction-docs/master/writing-jest-unit-tests)

## Write the component code

[Component Development Guidelines](./component-development-guidelines.md)

- How to add a package (outer package.json)
- How to document your component
- How to run tests in watch mode
- How to write tests. Snapshots for each md case. Required prop snapshots pattern
- How to use theme in styled-components
- How to make a util function
- How to make a global util function
- How to make a util function or component for styleguideist examples only
