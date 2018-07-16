### CheckoutActionComplete

#### Overview
The CheckoutActionComplete component will show when a checkout action has been completed. It is a summary of the information inside the completed action.

#### Basic usage
```jsx
const onClick = () => {};

const Address = (
  <div>
    Ms. Jane Doe<br />
    123 Main Street<br />
    Anytown, USA 01776
  </div>
);

<div>
  <CheckoutActionComplete
    components={{ChangeButton: Button}}
    label="Shipping address"
    content={Address}
    onClickChangeButton={onClick}
  />
</div>
```
