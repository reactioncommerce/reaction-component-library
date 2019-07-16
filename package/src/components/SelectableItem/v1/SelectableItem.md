### Overview

A `SelectableItem` is used in a [SelectableList](./#!/SelectableList) and consists of a radio button, label, and optional detail view. The label and detail view can both support text or render other elements, like icons and links.

`SelectableItem` is a fully controlled, stateless component, which means that it will only display as checked when the `isChecked` prop is `true`, even if you click it. The parent of `SelectableItem` is expected to listen for `onChange` and update the `isChecked` prop as appropriate.

An individual item can be checked or unchecked, and read-only or editable:

```jsx noeditor
<SelectableItem label="Default unchecked" value="default" />
```

```jsx noeditor
<SelectableItem isChecked label="Default checked" value="default2" />
```

```jsx noeditor
<SelectableItem isReadOnly label="Default disabled and unchecked" value="default3" />
```

```jsx noeditor
<SelectableItem isChecked isReadOnly label="Default disabled and checked" value="default4" />
```

### Usage
- All labels should be written in sentence caps.
- Radio buttons should be used when only one option can be selected from a set of defined values.

### Types

#### SelectableItem without `detail`

```jsx
<SelectableItem label="Default address" value="default5" />
```

#### SelectableItem with `detail`

Pass any element - text, SVGs, other components, like `Address`,  or any React elements - into `detail` to display a secondary information and action on the right-hand side.

##### Plain text as detail

```jsx
<SelectableItem label="Free shipping" detail="$0.00" value="free"/>
```

```jsx
<SelectableItem label="Free shipping" detail="\u2714" value="free"/>
```

##### Element as detail

```jsx
import Button from "../../Button/v1/Button";
const link = (
  <Button title="Default" className="myBtn" isTextOnly isShortHeight>Default Text</Button>
);

<SelectableItem label="Default" detail={link} value="default8" />
```

##### Address as detail

```jsx
import Address from "../../Address/v1/Address";
const address = {
  _id: "1",
  address1: "7742 Hwy 23",
  address2: "",
  country: "US",
  city: "Belle Chasse",
  fullName: "Salvos Seafood",
  postal: "70037",
  region: "LA",
  phone: "(504) 393-7303"
};

const addressElement = (
  <Address address={address} />
);

<SelectableItem isStacked label="Entered address:" detail={addressElement} value="default12" />
```

##### Icon as detail
```jsx
const iconClear = require("../../../../../package/src/svg/iconClear").default;

<SelectableItem label="Free shipping" detail={iconClear} value="default9" />
```

##### Secondary icon
```jsx
const iconVisa = require("../../../../../package/src/svg/iconVisa").default;

<SelectableItem isLeftAligned label="Visa" detail="ends in 4040" icon={iconVisa} value="default123" />
```

### Specs

| Property                       | Style                                     |
| ------------------------------ | :---------------------------------------: |
| Label font                     | `@rui-label-text` capitalized             |
| Label font weight              | `400`                                     |
| Label font weight              | `700` when `isStacked` or `isLeftAligned` |
| Label color                    | `@cool-grey-500`                          |
| Border color                   | `@cool-grey-500`                          |
| Radio button color             | `@cool-grey-500`                          |
| Radio button height and width  | 20px                                      |
| Radio button and label spacing | 11px                                      |
| Radio button border            | 2px solid `@cool-grey-500`                |
| Selected circle size           | 11px                                      |
| Cursor                         | Pointer (radio button and label)          |

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
| `SelectableList.stackedSpacingToLabel`           | 30px                       | Spacing between radio button and detail when `isStacked`   |
| `SelectableList.stackedSpacingBelowLabel`        | 10px                       | Spacing between label and detail when `isStacked`          |
#### Typography

- The label text uses `labelText` style with `rui_components.SelectableItemLabel` override
- The detail text when not `isLeftAligned` uses `bodyText` style with `rui_components.SelectableItemDetail` override
- The detail text when `isLeftAligned` uses `labelText` style with `rui_components.SelectableItemDetailLeft` override
