### Buttons Overview

Buttons are used to enable a user to take an action. Buttons should clearly and simply communicate the action that will happen when they are pressed.

#### General Usage

There are four types of buttons you can choose from, and which one you choose should be based on which type of action it causes.

- The solid button is used for a primary action in a modal, card, large view and generally throughout.
- The outline button is used for a secondary or dismissive action. The outline button should be paired with the solid button in cases such as dismissing a modal or canceling an action.
- The danger button is used for a destructive action that is difficult to recover from such as deleting information. The danger button should be used at the point that the destructive action actually takes place. For example, you can have a delete button as a secondary action on a page and in this case you would use a an outline button, the outline button would then trigger a modal confirmation, which is where you would use the danger button.
- The important button is used when there needs to be particular importance put on an action or in a view where there are multiple actions and more emphasis needs to be drawn to specific or most common action in a view.

And there are a couple possible variations:

- Any of these button types can be rendered with less height using the "small" style variant.
- The default button can be rendered as text only (similar to a link) by using the "text" style variant. Use this in rare cases where having a solid or outline button for an action would be cluttered and visually confusing.

#### Component Usage

The `Button` component can render with four different possible appearances, which are chosen based on the `actionType` prop value. You should choose the appropriate appearance based on what type of action will happen if you click it.

The actual colors of the appearance are defined by your theme. The examples here use our default theme. The theme properties used by the `Button` component are:

- `rui_buttonBorderRadius`
- `rui_buttonBorderColor_danger`
- `rui_buttonBorderColor_default`
- `rui_buttonBorderColor_important`
- `rui_buttonBorderColor_secondary`
- `rui_buttonBackgroundColor_danger`
- `rui_buttonBackgroundColor_default`
- `rui_buttonBackgroundColor_important`
- `rui_buttonBackgroundColor_secondary`
- `rui_buttonForegroundColor_danger`
- `rui_buttonForegroundColor_default`
- `rui_buttonForegroundColor_important`
- `rui_buttonForegroundColor_secondary`
- `rui_buttonHorizontalPadding`
- `rui_buttonVerticalPadding`
- `rui_buttonVerticalPaddingSmall`

#### Default Solid Button

The solid button is used for a primary action in a modal, card, large view and generally throughout. The solid button is the most common button and should be your first choice.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Default" className="myBtn">Default</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Default" className="myBtn" disabled>Default Disabled</Button>
  </div>
</div>
```

##### Small Variant

Same as the regular solid button but when you don’t have enough room such as actions taken in table headers.

To get a small button, use `styleVariant="small"` on your solid button.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Default" className="myBtn" styleVariant="small">Default Small</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Default" className="myBtn" styleVariant="small" disabled>Default Small Disabled</Button>
  </div>
</div>
```

##### Text Variant

The text button is used in rare cases where having a solid or outline button for an action would be cluttered and visually confusing.

To get a text button, use `styleVariant="text"` on your solid button.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Default" className="myBtn" styleVariant="text">Default Text</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Default" className="myBtn" styleVariant="text" disabled>Default Text Disabled</Button>
  </div>
</div>
```

#### Secondary Outline Button

The outline button style is used for a secondary or dismissive action. The outline button should be paired with the solid button in cases such as dismissing a modal or canceling an action.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Secondary" className="myBtn" actionType="secondary">Secondary</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Secondary" className="myBtn" actionType="secondary" disabled>Secondary Disabled</Button>
  </div>
</div>
```

##### Small Variant

Same as the regular outline button but when you don’t have enough room such as actions taken in table headers.

To get a small button, use `styleVariant="small"` on your outline button.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Secondary" className="myBtn" actionType="secondary" styleVariant="small">Secondary Small</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Secondary" className="myBtn" actionType="secondary" styleVariant="small" disabled>Secondary Small Disabled</Button>
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
    <Button title="Important" className="myBtn" actionType="important" disabled>Important Disabled</Button>
  </div>
</div>
```

##### Small Variant

Same as the regular important button but when you don’t have enough room such as actions taken in table headers.

To get a small button, use `styleVariant="small"` on your important button.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Important" className="myBtn" actionType="important" styleVariant="small">Important Small</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Important" className="myBtn" actionType="important" styleVariant="small" disabled>Important Small Disabled</Button>
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
    <Button title="Danger" className="myBtn" actionType="danger" disabled>Danger Disabled</Button>
  </div>
</div>
```

##### Small Variant

Same as the regular danger button but when you don’t have enough room such as actions taken in table headers.

To get a small button, use `styleVariant="small"` on your danger button.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Danger" className="myBtn" actionType="danger" styleVariant="small">Danger Small</Button>
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Danger" className="myBtn" actionType="danger" styleVariant="small" disabled>Danger Small Disabled</Button>
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
  height: 100,
  justifyContent: "space-around",
  marginLeft: "auto",
  marginRight: "auto",
  padding: 10,
  width: 500
};

<div style={divStyles}>
  <Button className="myBtn" fullWidth>Full Width Default</Button>
  <Button className="myBtn" styleVariant="small" fullWidth>Full Width Default Small</Button>
</div>
```
