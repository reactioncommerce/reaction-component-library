### Overview
Renders the current users ("viewer") name, email address, profile image (provided by gravatar), and an optional link to edit this information.

#### Usage
```jsx
const viewer = {
  firstName: "John",
  lastName: "Doe",
  name: "John Doe",
  primaryEmailAddress: "john@doe.com",
  profileImage: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y"
};

<AccountProfileInfo viewer={viewer} />
```

**With edit link**
```jsx
const viewer = {
  editable: true,
  firstName: "John",
  lastName: "Doe",
  name: "John Doe",
  primaryEmailAddress: "john@doe.com",
  profileImage: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y"
};

<AccountProfileInfo editable={true} viewer={viewer} />
```
