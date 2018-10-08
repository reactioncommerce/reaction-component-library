### Overview
Renders a users first name next to their profile image. If no profile image is available, renders the users initials instead.

### Usage
```jsx
const viewer = {
  firstName: "John",
  lastName: "Doe",
  name: "John Doe",
  primaryEmailAddress: "john@doe.com",
  profileImage: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y"
};

<ViewerInfo viewer={viewer} />
```


**No image provided**
```jsx
const viewer = {
  primaryEmailAddress: "issac99@gravity.com",
  firstName: "Issac",
  lastName: "Newton"
};

<ViewerInfo viewer={viewer} />
```

#### Email Address Only
```jsx
const viewer = {
  primaryEmailAddress: "james.booker@ponderosafarms.com"
};

<ViewerInfo viewer={viewer} />
```

#### Long Name
```jsx
const viewer = {
  primaryEmailAddress: "email@domain.in",
  firstName: "Madhavaditya",
  lastName: "Balakrishnan"
};

<ViewerInfo viewer={viewer} />
```

#### Hypenated Name
```jsx
const viewer = {
  primaryEmailAddress: "aas21@princeton.edu",
  firstName: "Keeanga-Yamahtta",
  lastName: "Taylor"
};

<ViewerInfo viewer={viewer} />
```

#### Incomplete Name
```jsx
const viewer = {
  primaryEmailAddress: "baddosneh@ybnl-nation.com",
  firstName: "Olamide"
};

<ViewerInfo viewer={viewer} />
```

### Display Style
The `ViewerInfo` component's default style is to show only the viewers initials on small screen and show both the initials and first name on larger screens. You may however run into situations where you want the initials and first name or only initials to display on all screen sizes. `ViewerInfo` has a `compact` and a `full` prop to achieve either display style, keep in mind that `compact` will override `full` so they can't be used together.

#### Compact
```jsx
const viewer = {
  primaryEmailAddress: "pat@smith.com",
  firstName: "Patricia",
  lastName: "Smith"
};

<ViewerInfo viewer={viewer} compact />
```

#### Full
```jsx
const viewer = {
  primaryEmailAddress: "Ligaya.Ocampo@email.com",
  firstName: "Ligaya",
  lastName: "Ocampo"
};

<ViewerInfo viewer={viewer} full />
```

### Theme

See [Theming Components](./#!/Theming%20Components).

#### Typography

- The text uses `labelText` style with `rui_components.ViewerInfo` override
