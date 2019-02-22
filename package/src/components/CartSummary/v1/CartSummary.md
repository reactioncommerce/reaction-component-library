### Overview
Displays a summary of the current current items in the cart, with cost and other optional information.

### Usage

The CartSummary displays item quantity, subtotal, shipping, tax and total. The cart can also display a free shipping message, calculated taxes and any applied discounts.

#### Default

```jsx
<CartSummary
  displayShipping="$10.99"
  displaySubtotal="$275.77"
  displayTotal="$286.10"
  itemsQuantity={3}
/>
```

#### Display free shipping

```jsx
<CartSummary
  displaySubtotal="$275.77"
  displayTotal="$275.77"
  itemsQuantity={3}
  isFreeShipping
/>
```

#### Display calculated taxes

```jsx
<CartSummary
  displayShipping="$5.25"
  displaySubtotal="$275.77"
  displayTotal="$288.64"
  itemsQuantity={3}
  displayTax="$7.62"
/>
```

#### Display applied discount

```jsx
<CartSummary
  displayDiscount="-$83.42"
  displayShipping="$5.25"
  displaySubtotal="$275.77"
  displayTotal="$288.64"
  itemsQuantity={3}
  displayTax="$7.62"
/>
```

#### Display add surcharges

```jsx
<CartSummary
  displaySurcharge="$9.99"
  displayShipping="$5.25"
  displaySubtotal="$275.77"
  displayTotal="$298.63"
  itemsQuantity={3}
  displayTax="$7.62"
/>
```

#### Dense layout

```jsx
<CartSummary
  displayShipping="$10.99"
  displaySubtotal="$275.77"
  displayTotal="$286.10"
  isDense
/>
```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop                         | Default     | Description                                                                              |
| ---------------------------------- | ----------- | ---------------------------------------------------------------------------------------- |
| `CartSummary.backgroundColor` | black02 | Background color of the entire summary when not `isDense` |
| `CartSummary.borderColor` | black10 | Color of all borders |
| `CartSummary.borderWidth` | 1px | Width of all borders |
| `CartSummary.denseBackgroundColor` | transparent | Background color of the entire summary when `isDense` |
| `CartSummary.paddingBottom` | 0 | Bottom padding for the component |
| `CartSummary.paddingLeft` | 16px | Left padding for the component |
| `CartSummary.paddingRight` | 16px | Right padding for the component |
| `CartSummary.paddingTop` | 16px | Top padding for the component |
| `CartSummary.rowDensePaddingBottom` | 8px | Bottom padding for each summary row when `isDense` |
| `CartSummary.rowDensePaddingTop` | 8px | Top padding for each summary row when `isDense` |
| `CartSummary.rowPaddingBottom` | 16px | Bottom padding for each summary row when not `isDense` |
| `CartSummary.rowPaddingTop` | 16px | Top padding for each summary row when not `isDense` |

#### Typography

- The left column header uses `bodyText` style with `rui_components.CartSummaryLeftColumnHeader` override
- The right column header uses `bodyText` style with `rui_components.CartSummaryRightColumnHeader` override
- The left column uses `labelText` style with `rui_components.CartSummaryLeftColumn` override
- The right column uses `labelText` style with `rui_components.CartSummaryRightColumn` override
- The title uses `bodyTextBold` style with `rui_components.CartSummaryTitle` override
- The discount value uses `bodyTextBold` style with `rui_components.CartSummaryDiscount` override
- The total value uses `subheadingTextBold` style with `rui_components.CartSummaryTotal` override
