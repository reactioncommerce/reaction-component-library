# Component Styling Conventions

## Summary
Components must use the [styled-components](https://www.styled-components.com/) package to style all HTML elements they render, and allow certain styles to be specified by a [styled-components theme](https://www.styled-components.com/docs/advanced#theming). Add the default values for any theme properties you use in /src/defaultComponentTheme.js. All theme properties must start with `rui_` followed by a camelcased identifier.

By convention visual and text styles should be baked into each component. This means that a containing element should set the font-family, font-weight, font-size etc. This convention will make it easier to integrate components into the Reaction Starter Kit and other environments. Further, style values should be retrieved from the theme as seen in the example below.

```
const Del = styled.del`
  color: ${applyTheme("color_disabled")};
  font-family: ${applyTheme("font_family")};
  font-size: ${applyTheme("font_size_small")};
`;
```
