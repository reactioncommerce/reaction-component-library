### Overview
This checkout action is responsible for rendering the [StripeForm](/#!/StripeForm) component used to collect payment information. It is also capable of rendering a form to collect billing address information if the user chooses to use a new billing address.

#### Basic Usage

```jsx
const isReady = (ready) => true;

<StripePaymentCheckoutAction 
  label="Payment Information" 
  status="incomplete"
  onReadyForSaveChange={isReady} 
  stepNumber={3} 
/>

```

#### Completed state

```jsx
const paymentInformation = {
  payment: {
    data: {
      billingAddress: null,
      displayName: "Visa ending in 7777"
    }
  }
}

const action = StripePaymentCheckoutAction

action.renderComplete(paymentInformation)

```
