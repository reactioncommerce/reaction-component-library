Checkboxes can be checked, unchecked and disabled.

```jsx
<Field name="example">
  <Checkbox name="example-checked" label="Checked" value={true} />
  <Checkbox name="example-unchecked" label="Unchecked" />
  <Checkbox name="example-disabled" label="Disabled" isReadOnly />
</Field>
```

#### Usage

###### Checkbox

- Checkboxes should be used when more than one option can be enabled.
- Generally, checkboxes should be used when there are 3 or more options that can be selected in a row.
- Checkboxes should be left-aligned in forms.

##### Label

- All labels should be written in sentence caps.
- Labels should be left-aligned in forms.

#### Specs

##### Checkbox

The checkbox is a styled `::before` pseudoelement on `<input>`. The native `<input>` is hidden with an `opacity` set to `0`.

|Property     |Style               |
|-------------|:------------------:|
|Cursor       |Pointer             |
|Height       |`@base-unit(2)`     |
|Width        |`@base-unit(2)`     |
|Border       |`2px @cool-grey-500`|
|Border radius|`2px @cool-grey-500`|

##### Checkbox check

The checkbox's check icon an `::after` pseudoelement on `<input>`, with a `content` set to FontAwesome's [check](https://fontawesome.com/icons/check?style=solid): <i class="fas fa-check"></i>

|Property     |Style               |
|-------------|:------------------:|
|Color        |`@cool-grey-500`    |
|Font family  |`FontAwesome`       |
|Font size    |`0.875rem`          |
|Content      |`\f00c`             |

##### Label

|Property     |Style               |
|-------------|:------------------:|
|Cursor       |Pointer             |
|Font size    |`@rui-label-text`   |
|Color        |`@cool-grey-500    `|

##### Disabled

|Property      |Style               |
|--------------|:------------------:|
|Cursor        |Not allowed         |
|Checkbox fill |`@black10`          |
|Opacity       |`50%`               |

##### Structure

|Property                   |Spacing        |
|---------------------------|:-------------:|
|Between checkbox and label |`@base-unit(1)`|
|Vertical                   |`@base-unit(2)`|