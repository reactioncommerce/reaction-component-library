### Overview

The `PhoneNumberInput` is a shallow wrapper of the `TextInput` that removes non-digit characters from the value.

*Example:* (504) 393-7303 => 5043937303

### Usage

```jsx
<PhoneNumberInput placeholder="Phone Number" />
```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop                              | Default                                                      | Description                                  |
| --------------------------------------- | ------------------------------------------------------------ | -------------------------------------------- |
| `Input.backgroundColor_dark`            | white                                                        | Background color when `isDarkBackground`     |
| `Input.backgroundColor_default`         | black02                                                      | Background color when not `isDarkBackground` |
| `Input.borderColor_default`             | black20                                                      | Border color in "default" state              |
| `Input.borderColor_error`               | red                                                          | Border color in "error" state                |
| `Input.borderColor_focus`               | teal                                                         | Border color in "focus" state                |
| `Input.borderColor_success`             | teal                                                         | Border color in "success" state              |
| `Input.borderRadius`                    | 2px                                                          | Border radius for all corners                |
| `Input.clearButtonColor`                | coolGrey                                                     | Icon color for the clear button              |
| `Input.clearButtonLargeBackgroundColor` | white                                                        | Background color for the large clear button  |
| `Input.clearButtonLargeBorderColor`     | coolGrey                                                     | Border color for the large clear button      |
| `Input.color_default`                   | coolGrey500                                                  | Input text color when in "default" state     |
| `Input.color_disabled`                  | black25                                                      | Input text color when in "disabled" state    |
| `Input.color_error`                     | red                                                          | Input text color when in "error" state       |
| `Input.color_focus`                     | coolGrey500                                                  | Input text color when in "focus" state       |
| `Input.color_success`                   | black55                                                      | Input text color when in "success" state     |
| `Input.fontFamily`                      | `'Source Sans Pro', 'Helvetica Neue', Helvetica, sans-serif` | Input text font                              |
| `Input.fontSize`                        | 14px                                                         | Input text font size                         |
| `Input.horizontalPadding`               | 10px                                                         | Left and right padding                       |
| `Input.iconColor_default`               | black55                                                      | Icon color when in "default" state           |
| `Input.iconColor_disabled`              | black25                                                      | Icon color when in "disabled" state          |
| `Input.iconColor_error`                 | red                                                          | Icon color when in "error" state             |
| `Input.iconColor_success`               | forestGreen                                                  | Icon color when in "success" state           |
| `Input.iconWrapperSize`                 | 1.429em                                                      | Height and width of the input icon           |
| `Input.lineHeight`                      | 1                                                            | Input line height                            |
| `Input.placeholderColor`                | black20                                                      | Placeholder text color                       |
| `Input.verticalPadding`                 | 8px                                                          | Top and bottom padding                       |

#### Typography

None
