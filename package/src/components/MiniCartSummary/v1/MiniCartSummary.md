### Overview

Displays a summary of the current current items in the Mini Cart view. This version of the cart summary is intended to be displayed when a user hovers over the cart icon in the main navigation.

### Usage

#### Default

```jsx
<MiniCartSummary
  displaySubtotal="$275.77"
/>
```

#### Subtotal and taxes

```jsx
<MiniCartSummary
  displaySubtotal="$275.77"
  displayTax="$5.42"
/>
```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop                            | Default | Description                                                    |
| ------------------------------------- | ------- | -------------------------------------------------------------- |
| `MiniCartSummary.paddingBottom` | 8px | Bottom component padding |
| `MiniCartSummary.paddingLeft` | 8px | Left component padding |
| `MiniCartSummary.paddingRight` | 8px | Right component padding |
| `MiniCartSummary.paddingTop` | 8px | Top component padding |
| `MiniCartSummaryLeft.cellPaddingBottom` | 8px | Left column cells bottom padding |
| `MiniCartSummaryLeft.cellPaddingLeft` | 8px | Left column cells left padding |
| `MiniCartSummaryLeft.cellPaddingRight` | 5px | Left column cells right padding |
| `MiniCartSummaryLeft.cellPaddingTop` | 8px | Left column cells top padding |
| `MiniCartSummaryRight.cellPaddingBottom` | 8px | Right column cells bottom padding |
| `MiniCartSummaryRight.cellPaddingLeft` | 5px | Right column cells left padding |
| `MiniCartSummaryRight.cellPaddingRight` | 8px | Right column cells right padding |
| `MiniCartSummaryRight.cellPaddingTop` | 8px | Right column cells top padding |

#### Typography

- The text in left column cells uses `bodyText` style with `rui_components.MiniCartSummaryLeft` override
- The text in left column cells uses `bodyTextBold` style with `rui_components.MiniCartSummaryRight` override
