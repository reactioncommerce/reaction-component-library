### Overview

Displays a message at the top of the checkout page.

### Usage

```jsx
<CheckoutTopHat
  checkoutMessage="Free Shipping + Free Returns"
/>
```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop                                         | Default | Description                                                                             |
| -------------------------------------------------- | ------- | --------------------------------------------------------------------------------------- |
| `CheckoutTopHat.backgroundColor` | black05 | Background color |
| `CheckoutTopHat.height` | 35px | Height |

#### Typography

- The message text uses `labelTextBold` style with `rui_components.CheckoutTopHatMessage` override
