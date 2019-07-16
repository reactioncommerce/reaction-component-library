### Overview

The `FulfillmentOptionsCheckoutAction` component is a checkout action component responsible for presenting a list of available fulfillment options (e.g., shipping methods) during a checkout flow. It will render a [SelectableList](./#!/AddressChoice) of the provided options.

Typically you will use this component with the [CheckoutActions](./#!/CheckoutActions) component rather than directly rendering it.

### Usage

- The cheapest fulfillment option will be selected by default

#### Show fulfillment options

```jsx
import Button from "../../Button/v1/Button";
const fulfillmentGroup = {
  availableFulfillmentOptions: [
    {
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
    }, {
      fulfillmentMethod: {
        _id: "444",
        name: "Overnight",
        displayName: "Overnight Expedited"
      },
      price: {
        amount: 24.99,
        displayAmount: "$24.99"
      }
    }
  ]
};

class FulfillmentExample extends React.Component {
  constructor(props) {
    super(props);
    this._fulfillmentForm;
    this.bindForm.bind(this);
  }

  bindForm(formEl) {
    if (formEl) {
      this._fulfillmentForm = formEl;
    }
  }

  render() {
    return (
      <div>
        <FulfillmentOptionsCheckoutAction
          ref={(formEl) => { this.bindForm(formEl) }}
          onSubmit={({ selectedFulfillmentOption }) => console.log("Selected fulfillment option:", selectedFulfillmentOption)}
          stepNumber={2}
          label="Choose a shipping method"
          fulfillmentGroup={fulfillmentGroup}
        />
        <Button onClick={() => this._fulfillmentForm.submit()}>Submit</Button>
      </div>
    );
  }
}

<FulfillmentExample />
```

#### With Alert
```jsx
const fulfillmentGroup = {
  availableFulfillmentOptions: [
    {
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
    }, {
      fulfillmentMethod: {
        _id: "444",
        name: "Overnight",
        displayName: "Overnight Expedited"
      },
      price: {
        amount: 24.99,
        displayAmount: "$24.99"
      }
    }
  ]
};

const alert = {
  alertType: "information",
  title: "Shipping Restrictions",
  message: "Please review our shipping restrictions."
};


<FulfillmentOptionsCheckoutAction
  alert={alert}
  label="Choose a shipping method"
  fulfillmentGroup={fulfillmentGroup}
  status="incomplete"
  stepNumber={2}
/>
```

#### Render complete

```jsx
const data = {
  fulfillmentGroup: {
    selectedFulfillmentOption: {
      fulfillmentMethod: {
        _id: "222",
        name: "Priority",
        displayName: "Priority (3-5 Days)"
      },
      price: {
        amount: 5.99,
        displayAmount: "$5.99"
      }
    }
  }
};

const action = FulfillmentOptionsCheckoutAction;

action.renderComplete(data);
```

### Theme

See [Theming Components](./#!/Theming%20Components).

#### Typography

- The label text uses `subheadingTextBold` style with `rui_components.FulfillmentOptionsCheckoutActionTitle` override
- The selected option text uses `bodyText` style with `rui_components.FulfillmentOptionsCheckoutActionSelectedOption` override
- The empty message text uses `bodyText` style with `rui_components.FulfillmentOptionsCheckoutActionEmptyMessage` override
