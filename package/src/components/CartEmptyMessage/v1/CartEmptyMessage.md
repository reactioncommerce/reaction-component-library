### CartEmptyMessage

#### Overview
The `CartEmptyMessage` displays when viewing an empty shopping cart.

#### A cart emtpy message will be rendered when there are no items in your cart
```jsx
const Button = require("../../Button/v1").default;
const onClick = () => {};

  <CartEmptyMessage
    components={{ContinueShoppingButton: Button}}
    onClick={onClick}
  />
```

#### It's possible to customize message and button text
```jsx
const Button = require("../../Button/v1").default;
const onClick = () => {};

  <CartEmptyMessage
    buttonText={"Custom button text"}
    components={{ContinueShoppingButton: Button}}
    messageText={"Custom message text"}
    onClick={onClick}
  />
```
