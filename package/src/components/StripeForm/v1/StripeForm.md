### Overview

#### Usage
This form is intended to be used to integrate [react-stripe-elements](https://github.com/stripe/react-stripe-elements) into a store front project. The hosting project will need to wrap the the main app component with the `<StripeProvider>` and provide an api key.

In the hosting project it will be necessary to obtain a reference to the `stripe` object used to tokenize collected payment information, i.e. credit card number. This can be accomplished by passing a callback to the `stripeRef` prop as seen below:
```jsx static
handlePayment = () => {
  this._stripe.createToken().then(({ token }) => { console.log("token", token); });
}

// Inside render function
<StripeForm stripeRef={(stripe) => this._stripe = stripe } />
```

```jsx
<StripeForm />
```
