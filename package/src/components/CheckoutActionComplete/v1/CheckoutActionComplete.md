### Overview

The `CheckoutActionComplete` component will show when a checkout action has been completed. It is a summary of the information inside the completed action.

### Usage

#### Default

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
    label="Shipping address"
    content={Address}
    onClickChangeButton={onClick}
    stepNumber={2}
  />
</div>
```

#### Completed step without a step number
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
    label="Shipping address"
    content={Address}
    onClickChangeButton={onClick}
  />
</div>
```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop                            | Default | Description                                                          |
| ------------------------------------- | ------- | -------------------------------------------------------------------- |
| `CheckoutActionComplete.mobileMargin` | 10px    | Bottom margin prior to the "md" breakpoint                           |
| `rui_breakpoints.sm`                  | 960px   | Used to determine when the component begins to set the mobile margin |

#### Typography

- The details text uses `labelText` style with `rui_components.CheckoutActionCompleteDetail` override
- The title text uses `labelText` style with `rui_components.CheckoutActionCompleteTitle` override
