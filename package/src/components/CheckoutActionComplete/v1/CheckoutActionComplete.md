### CheckoutActionComplete

#### Overview
The CheckoutActionComplete component will show when a checkout action has been completed. It is a summary of the information inside the completed action.

#### Basic usage
```jsx
const onClick = () => {};

const Address = "<div><p>123 Main Street</p><p>Anytown, USA 01776</p></div>";

<div>
  <CheckoutActionComplete
    components={{ChangeButton: Button}}
    label="Shipping address"
    content={Address}
    onChange={onClick}
  />
</div>
```
