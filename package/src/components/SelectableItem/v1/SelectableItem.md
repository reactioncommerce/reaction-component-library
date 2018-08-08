### Overview

`SelectableItems` in a `SelectableList` are used to select shipping methods, addresses and credit cards. Each item consists of a radio button, label and display value. The label and display value can both support text or render other elements, like icons and links.

#### Usage
- All labels should be written in sentence caps.
- Radio buttons should be used when only one option can be selected from a set of defined values.

#### Specs

|Property                                |Style                                |
|----------------------------------------|:-----------------------------------:|
|Label font                              | `@rui-label-text` capitalized       |
|Color                                   | `@cool-grey-500`                    |
|Radio button height and width           | `@base-unit(2)`                     |
|Radio button and label spacing          | `@base-unit(1)`                     |
|Selected icon                           | 0.875rem, `@cool-grey-500`          |
|Vertical spacing                        | `@base-unit(2)`                     |
|Disabled radio button fill              | `@black10`                          |
|Disabled radio button and label opacity | .5                                  |
|Cursor                                  | Pointer (radio button and label)    |