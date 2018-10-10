# Component Styling Conventions

## Summary
Components must use the [styled-components](https://www.styled-components.com/) package to style all HTML elements they render, and allow certain styles to be specified by a [styled-components theme](https://www.styled-components.com/docs/advanced#theming).

## Theme Variables

The default styled-components theme, which is used in the style guide and baked into the components package, is in `/src/defaultComponentTheme.js`.

The following styles should almost always be put into the theme file as variables, rather than hard coded in the component file:
- padding
- colors
- border width
- border radius
- font family
- font size
- font weight

> ALWAYS use the most specific CSS rule there is. For example, you should never have just a single "Padding" variable, but rather "PaddingLeft", "PaddingRight", "PaddingTop", and "PaddingBottom". Similarly, never use just "Border" or "BorderLeft", but rather the full specific rule such as "BorderLeftColor" or "BorderTopLeftRadius".

In general, flexbox and other layout styles should be baked into the component and not controlled by theme. A component can have props that tell it to use one of several layouts if necessary, or better yet, we can create multiple similar components. Theming should be reserved for borders, colors, padding, and typography.

In general a component's height should always be automatic and its width should be automatic or 100%. These values can be set directly in the styles in the component file. In some cases, element _within_ the component might need a specific height or width in pixels. Some examples are a checkbox or radio, and icons or images. In these cases, height and width should come from the theme if the element would look fine with differing height and width. If the ratio of these two is important to the look or function of the component, then include just a single value in the theme and calculate the other value from that. If the ratio should always be 1:1, then use a single variable ending in "Size".

If you must use `left`, `top`, `bottom`, or `right` styles, these should be in the theme if the component would still be functional with different values. However, use a different term such as "padding" or "margin" or "offset" in the theme variable name to better describe what the positioning is actually doing.

### Variable names

All theme properties for component styling go into the `rui_components` object on the theme object, which is then subdivided by component name. The component name keys in the theme should match your component name, but they can also be suffixed to match specific elements within your component. For example, the `BadgeOverlay` component has a `BadgeOverlay` group in `rui_components`, but it also has `BadgeOverlayPrimaryBadge` and `BadgeOverlaySecondaryBadge`, which are elements within `BadgeOverlay`. If you do this, be sure to think carefully about whether it might make more sense to actually divide your component into multiple components.

The general pattern is this:

- Camel-case description of the variable (e.g., "borderTopWidth", "paddingLeft", "size")
- `Mobile`, if specific to mobile
- Optionally, an underscore followed by a lowercase state suffix (e.g., "_active", "_disabled"). Do not proactively add state-suffixed variables for everything, but rather add them only as the default designs require and as requested by users in GitHub issues.

Example full paths in the theme:
- `rui_components.MiniCartSummary.paddingTop`
- `rui_components.Button.backgroundColor_disabled`

It's important to note that there should NOT be generic theme variables with names like `rui_color_disabled` in the theme. All must have component-specific names. It is fine (and ideal) to have a constant such as `standardBorderRadius` _used_ within the theme file, in order to set multiple theme variables to the same value.

### Using a theme variable

Here's an example of using theme variables in a component named "SomeComponent":

```js
import React, { Component } from "react";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const Div = styled.div`
  border-left-color: ${applyTheme("SomeComponent.borderLeftColor")};
  border-right-color: ${applyTheme("SomeComponent.borderRightColor")};
  border-top-color: ${applyTheme("SomeComponent.borderTopColor")};
  border-bottom-color: ${applyTheme("SomeComponent.borderBottomColor")};
`;

class SomeComponent extends Component {
  render() {
    return (
      <Div></Div>
    );
  }
}

export default SomeComponent;
```

The theme path passed to `applyTheme` does not include `rui_components.`. That prefix is assumed.

`applyTheme` returns a function that accepts props. If you don't pass it `props`, then it will apply the default theme but not any custom theme from the `ThemeProvider`. So if you use `applyTheme` within another function, be sure to call the returned function and pass on the `props`:

```js
const Table = styled.table`
  background-color: ${(props) => (props.isDense ? applyTheme("CartSummary.denseBackgroundColor")(props) : applyTheme("CartSummary.backgroundColor")(props))};
`;
```

### Accessing a theme variable in your component

It shouldn't be necessary often, but you can have the `theme` object passed to any component as a prop by using the `withTheme` HOC:

```js
import React, { Component } from "react";
import { withTheme } from 'styled-components'

class MyComponent extends Component {
  render() {
    console.log('Current theme: ', this.props.theme)
    // ...
  }
}

export default withTheme(MyComponent);
```

### Accessing a component prop in your styled-components CSS

If you need to adjust styles based on props passed to your component, you can do this. Remember, though, that the `props` passed to a function used within the CSS are the props for that styled DOM element, and NOT for your wrapping component. So any props you need must be passed down in the `render` function. Example:

```js
import React, { Component } from "react";
import styled, { css } from "styled-components";
import { applyTheme } from "../../../utils";

const PrimaryBadge = styled.div`
  ${baseBadgeStyles}
  ${(props) => {
    const { type } = props;
    switch (type) {
      case BADGE_TYPES.BACKORDER:
        return css`background-color: ${applyTheme("BadgeOverlayPrimaryBadge.backgroundColor_backorder")};`;
      case BADGE_TYPES.BESTSELLER:
        return css`background-color: ${applyTheme("BadgeOverlayPrimaryBadge.backgroundColor_bestseller")};`;
      case BADGE_TYPES.LOW_QUANTITY:
        return css`background-color: ${applyTheme("BadgeOverlayPrimaryBadge.backgroundColor_lowQuantity")};`;
      case BADGE_TYPES.SOLD_OUT:
        return css`background-color: ${applyTheme("BadgeOverlayPrimaryBadge.backgroundColor_soldOut")};`;
      case BADGE_TYPES.SALE:
        return css`background-color: ${applyTheme("BadgeOverlayPrimaryBadge.backgroundColor_sale")};`;
      default:
        return "";
    }
  }}
`;

class Badges extends Component {
  render() {
    const { type } = this.props;

    return (
      <PrimaryBadge type={type}>
        <BadgeLabel>{label}</BadgeLabel>
      </PrimaryBadge>
    );
  }
}

export default Badges;
```

## Typography styles

Every component that renders text must explicitly set the following typography styles for that text to avoid rendering issues when dropped into an app with global typography CSS:

- color
- font-family
- font-size
- font-style
- font-stretch
- font-weight
- letter-spacing
- line-height

These come from the typography theme variables, but you needn't manually add them all using `applyTheme`. Instead, always use the `addTypographyStyles` util function like this:

```js
import { addTypographyStyles } from "../../../utils";

const Th = styled.th`
  ${addTypographyStyles("CartSummaryLeftColumnHeader", "bodyText")}
  text-align: left;
`;
```

The first argument to the function is the component or element name. In the simplest case, this will exactly match the name of the component. But for more complex components that are made up of several styled DOM elements, you can make up a new string here that combines the component name with a description of some part of the component. Just be sure to document the name you use in the "Theme" section of that component's documentation file.

The second argument to the function is the text style to use from the list of 12 predefined text styles. The CSS styles associated with this text style will be used unless there are component-specific overrides.

For more information, refer to [Theming Components](https://designsystem.reactioncommerce.com/#!/Theming%20Components) in the style guide.

## Margins

- All components must have zero margin on their outermost DOM element.
- For spacing within the outermost DOM element, prefer "padding" over "margin".
- If it is absolutely necessary to set the margin on an element within a component, create a theme variable specific to that, but use a more specific word such as "Spacing" instead of "Margin" if possible.

## Units (px | em | rem)

- Almost always use pixel values in the default theme, except...
- Use `em` only where you specifically need the component style values to expand or contract with the current font size. Explain in the component markdown documentation exactly why using `em` is appropriate.
- Use `rem` values only for components that are clearly displaying body and heading text that you would expect to grow or shrink with the base font of the page. This does not include form input labels, placeholders, help text, or anything else where the design does not look good with other font sizes or text does not overflow. Explain in the component markdown documentation exactly why using `rem` is appropriate.
