### Overview

A `SelectableList` takes an array of `SelectableItems`.

#### Usage

A `SelectableList` can be enabled or disabled.

##### Default: Enabled

```jsx
const options = [{
  id: "111",
  label: "Standard (5-9 days)",
  value: "Standard"
},
{
  id: "222",
  label: "Priority (3-5 days)",
  value: "Priority"
}];

<SelectableList options={options} name="DefaultForm" value="Standard"/>
```

##### Disabled

Pass the `isReadOnly` prop to disable all options, while also displaying the chosen item.

```jsx
const options = [{
  id: "3321",
  label: "Standard (5-9 days)",
  value: "standard"
},
{
  id: "2332",
  label: "Priority (3-5 days)",
  value: "priority"
}];

<SelectableList isReadOnly options={options} name="DisabledForm" value="standard"/>
```

##### Add a list action (optional)

A `SelectableList` can optionally have a `listAction` at the end of the list. Pass any node to the  `listAction` to display a button, checkbox, or any other node.

```jsx
const readMore = (
    <Button title="Default" className="myBtn" isTextOnly isShortHeight>Add a shipping method</Button>
);

const options = [{
  id: "33321",
  label: "Standard (5-9 days)",
  value: "standard"
},
{
  id: "23342",
  label: "Priority (3-5 days)",
  value: "priority"
}];

<SelectableList options={options} listAction={readMore} name="listActionForm"/>
```

#### Styles

You can alter the appearance of a `SelectableList` using `isBordered` and `isLeftAligned` props, which can also be used together.

##### Bordered

Pass the `isBordered` prop to get a bordered list:

```jsx
const options = [{
  id: "331",
  label: "Standard (5-9 days)",
  detail: "Free",
  value: "standard"
},
{
  id: "232",
  label: "Priority (3-5 days)",
  value: "priority",
  detail: "$5.99"
}];

<SelectableList isBordered options={options} name="BorderedForm" value="standard"/>
```

##### Left-aligned

Pass the `isLeftAligned` prop to align the `detail` text to the left:

```jsx
const options = [{
  id: "3531",
  label: "Standard (5-9 days)",
  detail: "Free",
  value: "standard"
},
{
  id: "2352",
  label: "Priority (3-5 days)",
  value: "priority",
  detail: "$5.99"
}];

<SelectableList isLeftAligned options={options} value="standard" name="LeftAlignedBorderedForm"/>
```

#### Examples

##### Shipping address list

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

##### Payment options list

```jsx

const iconVisa = require("../../../../../package/src/svg/iconVisa").default;

const options = [{
  id: "5",
  label: "American Express",
  detail: "ending in 4040",
  value: "amex",
  icon: iconVisa
},
{
  id: "6",
  label: "Cash",
  value: "cash"
}];

<SelectableList isBordered isLeftAligned options={options} name="PaymentForm"/>
```

##### Address list

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
  value: "address1",
  detail: link
},
{
  id: "8",
  label: "Susan Doe, PO Box 1123, Salt Lake City, UT 84111 US",
  value: "address2",
  detail: link
},
{
  id: "9",
  label: "Johnny Doe, 2300 Buckwheat Ave, Salt Lake City, UT 84111 US",
  value: "address3",
  detail: link
}];

<SelectableList isBordered options={options} name="AddressForm" listAction={addLink} value="address2" />
```