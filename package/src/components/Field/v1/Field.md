### Overview

Fields can be required, with more than one line, and have help text and labels.

```jsx
import TextInput from "../../TextInput/v1/TextInput";
<div>
  <Field name="example" label="Label" helpText="Help text" labelFor="input1">
    <TextInput id="input1" name="example" placeholder="This field has help text" />
  </Field>
  <Field name="example" label="Label" helpText="Help text" labelFor="input2">
    <TextInput id="input2" name="example" placeholder="This field has help text" shouldAllowLineBreaks />
  </Field>
</div>
```

### Usage

#### Optional Field
```jsx
import TextInput from "../../TextInput/v1/TextInput";
<Field name="example" label="Label" labelFor="input3" isOptional>
  <TextInput id="input3" name="example" placeholder="This field has help text" />
</Field>
```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop                  | Default | Description                                 |
| --------------------------- | ------- | ------------------------------------------- |
| `Field.spacingAbove`        | 15px    | Space above the component                   |
| `Field.spacingBelow`        | 15px    | Space below the component                   |
| `FieldHelp.spacingToInput`  | 10px    | Space between the input and the help text   |
| `FieldLabel.color_default`  | black55 | Field label color for "default" state       |
| `FieldLabel.color_error`    | red     | Field label color for "error" state         |
| `FieldLabel.color_focus`    | teal    | Field label color for "focus" state         |
| `FieldLabel.color_success`  | black55 | Field label color for "success" state       |
| `FieldLabel.spacingToInput` | 10px    | Space between the input and the field label |

#### Typography

- The field label text uses `labelText` style with `rui_components.FieldLabel` override
- The field help text uses `labelText` style with `rui_components.FieldHelp` override
