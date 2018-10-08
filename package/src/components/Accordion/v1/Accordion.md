### Overview
#### Usage

```jsx
const props = {
  className: "address-book-option",
  label: "Susan Doe",
  detail: "2300 Buckwheat Ave, Salt Lake Sity, UT 84111 USA",
  icon: null
};

<Accordion {...props} >
  Content
</Accordion>
```

```jsx
const props = {
  className: "address-book-option",
  label: "Susan Doe",
  detail: "2300 Buckwheat Ave, Salt Lake Sity, UT 84111 USA",
  icon: null
};

<div>
<Accordion {...props} >
  Content
</Accordion>
<Accordion {...props} >
  Content
</Accordion>
<Accordion {...props} >
  Content
</Accordion>
<Accordion {...props} >
  Content
</Accordion>
</div>
```

