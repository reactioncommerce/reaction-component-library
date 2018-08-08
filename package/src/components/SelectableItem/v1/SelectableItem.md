### Overview

`SelectableItems` in a `SelectableList` are used to select shipping methods, addresses and credit cards. Each item consists of a radio button, label and display value. The label and display value can both support text or render other elements, like icons and links.

```jsx noeditor
<SelectableItem label="One thing"/>
```

#### Usage
- All labels should be written in sentence caps.
- Radio buttons should be used when only one option can be selected from a set of defined values.

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