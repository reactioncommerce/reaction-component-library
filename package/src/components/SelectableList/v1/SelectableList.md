### Overview

A `SelectableList` takes an array of `SelectableItems`.

#### Usage

##### Shipping

```jsx noeditor
const items = [{
  _id: "1",
  label: "Standard (5-9 days)",
  detail: "Free"
},
{
  _id: "2",
  label: "Priority (3-5 days)",
  detail: "$5.99"
},
{
  _id: "3",
  label: "Express 2-day",
  detail: "$12.99"
},
{
  _id: "4",
  label: "Overnight expedited",
  detail: "$24.99"
}];

<SelectableList items={items} name="Form"/>
```

##### Payment

```jsx noeditor
const items = [{
  _id: "5",
  label: "American Express",
  detail: "ending in 0000",
  className: "leftAligned amex"
},
{
  _id: "6",
  label: "Visa",
  detail: " ending in 0000",
  className: "leftAligned visa"
}];

<SelectableList items={items} name="Form"/>
```