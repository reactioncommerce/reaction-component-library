# Component Styling Conventions

### Summary
By convention visual and text styles should be baked into each component. This means that a containing element should set the font-family, font-weight, font-size etc. This convention will make it easier to integrate components into the Reaction Starter Kit and other environments. Further, style values should be retrieved from the theme as seen in the example below.

```
const Del = styled.del`
  color: ${applyTheme("color_disabled")};
  font-family: ${applyTheme("font_family")};
  font-size: ${applyTheme("font_size_small")};
`;
```
