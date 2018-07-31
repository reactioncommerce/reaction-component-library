### Overview

Checkboxes can be checked, unchecked and disabled.

```jsx
<div>
  <Checkbox name="example-checked" label="Checked" value={true} />
  <Checkbox name="example-unchecked" label="Unchecked" />
  <Checkbox name="example-disabled" label="Disabled" isReadOnly />
</div>
```

```jsx
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='black' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/></svg>
```

```jsx
<svg xmlns='http://www.w3.org/2000/svg' width='24px' height='24px' fill='black'><path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
```

#### Usage

##### Checkbox

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