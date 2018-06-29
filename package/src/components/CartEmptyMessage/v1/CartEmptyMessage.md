### Overview
The `CartEmptyMessage` displays when viewing an empty shopping cart.

#### Usage

##### Default

```jsx
const onClick = () => {};

<CartEmptyMessage
  onClick={onClick}
/>
```

##### Custom cart and button message

Pass in custom copy in `buttonText` and `messageText`.

```jsx
const onClick = () => {};

<CartEmptyMessage
  buttonText="Custom button text"
  messageText="Custom message text"
  onClick={onClick}
/>
```
