### TextInput Overview

#### General Usage
The <code class="rsg-code-36">TextInput</code> component is used for collecting string form values. 
 
#### Component Usage
There are two types of text inputs to choose from.
 - The sinlge line text input for single line form values.
 - The multi line text input for multi line form values.

Text inputs aslo have two styles of inputs.
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

##### Single line, text input.
Default text input used in the majoprity of instances. It can be defined as one of four input types `"text"`, `"email"`, `"password"`,  `"url"`.
```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "0 1 50%", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" />
  </div>
</div>
``` 
###### Input styles
Text input on white and text input on grey or dark backgrounds. The dark brackground style is applyed by adding the `dark` prop to the component. Use `dark` text input when the background is grey or dark. When a grey background is used to create hierarchy and sections a white text field is use. 
```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" dark />
  </div>
</div>
```

###### Input states
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

When a user has clicked or pressed into an input it’s in focused state. 
```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" dark />
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
    <TextInput name="example" placeholder="Hint" value="value" dark />
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
    <TextInput name="example" placeholder="Hint" value="value" hasBeenValidated dark />
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
    <TextInput name="example" placeholder="Hint" value="value" errors={["error"]} dark />
  </div>
</div>
```
Read Only / Disabled

A disabled input is used when an action needs to be taken in before a button can be enabled. A user us unable to input information into a disabled input. Passing the `isReadOnly` prop to enabled read only / disabled state.
```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" value="value" isReadOnly />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" value="value" isReadOnly dark />
  </div>
</div>
```
###### Input Icons
Text inputs have the ability to add a custom icon to the input to give extra content to the input. Text input icons has two available props to customize the input.
 - `icon` The icon node you want to display
 - `onIconClick` Click event handler for icon clicks.
```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" icon={<i className="fa fa-pied-piper" />} onIconClick={(event) => alert("Input Icon Clicked!")} />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" icon={<i className="fa fa-pied-piper" />}  onIconClick={(event) => alert("Input Icon Clicked!")} dark />
  </div>
</div>
```
The default valid, invalid and clear icons can be overwritten by passing values to these props of the text input.
 - `iconClear, iconError, iconSuccess`
 - `iconClearAccessibilityText`

```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" value="Valid" hasBeenValidated iconClear={<i className="fa fa-legal" />} iconSuccess={<i className="fa fa-thumbs-up" />}  />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" value="Invalid" errors={["error"]} iconClear={<i className="fa fa-legal" />} iconError={<i className="fa fa-thumbs-down" />}  dark />
  </div>
</div>
```
All of the icon props will accept a few different nodes to create the input icon.
 - React Component
 - `<i/>` tag used for icon fonts
 - `<svg>` tag for inline svg
 - Plain text
 
Inline SVG icon
```jsx
const svg = <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path d="M9.926 9.105l-2.105-2.105 2.105-2.105-0.82-0.82-2.105 2.105-2.105-2.105-0.82 0.82 2.105 2.105-2.105 2.105 0.82 0.82 2.105-2.105 2.105 2.105zM7 1.176c3.227 0 5.824 2.598 5.824 5.824s-2.598 5.824-5.824 5.824-5.824-2.598-5.824-5.824 2.598-5.824 5.824-5.824z"></path></svg>;
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" icon={svg} />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" icon={svg} dark />
  </div>
</div>
```

#### Multi line text field
```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "0 1 50%", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" allowLineBreaks />
  </div>
</div>
``` 

##### Input Styles
Text input on white and text input on grey or dark backgrounds

```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="multi-line" placeholder="Hint" allowLineBreaks />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="multi-line" placeholder="Hint" dark allowLineBreaks />
  </div>
</div>
```
##### Input States
Idle Unfilled / Focused Unfilled
```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" allowLineBreaks />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" allowLineBreaks dark />
  </div>
</div>
```
Idle Filled / Focused Filled
```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" allowLineBreaks value="value" />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" allowLineBreaks value="value" dark />
  </div>
</div>
```
Valid
```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" allowLineBreaks value="value" hasBeenValidated />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" allowLineBreaks value="value" hasBeenValidated dark />
  </div>
</div>
```
Invalid
```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" allowLineBreaks value="value" errors={["error"]} />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" allowLineBreaks value="value" errors={["error"]} dark />
  </div>
</div>
```
Read Only / Disabled
```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" allowLineBreaks value="value" isReadOnly />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" allowLineBreaks value="value" isReadOnly dark />
  </div>
</div>
```
###### Input Icons
Text inputs have the ability to add a custom icon to the input to give extra content to the input.
```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" allowLineBreaks icon={<i className="fa fa-pied-piper" />} />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" allowLineBreaks icon={<i className="fa fa-pied-piper" />} dark />
  </div>
</div>
```
