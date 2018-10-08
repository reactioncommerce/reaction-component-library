### Overview
Renders the viewers profile image, if provided. Renders the viewers initials if no image is provided.

### Usage
```jsx
const viewer = {
  firstName: "John",
  lastName: "Doe",
  name: "John Doe",
  primaryEmailAddress: "john@doe.com",
  profileImage: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y"
};

<ProfileImage viewer={viewer} />
```

#### With initials
```jsx
const viewer = {
  firstName: "John",
  lastName: "Doe",
  name: "John Doe",
  primaryEmailAddress: "john@doe.com"
};

<ProfileImage viewer={viewer} />
```

#### With custom sizes
```jsx
const viewer = {
  firstName: "John",
  lastName: "Doe",
  name: "John Doe",
  primaryEmailAddress: "john@doe.com"
};

<ProfileImage size={100} viewer={viewer} />
```

```jsx
const viewer = {
  firstName: "John",
  lastName: "Doe",
  name: "John Doe",
  primaryEmailAddress: "john@doe.com"
};

<ProfileImage size={30} viewer={viewer} />
```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop                                         | Default | Description                                                                             |
| -------------------------------------------------- | ------- | --------------------------------------------------------------------------------------- |
| `ProfileImage.backgroundColor` | teal | The background color of the image circle, generally only seen when there is no image |

#### Typography

- The initials text shown when there is no image uses `labelText` style with `rui_components.ProfileImageInitials` override
