### Overview

#### Usage
This form is intended to be used to integrate [react-stripe-elements](https://github.com/stripe/react-stripe-elements) into a store front project. The hosting project will need to wrap the main app component with the [StripeProvider](https://github.com/stripe/react-stripe-elements#the-stripe-context-stripeprovider) and provide an api key. If Server Side Rendering is implemented in the host project, consult Server Side Rendering integration details [here](https://github.com/stripe/react-stripe-elements#server-side-rendering-ssr). 

In the hosting project it will be necessary to obtain a reference to the `stripe` object used to tokenize collected payment information, i.e. credit card number. This can be accomplished by passing a callback to the `stripeRef` prop as seen below:
```jsx static
class MyComponent extends Component {
  handlePayment = () => {
    this._stripe.createToken().then(({ token }) => { console.log("token", token); });
  }

  render () {
    return (
      <div>
        <StripeForm stripeRef={(stripe) => this._stripe = stripe } />
      </div>
    )
  }
}
```

```jsx
<StripeForm isComplete={() => false} />
```
