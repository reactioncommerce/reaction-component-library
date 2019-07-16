### Overview

The `PaymentsCheckoutAction` component is a checkout action component responsible for collecting payment information for one or more payments during a checkout flow. It will also render an [AddressChoice](./#!/AddressChoice) component to collect a billing address for any payment methods that require it.

Typically you will use this component with the [CheckoutActions](./#!/CheckoutActions) component rather than directly rendering it.

Note that this component allows collecting information for multiple payments but does not keep its own payments state. Each time a payment is submitted, it will be passed to `onSubmit` and the parent should save it somewhere in state and add that payment to the `payments` prop array. It's also best if the parent sums the amounts of those payments, subtracts that from the total due, and passes the result in the `remainingAmountDue` prop. The `amount` of any payment passed to `onSubmit` will be capped at this value.

### Usage

#### Basic Incomplete State

```jsx
import StripePaymentInput from "../../StripePaymentInput/v1/StripePaymentInput";
import ExampleIOUPaymentForm from "../../ExampleIOUPaymentForm/v1/ExampleIOUPaymentForm";
const paymentMethods = [
  {
    displayName: "Credit Card",
    InputComponent: StripePaymentInput,
    name: "stripe_card",
    shouldCollectBillingAddress: true
  },
  {
    displayName: "IOU",
    InputComponent: ExampleIOUPaymentForm,
    name: "iou_example",
    shouldCollectBillingAddress: true
  }
];

<PaymentsCheckoutAction
  label="Payment Information"
  paymentMethods={paymentMethods}
  status="incomplete"
  stepNumber={3}
/>
```

#### Basic Incomplete State While Saving

```jsx
import StripePaymentInput from "../../StripePaymentInput/v1/StripePaymentInput";
import ExampleIOUPaymentForm from "../../ExampleIOUPaymentForm/v1/ExampleIOUPaymentForm";
const paymentMethods = [
  {
    displayName: "Credit Card",
    InputComponent: StripePaymentInput,
    name: "stripe_card",
    shouldCollectBillingAddress: true
  },
  {
    displayName: "IOU",
    InputComponent: ExampleIOUPaymentForm,
    name: "iou_example",
    shouldCollectBillingAddress: true
  }
];

<PaymentsCheckoutAction
  isSaving
  label="Payment Information"
  paymentMethods={paymentMethods}
  status="incomplete"
  stepNumber={3}
/>
```

#### Incomplete State With Alert

```jsx
import StripePaymentInput from "../../StripePaymentInput/v1/StripePaymentInput";
import ExampleIOUPaymentForm from "../../ExampleIOUPaymentForm/v1/ExampleIOUPaymentForm";
const paymentMethods = [
  {
    displayName: "Credit Card",
    InputComponent: StripePaymentInput,
    name: "stripe_card",
    shouldCollectBillingAddress: true
  },
  {
    displayName: "IOU",
    InputComponent: ExampleIOUPaymentForm,
    name: "iou_example",
    shouldCollectBillingAddress: true
  }
];

const alert = {
  alertType: "error",
  title: "The payment information you entered may be incorrect.",
  message: "Please review our error."
};

<PaymentsCheckoutAction
  alert={alert}
  label="Payment Information"
  paymentMethods={paymentMethods}
  status="incomplete"
  stepNumber={3}
/>
```

#### Incomplete State With Addresses

```jsx
import StripePaymentInput from "../../StripePaymentInput/v1/StripePaymentInput";
import ExampleIOUPaymentForm from "../../ExampleIOUPaymentForm/v1/ExampleIOUPaymentForm";
const paymentMethods = [
  {
    displayName: "Credit Card",
    InputComponent: StripePaymentInput,
    name: "stripe_card",
    shouldCollectBillingAddress: true
  },
  {
    displayName: "IOU",
    InputComponent: ExampleIOUPaymentForm,
    name: "iou_example",
    shouldCollectBillingAddress: true
  }
];

const addresses = [
  {
    _id: "20",
    address1: "7742 Hwy 23",
    address2: "",
    country: "US",
    city: "Belle Chasse",
    fullName: "Salvos Seafood",
    postal: "70037",
    region: "LA",
    phone: "(504) 393-7303"
  },
  {
    _id: "21",
    address1: "35 Akin Adesola St",
    address2: "",
    country: "NG",
    city: "Lagos",
    fullName: "Ocean Basket Victoria Island",
    postal: "101241",
    region: "Victoria Island",
    phone: "234 816 059 1821"
  }
];

<PaymentsCheckoutAction
  addresses={addresses}
  label="Payment Information"
  paymentMethods={paymentMethods}
  status="incomplete"
  stepNumber={3}
/>
```

#### Incomplete State With Addresses and Alert

```jsx
import StripePaymentInput from "../../StripePaymentInput/v1/StripePaymentInput";
import ExampleIOUPaymentForm from "../../ExampleIOUPaymentForm/v1/ExampleIOUPaymentForm";
const paymentMethods = [
  {
    displayName: "Credit Card",
    InputComponent: StripePaymentInput,
    name: "stripe_card",
    shouldCollectBillingAddress: true
  },
  {
    displayName: "IOU",
    InputComponent: ExampleIOUPaymentForm,
    name: "iou_example",
    shouldCollectBillingAddress: true
  }
];

const addresses = [
  {
    _id: "20",
    address1: "7742 Hwy 23",
    address2: "",
    country: "US",
    city: "Belle Chasse",
    fullName: "Salvos Seafood",
    postal: "70037",
    region: "LA",
    phone: "(504) 393-7303"
  },
  {
    _id: "21",
    address1: "35 Akin Adesola St",
    address2: "",
    country: "NG",
    city: "Lagos",
    fullName: "Ocean Basket Victoria Island",
    postal: "101241",
    region: "Victoria Island",
    phone: "234 816 059 1821"
  }
];

const alert = {
  alertType: "error",
  title: "The payment information you entered may be incorrect.",
  message: "Please review our error."
};

<PaymentsCheckoutAction
  addresses={addresses}
  alert={alert}
  label="Payment Information"
  paymentMethods={paymentMethods}
  status="incomplete"
  stepNumber={3}
/>
```

#### Incomplete State With Partial Payment

```jsx
import StripePaymentInput from "../../StripePaymentInput/v1/StripePaymentInput";
import ExampleIOUPaymentForm from "../../ExampleIOUPaymentForm/v1/ExampleIOUPaymentForm";
const paymentMethods = [
  {
    displayName: "Credit Card",
    InputComponent: StripePaymentInput,
    name: "stripe_card",
    shouldCollectBillingAddress: true
  },
  {
    displayName: "IOU",
    InputComponent: ExampleIOUPaymentForm,
    name: "iou_example",
    shouldCollectBillingAddress: true
  }
];

const addresses = [
  {
    _id: "20",
    address1: "7742 Hwy 23",
    address2: "",
    country: "US",
    city: "Belle Chasse",
    fullName: "Salvos Seafood",
    postal: "70037",
    region: "LA",
    phone: "(504) 393-7303"
  },
  {
    _id: "21",
    address1: "35 Akin Adesola St",
    address2: "",
    country: "NG",
    city: "Lagos",
    fullName: "Ocean Basket Victoria Island",
    postal: "101241",
    region: "Victoria Island",
    phone: "234 816 059 1821"
  }
];

const payments = [
  {
    displayName: "IOU from Fats Domino",
    payment: {
      amount: 15,
      data: {
        fullName: "Fats Domino"
      },
      method: "iou_example"
    }
  }
];

<PaymentsCheckoutAction
  addresses={addresses}
  label="Payment Information"
  paymentMethods={paymentMethods}
  payments={payments}
  status="incomplete"
  stepNumber={3}
/>
```

#### Completed State

```jsx
const payments = [
  {
    displayName: "Gift card",
    payment: {
      amount: 50,
      data: {
        cardNumber: "ABC123"
      },
      method: "gift_card"
    }
  },
  {
    displayName: "Visa ending in 7777",
    payment: {
      amount: null,
      data: {
        stripeTokenId: "ABC123"
      },
      method: "stripe_card"
    }
  }
];

PaymentsCheckoutAction.renderComplete({ payments });
```

#### Full Example

For a full example of this action in context, see [CheckoutActions](./#!/CheckoutActions).

### Theme

See [Theming Components](./#!/Theming%20Components).

#### Typography

- The label text uses `subheadingTextBold` style with `rui_components.PaymentsCheckoutActionTitle` override
- The completed state text uses `bodyText` style with `rui_components.PaymentsCheckoutActionComplete` override
