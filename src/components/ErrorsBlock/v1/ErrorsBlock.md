### ErrorsBlock Overview

```jsx
const errors = [{ name: "example", message: "This field is required" }];
<Field name="example" label="Label" errors={errors}>
 <TextInput name="example" errors={errors} />
 <ErrorsBlock names={["example"]} errors={errors} />
</Field>
```

```jsx
const errors = [{ name: "example", message: "This field is required" }, { name: "example", message: "Another error" }];
<Field name="example" label="Label" errors={errors}>
 <TextInput name="example" errors={errors} shouldAllowLineBreaks />
 <ErrorsBlock names={["example"]} errors={errors} shouldShowIcon />
</Field>
```
