### TextInput Overview

#### General Usage
There are two types of text inputs to choose from.
 - The sinlge line text input for single line form values.
 - The multi line text input for multi line form values.

Text inputs aslo have two styles of inputs.
 - The default input style to be used on light backgrounds.
 - The dark input style to be used on dark backgrounds.
 
#### Component Usage
TODO: The <code class="rsg-code-36">TextInput</code> component usage.

##### Default Theme
- TODO: defaultTheme settings

##### Single line, text input.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "0 1 50%", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" />
  </div>
</div>
``` 
###### Input styles
Text input on white and text input on grey or dark backgrounds. The dark brackground style is applyed by adding the `dark` prop to the component.
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
Text inputs have the ability to add a custom icon to the input to give extra content to the input. Text input icons have three available props to customize the input.
 - `icon` The icon node you want to display
 - `iconAccessibilityText` Text string to give the icon extra context for  assistive technologies.
 - `onIconClick` Click event handler for icon clicks.
```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" icon={<i className="fa fa-pied-piper" />} iconAccessibilityText="Pied Piper" onIconClick={(event) => alert("Input Icon Clicked!")} />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextInput name="example" placeholder="Hint" icon={<i className="fa fa-pied-piper" />} iconAccessibilityText="Pied Piper" onIconClick={(event) => alert("Input Icon Clicked!")} dark />
  </div>
</div>
```
The default valid, invalid and clear icons can be overwritten by passing values to these props of the text input.
 - `iconClear, iconError, iconSuccess`
 - `iconClearAccessibilityText, iconErrorAccessibilityText, iconSuccessAccessibilityText`

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
