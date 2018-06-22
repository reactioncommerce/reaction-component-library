### CartCheckoutButton

#### Overview
The `CartCheckoutButton` displays a button that allows the user to continue to checkout their cart.

#### A cart checkout button will be rendered when the user needs to continue to the checkout step in the cart
```jsx
const onClick = () => {};

  <CartCheckoutButton
    components={{Button}}
    isDisabled={false}
    onClick={onClick}
  />
```

#### It's possible to customize button text
```jsx
const onClick = () => {};

  <CartCheckoutButton
    buttonText="Custom button text"
    components={{Button}}
    isDisabled={false}
    onClick={onClick}
  />
```
