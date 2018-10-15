### Overview
The `InPageMenu` component creates a responsive menu that displays `InPageMenuItem`s.

#### Usage

Can be used in the `InPageMenu` to provide a side-bar sub-navigation for a page.

```jsx
const menuItems = [
  {
    href: "/label/a",
    label: "Label A"
  },
  {
    href: "/label/b",
    label: "Label B"
  },
  {
    href: "/label/c",
    label: "Label C (Selected / Active)",
    isSelected: true
  },
  {
    href: "/label/d",
    label: "Label D"
  },
  {
    href: "/label/e",
    label: "Label E"
  }
];

<InPageMenu menuItems={menuItems} />
```
