### Overview
Renders a user's first name next to their initials.

#### Usage
```jsx
<ViewerInfo />
```

#### With Viewer
```jsx
const viewer = {
  firstName: "Issac",
  lastName: "Newton"
};

<ViewerInfo viewer={viewer} />
```

**Long Name**
```jsx
const viewer = {
  firstName: "Madhavaditya",
  lastName: "Balakrishnan"
};

<ViewerInfo viewer={viewer} />
```

**Hypenated Name**
```jsx
const viewer = {
  firstName: "Keeanga-Yamahtta",
  lastName: "Taylor"
};

<ViewerInfo viewer={viewer} />
```

**Incomplete Name**
```jsx
const viewer = {
  firstName: "Olamide"
};

<ViewerInfo viewer={viewer} />
```

#### Full
```jsx
const viewer = {
  firstName: "Ligaya",
  lastName: "Ocampo"
};

<ViewerInfo viewer={viewer} full />
```

#### Compact
```jsx
const viewer = {
  firstName: "Patricia",
  lastName: "Smith"
};

<ViewerInfo viewer={viewer} compact />
```
