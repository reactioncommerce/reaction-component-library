### Buttons Overview

Buttons are used to enable a user to take an action. Buttons should clearly and simply communicate the action that will happen when they are pressed.

#### General Usage

There are four types of buttons you can choose from, and which one you choose should be based on which type of action it causes.

- The solid button is used for a primary action in a modal, card, large view and generally throughout.
- The outline button is used for a secondary or dismissive action. The outline button should be paired with the solid button in cases such as dismissing a modal or canceling an action.
- The danger button is used for a destructive action that is difficult to recover from such as deleting information. The danger button should be used at the point that the destructive action actually takes place. For example, you can have a delete button as a secondary action on a page and in this case you would use a an outline button, the outline button would then trigger a modal confirmation, which is where you would use the danger button.
- The important button is used when there needs to be particular importance put on an action or in a view where there are multiple actions and more emphasis needs to be drawn to specific or most common action in a view.

And there are a couple possible variations:

- Any of these button types can be rendered with less height using the "short" variant.
- The default button can be rendered as text only (similar to a link) by using the "text" style variant. Use this in rare cases where having a solid or outline button for an action would be cluttered and visually confusing.

#### Component Usage

The `Button` component can render with four different possible appearances, which are chosen based on the `actionType` prop value. You should choose the appropriate appearance based on what type of action will happen if you click it.

The actual colors of the appearance are defined by your theme. The examples here use our default theme. The theme properties used by the `Button` component are:

- `rui_buttonBackgroundColor_danger_active`
- `rui_buttonBackgroundColor_danger_hover`
- `rui_buttonBackgroundColor_danger`
- `rui_buttonBackgroundColor_default_active`
- `rui_buttonBackgroundColor_default_hover`
- `rui_buttonBackgroundColor_default`
- `rui_buttonBackgroundColor_disabled`
- `rui_buttonBackgroundColor_important_active`
- `rui_buttonBackgroundColor_important_hover`
- `rui_buttonBackgroundColor_important`
- `rui_buttonBackgroundColor_secondary_active`
- `rui_buttonBackgroundColor_secondary_hover`
- `rui_buttonBackgroundColor_secondary`
- `rui_buttonBackgroundColor_secondaryDanger_active`
- `rui_buttonBackgroundColor_secondaryDanger_hover`
- `rui_buttonBackgroundColor_secondaryDanger`
- `rui_buttonBorderColor_danger_active`
- `rui_buttonBorderColor_danger_hover`
- `rui_buttonBorderColor_danger`
- `rui_buttonBorderColor_default_active`
- `rui_buttonBorderColor_default_hover`
- `rui_buttonBorderColor_default`
- `rui_buttonBorderColor_disabled`
- `rui_buttonBorderColor_important_active`
- `rui_buttonBorderColor_important_hover`
- `rui_buttonBorderColor_important`
- `rui_buttonBorderColor_secondary_active`
- `rui_buttonBorderColor_secondary_hover`
- `rui_buttonBorderColor_secondary`
- `rui_buttonBorderColor_secondaryDanger_active`
- `rui_buttonBorderColor_secondaryDanger_hover`
- `rui_buttonBorderColor_secondaryDanger`
- `rui_buttonBorderRadius`
- `rui_buttonForegroundColor_danger_active`
- `rui_buttonForegroundColor_danger_hover`
- `rui_buttonForegroundColor_danger`
- `rui_buttonForegroundColor_default_active`
- `rui_buttonForegroundColor_default_hover`
- `rui_buttonForegroundColor_default`
- `rui_buttonForegroundColor_disabled`
- `rui_buttonForegroundColor_important_active`
- `rui_buttonForegroundColor_important_hover`
- `rui_buttonForegroundColor_important`
- `rui_buttonForegroundColor_secondary_active`
- `rui_buttonForegroundColor_secondary_hover`
- `rui_buttonForegroundColor_secondary`
- `rui_buttonForegroundColor_secondaryDanger_active`
- `rui_buttonForegroundColor_secondaryDanger_hover`
- `rui_buttonForegroundColor_secondaryDanger`
- `rui_buttonHorizontalPadding`
- `rui_buttonMinimumWidth`
- `rui_buttonTextOnlyColor_default_active`
- `rui_buttonTextOnlyColor_default_hover`
- `rui_buttonTextOnlyColor_default`
- `rui_buttonTextOnlyColor_disabled`
- `rui_buttonVerticalPadding`
- `rui_buttonVerticalPaddingShort`

#### Default Solid Button

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

#### Secondary Button

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

#### Important Button

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

#### Danger Button

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

#### Secondary Danger Button

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

#### Waiting Button

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

#### Full Width Button

To make any button take up the full width of its container, add `fullWidth` prop.

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
  <Button className="myBtn" fullWidth>Full Width Default</Button>
  <Button className="myBtn" isShortHeight fullWidth>Full Width Default Short</Button>
  <Button className="myBtn" isWaiting={state.isWaiting} onClick={() => { setState({ isWaiting: true }); setTimeout(() => { setState({ isWaiting: false }); }, 3000); }}>Click to See Waiting</Button>
</div>
```
