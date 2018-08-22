### Overview

A `SelectableList` takes an array of `SelectableItems`.

#### Usage

A `SelectableList` comes in two main styles: unbordered and bordered.

##### Default

```jsx noeditor
const options = [{
  _id: "111",
  label: "Standard (5-9 days)"
},
{
  _id: "222",
  label: "Priority (3-5 days)"
}];

<SelectableList options={options} name="Form"/>
```

##### Bordered

Pass the `isBordered` prop to get a bordered list:

```jsx noeditor
const options = [{
  _id: "331",
  label: "Standard (5-9 days)",
  detail: "Free"
},
{
  _id: "232",
  label: "Priority (3-5 days)",
  detail: "$5.99"
}];

<SelectableList isBordered options={options} name="Form"/>
```

##### Disabled

Pass the `isReadOnly` prop to disable all options:

```jsx noeditor
const options = [{
  _id: "3321",
  label: "Standard (5-9 days)",
  detail: "Free"
},
{
  _id: "2332",
  label: "Priority (3-5 days)",
  detail: "$5.99"
}];

<SelectableList isReadOnly options={options} name="Form"/>
```

#### Examples

##### Shipping

```jsx
const options = [{
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

<SelectableList isBordered options={options} name="Form"/>
```

##### Payment

```jsx
const options = [{
  _id: "5",
  label: "American Express",
  detail: "ending in 0000",
  icon: "iconAmericanExpress",
  className: "leftAligned"
},
{
  _id: "6",
  label: "Visa",
  detail: " ending in 0000",
  icon: "iconVisa",
  className: "leftAligned"
},
{
  _id: "62",
  label: "Mastercard",
  detail: " ending in 0000",
  icon: "iconMastercard",
  className: "leftAligned"  
},{
  _id: "64",
  label: "Discover",
  detail: " ending in 0000",
  icon: "iconDiscover",
  className: "leftAligned"
}];

<SelectableList isBordered options={options} name="Form"/>
```

##### Address

```jsx
const link = (
    <Button title="Default" className="myBtn" isTextOnly isShortHeight>Edit</Button>
);

const addLink = (
    <Button title="Default" className="myBtn" isTextOnly isShortHeight>Add a new address</Button>
);

const options = [{
  _id: "7",
  label: "Susan Doe, 2300 Buckwheat Ave, Salt Lake City, UT 84111 USA",
  detail: link
},
{
  _id: "8",
  label: "Susan Doe, PO Box 1123, Salt Lake City, UT 84111 US",
  detail: link
},
{
  _id: "9",
  label: "Johnny Doe, 2300 Buckwheat Ave, Salt Lake City, UT 84111 US",
  detail: link
}];

<SelectableList isBordered options={options} name="Form" listAction={addLink} />
```