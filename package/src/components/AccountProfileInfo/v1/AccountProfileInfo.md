### Overview
Renders the current users ("viewer") name, email address, profile image (provided by gravatar), and an optional link to edit this information.

#### Usage
```jsx
const viewer = {
  firstName: "John",
  lastName: "Doe",
  name: "John Doe",
  primaryEmailAddress: "john@doe.com"
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
  primaryEmailAddress: "john@doe.com"
};

<AccountProfileInfo editable={true} viewer={viewer} />
```
