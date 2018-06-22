# 4. Define Project Structure

Date: 2018-02-23

## Status

STATUS：accepted

2018-02-23 proposed
2018-03-01 accepted

## Context

How should the folders and files in this repo be organized and named?

## Decision

1. Add a folder in /src/components.
    - Name the folder the same as the component name, in title case without any spaces.
    - Beneath that, add a `v1` folder. Each new version of the component that changes its appearance will get a new version folder.
    - Do not create any additional layers of subfolders
1. In the folder, add a .js file, a .md file, and a .test.js file, all of them named the same as the component name. If the component needs any component-specific utility functions (to keep the code in the .js file clean), add a folder named `utils` and put them in there. Here is an example folder structure:
    ```text
    /src
      /components
        /Button
          /v1
            Button.js
            Button.test.js
            Button.md
            utils
              myUtilFunction.js
              myUtilFunction.test.js
              myOtherUtilFunction.js
              myOtherUtilFunction.test.js
    ```
1. Define a single React component in the .js file. Export it as default. (Refer to "Component Guidelines" section.)
1. Write tests in the .test.js file, using Jest. (Refer to "Writing and Running Tests" section.)
1. Write style guide documentation and examples for the component in the .md file.
1. Add your component to an appropriate style guide section in `styleguide.config.js`
1. If any utility functions used by your component can be helpful to other components, too, put them in a `/src/utils/[functionName].js` file instead of the component-specific `utils` folder
