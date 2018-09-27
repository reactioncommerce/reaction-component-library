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

### Variable names

All theme properties must start with `rui_` followed by a camelcased identifier. The general pattern is this:

- rui_
- Component name, with lowercase first letter
- Capitalized description of the variable (e.g., "BorderWidth", "PaddingLeft", "Size")
- Optionally, an underscore followed by a lowercase state suffix (e.g., "_active", "_disabled"). Do not proactively add state-suffixed variables for everything, but rather add them only as the default designs require and as requested by users in GitHub issues.

Examples:
- `rui_ButtonBorderWidth`
- `rui_ButtonBackgroundColor_disabled`

It's important to note that there should NOT be generic theme variables with names like `rui_color_disabled`. All must have component-specific names. It is fine (and ideal) to have a constant such as `color_disabled` _used_ within the theme file, in order to set multiple theme variables to the same value.

### Using a theme variable

Here's an example of using theme variables in a component named "SomeComponent":

```js
import React, { Component } from "react";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const Div = styled.div`
  border-left-color: ${applyTheme("someComponentBorderLeftColor")};
  border-right-color: ${applyTheme("someComponentBorderRightColor")};
  border-top-color: ${applyTheme("someComponentBorderTopColor")};
  border-bottom-color: ${applyTheme("someComponentBorderBottomColor")};
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
        return css`background-color: ${applyTheme("badgeBackgroundColor_backorder")};`;
      case BADGE_TYPES.BESTSELLER:
        return css`background-color: ${applyTheme("badgeBackgroundColor_bestseller")};`;
      case BADGE_TYPES.LOW_QUANTITY:
        return css`background-color: ${applyTheme("badgeBackgroundColor_lowQuantity")};`;
      case BADGE_TYPES.SOLD_OUT:
        return css`background-color: ${applyTheme("badgeBackgroundColor_soldOut")};`;
      case BADGE_TYPES.SALE:
        return css`background-color: ${applyTheme("badgeBackgroundColor_sale")};`;
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

Every component that renders text must explicitly set the following typography styles for that text to avoid confusing behavior when dropped into an app with global typography CSS:
- color
- font family
- font size
- font weight
- letter spacing
- line height

All of these must use component-specific theme variables.
