### TextField Overview

#### Single line text field

##### Types
Text field on white and text field on grey or dark backgrounds

```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextField name="single-line" placeholder="Hint" invalid />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextField name="single-line" placeholder="Hint" dark />
  </div>
</div>
```

#### Multi line text field

##### Types
Text field on white and text field on grey or dark backgrounds

```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextField name="multi-line" placeholder="Hint" allowLineBreaks />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextField name="multi-line" placeholder="Hint" dark allowLineBreaks />
  </div>
</div>
```
