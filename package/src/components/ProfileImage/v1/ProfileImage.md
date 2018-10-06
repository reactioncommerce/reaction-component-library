### Overview
Renders the viewers profile image, if provided. Renders the viewers initials if no image is provided.

#### Usage
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

**With initials**
```jsx
const viewer = {
  firstName: "John",
  lastName: "Doe",
  name: "John Doe",
  primaryEmailAddress: "john@doe.com"
};

<ProfileImage viewer={viewer} />

```

**With custom sizes**
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
