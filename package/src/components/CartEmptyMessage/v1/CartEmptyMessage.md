### CartEmptyMessage

#### Overview
The `CartEmptyMessage` displays when viewing an empty shopping cart.

#### A cart emtpy message will be rendered when there are no items in your cart
```jsx
const Button = require("../../Button/v1").default;
const onClick = () => {};

  <CartEmptyMessage components={{ContinueShoppingButton: Button}} onClick={onClick} />
```
