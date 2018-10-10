### Overview
The `CartEmptyMessage` displays when viewing an empty shopping cart.

### Usage

#### Default

```jsx
const onClick = () => {};

<CartEmptyMessage
  onClick={onClick}
/>
```

#### Custom cart and button message

Pass in custom copy in `buttonText` and `messageText`.

```jsx
const onClick = () => {};

<CartEmptyMessage
  buttonText="Custom button text"
  messageText="Custom message text"
  onClick={onClick}
/>
```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop                             | Default | Description                                                                   |
| -------------------------------------- | ------- | ----------------------------------------------------------------------------- |
| `CartEmptyMessage.textToButtonSpacing` | 54px    | Vertical space between the bottom of the text block and the top of the button |

#### Typography

- The message uses `bodyText` style with `rui_components.CartEmptyMessage` override
