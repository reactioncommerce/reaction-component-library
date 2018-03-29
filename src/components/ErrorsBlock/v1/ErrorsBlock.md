### ErrorsBlock Overview

```jsx
const errors = [{ name: "example", message: "This field is required" }];
<Field name="example" label="Label" errors={errors}>
 <TextInput name="example" errors={errors} allowLineBreaks />
 <ErrorsBlock names={["example"]} errors={errors} />
</Field>
```
