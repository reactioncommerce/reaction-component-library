### Overview

A `SelectableItem` is used in a `SelectableList` and consists of a radio button, label, and optional detail view. The label and detail view can both support text or render other elements, like icons and links.

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

#### Usage
- All labels should be written in sentence caps.
- Radio buttons should be used when only one option can be selected from a set of defined values.

#### Types

##### SelectableItem without `detail`

```jsx
<SelectableItem label="Default address" value="default5" />
```

##### SelectableItem with `detail`

Pass any element - text, SVGs or React elements - into `detail` to display a secondary action on the right-hand side.

###### Plain text

```jsx
<SelectableItem label="Free shipping" detail="$0.00" value="free"/>
```

```jsx
<SelectableItem label="Free shipping" detail="\u2714" value="free"/>
```

###### Element

```jsx
const link = (
  <Button title="Default" className="myBtn" isTextOnly isShortHeight>Default Text</Button>
);

<SelectableItem label="Default" detail={link} value="default8" />
```

###### Icon as detail
```jsx
const iconClear = require("../../../../../package/src/svg/iconClear").default;

<SelectableItem label="Free shipping" detail={iconClear} value="default9" />
```

###### Secondary icon
```jsx
const iconVisa = require("../../../../../package/src/svg/iconVisa").default;

<SelectableItem isLeftAligned label="Visa" detail="ends in 4040" icon={iconVisa} value="default123" />
```

#### Specs

|Property                                |Style                                |
|----------------------------------------|:-----------------------------------:|
|Label font                              | `@rui-label-text` capitalized       |
|Label color                             | `@cool-grey-500`                    |
|Border color                            | `@cool-grey-500`                    |
|Radio button color                      | `@cool-grey-500`                    |
|Radio button height and width           | 20px                                |
|Radio button and label spacing          | 11px                                |
|Radio button border                     | 2px solid `@cool-grey-500`          |
|Selected circle size                    | 11px                                |
|Cursor                                  | Pointer (radio button and label)    |