### Overview

`SelectableItems` in a `SelectableList` are used to select shipping methods, addresses and credit cards. Each item consists of a radio button, label and display value. The label and display value can both support text or render other elements, like icons and links.

An individual item can be checked, or unchecked, along with disabled (`isReadOnly`) or enabled:

```jsx noeditor
const item = {id: "1", label: "Default unchecked", value: "default"};
<SelectableItem item={item} />
```

```jsx noeditor
const item = {id: "123", label: "Default checked", checked: true, value: "default2" };
<SelectableItem item={item} />
```

```jsx noeditor
const item = {id: "12", label: "Default disabled and unchecked", value: "default3" };
<SelectableItem item={item} isReadOnly />
```

```jsx noeditor
const item = {id: "12", label: "Default disabled and checked", checked: true, value: "default4" };
<SelectableItem item={item} isReadOnly />
```

#### Usage
- All labels should be written in sentence caps.
- Radio buttons should be used when only one option can be selected from a set of defined values.

#### Types

##### SelectableItem without `detail`

```jsx
const item = { id: "2", label: "Default address", value: "default5"};
<SelectableItem item={item} />
```

##### SelectableItem with `detail`

Pass any element - text, SVGs or React elements - into `detail` to display a secondary action on the right-hand side.

###### Plain text

```jsx
const item = {id: "3", label: "Free shipping", detail: "$0.00", value: "free", value: "default6"};
<SelectableItem item={item}/>
```

```jsx
const item = {id: "4", label: "Free shipping", detail: "\u2714", value: "free", value: "default7"};
<SelectableItem item={item}/>
```

###### Element

```jsx
const link = (
    <Button title="Default" className="myBtn" isTextOnly isShortHeight>Default Text</Button>
);
const item = {id: "5", label: "Default", detail: link, value: "default8"};

<SelectableItem item={item}/>
```

###### Icon as detail
```jsx
const iconClear = require("../../../../../package/src/svg/iconClear").default;

const item = {id: "6", label: "Free shipping", detail: iconClear, value: "default9"};
<SelectableItem item={item}/>
```

###### Secondary icon
```jsx
const iconVisa = require("../../../../../package/src/svg/iconVisa").default;

const item = {id: "64", label: "Visa", detail: "ends in 4040", icon: iconVisa, value: "default123"};
<SelectableItem isLeftAligned item={item}/>
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