### Overview

#### Usage
The `TextInput` component is used for collecting string form values.

There are two types of text inputs to choose from:
- **Single-line input**: used for single-line inputs.
- **Multi-line input**: used for longer inputs.

Text inputs also have two styles of inputs.
 - **Default input style**: used on light backgrounds.
 - **Dark input style**: used on dark backgrounds.

#### Types

##### Single line
Default text input used in the majority of instances. It can be defined as one of four input types `"text"`, `"email"`, `"password"`, `"url"`.

```jsx
<div style={{ width: "50%" }}>
  <TextInput name="example" placeholder="Hint" />
</div>
```

##### Multi-line
To enable the multi-line text input, pass the `shouldAllowLineBreaks` prop.

```jsx
<div style={{ width: "50%" }}>
  <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks />
</div>
```

#### Styles

By default, text inputs are white with dark text on grey backgrounds.

##### Default: Light background

```jsx
const TwoColumnExamples = require("../../../../../styleguide/src/components/TwoColumnExamples").default;

<TwoColumnExamples>
  <TextInput name="example" placeholder="I am a multi-line text input on default light background." shouldAllowLineBreaks/>
  <TextInput name="example" placeholder="I am a single-line text input on default light background." />
</TwoColumnExamples>
```

##### Dark background

The dark background style is applied by adding the `isOnDarkBackground` prop to the component. Use `dark` text input when the background is grey or dark. When a grey background is used to create hierarchy and sections a white text field is use.

```jsx
const TwoColumnExamples = require("../../../../../styleguide/src/components/TwoColumnExamples").default;

<TwoColumnExamples hasDarkRightBackground hasDarkLeftBackground>
  <TextInput name="multi-line" placeholder="I am a multi-line text input on a dark background." isOnDarkBackground shouldAllowLineBreaks />
  <TextInput name="multi-line" placeholder="I am a single-line text input on dark background." isOnDarkBackground />
</TwoColumnExamples>
```

#### States
Text inputs have 8 basic states:

1. Idle unfilled
1. Idle filled
1. Focused unfilled
1. Focused filled
1. Saved - *Not yet implemented*
1. Valid
1. Invalid
1. Read Only / Disabled

##### Idle Unfilled / Focused Unfilled

When a user has clicked, pressed or tabbed into an input, it’s in focused state.

```jsx
const TwoColumnExamples = require("../../../../../styleguide/src/components/TwoColumnExamples").default;

<TwoColumnExamples hasDarkRightBackground>
  <TextInput name="example" placeholder="Hint" />
  <TextInput name="example" placeholder="Hint" isOnDarkBackground />
</TwoColumnExamples>
```

```jsx
const TwoColumnExamples = require("../../../../../styleguide/src/components/TwoColumnExamples").default;

<TwoColumnExamples hasDarkRightBackground>
  <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks />
  <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks isOnDarkBackground />
</TwoColumnExamples>
```

##### Idle Filled / Focused Filled

When a field has been filled in by the user, and has been unfocused it shows idle and filled in. When a user has filled in a text input and clicked back into the text field it is shown as focused and has an icon button that allows the user to quickly clear the whole field and edit it from scratch.

```jsx
const TwoColumnExamples = require("../../../../../styleguide/src/components/TwoColumnExamples").default;

<TwoColumnExamples hasDarkRightBackground>
  <TextInput name="example" placeholder="Hint" value="value" />
  <TextInput name="example" placeholder="Hint" value="value" isOnDarkBackground />
</TwoColumnExamples>
```

```jsx
const TwoColumnExamples = require("../../../../../styleguide/src/components/TwoColumnExamples").default;

<TwoColumnExamples hasDarkRightBackground>
  <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks value="value" />
  <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks value="value" isOnDarkBackground />
</TwoColumnExamples>
```

##### Valid

When information is required and/or needs to be formatted in a specific way the text input should be validated. When it’s successful the field shows a success state. Passing the `hasBeenValidated` prop to the input will enabled the valid state.

```jsx
const TwoColumnExamples = require("../../../../../styleguide/src/components/TwoColumnExamples").default;

<TwoColumnExamples hasDarkRightBackground>
  <TextInput name="example" placeholder="Hint" value="value" hasBeenValidated />
  <TextInput name="example" placeholder="Hint" value="value" hasBeenValidated isOnDarkBackground />
</TwoColumnExamples>
```

```jsx
const TwoColumnExamples = require("../../../../../styleguide/src/components/TwoColumnExamples").default;

<TwoColumnExamples hasDarkRightBackground>
  <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks value="value" hasBeenValidated />
  <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks value="value" hasBeenValidated isOnDarkBackground />
</TwoColumnExamples>
```

##### Invalid

When information is required and/or needs to be formatted in a specific way the text input should be validated. When a input can't be validated the input is highlighted with error styling. Passing an `errors` array to the input to enabled the invalid state.

```jsx
const TwoColumnExamples = require("../../../../../styleguide/src/components/TwoColumnExamples").default;

<TwoColumnExamples hasDarkRightBackground>
  <TextInput name="example" placeholder="Hint" value="value" errors={["error"]} />
  <TextInput name="example" placeholder="Hint" value="value" errors={["error"]} isOnDarkBackground />
</TwoColumnExamples>
```

```jsx
const TwoColumnExamples = require("../../../../../styleguide/src/components/TwoColumnExamples").default;

<TwoColumnExamples hasDarkRightBackground>
  <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks value="value" errors={["error"]} />
  <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks value="value" errors={["error"]} isOnDarkBackground />
</TwoColumnExamples>
```

##### Read Only / Disabled

A disabled input is used when an action needs to be taken before the input can be enabled. A user is unable to input information into a disabled input. Pass the `isReadOnly` prop to enabled read only / disabled state.

```jsx
const TwoColumnExamples = require("../../../../../styleguide/src/components/TwoColumnExamples").default;

<TwoColumnExamples hasDarkRightBackground>
  <TextInput name="example" placeholder="Hint" value="value" isReadOnly />
  <TextInput name="example" placeholder="Hint" value="value" isReadOnly isOnDarkBackground />
</TwoColumnExamples>
```

```jsx
const TwoColumnExamples = require("../../../../../styleguide/src/components/TwoColumnExamples").default;

<TwoColumnExamples hasDarkRightBackground>
  <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks value="value" isReadOnly />
  <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks value="value" isReadOnly isOnDarkBackground />
</TwoColumnExamples>
```

#### Input Icons
You can add a custom icon to the right side of any text input and optionally provide a click handler for it. Use these two props:
 - `icon` The icon node you want to display
 - `onIconClick` Click event handler for icon clicks.

```jsx
const TwoColumnExamples = require("../../../../../styleguide/src/components/TwoColumnExamples").default;

const handleClick = (event) => alert("Input Icon Clicked!");
const icon = <i className="fab fa-pied-piper" />;

<TwoColumnExamples hasDarkRightBackground>
  <TextInput name="example" placeholder="Hint" icon={icon} onIconClick={handleClick} />
  <TextInput name="example" placeholder="Hint" icon={icon}  onIconClick={handleClick} isOnDarkBackground />
</TwoColumnExamples>
```

The default valid, invalid and clear icons can be overwritten by passing values to these props of the text input.
 - `iconClear, iconError, iconSuccess`
 - `iconClearAccessibilityText`

```jsx
const TwoColumnExamples = require("../../../../../styleguide/src/components/TwoColumnExamples").default;

<TwoColumnExamples hasDarkRightBackground>
  <TextInput name="example" placeholder="Hint" value="Valid" hasBeenValidated iconClear={<i className="fas fa-gavel" />} iconValid={<i className="fa fa-thumbs-up" />}  />
  <TextInput name="example" placeholder="Hint" value="Invalid" errors={["error"]} iconClear={<i className="fas fa-gavel" />} iconError={<i className="fa fa-thumbs-down" />}  isOnDarkBackground />
</TwoColumnExamples>
```

All of the icon props will accept a few different types of nodes to create the input icon.
 - React Component
 - `<i/>` tag used for icon fonts
 - `<svg>` tag for inline SVG
 - Plain text

Inline SVG icon

```jsx
const TwoColumnExamples = require("../../../../../styleguide/src/components/TwoColumnExamples").default;

const svg = <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" style={{ height: "100%" }}><path d="M9.926 9.105l-2.105-2.105 2.105-2.105-0.82-0.82-2.105 2.105-2.105-2.105-0.82 0.82 2.105 2.105-2.105 2.105 0.82 0.82 2.105-2.105 2.105 2.105zM7 1.176c3.227 0 5.824 2.598 5.824 5.824s-2.598 5.824-5.824 5.824-5.824-2.598-5.824-5.824 2.598-5.824 5.824-5.824z"></path></svg>;

<TwoColumnExamples hasDarkRightBackground>
  <TextInput name="example" placeholder="Hint" icon={svg} />
  <TextInput name="example" placeholder="Hint" icon={svg} isOnDarkBackground />
</TwoColumnExamples>
```

#### Component usage

The text input theme styles are broken out into three groups

Input Styles
 - `rui_inputBackgroundColor_default`
 - `rui_inputBackgroundColor_dark `
 - `rui_inputBorderColor_default `
 - `rui_inputBorderColor_focus `
 - `rui_inputBorderColor_error `
 - `rui_inputBorderColor_success `
 - `rui_inputBorderRadius `
 - `rui_inputColor_default `
 - `rui_inputColor_disabled `
 - `rui_inputColor_error `
 - `rui_inputColor_success `
 - `rui_inputPlaceholderColor `
 - `rui_inputFontFamily `
 - `rui_inputFontSize `
 - `rui_inputLineHeight `
 - `rui_inputVerticalPadding `
 - `rui_inputHorizontalPadding `
 - `rui_iconTop `
 - `rui_iconRight `

Textarea Styles
 - `rui_textareaHeight`
 - `rui_textareaLineHeight `
 - `rui_textareaIconPadding `
 - `rui_textareaIconRight `
 - `rui_textareaIconTop `

Input Icon Styles
 - `rui_inputIconColor_default`
 - `rui_inputIconColor_disabled`
 - `rui_inputIconColor_error`
 - `rui_inputIconColor_success`
 - `rui_inputIconTextPadding`