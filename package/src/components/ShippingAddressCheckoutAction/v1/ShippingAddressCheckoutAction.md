### Overview
The `ShippingAddressCheckoutAction` serves 4 purposes:
  * To normalize data input/editing between the `CheckoutActions` component and the `AddressForm` components.
  * To provide `CheckoutActions` with a `renderComplete` method that renders the captured checkout data.
  * To provide `CheckoutActions` a way to know the action is ready for save,
  * To Provide `CheckoutActions` a way to capture the `AddressForm` values.

Typically you will use this component with the [CheckoutActions](./#!/CheckoutActions) component rather than directly rendering it. For a full implementation example see [CheckoutActions](/#!/CheckoutActions).

### Usage

```jsx
const fulfillment = {
  data: {
    shippingAddress: null
  }
};

<ShippingAddressCheckoutAction fulfillmentGroup={fulfillment} label="Shipping Address" stepNumber={1} />
```

#### With Address
```jsx
const fulfillment = {
  data: {
    shippingAddress: {
      address1: "7742 Hwy 23",
      address2: "",
      country: "US",
      city: "Belle Chasse",
      fullName: "Salvos Seafood",
      postal: "70037",
      region: "LA",
      phone: "(504) 393-7303"
    }
  }
};

<ShippingAddressCheckoutAction fulfillmentGroup={fulfillment} label="Shipping Address" stepNumber={1} />
```

#### Without Address
```jsx
const fulfillment = {
  data: {
    shippingAddress: null
  }
};


<ShippingAddressCheckoutAction fulfillmentGroup={fulfillment} label="Shipping Address" stepNumber={1} />
```

#### With Alert
```jsx
const fulfillment = {
  data: {
    shippingAddress: null
  }
};

const alert = {
  alertType: "warning",
  title: "The address you entered may be incorrect or incomplete.",
  message: "Please review our suggestion below, and choose which version you’d like to use. Possible errors are shown in red."
};


<ShippingAddressCheckoutAction alert={alert} fulfillmentGroup={fulfillment} label="Shipping Address" stepNumber={1} />
```

#### With Address Validation Results
```jsx
const fulfillmentGroup = {
  data: {
    shippingAddress: null
  }
};

const alert = {
  alertType: "warning",
  title: "The address you entered may be incorrect or incomplete.",
  message: "Please review our suggestion below, and choose which version you’d like to use. Possible errors are shown in red."
};


const addressValidationResults = {
  submittedAddress: {
    address1: "7742 Hwy 25",
    address2: "",
    country: "US",
    city: "Belle Chasse",
    fullName: "Salvos Seafood",
    postal: "70047",
    region: "LA",
    phone: "(504) 393-7303"
  },
  suggestedAddresses: [{
    address1: "7742 Hwy 23",
    address2: "",
    country: "US",
    city: "Belle Chasse",
    fullName: "Salvos Seafood",
    postal: "70037",
    region: "LA",
    phone: "(504) 393-7303"
  }],
  validationErrors: []
};

const props = {
 fulfillmentGroup,
 alert,
 addressValidationResults,
 label: "Shipping Address",
 stepNumber: 1
};

<ShippingAddressCheckoutAction {...props} />
```

#### Ready For Save
Open the browser terminal and fill out this form to see the `onReadyForSaveChange` callback fire.
```jsx
const fulfillment = {
  data: {
    shippingAddress: null
  }
};


const isReady = (ready) => console.log("is action ready for save?", ready);

<ShippingAddressCheckoutAction fulfillmentGroup={fulfillment} onReadyForSaveChange={isReady} label="Shipping Address" stepNumber={1} />
```

#### Render Complete Method
```jsx
const capturedData = {
  fulfillmentGroup: {
    data: {
     shippingAddress: {
        address1: "7742 Hwy 23",
        address2: "",
        country: "US",
        city: "Belle Chasse",
        fullName: "Salvos Seafood",
        postal: "70037",
        region: "LA",
        phone: "(504) 393-7303"
      }
    }
  }
};
const action = ShippingAddressCheckoutAction;

action.renderComplete(capturedData);

```

### Implementation Examples
A naive exmaple to demonstrate a basic shipping address checkout action UX flow.

**Basic set shipping address**
```jsx
import Button from "../../Button/v1/Button";
initState = {
  isReady: false,
  fulfillmentGroup: {
    data: {
      shippingAddress: null
    }
  }
};

const action = ShippingAddressCheckoutAction;
let _form = null;

const handleSubmit = (value) => new Promise((resolve, reject) => {
  setState({ isProcessing: true });
  setTimeout(async () => {
    setState({
      isProcessing: false,
      fulfillmentGroup: {
        data: {
          shippingAddress: value
        }
      }
    });
    resolve(value);
  }, 2000);
});

const props = {
  fulfillmentGroup: state.fulfillmentGroup,
  label: "Shipping Address",
  stepNumber: 1,
  onSubmit: handleSubmit,
  onReadyForSaveChange() { setState({ isReady: true }); }
};

<div>
  {state.fulfillmentGroup && state.fulfillmentGroup.data.shippingAddress
    ? action.renderComplete(state)
    : (<div>
      <ShippingAddressCheckoutAction {...props} ref={(el) => {_form = el}} />
      <Button onClick={() => {_form.submit()}} isDisabled={!state.isReady} isWaiting={state.isProcessing}>Submit</Button>
    </div>)}
</div>
```

**With simple address validation**

A naive example to demonstrate a validation shipping address checkout action UX flow
*Address postal codes that start with "11" will pass validation, all others will fail.*
*Address postal codes that start with "10" will fail validation with 0 suggested addresses.*
```jsx
import Button from "../../Button/v1/Button";
initState = {
  addressValidationResults: null,
  isReady: false,
  isProcessing: false,
  fulfillmentGroup: {
    data: {
      shippingAddress: null
    }
  }
};

const action = ShippingAddressCheckoutAction;
let _form = null;

const salvos = {
  address1: "7742 Hwy 23",
  address2: "",
  country: "US",
  city: "Belle Chasse",
  fullName: "Salvos Seafood",
  postal: "70037",
  region: "LA",
  phone: "(504) 393-7303",
  isValid: true
};

const handleSubmit = (value) => new Promise((resolve, reject) => {
  setState({ isProcessing: true });
  setTimeout(async () => {
    setState({
      isProcessing: false,
      fulfillmentGroup: {
        data: {
          shippingAddress: value
        }
      }
    });
    resolve(value);
  }, 2000);
});

const handleValidation = (value) => new Promise((resolve, reject) => {
  setState({ isProcessing: true });
  setTimeout(async () => {
    setState({
      addressValidationResults: {
        submittedAddress: value,
        suggestedAddresses:  value.postal[0] === "1" ? [] : [{
          ...value,
          address1: "Corrected " + value.address1,
          postal: "90210",
          isValid: true
        }],
        validationErrors: value.postal[1] === "1" ? [] : [{
         summary: "Address Not Found",
         details: "The address as submitted could not be found. Please check for excessive abbreviations in the street address line or in the City name.",
         source: "USPS",
         type: "error"
        }]
      },
      isProcessing: false
    });
    resolve(value);
  }, 2000);
});

const props = {
  addressValidationResults: state.addressValidationResults,
  fulfillmentGroup: state.fulfillmentGroup,
  label: "Shipping Address",
  stepNumber: 1,
  onAddressValidation: handleValidation,
  onSubmit: handleSubmit,
  onReadyForSaveChange() { setState({ isReady: true }); }
};

<div>
  {state.fulfillmentGroup && state.fulfillmentGroup.data.shippingAddress
    ? action.renderComplete(state)
    : (<div>
      <ShippingAddressCheckoutAction {...props} ref={(el) => {_form = el}} />
      <Button onClick={() => {_form.submit()}} isDisabled={!state.isReady} isWaiting={state.isProcessing}>Submit</Button>
    </div>)}
</div>
```

### Theme

See [Theming Components](./#!/Theming%20Components).

#### Typography

- The label text uses `subheadingTextBold` style with `rui_components.ShippingAddressCheckoutActionTitle` override
- The address preview text uses `bodyText` style with `rui_components.ShippingAddressCheckoutActionAddress` override
