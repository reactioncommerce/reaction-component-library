The `Button` component can render with four different possible appearances, which are chosen based on the `actionType` prop value. You should choose the appropriate appearance based on what type of action will happen if you click it.

The actual colors of the appearance are defined by your theme. The examples here use our default theme.

#### Default Button

The default button is the most common button and should be your first choice.

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

#### Secondary Button

For secondary actions or actions that are not required. For example, a Cancel button.

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

#### Important Button

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

#### Danger Button

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

#### Full Width Button

To make any button take up the full width of its container, add `fullWidth` prop.

```jsx
const divStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  height: 100,
  marginLeft: "auto",
  marginRight: "auto",
  width: 500
};

<div style={divStyles}>
  <Button className="myBtn" fullWidth>Full Width Default</Button>
  <Button className="myBtn" actionType="danger" fullWidth>Full Width Danger</Button>
</div>
```
