### Overview

Checkboxes can be checked, unchecked and disabled.

```jsx
<div>
  <Checkbox name="example-checked" label="Checked" value={true} />
  <Checkbox name="example-unchecked" label="Unchecked" />
  <Checkbox name="example-disabled" label="Disabled" isReadOnly />
  <div style={{width: 300}}>
    <Checkbox name="example-disabled" label="This one demonstrates what happens when a really long label wraps" />
  </div>
</div>
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

|Property     |Style                         |
|-------------|:----------------------------:|
|Cursor       |Pointer                       |
|Height       |`140% of label font size`     |
|Width        |`140% of label font size`     |
|Border       |`2px @cool-grey-500`          |
|Border radius|`2px @cool-grey-500`          |

##### Checkbox check

The checkbox's check icon an `::after` pseudoelement on `<input>`, with a `content` set to FontAwesome's [check](https://fontawesome.com/icons/check?style=solid) as an SVG.

|Property     |Style                       |
|-------------|:--------------------------:|
|Color        |`@cool-grey-500`            |
|Icon size    |`87.5% of label font size`  |
|Top          |`25% of label font size`    |
|Left         |`30% of label font size`    |

##### Label

|Property     |Style                     |
|-------------|:------------------------:|
|Cursor       |Pointer                   |
|Font size    |`@rui-label-text`         |
|Line height  |`140% of label font size` |
|Color        |`@cool-grey-500`          |

##### Disabled

|Property      |Style               |
|--------------|:------------------:|
|Cursor        |Not allowed         |
|Checkbox fill |`@black10`          |
|Opacity       |`50%`               |

##### Structure

|Property                   |Spacing                  |
|---------------------------|:-----------------------:|
|Between checkbox and label |`220% of label font size`|
|Vertical                   |`17px`                   |