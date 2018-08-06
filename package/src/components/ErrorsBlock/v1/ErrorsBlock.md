### Overview

The `ErrorsBlock` is used to provide helpful information to the user when a form is invalid. The block takes an array of errors that are displayed with an optional icon.

```jsx
const TwoColumnExamples = require("../../../../../styleguide/src/components/TwoColumnExamples").default;

const errors = [{ name: "example", message: "This field is required" }];

<TwoColumnExamples hasDarkRightBackground>
    <Field name="example" label="Label" errors={errors}>
        <TextInput name="example" errors={errors} placeholder="I'm a single-line input."/>
        <ErrorsBlock names={["example"]} errors={errors} />
    </Field>
    <Field name="example" label="Label" errors={errors}>
        <TextInput name="example" errors={errors} placeholder="I'm a multi-line input with a dark background." shouldAllowLineBreaks />
        <ErrorsBlock names={["example"]} errors={errors} shouldShowIcon />
    </Field>
</TwoColumnExamples>
```

#### Usage

Use `ErrorsBlock` components with form fields and pass in an array of errors to display error messages.

##### With icon

Pass `shouldShowIcon` to show an icon before each error message.

```jsx
const errors = [{ name: "example", message: "This field is required" }, { name: "example", message: "Another error" }];
<Field name="example" label="Label" errors={errors}>
 <TextInput name="example" errors={errors} shouldAllowLineBreaks />
 <ErrorsBlock names={["example"]} errors={errors} shouldShowIcon />
</Field>
```

#### Specs

##### Text

The error text is set to red.

|Property     |Variable               | Default theme style       |
|-------------|-----------------------|:-------------------------:|
|Text color   |`errorsBlockColor`     |`@cd3f4c`                  |
|Text size    |`errorsBlockFontSize`  |14                         |
|Block margin |`errorsBlockMargin`    |`${baseUnit(1)} 0`         |

##### Icon

The error icon is from FontAwesome's [exclamation-triangle](https://fontawesome.com/icons/exclamation-triangle?style=solid) as an SVG.

|Property     |Variable               | Default theme style       |
|-------------|-----------------------|:-------------------------:|
|Icon margin  |`errorsBlockIconMargin`|`0 ${baseUnit(0.5)} 0 00 ` |
|Icon color   |`errorsBlockIconColor` |`#cd3f4c`                  |