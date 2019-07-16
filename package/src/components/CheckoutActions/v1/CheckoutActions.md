### Overview
The `CheckoutActions` component is responsible for:
  * Displaying each `CheckoutAction` and managing its status: complete, incomplete, active
  * Providing each  `CheckoutAction` with any data it may need from the `cart` object.
  * Capturing/Editing of `CheckoutAction` data.
  * Rendering captured `CheckoutAction` data in a `CheckoutActionComplete` component.

### Usage
`CheckoutActions` takes an array of `actions`, each `action` needs a `label` and a checkout action component that will be responsible to capturing a piece of checkout data as well as a `props` object to include the piece of `cart.checkout` data the action needs to display and a `onSubmit` function that needs to be called during action submission.

**Example of Actions array**
```js static
const actions = [
  {
    id: "1",
    activeLabel: "Enter a shipping address",
    completeLabel: "Shipping address",
    incompleteLabel: "Shipping address",
    status: "incomplete",
    component: ShippingAddressCheckoutAction,
    onSubmit: setShippingAddress
    props: {
      fulfillmentGroup: cart.checkout.fulfillmentGroups[0]
    }
  },
  {
    id: "2",
    activeLabel: "Choose a shipping method",
    completeLabel: "Shipping method",
    incompleteLabel: "Shipping method",
    status: "incomplete",
    component: FulfillmentOptionsCheckoutAction,
    onSubmit: this.setFulfillmentOption
    props: {
      availableFulfillmentGroups: cart.checkout.fulfillmentGroups[0]
    }
  },
  {
    id: "3",
    activeLabel: "Enter payment information",
    completeLabel: "Payment information",
    incompleteLabel: "Payment information",
    status: remainingAmountDue === 0 && !actionAlerts["3"] ? "complete" : "incomplete",
    component: PaymentsCheckoutAction,
    onSubmit: this.handlePaymentSubmit,
    props: {
      addresses,
      alert: actionAlerts["3"],
      onReset: this.handlePaymentsReset,
      payments,
      paymentMethods,
      remainingAmountDue
    }
  },
  {
    id: "4",
    activeLabel: "Review and place order",
    completeLabel: "Review and place order",
    incompleteLabel: "Review and place order",
    status: "incomplete",
    component: FinalReviewCheckoutAction,
    onSubmit: placeOrder,
    props: {
      checkoutSummary
    }
  }
];

```

*Address postal codes that start with "11" will pass validation, all others will fail.*
*Address postal codes that start with "10" will fail validation with 0 suggested addresses.*
```jsx
import StripePaymentInput from "../../StripePaymentInput/v1/StripePaymentInput";
import ExampleIOUPaymentForm from "../../ExampleIOUPaymentForm/v1/ExampleIOUPaymentForm";
import ShippingAddressCheckoutAction from "../../ShippingAddressCheckoutAction/v1/ShippingAddressCheckoutAction";
import FulfillmentOptionsCheckoutAction from "../../FulfillmentOptionsCheckoutAction/v1/FulfillmentOptionsCheckoutAction";
import PaymentsCheckoutAction from "../../PaymentsCheckoutAction/v1/PaymentsCheckoutAction";
import FinalReviewCheckoutAction from "../../FinalReviewCheckoutAction/v1/FinalReviewCheckoutAction";
const fulfillmentGroups = [{
  _id: 1,
  type: "shipping",
  data: {
    shippingAddress: null
  },
  availableFulfillmentOptions: [{
    fulfillmentMethod: {
      _id: "111",
      name: "Standard",
      displayName: "Standard (5-9 Days)"
    },
    price: {
      amount: 0,
      displayAmount: "Free"
    }
  },
  {
    fulfillmentMethod: {
      _id: "222",
      name: "Priority",
      displayName: "Priority (3-5 Days)"
    },
    price: {
      amount: 5.99,
      displayAmount: "$5.99"
    }
  },
  {
    fulfillmentMethod: {
      _id: "333",
      name: "Express",
      displayName: "Express 2 Day"
    },
    price: {
      amount: 12.99,
      displayAmount: "$12.99"
    }
  },
  {
    fulfillmentMethod: {
      _id: "444",
      name: "Overnight",
      displayName: "Overnight Expedited"
    },
    price: {
      amount: 24.99,
      displayAmount: "$24.99"
    }
  }]
}];

const checkoutSummary = {
  displayShipping: "$5.25",
  displaySubtotal: "$118.00",
  displayTotal: "$135.58",
  displayTax: "$12.33",
  items: [{
    _id: "123",
    attributes: [{ label: "Color", value: "Red" }, { label: "Size", value: "Medium" }],
    compareAtPrice: {
      displayAmount: "$45.00"
    },
    currentQuantity: 3,
    imageURLs: {
      small: "//placehold.it/150",
      thumbnail: "//placehold.it/100"
    },
    isLowQuantity: true,
    price: {
      displayAmount: "$20.00"
    },
    productSlug: "product-slug",
    productVendor: "Patagonia",
    title: "A Great Product",
    quantity: 2
  },
  {
    _id: "456",
    attributes: [{ label: "Color", value: "Black" }, { label: "Size", value: "10" }],
    currentQuantity: 500,
    imageURLs: {
      small: "//placehold.it/150",
      thumbnail: "//placehold.it/100"
    },
    isLowQuantity: false,
    price: {
      displayAmount: "$78.00"
    },
    productSlug: "product-slug",
    productVendor: "Patagonia",
    title: "Another Great Product",
    quantity: 1
  }]
};

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

class CheckoutActionsExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      addressValidationResults: null,
      actionAlerts: {
        1: null,
        2: null,
        3: null,
        4: null
      },
      checkout: {
        fulfillmentGroups
      },
      payments: []
    };

    this.validateShippingAddress = this.validateShippingAddress.bind(this);
    this.setShippingAddress = this.setShippingAddress.bind(this);
    this.setFulfillmentOption = this.setFulfillmentOption.bind(this);
    this.handlePaymentSubmit = this.handlePaymentSubmit.bind(this);
    this.handlePaymentsReset = this.handlePaymentsReset.bind(this);
  }

  getFulfillmentOptionStatus() {
    const fulfillmentGroupWithoutSelectedOption = this.state.checkout.fulfillmentGroups[0].selectedFulfillmentOption

    return (fulfillmentGroupWithoutSelectedOption) ? "complete" : "incomplete";
  }

  getShippingStatus() {
    const groupWithoutAddress = this.state.checkout.fulfillmentGroups.find((group) => {
      const shippingGroup = group.type === "shipping";
      return shippingGroup && !group.data.shippingAddress;
    });

    return (groupWithoutAddress) ? "incomplete" : "complete";
  }

  validateShippingAddress(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.setState((state, props) => {
            const { actionAlerts, checkout } = state;
            actionAlerts["1"] = {
              alertType: "warning",
              title: "The address you entered may be incorrect or incomplete.",
              message: "Please review your entered address below. Possible errors are shown in red."
            };

            return {
              addressValidationResults: {
                submittedAddress: data,
                  suggestedAddresses: data.postal[0] === "1" ? [] : [{
                  ...data,
                  address1: "Corrected " + data.address1,
                  postal: "90210",
                  isValid: true
                }],
                validationErrors: data.postal[1] === "1" ? [] : [actionAlerts]
              },
              actionAlerts,
              checkout
            };
          });
        resolve(data);
        }, 1000, { data });
    });
  }

  setShippingAddress(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.setState((state, props) => {
          const { actionAlerts, checkout } = state;
          actionAlerts["1"] = null;
          return {
            actionAlerts,
            addressValidationResults: null,
            checkout: {
              fulfillmentGroups: [{
                data: {
                  shippingAddress: data,
                },
                selectedFulfillmentOption: checkout.fulfillmentGroups[0].selectedFulfillmentOption,
                availableFulfillmentOptions: checkout.fulfillmentGroups[0].availableFulfillmentOptions
              }]
            }
          }
        });
        resolve(data);
      }, 1000, { data });
    });
  }

  setFulfillmentOption(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.setState((state, props) => {
          const { checkout } = state;
          return {
            checkout: {
              fulfillmentGroups: [{
                data: {
                  shippingAddress: checkout.fulfillmentGroups[0].data.shippingAddress
                },
                selectedFulfillmentOption: data.selectedFulfillmentOption,
                availableFulfillmentOptions: checkout.fulfillmentGroups[0].availableFulfillmentOptions
              }]
            }
          };
        });
        resolve(data);
      }, 1000, { data });
    });
  }

  handlePaymentSubmit(paymentInput) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.setState({
          payments: [...this.state.payments, paymentInput]
        });
        resolve();
      }, 1000);
    });
  };

  handlePaymentsReset() {
    this.setState({
      payments: []
    });
  }

  placeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true);
        }, 2000);
    });
  }

  render() {
    const { actionAlerts, addressValidationResults, checkout, payments } = this.state;

    const remainingAmountDue = payments.reduce((val, { payment }) => val - (payment.amount || val), 105.75);

    const addresses = checkout.fulfillmentGroups && checkout.fulfillmentGroups[0] && [checkout.fulfillmentGroups[0].data.shippingAddress];

    const actions = [
      {
        id: "1",
        activeLabel: "Enter a shipping address",
        completeLabel: "Shipping address",
        incompleteLabel: "Shipping address",
        status: this.getShippingStatus(),
        component: ShippingAddressCheckoutAction,
        onSubmit: this.setShippingAddress,
        props:  {
          addressValidationResults,
          fulfillmentGroup: checkout.fulfillmentGroups[0],
          onAddressValidation: this.validateShippingAddress,
          alert: actionAlerts["1"]
        }
      },
      {
        id: "2",
        activeLabel: "Choose a shipping method",
        completeLabel: "Shipping method",
        incompleteLabel: "Shipping method",
        status: this.getFulfillmentOptionStatus(),
        component: FulfillmentOptionsCheckoutAction,
        onSubmit: this.setFulfillmentOption,
        readyForSave: true,
        props:  {
          fulfillmentGroup: checkout.fulfillmentGroups[0],
          alert: actionAlerts["2"]
        }
      },
      {
        id: "3",
        activeLabel: "Enter payment information",
        completeLabel: "Payment information",
        incompleteLabel: "Payment information",
        status: remainingAmountDue === 0 && !actionAlerts["3"] ? "complete" : "incomplete",
        component: PaymentsCheckoutAction,
        onSubmit: this.handlePaymentSubmit,
        props: {
          addresses,
          alert: actionAlerts["3"],
          onReset: this.handlePaymentsReset,
          payments,
          paymentMethods,
          remainingAmountDue
        }
      },
      {
        id: "4",
        activeLabel: "Review and place order",
        completeLabel: "Review and place order",
        incompleteLabel: "Review and place order",
        status: "incomplete",
        component: FinalReviewCheckoutAction,
        onSubmit: this.placeOrder,
        props: {
          checkoutSummary,
          alert: actionAlerts["4"]
        }
      }
    ];

    return (
      <CheckoutActions actions={actions} />
    )
  }
}
;<CheckoutActionsExample />
```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop                                         | Default | Description                                                                             |
| -------------------------------------------------- | ------- | --------------------------------------------------------------------------------------- |
| `borderBetweenColor` | black10 | Horizontal border color |
| `borderBetweenWidth` | 1px | Horizontal border width |
| `borderLeftColor` | black10 | Left border color |
| `borderLeftWidth` | 0 | Left border width |
| `borderRightColor` | black10 | Right border color |
| `borderRightWidth` | 0 | Right border width |
| `itemPaddingBottom` | 16px | Bottom padding for each item |
| `itemPaddingLeft` | 0 | Left padding for each item |
| `itemPaddingRight` | 0 | Right padding for each item |
| `itemPaddingTop` | 16px | Top padding for each item |
| `placeOrderButtonWidth` | 252px | Width of the place order button |
| `spaceAbovePlaceOrderButton` | 16px | Space above the place order button |
| `spaceBetweenActiveActionButtons` | 16px | Space between action buttons for the active action |
