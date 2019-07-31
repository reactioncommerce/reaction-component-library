### Overview

### Usage
The `TextInput` component is used for collecting string form values.

There are two types of text inputs to choose from:
- **Single-line input**: used for single-line inputs.
- **Multi-line input**: used for longer inputs.

Text inputs also have two styles of inputs.
 - **Default input style**: used on light backgrounds.
 - **Dark input style**: used on dark backgrounds.

### Types

#### Single line
Default text input used in the majority of instances. It can be defined as one of four input types `"text"`, `"email"`, `"password"`, `"url"`.

```jsx
<div style={{ width: "50%" }}>
  <TextInput name="example" placeholder="Hint" />
</div>
```

#### Multi-line
To enable the multi-line text input, pass the `shouldAllowLineBreaks` prop.

```jsx
<div style={{ width: "50%" }}>
  <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks />
</div>
```

#### Number
To enable the number type text input, use the `type="number"`.

```jsx
<div style={{ width: "50%" }}>
  <TextInput name="example" placeholder="0.00" type="number"/>
</div>
```

To set minimum or maximum values allowed, set the `min` and `max` props.

```jsx
<div style={{ width: "50%" }}>
  <TextInput name="example" placeholder="0.00" max={10.00} min={0} type="number"/>
</div>
```

To set the increment the input arrows will use, set the `step` prop.

```jsx
<div style={{ width: "50%" }}>
  <TextInput name="example" placeholder="0.00" max={10.00} min={0} step="0.01" type="number"/>
</div>
```

### Styles

By default, text inputs are white with dark text on grey backgrounds.

#### Default: Light background

```jsx
const TwoColumnExamples = require("../../../../../styleguide/src/components/TwoColumnExamples").default;

<TwoColumnExamples>
  <TextInput name="example" placeholder="I am a multi-line text input on default light background." shouldAllowLineBreaks/>
  <TextInput name="example" placeholder="I am a single-line text input on default light background." />
</TwoColumnExamples>
```

#### Dark background

The dark background style is applied by adding the `isOnDarkBackground` prop to the component. Use `dark` text input when the background is grey or dark. When a grey background is used to create hierarchy and sections a white text field is use.

```jsx
const TwoColumnExamples = require("../../../../../styleguide/src/components/TwoColumnExamples").default;

<TwoColumnExamples hasDarkRightBackground hasDarkLeftBackground>
  <TextInput name="multi-line" placeholder="I am a multi-line text input on a dark background." isOnDarkBackground shouldAllowLineBreaks />
  <TextInput name="multi-line" placeholder="I am a single-line text input on dark background." isOnDarkBackground />
</TwoColumnExamples>
```

### States
Text inputs have 8 basic states:

1. Idle unfilled
1. Idle filled
1. Focused unfilled
1. Focused filled
1. Saved - *Not yet implemented*
1. Valid
1. Invalid
1. Read Only / Disabled

#### Idle Unfilled / Focused Unfilled

When a user has clicked, pressed or tabbed into an input, it’s in focused state.

```jsx
const TwoColumnExamples = require("../../../../../styleguide/src/components/TwoColumnExamples").default;

<div>
  <h4>Single-line</h4>
  <TwoColumnExamples hasDarkRightBackground>
    <TextInput name="example" placeholder="Hint" />
    <TextInput name="example" placeholder="Hint" isOnDarkBackground />
  </TwoColumnExamples>
  <h4>Multi-line</h4>
  <TwoColumnExamples hasDarkRightBackground>
    <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks />
    <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks isOnDarkBackground />
  </TwoColumnExamples>
</div>
```

#### Idle Filled / Focused Filled

When a field has been filled in by the user, and has been unfocused it shows idle and filled in. When a user has filled in a text input and clicked back into the text field it is shown as focused and has an icon button that allows the user to quickly clear the whole field and edit it from scratch.

```jsx
const TwoColumnExamples = require("../../../../../styleguide/src/components/TwoColumnExamples").default;
<div>
  <h4>Single-line</h4>
  <TwoColumnExamples hasDarkRightBackground>
    <TextInput name="example" placeholder="Hint" value="value" />
    <TextInput name="example" placeholder="Hint" value="value" isOnDarkBackground />
  </TwoColumnExamples>
  <h4>Multi-line</h4>
  <TwoColumnExamples hasDarkRightBackground>
    <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks value="value" />
    <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks value="value" isOnDarkBackground />
  </TwoColumnExamples>
</div>
```

#### Valid

When information is required and/or needs to be formatted in a specific way the text input should be validated. When it’s successful the field shows a success state. Passing the `hasBeenValidated` prop to the input will enabled the valid state.

```jsx
const TwoColumnExamples = require("../../../../../styleguide/src/components/TwoColumnExamples").default;

<div>
  <h4>Single-line</h4>
  <TwoColumnExamples hasDarkRightBackground>
    <TextInput name="example" placeholder="Hint" value="value" hasBeenValidated />
    <TextInput name="example" placeholder="Hint" value="value" hasBeenValidated isOnDarkBackground />
  </TwoColumnExamples>
  <h4>Multi-line</h4>
  <TwoColumnExamples hasDarkRightBackground>
    <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks value="value" hasBeenValidated />
    <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks value="value" hasBeenValidated isOnDarkBackground />
  </TwoColumnExamples>
</div>
```

#### Invalid

When information is required and/or needs to be formatted in a specific way the text input should be validated. When a input can't be validated the input is highlighted with error styling. Passing an `errors` array to the input to enabled the invalid state.

```jsx
const TwoColumnExamples = require("../../../../../styleguide/src/components/TwoColumnExamples").default;

<div>
  <h4>Single-line</h4>
  <TwoColumnExamples hasDarkRightBackground>
    <TextInput name="example" placeholder="Hint" value="value" errors={["error"]} />
    <TextInput name="example" placeholder="Hint" value="value" errors={["error"]} isOnDarkBackground />
  </TwoColumnExamples>
  <h4>Multi-line</h4>
  <TwoColumnExamples hasDarkRightBackground>
    <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks value="value" errors={["error"]} />
    <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks value="value" errors={["error"]} isOnDarkBackground />
  </TwoColumnExamples>
</div>
```

#### Read Only / Disabled

A disabled input is used when an action needs to be taken before the input can be enabled. A user is unable to input information into a disabled input. Pass the `isReadOnly` prop to enabled read only / disabled state.

```jsx
const TwoColumnExamples = require("../../../../../styleguide/src/components/TwoColumnExamples").default;

<div>
  <h4>Single-line</h4>
  <TwoColumnExamples hasDarkRightBackground>
    <TextInput name="example" placeholder="Hint" value="value" isReadOnly />
    <TextInput name="example" placeholder="Hint" value="value" isReadOnly isOnDarkBackground />
  </TwoColumnExamples>
  <h4>Multi-line</h4>
  <TwoColumnExamples hasDarkRightBackground>
    <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks value="value" isReadOnly />
    <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks value="value" isReadOnly isOnDarkBackground />
  </TwoColumnExamples>
</div>
```

### Input Icons
You can add a custom icon to the right side of any text input and optionally provide a click handler for it. Use these two props:
 - `icon` The icon node you want to display
 - `onIconClick` Click event handler for icon clicks.

You can also provide the `iconClearAccessibilityText` prop with accessibility text for the clear icon.

The default valid, invalid and clear icons can be overwritten by passing values to these props of the `components` prop:
 - `iconClear`
 - `iconError`
 - `iconValid`

These can also be provided through the main components context for your app.

All of the icon props will accept a few different types of nodes to create the input icon.
 - React Component
 - `<i/>` tag used for icon fonts
 - `<svg>` tag for inline SVG
 - Plain text, Unicode symbols

Here is how to use an SVG icon to replace `iconValid`, `iconError`, `iconClear` and `iconClearAccessibilityText` for TextField:

```jsx
const TwoColumnExamples = require("../../../../../styleguide/src/components/TwoColumnExamples").default;

const iconComponents = {
  iconClear: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"  style={{ height: "100%", verticalAlign: "middle" }}> <path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z" /></svg>,
  iconError: "X",
  iconValid: "\u2714"
};

<TwoColumnExamples hasDarkRightBackground>
  <TextInput name="example" placeholder="Hint" value="I'm a unicode checkmark" hasBeenValidated components={iconComponents} />
  <TextInput name="example" placeholder="Hint" value="Invalid" errors={["error"]} components={iconComponents} isOnDarkBackground />
</TwoColumnExamples>
```

To replace an icon, like` iconValid`, across all components, update the icons in the `components` prop. Learn more [here](https://github.com/reactioncommerce/reaction-component-library/blob/master/docs/component-development-guidelines.md#using-other-components-in-a-component).

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
| `Textarea.clearButtonFontSize`          | 12px                                                         | Font size for the large clear button         |
| `Textarea.clearButtonPadding`           | 10px                                                         | Padding for the large clear button           |
| `Textarea.height`                       | 60px                                                         | Initial height of a textarea                 |
| `Textarea.iconRight`                    | 0                                                            | Right offset for a textarea icon             |
| `Textarea.iconTop`                      | 10px                                                         | Top offset for a textarea icon               |
| `Textarea.lineHeight`                   | 1.5                                                          | Line height for lines within a textarea      |

#### Typography

None
