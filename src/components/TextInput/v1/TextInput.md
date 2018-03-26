### TextInput Overview

#### General Usage
There are two types of text inputs to choose from.
 - The sinlge line text input for single line form values.
 - The multi line text input for multi line form values.
 
#### Component Usage
The <code class="rsg-code-36">TextInput</code> component can render in two possible appearances, as a input or as a textarea. Adding the prop `allowLineBreaks` will make the TextInput render as a textarea.

- TODO: defaultTheme settings

##### Single line, text input.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "0 1 50%", padding: "1rem" }}>
    <TextInput name="single-line" placeholder="Hint" hasBeenValidated />
  </div>
</div>
``` 
