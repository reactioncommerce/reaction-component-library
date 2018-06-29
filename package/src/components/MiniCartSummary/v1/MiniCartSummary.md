### MiniCartSummary

### Overview
Displays a summary of the current current items in the mini cart view. This version of the cart summary is intended to be displayed when a user hovers over the cart icon in the main navigation.

#### Basic usage, only renders subtotal
```jsx
<MiniCartSummary
  displaySubtotal="$275.77"
/>
```

#### Render subtotal + taxes
```jsx
<MiniCartSummary
  displaySubtotal="$275.77"
  displayTax="$5.42"
/>
```
