### CheckoutActionComplete

#### Overview
The CheckoutActionComplete component will show when a checkout action has been completed. It is a summary of the information inside the completed action.

#### Basic usage
```jsx
const onClick = () => {};

<div>
  <CheckoutActionComplete
    components={{ChangeButton: Button}}
    label="Action Label"
    content={"hello"}
    onChange={onClick}
  />
</div>
```
