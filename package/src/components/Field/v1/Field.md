### Overview

Fields can be required, with more than one line, and have help text and labels.

```jsx
<div>
  <Field name="example" label="Label" helpText="Help text">
    <TextInput name="example" placeholder="This field has help text" />
  </Field>
  <Field name="example" label="Label" helpText="Help text">
    <TextInput name="example" placeholder="This field has help text" shouldAllowLineBreaks />
  </Field>
</div>
```

#### Usage
