### Overview

Buttons are used to enable a user to take an action. Buttons should clearly and simply communicate the action that will happen when they are pressed.

### Usage

There are four types of buttons you can choose from, and which one you choose should be based on which type of action it causes.

1. **Solid button**: The solid button is used for a primary action in a modal, card, large view and generally throughout.
1. **Outline button**: The outline button is used for a secondary or dismissive action. The outline button should be paired with the solid button in cases such as dismissing a modal or canceling an action.
1. **Danger button**: The danger button is used for a destructive action that is difficult to recover from such as deleting information. The danger button should be used at the point that the destructive action actually takes place. For example, you can have a delete button as a secondary action on a page and in this case you would use a an outline button, the outline button would then trigger a modal confirmation, which is where you would use the danger button.
1. **Important button**: The important button is used when there needs to be particular importance put on an action or in a view where there are multiple actions and more emphasis needs to be drawn to specific or most common action in a view.

```jsx noeditor
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Default" className="myBtn">Default</Button>
  </div>
    <div style={{ marginRight: "1rem" }}>
    <Button title="Secondary" className="myBtn" actionType="secondary">Outline</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Danger" className="myBtn" actionType="danger">Danger</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Important" className="myBtn" actionType="important">Important</Button>
  </div>
</div>
```

And there are a couple possible variations:

- **Short**: Any of these button types can be rendered with less height using the "short" variant.
- **Text-only**: The default button can be rendered as text only (similar to a link) by using the "text" style variant. Use this in rare cases where having a solid or outline button for an action would be cluttered and visually confusing.
- **Text-only, no padding**: This expands on the text-only version of the button, and removes the left and right padding to create a more inline look, when needed.
- **Waiting**: This disables clicks and shows a spinner to the right of the button content when `isWaiting` is set to `true`.

```jsx noeditor
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Default" className="myBtn" isShortHeight>Default Short</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Default" className="myBtn" isTextOnly>Default Text-Only</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Default" className="myBtn" isTextOnly isTextOnlyNoPadding>Default Text-Only No Padding</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button actionType="default" isWaiting={true}>Default Waiting</Button>
  </div>
</div>
```

#### Types and variations

##### Default Solid Button

The solid button is used for a primary action in a modal, card, large view and generally throughout. The solid button is the most common button and should be your first choice.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Default" className="myBtn">Default</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Default" className="myBtn" isDisabled>Default Disabled</Button>
  </div>
</div>
```

##### Short Variant

Same as the regular solid button but when you don’t have enough vertical height, such as in table headers.

To get a short button, use `isShortHeight` on your solid button.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Default" className="myBtn" isShortHeight>Default Short</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Default" className="myBtn" isShortHeight isDisabled>Default Short Disabled</Button>
  </div>
</div>
```

##### Text Variant

The text button is used in rare cases where having a solid or outline button for an action would be cluttered and visually confusing.

To get a text button, use `isTextOnly` on your solid button.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Default" className="myBtn" isTextOnly>Default Text</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Default" className="myBtn" isTextOnly isDisabled>Default Text Disabled</Button>
  </div>
</div>
```

##### Short Text Variant

Combines `isTextOnly` with `isShortHeight`

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Default" className="myBtn" isTextOnly isShortHeight>Default Short Text</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Default" className="myBtn" isTextOnly isShortHeight isDisabled>Default Short Text Disabled</Button>
  </div>
</div>
```

##### Secondary Button

The outline button style is used for a secondary or dismissive action. The outline button should be paired with the solid button in cases such as dismissing a modal or canceling an action.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Secondary" className="myBtn" actionType="secondary">Secondary</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Secondary" className="myBtn" actionType="secondary" isDisabled>Secondary Disabled</Button>
  </div>
</div>
```

##### Short Variant

Same as the regular outline button but when you don’t have enough room such as actions taken in table headers.

To get a short button, use `isShortHeight` on your outline button.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Secondary" className="myBtn" actionType="secondary" isShortHeight>Secondary Short</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Secondary" className="myBtn" actionType="secondary" isShortHeight isDisabled>Secondary Short Disabled</Button>
  </div>
</div>
```

##### Important Button

The important button is used when there needs to be particular importance put on an action or in a view where there are multiple actions and more emphasis needs to be drawn to specific or most common action in a view.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Important" className="myBtn" actionType="important">Important</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Important" className="myBtn" actionType="important" isDisabled>Important Disabled</Button>
  </div>
</div>
```

##### Short Variant

Same as the regular important button but when you don’t have enough room such as actions taken in table headers.

To get a short button, use `isShortHeight` on your important button.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Important" className="myBtn" actionType="important" isShortHeight>Important Short</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Important" className="myBtn" actionType="important" isShortHeight isDisabled>Important Short Disabled</Button>
  </div>
</div>
```

##### Danger Button

The danger button is used for a destructive action that is difficult to recover from such as deleting information. The danger button should be used at the point that the destructive action actually takes place. For example, you can have a delete button as a secondary action on a page and in this case you would use a an outline button, the outline button would then trigger a modal confirmation, which is where you would use the danger button.  If a danger button is used to initiate a destructive action it should always trigger a confirmation modal.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Danger" className="myBtn" actionType="danger">Danger</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Danger" className="myBtn" actionType="danger" isDisabled>Danger Disabled</Button>
  </div>
</div>
```

##### Short Variant

Same as the regular danger button but when you don’t have enough room such as actions taken in table headers.

To get a short button, use `isShortHeight` on your danger button.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Danger" className="myBtn" actionType="danger" isShortHeight>Danger Short</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Danger" className="myBtn" actionType="danger" isShortHeight isDisabled>Danger Short Disabled</Button>
  </div>
</div>
```

##### Secondary Danger Button

The danger button is used for a destructive action that is difficult to recover from such as deleting information. The danger button should be used at the point that the destructive action actually takes place. For example, you can have a delete button as a secondary action on a page and in this case you would use a an outline button, the outline button would then trigger a modal confirmation, which is where you would use the danger button.  If a danger button is used to initiate a destructive action it should always trigger a confirmation modal.

In some cases, such as an administration screen with multiple actions, you might want to place more emphasis on a destructive action. In these situations, you can use a secondary outline button but with danger coloring.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Danger" className="myBtn" actionType="secondaryDanger">Secondary Danger</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Danger" className="myBtn" actionType="secondaryDanger" isDisabled>Secondary Danger Disabled</Button>
  </div>
</div>
```

##### Short Variant

Same as the regular secondary danger button but when you don’t have enough room such as actions taken in table headers.

To get a short button, use `isShortHeight` on your secondary danger outline button.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Danger" className="myBtn" actionType="secondaryDanger" isShortHeight>Secondary Danger Short</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Danger" className="myBtn" actionType="secondaryDanger" isShortHeight isDisabled>Secondary Danger Short Disabled</Button>
  </div>
</div>
```

##### Waiting Button

Any button style can have a "waiting" style added to it by passing `isWaiting` prop as `true`. This will also disable clicks and show a spinner to the right of the button content.

The spinner is used to provide inline feedback to the user that information is being submitted, after they have clicked an action button.

The spinner can be used with both normal width buttons and full width buttons. The spinner and animation persists for the amount of time that the button's action is occurring.

In most cases, the button spinner should not be used in conjunction with a page or container spinner overlay.

```jsx
initialState = { isWaiting: false }
const onClick = () => { setState({ isWaiting: true }); setTimeout(() => { setState({ isWaiting: false }); }, 3000); }
;<div>
  <p>Click to see waiting state for 3 seconds</p>
  <div style={{ display: "flex" }}>
    <div style={{ marginRight: "1rem" }}>
      <Button actionType="default" isWaiting={state.isWaiting} onClick={onClick}>Submit</Button>
    </div>
    <div style={{ marginRight: "1rem" }}>
      <Button actionType="secondary" isWaiting={state.isWaiting} onClick={onClick}>Submit</Button>
    </div>
    <div style={{ marginRight: "1rem" }}>
      <Button actionType="important" isWaiting={state.isWaiting} onClick={onClick}>Submit</Button>
    </div>
    <div style={{ marginRight: "1rem" }}>
      <Button actionType="danger" isWaiting={state.isWaiting} onClick={onClick}>Submit</Button>
    </div>
    <div style={{ marginRight: "1rem" }}>
      <Button actionType="secondaryDanger" isWaiting={state.isWaiting} onClick={onClick}>Submit</Button>
    </div>
    <div style={{ marginRight: "1rem" }}>
      <Button isTextOnly isWaiting={state.isWaiting} onClick={onClick}>Submit</Button>
    </div>
  </div>
  <div style={{ display: "flex", marginTop: 20 }}>
    <div style={{ marginRight: "1rem" }}>
      <Button actionType="default" isShortHeight isWaiting={state.isWaiting} onClick={onClick}>Submit</Button>
    </div>
    <div style={{ marginRight: "1rem" }}>
      <Button actionType="secondary" isShortHeight isWaiting={state.isWaiting} onClick={onClick}>Submit</Button>
    </div>
    <div style={{ marginRight: "1rem" }}>
      <Button actionType="important" isShortHeight isWaiting={state.isWaiting} onClick={onClick}>Submit</Button>
    </div>
    <div style={{ marginRight: "1rem" }}>
      <Button actionType="danger" isShortHeight isWaiting={state.isWaiting} onClick={onClick}>Submit</Button>
    </div>
    <div style={{ marginRight: "1rem" }}>
      <Button actionType="secondaryDanger" isShortHeight isWaiting={state.isWaiting} onClick={onClick}>Submit</Button>
    </div>
    <div style={{ marginRight: "1rem" }}>
      <Button isShortHeight isTextOnly isWaiting={state.isWaiting} onClick={onClick}>Submit</Button>
    </div>
  </div>
</div>
```

##### Full Width Button

To make any button take up the full width of its container, add `isFullWidth` prop.

```jsx
const divStyles = {
  borderColor: "#888888",
  borderStyle: "solid",
  borderWidth: 1,
  display: "flex",
  flexDirection: "column",
  height: 180,
  justifyContent: "space-around",
  marginLeft: "auto",
  marginRight: "auto",
  padding: 10,
  width: 500
};

<div style={divStyles}>
  <Button className="myBtn" isFullWidth>Full Width Default</Button>
  <Button className="myBtn" isFullWidth isShortHeight>Full Width Default Short</Button>
  <Button className="myBtn" isFullWidth isWaiting={state.isWaiting} onClick={() => { setState({ isWaiting: true }); setTimeout(() => { setState({ isWaiting: false }); }, 3000); }}>Click to See Waiting</Button>
</div>
```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop                                        | Default             | Description                                                                                                                                                                |
| ------------------------------------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Button.backgroundColor_danger`                   | red                 | Background color of a button with `actionType="danger"`                                                                                                                    |
| `Button.backgroundColor_danger_active`            | red400              | Background color of a button with `actionType="danger"` when active                                                                                                        |
| `Button.backgroundColor_danger_disabled`          | coolGrey200         | Background color of a button with `actionType="danger"` when disabled                                                                                                      |
| `Button.backgroundColor_danger_hover`             | redHover            | Background color of a button with `actionType="danger"` when hovered                                                                                                       |
| `Button.backgroundColor_default`                  | coolGrey            | Background color of a button with `actionType="default"`                                                                                                                   |
| `Button.backgroundColor_default_active`           | coolGreyActive      | Background color of a button with `actionType="default"` when active                                                                                                       |
| `Button.backgroundColor_default_disabled`         | coolGrey200         | Background color of a button with `actionType="default"` when disabled                                                                                                     |
| `Button.backgroundColor_default_hover`            | coolGreyHover       | Background color of a button with `actionType="default"` when hovered                                                                                                      |
| `Button.backgroundColor_important`                | reactionBlue        | Background color of a button with `actionType="important"`                                                                                                                 |
| `Button.backgroundColor_important_active`         | reactionBlueActive  | Background color of a button with `actionType="important"` when active                                                                                                     |
| `Button.backgroundColor_important_disabled`       | coolGrey200         | Background color of a button with `actionType="important"` when disabled                                                                                                   |
| `Button.backgroundColor_important_hover`          | reactionBlueHover   | Background color of a button with `actionType="important"` when hovered                                                                                                    |
| `Button.backgroundColor_secondary`                | transparent         | Background color of a button with `actionType="secondary"`                                                                                                                 |
| `Button.backgroundColor_secondary_active`         | coolGreyActiveLight | Background color of a button with `actionType="secondary"` when active                                                                                                     |
| `Button.backgroundColor_secondary_disabled`       | coolGrey200         | Background color of a button with `actionType="secondary"` when disabled                                                                                                   |
| `Button.backgroundColor_secondary_hover`          | coolGreyHoverLight  | Background color of a button with `actionType="secondary"` when hovered                                                                                                    |
| `Button.backgroundColor_secondaryDanger`          | transparent         | Background color of a button with `actionType="secondaryDanger"`                                                                                                           |
| `Button.backgroundColor_secondaryDanger_active`   | red400              | Background color of a button with `actionType="secondaryDanger"` when active                                                                                               |
| `Button.backgroundColor_secondaryDanger_disabled` | coolGrey200         | Background color of a button with `actionType="secondaryDanger"` when disabled                                                                                             |
| `Button.backgroundColor_secondaryDanger_hover`    | redHover            | Background color of a button with `actionType="secondaryDanger"` when hovered                                                                                              |
| `Button.backgroundColor_textOnly`                 | transparent         | Background color of a button with `isTextOnly`                                                                                                                             |
| `Button.backgroundColor_textOnly_active`          | lightBlueGrey       | Background color of a button with `isTextOnly` when active                                                                                                                 |
| `Button.backgroundColor_textOnly_disabled`        | transparent         | Background color of a button with `isTextOnly` when disabled                                                                                                               |
| `Button.backgroundColor_textOnly_hover`           | paleGrey            | Background color of a button with `isTextOnly` when hovered                                                                                                                |
| `Button.borderColor_danger`                       | red                 | Border color of a button with `actionType="danger"`                                                                                                                        |
| `Button.borderColor_danger_active`                | red400              | Border color of a button with `actionType="danger"` when active                                                                                                            |
| `Button.borderColor_danger_disabled`              | coolGrey200         | Border color of a button with `actionType="danger"` when disabled                                                                                                          |
| `Button.borderColor_danger_hover`                 | redHover            | Border color of a button with `actionType="danger"` when hovered                                                                                                           |
| `Button.borderColor_default`                      | coolGrey            | Border color of a button with `actionType="default"`                                                                                                                       |
| `Button.borderColor_default_active`               | coolGreyActive      | Border color of a button with `actionType="default"` when active                                                                                                           |
| `Button.borderColor_default_disabled`             | coolGrey200         | Border color of a button with `actionType="default"` when disabled                                                                                                         |
| `Button.borderColor_default_hover`                | coolGreyHover       | Border color of a button with `actionType="default"` when hovered                                                                                                          |
| `Button.borderColor_important`                    | reactionBlue        | Border color of a button with `actionType="important"`                                                                                                                     |
| `Button.borderColor_important_active`             | reactionBlueActive  | Border color of a button with `actionType="important"` when active                                                                                                         |
| `Button.borderColor_important_disabled`           | coolGrey200         | Border color of a button with `actionType="important"` when disabled                                                                                                       |
| `Button.borderColor_important_hover`              | reactionBlueHover   | Border color of a button with `actionType="important"` when hovered                                                                                                        |
| `Button.borderColor_secondary`                    | coolGrey            | Border color of a button with `actionType="secondary"`                                                                                                                     |
| `Button.borderColor_secondary_active`             | coolGrey            | Border color of a button with `actionType="secondary"` when active                                                                                                         |
| `Button.borderColor_secondary_disabled`           | coolGrey200         | Border color of a button with `actionType="secondary"` when disabled                                                                                                       |
| `Button.borderColor_secondary_hover`              | coolGrey            | Border color of a button with `actionType="secondary"` when hovered                                                                                                        |
| `Button.borderColor_secondaryDanger`              | red                 | Border color of a button with `actionType="secondaryDanger"`                                                                                                               |
| `Button.borderColor_secondaryDanger_active`       | red400              | Border color of a button with `actionType="secondaryDanger"` when active                                                                                                   |
| `Button.borderColor_secondaryDanger_disabled`     | coolGrey200         | Border color of a button with `actionType="secondaryDanger"` when disabled                                                                                                 |
| `Button.borderColor_secondaryDanger_hover`        | redHover            | Border color of a button with `actionType="secondaryDanger"` when hovered                                                                                                  |
| `Button.borderColor_textOnly`                     | transparent         | Border color of a button with `isTextOnly`                                                                                                                                 |
| `Button.borderColor_textOnly_active`              | lightBlueGrey       | Border color of a button with `isTextOnly` when active                                                                                                                     |
| `Button.borderColor_textOnly_disabled`            | transparent         | Border color of a button with `isTextOnly` when disabled                                                                                                                   |
| `Button.borderColor_textOnly_hover`               | paleGrey            | Border color of a button with `isTextOnly` when hovered                                                                                                                    |
| `Button.borderRadius`                             | 2px                 | Border radius for all corners                                                                                                                                              |
| `Button.foregroundColor_danger`                   | white               | Foreground color of a button with `actionType="danger"`                                                                                                                    |
| `Button.foregroundColor_danger_active`            | white               | Foreground color of a button with `actionType="danger"` when active                                                                                                        |
| `Button.foregroundColor_danger_disabled`          | white               | Foreground color of a button with `actionType="danger"` when disabled                                                                                                      |
| `Button.foregroundColor_danger_hover`             | white               | Foreground color of a button with `actionType="danger"` when hovered                                                                                                       |
| `Button.foregroundColor_default`                  | white               | Foreground color of a button with `actionType="default"`                                                                                                                   |
| `Button.foregroundColor_default_active`           | white               | Foreground color of a button with `actionType="default"` when active                                                                                                       |
| `Button.foregroundColor_default_disabled`         | white               | Foreground color of a button with `actionType="default"` when disabled                                                                                                     |
| `Button.foregroundColor_default_hover`            | white               | Foreground color of a button with `actionType="default"` when hovered                                                                                                      |
| `Button.foregroundColor_important`                | white               | Foreground color of a button with `actionType="important"`                                                                                                                 |
| `Button.foregroundColor_important_active`         | white               | Foreground color of a button with `actionType="important"` when active                                                                                                     |
| `Button.foregroundColor_important_disabled`       | white               | Foreground color of a button with `actionType="important"` when disabled                                                                                                   |
| `Button.foregroundColor_important_hover`          | white               | Foreground color of a button with `actionType="important"` when hovered                                                                                                    |
| `Button.foregroundColor_secondary`                | coolGrey500         | Foreground color of a button with `actionType="secondary"`                                                                                                                 |
| `Button.foregroundColor_secondary_active`         | coolGrey500         | Foreground color of a button with `actionType="secondary"` when active                                                                                                     |
| `Button.foregroundColor_secondary_disabled`       | white               | Foreground color of a button with `actionType="secondary"` when disabled                                                                                                   |
| `Button.foregroundColor_secondary_hover`          | coolGrey500         | Foreground color of a button with `actionType="secondary"` when hovered                                                                                                    |
| `Button.foregroundColor_secondaryDanger`          | red                 | Foreground color of a button with `actionType="secondaryDanger"`                                                                                                           |
| `Button.foregroundColor_secondaryDanger_active`   | white               | Foreground color of a button with `actionType="secondaryDanger"` when active                                                                                               |
| `Button.foregroundColor_secondaryDanger_disabled` | white               | Foreground color of a button with `actionType="secondaryDanger"` when disabled                                                                                             |
| `Button.foregroundColor_secondaryDanger_hover`    | white               | Foreground color of a button with `actionType="secondaryDanger"` when hovered                                                                                              |
| `Button.foregroundColor_textOnly`                 | coolGrey400         | Foreground color of a button with `isTextOnly`                                                                                                                             |
| `Button.foregroundColor_textOnly_active`          | coolGrey400         | Foreground color of a button with `isTextOnly` when active                                                                                                                 |
| `Button.foregroundColor_textOnly_disabled`        | coolGrey200         | Foreground color of a button with `isTextOnly` when disabled                                                                                                               |
| `Button.foregroundColor_textOnly_hover`           | coolGrey400         | Foreground color of a button with `isTextOnly` when hovered                                                                                                                |
| `Button.horizontalPadding`                        | 20px                | Padding between the left edge of button content and the left border of the button, and between the right edge of button content and the right border of the button         |
| `Button.minimumWidth`                             | 100px               | The minimum width a button will be, even if its content is smaller, when it is not a full width button. This may result in increased horizontal padding for short content. |
| `Button.verticalPadding`                          | 10px                | Padding between the top of button content and the top border of the button, and between the bottom of button content and the bottom border of the button                   |
| `Button.verticalPaddingShort`                     | 5px                 | Same as `verticalPadding`, but for when `isShortHeight`                                                                                                                    |
