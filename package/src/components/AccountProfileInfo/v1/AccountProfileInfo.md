### Overview
Renders the viewer's name, email address, profile image (via the [ProfileImage](/#!/ProfileImage) component), and an optional link to edit this information.

### Usage
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

#### With `firstName` only
```jsx
const viewer = {
  firstName: "John",
  primaryEmailAddress: "john@doe.com",
  profileImage: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y"
};

<AccountProfileInfo viewer={viewer} />
```

#### With initials (when profileImage is null)
```jsx
const viewer = {
  firstName: "John",
  lastName: "Doe",
  name: "John Doe",
  primaryEmailAddress: "john@doe.com"
};

<AccountProfileInfo viewer={viewer} />
```

####With edit link
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

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop                                         | Default | Description                                                                             |
| -------------------------------------------------- | ------- | --------------------------------------------------------------------------------------- |
| `AccountProfileInfo.spacingAfterEmail`             | 4px     | Vertical spacing below the email address                                                |
| `AccountProfileInfo.spacingAfterName`              | 4px     | Vertical spacing below the name                                                         |
| `AccountProfileInfo.spacingBetweenImageAndContent` | 16px    | Horizontal spacing between the right edge of the image and the left edge of the content |

#### Typography

- The email address uses `labelText` style with `rui_components.AccountProfileInfoEmail` override
- The name uses `titleTextBold` style with `rui_components.AccountProfileInfoName` override
