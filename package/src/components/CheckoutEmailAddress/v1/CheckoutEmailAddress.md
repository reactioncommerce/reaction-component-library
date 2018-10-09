### Overview
Displays a customers email address inside the checkout flow.

### Usage

#### Account user

```jsx
<CheckoutEmailAddress
  emailAddress="account.email@example.com"
  isAccountEmail={true}
/>
```

#### Guest user

```jsx
<CheckoutEmailAddress
  emailAddress="guest.email@example.com"
  isAccountEmail={false}
/>
```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop                                         | Default | Description                                                                             |
| -------------------------------------------------- | ------- | --------------------------------------------------------------------------------------- |
| `borderBottomColor` | black10 | Color of bottom border |
| `borderBottomWidth` | 2px | Width of bottom border |
| `borderLeftColor` | black10 | Color of left border |
| `borderLeftWidth` | 0 | Width of left border |
| `borderRightColor` | black10 | Color of right border |
| `borderRightWidth` | 0 | Width of right border |
| `borderTopColor` | black10 | Color of top border |
| `borderTopWidth` | 0 | Width of top border |
| `paddingBottom` | 16px | Bottom padding |
| `paddingLeft` | 0 | Left padding |
| `paddingRight` | 0 | Right padding |
| `paddingTop` | 16px | Top padding |

#### Typography

- The "Signed in as" text uses `labelText` style with `rui_components.CheckoutEmailAddress` override
- The email address text uses `labelTextBold` style with `rui_components.CheckoutEmailAddressEmphasis` override
