# Style Guide Development

We use the `react-styleguidist` package to run and build the style guide, and running the style guide locally doubles as an interactive playground for developing and testing the components. Refer to [Styleguidist docs](https://react-styleguidist.js.org/docs/cookbook.html).

## Theming the Guide

You can change the theme styles for the style guide app in `/src/styleguide/styles.css`. Be careful to define styles only for specific style guide classes. If you define styles for something generic, like `div`, then it may alter the appearance of all of the components that render that element and will confuse people.

## Adding or Editing Sections in the Guide

Sections are defined in `styleguide.config.js`. The format is easy to understand by looking at the existing section definitions. Put the markdown content for a section in the `/src/styleguide/sections` folder, and name the `.md` file the same as the section `name` from `styleguide.config.js`, with spaces removed.
