### CartEmptyMessage

#### Overview
The `CartEmptyMessage` displays when viewing an empty shopping cart.

#### A cart emtpy message will be rendered when the `cartItems` prop is `0`
```jsx
  <CartEmptyMessage cartItems={0} />
```

#### It's not rendered when the `cartItems` prop is greater than `0`
```jsx
  <CartEmptyMessage cartItems={1} />
```
