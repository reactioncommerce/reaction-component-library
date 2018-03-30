### TextInput Overview

#### General Usage
The `TextInput` component is used for collecting string form values. 
 
#### Component Usage
There are two types of text inputs to choose from.
 - The single line text input for single line form values.
 - The multi line text input for multi line form values.

Text inputs also have two styles of inputs.
 - The default input style to be used on light backgrounds.
 - The dark input style to be used on dark backgrounds.

##### Default Theme
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
 - `rui_inputIconBackgroundColor`
 - `rui_inputIconColor_default`
 - `rui_inputIconColor_disabled`
 - `rui_inputIconColor_error`
 - `rui_inputIconColor_success`
 - `rui_inputIconFontSize`
 - `rui_inputIconPadding`
 - `rui_inputIconRight`
 - `rui_inputIconTop`
 - `rui_inputIconTextPadding`

#### Single line, text input.
Default text input used in the majoprity of instances. It can be defined as one of four input types `"text"`, `"email"`, `"password"`,  `"url"`.
```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "0 1 50%", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" />
  </div>
</div>
```

#### Multi line text input
To enable the multi line text input pass the `shouldAllowLineBreaks` prop.
```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "0 1 50%", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks />
  </div>
</div>
``` 

#### Input styles
Text input on white and text input on grey or dark backgrounds. The dark brackground style is applyed by adding the `isOnDarkBackground` prop to the component. Use `dark` text input when the background is grey or dark. When a grey background is used to create hierarchy and sections a white text field is use. 
```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" isOnDarkBackground />
  </div>
</div>
```

```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="multi-line" placeholder="Hint" shouldAllowLineBreaks />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="multi-line" placeholder="Hint" isOnDarkBackground shouldAllowLineBreaks />
  </div>
</div>
```

#### Input states
Text input's have 8 basic states.
 - Idle unfilled
 - Idle filled
 - Focused unfilled
 - Focused filled
 - Saved<sup>*</sup> *not yet implamented*
 - Valid
 - Invalid
 - Read Only / Disabled

Idle Unfilled / Focused Unfilled

When a user has clicked, pressed or tabed into an input, it’s in focused state. 
```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" isOnDarkBackground />
  </div>
</div>
```

```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks isOnDarkBackground />
  </div>
</div>
```

Idle Filled / Focused Filled

When a field has been filled in by the user, and has been unfocused it shows idle and filled in. When a user has filled in a text input and clicked back into the text field it is shown as focused and has an icon button that allows the user to quickly clear the whole field and edit it from scratch.
```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" value="value" />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" value="value" isOnDarkBackground />
  </div>
</div>
```

```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks value="value" />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks value="value" isOnDarkBackground />
  </div>
</div>
```

Valid

When information is required and/or needs to be formatted in a specific way the text input should be validated. When it’s successful the field shows a success state. Passing the `hasBeenValidated` prop to the input will enabled the valid state.
```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" value="value" hasBeenValidated />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" value="value" hasBeenValidated isOnDarkBackground />
  </div>
</div>
```

```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks value="value" hasBeenValidated />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks value="value" hasBeenValidated isOnDarkBackground />
  </div>
</div>
```

Invalid

When information is required and/or needs to be formatted in a specific way the text input should be validated. When a input can’t be validated the input is highlighted with error styling. Passing an `errors` array to the input to enabled the invalid state.
```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" value="value" errors={["error"]} />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" value="value" errors={["error"]} isOnDarkBackground />
  </div>
</div>
```

```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks value="value" errors={["error"]} />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks value="value" errors={["error"]} isOnDarkBackground />
  </div>
</div>
```

Read Only / Disabled

A disabled input is used when an action needs to be taken before the input can be enabled. A user is unable to input information into a disabled input. Pass the `isReadOnly` prop to enabled read only / disabled state.
```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" value="value" isReadOnly />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" value="value" isReadOnly isOnDarkBackground />
  </div>
</div>
```
```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks value="value" isReadOnly />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks value="value" isReadOnly isOnDarkBackground />
  </div>
</div>
```

#### Input Icons
You can add a custom icon to the right side of any text input and optionally provide a click handler for it. Use these two props:
 - `icon` The icon node you want to display
 - `onIconClick` Click event handler for icon clicks.
```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" icon={<i className="fab fa-pied-piper" />} onIconClick={(event) => alert("Input Icon Clicked!")} />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" icon={<i className="fab fa-pied-piper" />}  onIconClick={(event) => alert("Input Icon Clicked!")} isOnDarkBackground />
  </div>
</div>
```

```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks icon={<i className="fab fa-pied-piper" />} />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" shouldAllowLineBreaks icon={<i className="fab fa-pied-piper" />} isOnDarkBackground />
  </div>
</div>
```

The default valid, invalid and clear icons can be overwritten by passing values to these props of the text input.
 - `iconClear, iconError, iconSuccess`
 - `iconClearAccessibilityText`

```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" value="Valid" hasBeenValidated iconClear={<i className="fas fa-gavel" />} iconValid={<i className="fa fa-thumbs-up" />}  />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" value="Invalid" errors={["error"]} iconClear={<i className="fas fa-gavel" />} iconError={<i className="fa fa-thumbs-down" />}  isOnDarkBackground />
  </div>
</div>
```
All of the icon props will accept a few different types of nodes to create the input icon.
 - React Component
 - `<i/>` tag used for icon fonts
 - `<svg>` tag for inline SVG
 - Plain text
 
Inline SVG icon
```jsx
const svg = <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path d="M9.926 9.105l-2.105-2.105 2.105-2.105-0.82-0.82-2.105 2.105-2.105-2.105-0.82 0.82 2.105 2.105-2.105 2.105 0.82 0.82 2.105-2.105 2.105 2.105zM7 1.176c3.227 0 5.824 2.598 5.824 5.824s-2.598 5.824-5.824 5.824-5.824-2.598-5.824-5.824 2.598-5.824 5.824-5.824z"></path></svg>;
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" icon={svg} />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" icon={svg} isOnDarkBackground />
  </div>
</div>
```
