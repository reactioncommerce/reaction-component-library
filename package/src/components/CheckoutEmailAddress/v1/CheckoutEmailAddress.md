### CheckoutEmailAddress

### Overview
Displays a customers email address inside the checkout flow

#### Basic usage when user has an account
```jsx
<CheckoutEmailAddress
  emailAddress="account.email@example.com"
  isAccountEmail={true}
/>
```

#### Basic usage as a guest
```jsx
<CheckoutEmailAddress
  emailAddress="guest.email@example.com"
  isAccountEmail={false}
/>
```
