### Overview

The `CheckoutActionIncomplete` component will be used to display an incomplete step in the checkout process.

### Usage

#### Default
```jsx
<CheckoutActionIncomplete label="Shipping information" stepNumber={2}/>
```

#### Without a step number
```jsx
<CheckoutActionIncomplete label="Shipping information" />
```

### Theme

See [Theming Components](./#!/Theming%20Components).

#### Typography

- The initials text shown when there is no image uses `captionText` style with `rui_components.CheckoutActionIncomplete` override
