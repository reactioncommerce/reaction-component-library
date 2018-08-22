### Overview

`SelectableItems` in a `SelectableList` are used to select shipping methods, addresses and credit cards. Each item consists of a radio button, label and display value. The label and display value can both support text or render other elements, like icons and links.

An individual item can be checked, or unchecked, along with disabled (`isReadOnly`) or enabled:

```jsx noeditor
const item = { _id: "1", label: "Default unchecked" };
<SelectableItem item={item} />
```

```jsx noeditor
const item = { _id: "123", label: "Default checked" };
<SelectableItem item={item} value={true} />
```

```jsx noeditor
const item = { _id: "12", label: "Default disabled and unchecked" };
<SelectableItem item={item} value={false} isReadOnly />
```

```jsx noeditor
const item = { _id: "12", label: "Default disabled and checked" };
<SelectableItem item={item} value={true} isReadOnly />
```

#### Usage
- All labels should be written in sentence caps.
- Radio buttons should be used when only one option can be selected from a set of defined values.

#### Types

##### SelectableItem without `detail`

```jsx
const item = { _id: "2", label: "Default address" };
<SelectableItem item={item} />
```

##### SelectableItem with `detail`

Pass any element - text, SVGs or React elements - into `detail` to display a secondary action on the right-hand side.

###### Plain text

```jsx
const item = {_id: "3", label: "Free shipping", detail: "$0.00"};
<SelectableItem item={item}/>
```

```jsx
const item = {_id: "4", label: "Free shipping", detail: "\u2714"};
<SelectableItem item={item}/>
```

###### Element

```jsx
const link = (
    <Button title="Default" className="myBtn" isTextOnly isShortHeight>Default Text</Button>
);
const item = {_id: "5", label: "Default", detail: link};

<SelectableItem item={item}/>
```

###### SVG
```jsx
const iconClear = (
  // credit: https://fontawesome.com/icons/times-circle?style=regular
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{ height: "20px", maxHeight: "20px", verticalAlign: "middle" }}
  >
    <path
      fill="#3c3c3c"
      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
    />
  </svg>
);
const item = {_id: "6", label: "Free shipping", detail: iconClear};
<SelectableItem item={item}/>
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