### Overview
#### Usage

```jsx
const props = {
  className: "address-book-option",
  label: "Susan Doe",
  detail: "2300 Buckwheat Ave, Salt Lake Sity, UT 84111 USA"
};

<Accordion {...props} >
  Content
</Accordion>
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
  <Accordion {...accordion1} >
    Content
  </Accordion>
  <Accordion {...accordion2} >
    Content
  </Accordion>
</div>
```


