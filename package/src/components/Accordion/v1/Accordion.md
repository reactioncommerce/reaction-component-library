### Overview

#### Usage

```jsx
const props = {
  className: "address-book-option",
  label: "Susan Doe",
  detail: "2300 Buckwheat Ave, Salt Lake Sity, UT 84111 USA"
};

<Accordion {...props}>Content</Accordion>;
```

**Accordion list**

```jsx
const accordion1 = {
  className: "address-book-option",
  label: "Susan Doe",
  detail: "2300 Buckwheat Ave, Salt Lake Sity, UT 84111 USA"
};

const accordion2 = {
  className: "something-else",
  label: "French Market",
  detail: "700-1010 Decatur St, New Orleans, LA 70116"
};

<div>
  <Accordion {...accordion1}>Content</Accordion>
  <Accordion {...accordion2}>Content</Accordion>
</div>;
```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop               | Default   | Description                     |
| ------------------------ | --------- | ------------------------------- |
| `Accordion.borderColor`  | `black10` | Border color for the Accordion  |
| `Accordion.borderStyle`  | `solid`   | Border style for the Accordion  |
| `Accordion.borderWidth`  | `1px`     | Border width for the Accordion  |
| `Accordion.borderRadius` | `2px`     | Border radius for the Accordion |
