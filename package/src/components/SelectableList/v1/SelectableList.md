### Overview

A `SelectableList` takes an array of `SelectableItems`.

### Usage

A `SelectableList` can be enabled or disabled.

#### Default: Enabled

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

#### Disabled

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

#### Add a list action (optional)

A `SelectableList` can optionally have a `listAction` at the end of the list. Pass any node to the  `listAction` to display a button, checkbox, or any other node.

```jsx
import Button from "../../Button/v1/Button";
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

### Styles

You can alter the appearance of a `SelectableList` using `isBordered` and `isLeftAligned` props, which can also be used together.

#### Bordered

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

#### Left-aligned

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

#### Horizontal

Pass the `isHorizontal` prop to get a horizontal list:

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

<SelectableList isHorizontal options={options} name="HorizontalForm" value="standard"/>
```

### Examples

#### Shipping address list

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

#### Payment options list

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

#### Address list

```jsx
import Button from "../../Button/v1/Button";
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

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop                                       | Default                    | Description                                                |
| ------------------------------------------------ | -------------------------- | ---------------------------------------------------------- |
| `SelectableItemRadioButton.backgroundColor`      | white                      | Radio button background color                              |
| `SelectableItemRadioButton.borderColor`          | coolGrey500                | Radio button border color                                  |
| `SelectableItemRadioButton.borderWidth`          | 2px                        | Radio button border width                                  |
| `SelectableItemRadioButton.checkSize`            | 10px                       | Radio button check height and width                        |
| `SelectableItemRadioButton.color`                | coolGrey500                | Radio button foreground color                              |
| `SelectableItemRadioButton.disabledCursor`       | not-allowed                | Cursor when hovering a disabled radio button               |
| `SelectableItemRadioButton.disabledFillColor`    | black10                    | Radio button fill color when disabled                      |
| `SelectableItemRadioButton.disabledOpacity`      | 0.5                        | Radio button opacity when disabled                         |
| `SelectableItemRadioButton.focus`                | `0 0 0 2px ${colors.teal}` | Radio button box shadow when focused                       |
| `SelectableItemRadioButton.focusOutline`         | `1px solid transparent`    | Radio button outline when focused                          |
| `SelectableItemRadioButton.size`                 | 20px                       | Radio button height and width                              |
| `SelectableItemRadioButton.spacingToLabel`       | 10px                       | Space between the radio button and its label               |
| `SelectableList.borderColor`                     | black10                    | Border color when `isBordered`                             |
| `SelectableList.borderRadius`                    | 2px                        | Border radius for all outside corners when `isBordered`    |
| `SelectableList.borderStyle`                     | solid                      | Border style when `isBordered`                             |
| `SelectableList.borderWidth`                     | 1px                        | Border width when `isBordered`                             |
| `SelectableList.height`                          | 50px                       | Height of each item                                        |
| `SelectableList.heightMobile`                    | 60px                       | Height of each item on a small screen                      |
| `SelectableList.iconHeight`                      | 24px                       | Height of the icon                                         |
| `SelectableList.iconLeft`                        | 30px                       | Left offset of the icon                                    |
| `SelectableList.iconSpacingToLabel`              | 10px                       | Space after the icon and before the label                  |
| `SelectableList.iconWidth`                       | 38px                       | Icon width                                                 |
| `SelectableList.itemPaddingBottom`               | 0                          | Bottom padding for each item                               |
| `SelectableList.itemPaddingLeft`                 | 10px                       | Left padding for each item                                 |
| `SelectableList.itemPaddingRight`                | 10px                       | Right padding for each item                                |
| `SelectableList.itemPaddingTop`                  | 0                          | Top padding for each item                                  |
| `SelectableList.leftAlignedLabelFontWeight`      | 700                        | Font weight for the label when `isLeftAligned`             |
| `SelectableList.leftAlignedDetailSpacingToLabel` | 2px                        | Spacing between label and detail text when `isLeftAligned` |
| `SelectableList.horizontalItemPaddingBottom` | 20px                        | Item bottom padding when `isHorizontal` |
| `SelectableList.horizontalItemPaddingLeft` | 20px                        | Item left padding when `isHorizontal` |
| `SelectableList.horizontalItemPaddingRight` | 20px                        | Item right padding when `isHorizontal` |
| `SelectableList.horizontalItemPaddingTop` | 20px                        | Item top padding when `isHorizontal` |
| `SelectableList.horizontalFirstItemPaddingRight` | 40px                        | First item right padding when `isHorizontal` |
| `SelectableList.horizontalLastItemPaddingLeft` | 40px                        | Last item left padding when `isHorizontal` |

#### Typography

None
