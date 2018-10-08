### Overview
Renders the viewer's name, email address, profile image (via the [ProfileImage](/#!/ProfileImage) component), and an optional link to edit this information.

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

**With initials (when profileImage is null)**
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
  firstName: "John",
  lastName: "Doe",
  name: "John Doe",
  primaryEmailAddress: "john@doe.com",
  profileImage: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y"
};

const onClick = () => { console.log("Edit Account button click") };

<AccountProfileInfo onClickEdit={onClick} shouldShowEditButton={true} viewer={viewer} />
```
