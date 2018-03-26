### TextField Overview

##### Types
Single line, text area.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "0 1 50%", padding: "1rem" }}>
    <TextField name="single-line" value="VALUE" placeholder="Hint" errors={["error"]} />
  </div>
</div>
``` 

#### Single line text field

##### Types
Text field on white and text field on grey or dark backgrounds

```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextField name="single-line" placeholder="Hint" icon={<i className="fa fa-wifi"></i>} />
  </div>
  <div style={{ backgroundColor: "#f5f5f5", flex: "1 1 auto", margin: "0 1rem", padding: "1rem" }}>
    <TextField name="single-line" placeholder="Hint" dark />
  </div>
</div>
```

#### Single line text field states

##### States
Text fields have 8 basic states idle unfilled, focused, active submit, idle and filled in, filled and focused, validated, error, and disabled.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ border: "1px solid #cccccc", flex: "1 1 auto", padding: "1rem" }}>
    <TextField name="single-line" placeholder="Hint" />
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
