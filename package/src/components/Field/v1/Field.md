### Overview

Fields can be required, with more than one line, and have help text and labels.

```jsx
<div>
  <Field name="example" label="Label" helpText="Help text" labelFor="input1">
    <TextInput id="input1" name="example" placeholder="This field has help text" />
  </Field>
  <Field name="example" label="Label" helpText="Help text" labelFor="input2">
    <TextInput id="input2" name="example" placeholder="This field has help text" shouldAllowLineBreaks />
  </Field>
</div>
```

#### Usage

##### Optional Field
```jsx
<Field name="example" label="Label" labelFor="input3" isOptional>
  <TextInput id="input3" name="example" placeholder="This field has help text" />
</Field>
```
