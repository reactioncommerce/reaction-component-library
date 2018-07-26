### Overview
Displays a summary of the current current items in the cart, with cost and other optional information.

#### Usage

The CartSummary displays item quantity, subtotal, shipping, tax and total. The cart can also display a free shipping message, calculated taxes and any applied discounts.

##### Default 

```jsx
<CartSummary
  displayShipping="$10.99"
  displaySubtotal="$275.77"
  displayTotal="$286.10"
  itemsQuantity={3}
/>
```

##### Display free shipping

```jsx
<CartSummary
  displaySubtotal="$275.77"
  displayTotal="$275.77"
  itemsQuantity={3}
  isFreeShipping
/>
```

##### Display calculated taxes

```jsx
<CartSummary
  displayShipping="$5.25"
  displaySubtotal="$275.77"
  displayTotal="$288.64"
  itemsQuantity={3}
  displayTax="$7.62"
/>
```

##### Display applied discount

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
