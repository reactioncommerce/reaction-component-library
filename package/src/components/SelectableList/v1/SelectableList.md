### Overview

A `SelectableList` takes an array of `SelectableItems`.

#### Usage

A `SelectableList` comes in two main styles: unbordered and bordered.

##### Default

```jsx
const options = [{
  id: "111",
  label: "Standard (5-9 days)",
  value: "Standard",
  checked: true
},
{
  id: "222",
  label: "Priority (3-5 days)",
  value: "Priority"
}];

<SelectableList options={options} name="DefaultForm"/>
```

##### Bordered

Pass the `isBordered` prop to get a bordered list:

```jsx noeditor
const options = [{
  id: "331",
  label: "Standard (5-9 days)",
  detail: "Free",
  value: "standard",
  checked: true
},
{
  id: "232",
  label: "Priority (3-5 days)",
  value: "priority",
  detail: "$5.99"
}];

<SelectableList isBordered options={options} name="BorderedForm"/>
```

##### Disabled

Pass the `isReadOnly` prop to disable all options:

```jsx noeditor
const options = [{
  id: "3321",
  label: "Standard (5-9 days)",
  value: "standard",
  detail: "Free",
  checked: true
},
{
  id: "2332",
  label: "Priority (3-5 days)",
  value: "priority",  
  detail: "$5.99"
}];

<SelectableList isReadOnly options={options} name="DisabledForm"/>
```

#### Examples

##### Shipping

```jsx
const options = [{
  id: "1",
  label: "Standard (5-9 days)",
  value: "standard",
  detail: "Free"
},
{
  id: "2",
  label: "Priority (3-5 days)",
  value: "priority",
  detail: "$5.99"
},
{
  id: "3",
  label: "Express 2-day",
  value: "express",
  detail: "$12.99"
},
{
  id: "4",
  label: "Overnight expedited",
  value: "overnight",
  detail: "$24.99"
}];

<SelectableList isBordered options={options} name="ShippingForm"/>
```

##### Payment

```jsx
const options = [{
  id: "5",
  label: "American Express",
  detail: "ending in 0000",
  value: "amex",
  icon: "iconAmericanExpress",
  className: "leftAligned"
},
{
  id: "6",
  label: "Visa",
  detail: " ending in 0000",
  value: "visa",
  icon: "iconVisa",
  className: "leftAligned"
},
{
  id: "62",
  label: "Mastercard",
  detail: " ending in 0000",
  value: "mc",
  icon: "iconMastercard",
  className: "leftAligned"
},{
  id: "64",
  label: "Discover",
  detail: " ending in 0000",
  value: "disc",
  icon: "iconDiscover",
  className: "leftAligned"
}];

<SelectableList isBordered options={options} name="PaymentForm"/>
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
  id: "7",
  label: "Susan Doe, 2300 Buckwheat Ave, Salt Lake City, UT 84111 USA",
  value: 33333,
  detail: link
},
{
  id: "8",
  label: "Susan Doe, PO Box 1123, Salt Lake City, UT 84111 US",
  value: 232312,
  detail: link
},
{
  id: "9",
  label: "Johnny Doe, 2300 Buckwheat Ave, Salt Lake City, UT 84111 US",
  value: 12345,
  detail: link
}];

<SelectableList isBordered options={options} name="AddressForm" listAction={addLink} />
```