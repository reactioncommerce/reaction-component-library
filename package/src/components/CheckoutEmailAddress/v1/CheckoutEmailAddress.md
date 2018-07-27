### Overview
Displays a customers email address inside the checkout flow.

#### Usage

##### Account user

```jsx
<CheckoutEmailAddress
  emailAddress="account.email@example.com"
  isAccountEmail={true}
/>
```

##### Guest user

```jsx
<CheckoutEmailAddress
  emailAddress="guest.email@example.com"
  isAccountEmail={false}
/>
```
