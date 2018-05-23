# 6. Style Components

Date: 2018-02-23

## Status

STATUS：accepted

2018-02-23 proposed
2018-03-01 accepted

## Context

These are our requirements for component styling:

- A component has baked-in styles that make it look good out of the box. These are used in the Style Guide app.
- Some but not all aspects of a component's style are overrideable by the user, i.e., theming
- Try as much as possible to isolate components from any generic app styles. For example, when rendered in an app that pulls in all Bootstrap CSS, it should still appear as expected. Conversely, no styles included with the component should affect the appearance of any other component in an app.

Also potential requirement? Works in a React Native app

## Decision

Use [styled-components](https://www.styled-components.com/)

The primary reason to use styled-components library is because they have a good theming solution that works for our use case: https://www.styled-components.com/docs/advanced#theming

Also:

- Uses normal CSS that people know
- Supports media queries, :hover, animations, etc.
- Injects stylesheets that take precedence over global stylesheets, though you can override them in a global stylesheet in an emergency if you use tricks.
- Server side rendering
- Works with React Native if we eventually try to make the components universal
