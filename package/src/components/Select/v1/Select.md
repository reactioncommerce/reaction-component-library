### Overview

Selects are form elements that allow the user to choose a single value from a set of options.

### Usage

There are two basic types of selects: simple and searchable.

#### Simple select

The simple select can be used in cases where there are fewer than 10 options.

```jsx
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'darkchocolate', label: 'Dark Chocolate' },
  { value: 'mintchip', label: 'Mint Chip' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

<Select options={options} />
```

#### Searchable select

A searchable select should be used when there are more than 10 options or when the options are not known until the user starts typing.

```jsx
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

<Select options={options} isSearchable />
```

In cases where you want a smaller width for the select, set `maxWidth` property to a number of pixels based on how much space your longest option label needs.

```jsx
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

<Select options={options} maxWidth={150} />
```

#### Alphabetizing select options

By default the `Select` will inherit the order of provided options.
To alphabetize by option label apply the `alphabetize` prop.

```jsx
const options = [
  { value: 'mintchip', label: 'Mint Chip' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'darkchocolate', label: 'Dark Chocolate' }
];

<Select options={options} alphabetize />
```

#### Nested select optioins

```jsx
const options = [{
    optgroup: 'Transportation',
    options: [{
        value: "car",
        label: 'Car'
      },
      {
        value: "bike",
        label: "Bike"
      },
      {
        value: "jetpack",
        label: "Jetpack"
      }
    ]
  },
  {
    optgroup: 'Plants',
    options: [{
        value: 'tree',
        label: "Tree"
      },
      {
        value: "cactus",
        label: "Cactus"
      },
      {
        value: "lily",
        label: "Lily"
      }
    ]
  },
  {
    optgroup: 'Athletes',
    options: [{
        value: 'lebron',
        label: 'Lebron James'
      },
      {
        value: "embiid",
        label: "Joel Embiid"
      },
      {
        value: "antetokounmpo",
        label: "Giannis Antetokounmpo"
      }
    ]
  }
];

<Select options={options} alphabetize />
```

### States

A select can be in one of three states: normal, invalid, or valid. Normal state is as shown previously

#### Invalid state

When used within a form, a selected value might be deemed invalid, either because the user has not selected a value or because the user has selected a value that is not allowed based on other information entered in the same form. In this case, one or more error objects can be passed in the `errors` prop and will cause the select to appear as invalid.

```jsx
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

<Select name="flavor" options={options} errors={[{ name: "flavor", message: "Please choose one" }]} />
```

#### Valid state

When used within a form, a selected value might be deemed valid after its value has been checked. If the `errors` prop is empty and the `hasBeenValidated` prop is true and there is a selected value, the select will appear valid.

```jsx
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

<Select options={options} value="vanilla" hasBeenValidated />
```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop                              | Default                                                      | Description                                                   |
| --------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------- |
| `Input.backgroundColor_dark`            | white                                                        | Background color when `isDarkBackground`                      |
| `Input.backgroundColor_default`         | black02                                                      | Background color when not `isDarkBackground`                  |
| `Input.borderColor_default`             | black20                                                      | Border color in "default" state                               |
| `Input.borderColor_error`               | red                                                          | Border color in "error" state                                 |
| `Input.borderColor_focus`               | teal                                                         | Border color in "focus" state                                 |
| `Input.borderColor_success`             | teal                                                         | Border color in "success" state                               |
| `Input.borderRadius`                    | 2px                                                          | Border radius for all corners                                 |
| `Input.clearButtonColor`                | coolGrey                                                     | Icon color for the clear button                               |
| `Input.clearButtonLargeBackgroundColor` | white                                                        | Background color for the large clear button                   |
| `Input.clearButtonLargeBorderColor`     | coolGrey                                                     | Border color for the large clear button                       |
| `Input.color_default`                   | coolGrey500                                                  | Input text color when in "default" state                      |
| `Input.color_disabled`                  | black25                                                      | Input text color when in "disabled" state                     |
| `Input.color_error`                     | red                                                          | Input text color when in "error" state                        |
| `Input.color_focus`                     | coolGrey500                                                  | Input text color when in "focus" state                        |
| `Input.color_success`                   | black55                                                      | Input text color when in "success" state                      |
| `Input.fontFamily`                      | `'Source Sans Pro', 'Helvetica Neue', Helvetica, sans-serif` | Input text font                                               |
| `Input.fontSize`                        | 14px                                                         | Input text font size                                          |
| `Input.horizontalPadding`               | 10px                                                         | Left and right padding                                        |
| `Input.iconColor_default`               | black55                                                      | Icon color when in "default" state                            |
| `Input.iconColor_disabled`              | black25                                                      | Icon color when in "disabled" state                           |
| `Input.iconColor_error`                 | red                                                          | Icon color when in "error" state                              |
| `Input.iconColor_success`               | forestGreen                                                  | Icon color when in "success" state                            |
| `Input.iconWrapperSize`                 | 1.429em                                                      | Height and width of the input icon                            |
| `Input.lineHeight`                      | 1                                                            | Input line height                                             |
| `Input.placeholderColor`                | black20                                                      | Placeholder text color                                        |
| `Input.verticalPadding`                 | 8px                                                          | Top and bottom padding                                        |
| `Select.borderBottomLeftRadius`         | 2px                                                          | Border bottom left radius                                     |
| `Select.borderBottomRightRadius`        | 0                                                            | Border bottom right radius                                    |
| `Select.borderTopLeftRadius`            | 0                                                            | Border top left radius                                        |
| `Select.borderTopRightRadius`           | 2px                                                          | Border top right radius                                       |
| `Select.indicatorColor`                 | coolGrey500                                                  | Color of the indicator icon                                   |
| `Select.letterSpacing`                  | 0.3px                                                        | Letter spacing                                                |
| `Select.optionHoverColor`               | reactionBlue100                                              | Background color of a menu option while hovering on it        |
| `Select.selectedOptionBackgroundColor`  | reactionBlue200                                              | Background color of the currently selected option in the menu |
| `Select.textColor`                      | coolGrey500                                                  | Color of all text in the component                            |
| `SelectMenu.borderBottomColor`          | black20                                                      | Color of the bottom border of the options menu                |
| `SelectMenu.borderBottomLeftRadius`     | 2px                                                          | Border radius for the bottom left corner of the menu          |
| `SelectMenu.borderBottomRightRadius`    | 0                                                            | Border radius for the bottom right corner of the menu         |
| `SelectMenu.borderBottomWidth`          | 1px                                                          | Width of the bottom border of the options menu                |
| `SelectMenu.borderLeftColor`            | black20                                                      | Color of the left border of the options menu                  |
| `SelectMenu.borderLeftWidth`            | 1px                                                          | Width of the left border of the options menu                  |
| `SelectMenu.borderRightColor`           | black20                                                      | Color of the right border of the options menu                 |
| `SelectMenu.borderRightWidth`           | 1px                                                          | Width of the right border of the options menu                 |
| `SelectMenu.borderTopLeftRadius`        | 0                                                            | Border radius for the top left corner of the menu             |
| `SelectMenu.borderTopRightRadius`       | 2px                                                          | Border radius for the top right corner of the menu            |

#### Typography

None
