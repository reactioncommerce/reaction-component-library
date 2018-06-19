### CartSummary

### Overview
Displays a summary of the current current items in the cart.

#### Basic usage
```jsx
<CartSummary
  displayShipping="10.99"
  displaySubtotal="275.77"
  displayTotal="286.10"
  itemsQuantity={3}
/>
```

#### Renders summary with FREE shipping
```jsx
<CartSummary
  displayShipping="3-5 Days"
  displaySubtotal="275.77"
  displayTotal="275.77"
  itemsQuantity={3}
  isFreeShipping
/>
```

#### Renders summary with calculated taxes
```jsx
<CartSummary
  displayShipping="$5.25"
  displaySubtotal="275.77"
  displayTotal="288.64"
  itemsQuantity={3}
  displayTax="$7.62"
/>
```

#### Renders summary with applied discount
```jsx
<CartSummary
  displayDiscount="-$83.42"
  displayShipping="$5.25"
  displaySubtotal="275.77"
  displayTotal="288.64"
  itemsQuantity={3}
  displayTax="$7.62"
/>
```
