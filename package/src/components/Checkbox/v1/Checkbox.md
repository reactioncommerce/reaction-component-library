## Types

Checkboxes can be checked, unchecked and disabled.

### Checked and unchecked

```jsx
<Field name="example">
  <Checkbox name="example" label="Snow leopards" />
  <Checkbox name="example" label="Bears" />
</Field>
```

### Disabled

```jsx
<Field name="example">
  <Checkbox name="example" label="Turtles (disabled)" isReadOnly />
</Field>
```

## Specs and usage

### Usage

- Checkboxes should be used when more than one option can be enabled. Generally, checkboxes should be used when there are 3 or more options that can be selected in a row.

- *Labels:* Checkboxes and their labels should be left-aligned in forms.

- *Labels:* All labels should be written in sentence caps.

### Specs

- Label font - @rui-label-text, capitalized
- Color - @cool-grey-500
- Checkbox height and width - @base-unit(2)
- Checkbox border - 2px  @cool-grey-500
- Checkbox border radius - 2px
- Checkbox and label spacing - @base-unit(1) Check icon - fa-check, 0.875rem, @cool-grey-500
- Vertical spacing - @base-unit(2)
- Disabled checkbox fill - @black10
- Disabled checkbox and label opacity - 50%
- Cursor - pointer (checkbox and label)