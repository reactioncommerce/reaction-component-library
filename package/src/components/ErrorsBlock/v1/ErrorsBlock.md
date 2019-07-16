### Overview

The `ErrorsBlock` is used to provide helpful information to the user when a form is invalid. The block takes an array of errors that are displayed with an optional icon.

```jsx
import Field from "../../Field/v1/Field";
import TextInput from "../../TextInput/v1/TextInput";
const TwoColumnExamples = require("../../../../../styleguide/src/components/TwoColumnExamples").default;

const errors = [{ name: "example", message: "This field is required" }];

<TwoColumnExamples hasDarkRightBackground>
    <Field name="example" label="Label" labelFor="exampleInput1" errors={errors}>
        <TextInput id="exampleInput1" name="example" errors={errors} placeholder="I'm a single-line input."/>
        <ErrorsBlock names={["example"]} errors={errors} />
    </Field>
    <Field name="example" label="Label" labelFor="exampleInput2" errors={errors}>
        <TextInput id="exampleInput2" name="example" errors={errors} placeholder="I'm a multi-line input with a dark background." shouldAllowLineBreaks />
        <ErrorsBlock names={["example"]} errors={errors} shouldShowIcon />
    </Field>
</TwoColumnExamples>
```

### Usage

Use `ErrorsBlock` components with form fields and pass in an array of errors to display error messages.

#### With icon

Pass `shouldShowIcon` to show an icon before each error message.

```jsx
import Field from "../../Field/v1/Field";
import TextInput from "../../TextInput/v1/TextInput";
const errors = [{ name: "example", message: "This field is required" }, { name: "example", message: "Another error" }];
<Field name="example" label="Label" labelFor="exampleInput3" errors={errors}>
 <TextInput id="exampleInput3" name="example" errors={errors} shouldAllowLineBreaks />
 <ErrorsBlock names={["example"]} errors={errors} shouldShowIcon />
</Field>
```

### Specs

#### Text

The error text is set to red.

|Property        |Variable                  | Default theme style  |
|----------------|--------------------------|:--------------------:|
|Text color      |`errorsBlockColor`        |`#cd3f4c`             |
|Spacing above   |`errorsBlockSpacingAbove` |10px                  |
|Spacing below   |`errorsBlockSpacingBelow` |10px                  |

#### Icon

The error icon is from FontAwesome's [exclamation-triangle](https://fontawesome.com/icons/exclamation-triangle?style=solid) as an SVG.

|Property     |Variable               | Default theme style       |
|-------------|-----------------------|:-------------------------:|
|Icon spacing to label  |`errorsBlockIconSpacingToLabel`|5px                |
|Icon color   |`errorsBlockIconColor` |`#cd3f4c`                  |

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop                                         | Default | Description                                                                             |
| -------------------------------------------------- | ------- | --------------------------------------------------------------------------------------- |
| `iconColor` | red | Color of the error icon |
| `iconSpacingToLabel` | 5px | Spacing between the icon and the label |
| `spacingAbove` | 10px | Spacing above the component |
| `spacingBelow` | 10px | Spacing below the component |

#### Typography

- The error text uses `labelText` style with `rui_components.ErrorsBlock` override
