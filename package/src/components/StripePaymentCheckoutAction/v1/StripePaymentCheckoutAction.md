### Overview

DEPRECATED. Use [PaymentsCheckoutAction](/#!/PaymentsCheckoutAction) with the following payment method config instead:

```js static
const paymentMethods = [
  {
    displayName: "Credit Card",
    InputComponent: StripePaymentInput,
    name: "stripe_card",
    shouldCollectBillingAddress: true
  }
];
```

This checkout action is responsible for rendering the [StripeForm](/#!/StripeForm) component used to collect payment information. It is also capable of rendering a form to collect billing address information if the user chooses to use a new billing address.

### Usage

```jsx
const isReady = (ready) => true;

<StripePaymentCheckoutAction
  label="Payment Information"
  status="incomplete"
  onReadyForSaveChange={isReady}
  stepNumber={3}
  alert={{}}
/>

```

#### With Alert
```jsx
const isReady = (ready) => true;

const alert = {
  alertType: "error",
  title: "The payment information you entered may be incorrect.",
  message: "Please review our error."
};


<StripePaymentCheckoutAction
  alert={alert}
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

### Theme

See [Theming Components](./#!/Theming%20Components).

#### Typography

- The label text uses `subheadingTextBold` style with `rui_components.StripePaymentCheckoutAction` override
- The secure caption text uses `captionText` style with `rui_components.StripePaymentCheckoutAction` override
