### Overview
The `ShippingAddressCheckoutAction` serves 4 purposes:
  * To normalize data input/editing between the `CheckoutActions` component and the `AddressForm` components.
  * To provide `CheckoutActions` with a `renderComplete` method that renders the captured checkout data.
  * To provide `CheckoutActions` a way to know the action is ready for save,
  * To Provide `CheckoutActions` a way to capture the `AddressForm` values.

For a full implementation example see the [CheckoutActions](/#!/CheckoutActions)

### Usage

```jsx
const fullfillment = {
  data: {
    shippingAddress: null
  }
};

<ShippingAddressCheckoutAction fulfillmentGroup={fullfillment} label="Shipping Address" stepNumber={1} />
```

#### With Address
```jsx
const fullfillment = {
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

<ShippingAddressCheckoutAction fulfillmentGroup={fullfillment} label="Shipping Address" stepNumber={1} />
```

#### Without Address
```jsx
const fullfillment = {
  data: {
    shippingAddress: null
  }
};


<ShippingAddressCheckoutAction fulfillmentGroup={fullfillment} label="Shipping Address" stepNumber={1} />
```

#### Ready For Save
Open the browser terminal and fill out this form to see the `onReadyForSaveChange` callback fire.
```jsx
const fullfillment = {
  data: {
    shippingAddress: null
  }
};


const isReady = (ready) => console.log("is action ready for save?", ready);

<ShippingAddressCheckoutAction fulfillmentGroup={fullfillment} onReadyForSaveChange={isReady} label="Shipping Address" stepNumber={1} />
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
A naive example to demonstrate a validation shipping address checkout action UX flow. 
```jsx
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
  phone: "(504) 393-7303"
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
        suggestedAddresses: [salvos],
        validationErrors: [{
          details: "Sorry but we believe you meant to enter the address of Salvos Seafood",
          type: "warning"
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
  onSubmit: handleSubmit,
  onReadyForSaveChange() { setState({ isReady: true }); },
  validation: handleValidation
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
