Most components of the Reaction Storefront component library can be visually customized with a [styled-components theme](https://www.styled-components.com/docs/advanced#theming).

#### Add a ThemeProvider

To apply a custom theme to the components in your app, wrap your entire app with `ThemeProvider`:

```js static
import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

const theme = {};

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        {/* app components here */}
      </ThemeProvider>
    );
  }
}
```

#### The theme object

A `theme` prop is passed to your `ThemeProvider`. This is simply a JavaScript object. While `styled-components` does not dictate any particular schema for this object, the Reaction components all expect a certain pattern:

```js static
const theme = {
  rui_typography: {
    titleText: {
      color,
      fontFamily,
      fontSize,
      fontStyle,
      fontWeight,
      letterSpacing,
      lineHeight
    },
    titleTextBold: {
      // color, etc.
    },
    headingText: {
      // color, etc.
    },
    headingTextBold: {
      // color, etc.
    },
    subheadingText: {
      // color, etc.
    },
    subheadingTextBold: {
      // color, etc.
    },
    bodyText: {
      // color, etc.
    },
    bodyTextBold: {
      // color, etc.
    },
    labelText: {
      // color, etc.
    },
    labelTextBold: {
      // color, etc.
    },
    captionText: {
      // color, etc.
    },
    captionTextBold: {
      // color, etc.
    }
  },
  rui_components: {
    [ComponentName]: {
      // Theme props recognized by this component.
      // The documentation for each component lists the available props.
      // All of the typography props may also be set here, to override the
      // generic typography values for a specific component
    }
  }
};
```

Your theme object need not have any props in it, and you can override a single prop for a typography category or a component without overriding the other theme props.

All top-level keys in the theme object are prefixed with `rui_` to avoid naming clashes with anything else in your app that uses the styled-components theme.

#### Component theme

Exactly what you can theme is determined by each component and documented in the component article, but in general the following visual aspects are themeable:

- border width
- border corner radii
- colors
- padding and spacing
- height and width of certain elements
- type

Theme props are added to the theme object within the `rui_components` object, and then within an object keyed by the component name.

```js static
const theme = {
  rui_components: {
    [ComponentName]: {
      // Theme props recognized by this component.
      // The documentation for each component lists the available props.
    }
  }
};
```

#### Typography theme

Because we often want to theme rendered text the same across all components, but with ability to override, we have a more specific typography pattern for the theme. The typography styles that you may customize are:

- color
- fontFamily
- fontSize
- fontStyle
- fontWeight
- letterSpacing
- lineHeight

And there are 12 categories of text, 6 categories with a bold version of each:

- titleText
- titleTextBold
- headingText
- headingTextBold
- subheadingText
- subheadingTextBold
- bodyText
- bodyTextBold
- labelText
- labelTextBold
- captionText
- captionTextBold

In the default theme, these match the [default type styles spec](./#!/Typography).

To customize one of these, add `rui_typography` to your theme and add the type category below that. Then define any overrides of the default theme. For example, to make all body text green:

```js static
const theme = {
  rui_typography: {
    bodyText: {
      color: "#5acc25"
    },
    bodyTextBold: {
      color: "#5acc25"
    }
  }
};
```

Additionally, you can override these values for a specific component. Note that "component" may be an actual React component name, or may be a string describing a DOM element that is within a component. For example, the Reaction Storefront has a `BadgeOverlay` component, but to override the badge label text, you need to use `BadgeOverlayBadgeLabel` as the component name. These names are listed in the theme documentation for each component.

Using `BadgeOverlay` as an example, note that `BadgeOverlayBadgeLabel` uses `labelText`. So if you want to make your `labelText` green in general, but make the text in the `BadgeOverlay` label white, you would need this in your theme:

```js static
const theme = {
  rui_typography: {
    labelText: {
      color: "#5acc25"
    },
    labelTextBold: {
      color: "#5acc25"
    }
  },
  rui_components: {
    BadgeOverlayBadgeLabel: {
      color: "#ffffff"
    }
  }
};
```
