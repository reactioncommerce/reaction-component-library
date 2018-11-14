### Overview
The `AddressCapture` is a wrapper component that provides a simple API to orchestrate an address validation UX flow using the `AddressForm` and `AddressReview` components.

### Usage

#### Add an address
A naive exmaple to demonstrate a basic address add UX flow. 
```jsx
initialState = { isProcessing: false, savedAddress: null };
let _form = null;

const handleSubmit = (value) => new Promise((resolve, reject) => {
  setState({ isProcessing: true });
  setTimeout(async () => {
    console.log("Address saved", value);
    setState({ isProcessing: false, savedAddress: value });
    resolve(value)
  }, 2000);
});

const props = {
  addressFormProps: {
    shouldShowIsCommercialField: true,
    value: state.savedAddress
  },
  name: "example",
  onSubmit: handleSubmit
};

state.savedAddress ? <Address address={state.savedAddress} /> : <div>
  <AddressCapture {...props} ref={(formEl) => { _form = formEl; }} />
  <Button onClick={() => { _form.submit() }} isWaiting={state.isProcessing}>Capture</Button>
</div>
```

#### Edit an address
A naive exmaple to demonstrate a basic address edit UX flow. 
```jsx
initialState = { 
  isProcessing: false,
  updatedAddress: null,
  savedAddress: {
    address1: "2110 Main Street",
    address2: "Suite 207",
    country: "US",
    city: "Santa Monica",
    fullName: "Reaction Commerce, Inc.",
    postal: "90405",
    region: "CA",
    phone: "123-123-1234",
    isCommercial: true
  } 
};
let _form = null;

const handleSubmit = (value) => new Promise((resolve, reject) => {
  setState({ isProcessing: true });
  setTimeout(async () => {
    console.log("Address saved", value);
    setState({ isProcessing: false, updatedAddress: value });
    resolve(value)
  }, 2000);
});

const props = {
  addressFormProps: {
    shouldShowIsCommercialField: true,
    value: state.updatedAddress || state.savedAddress
  },
  name: "example",
  onSubmit: handleSubmit
};


state.updatedAddress ? <Address address={state.updatedAddress} /> : <div>
  <AddressCapture {...props} ref={(formEl) => { _form = formEl; }} />
  <Button onClick={() => { _form.submit() }} isWaiting={state.isProcessing}>Edit</Button>
</div>
```

#### Validate an address
A naive exmaple to demonstrate a basic address validation UX flow. Address postal codes that start with "1" will pass validation, all others will fail.
```jsx
initialState = { isProcessing: false, savedAddress: null, submittedAddress: null, validationResults: null };
let _form = null;

const handleSubmit = (value) => new Promise((resolve, reject) => {
  setState({ isProcessing: true });
  setTimeout(async () => {
    console.log("Address saved", value);
    setState({ isProcessing: false, savedAddress: value });
    resolve(value)
  }, 2000);
});

const handleAddressValidation = (value) => new Promise((resolve, reject) => {
  setState({ isProcessing: true, submittedAddress: value });
  setTimeout(async () => {
    console.log("Address validated", value);
    const validationResults = {
      suggestedAddresses: value.postal[0] === "1" ? [] : [{
        ...value,
        address1: "Corrected " + value.address1,
        postal: "90210",
        isValid: true
      }]
    };
    setState({ isProcessing: false, validationResults });
    resolve(value);
  }, 2000);
});

const props = {
  addressFormProps: {
    shouldShowIsCommercialField: true,
    value: state.submittedAddress
  },
  addressReviewProps: {
    addressEntered: state.submittedAddress,
    addressSuggestion: state.validationResults && state.validationResults.suggestedAddresses[0] || null
  },
  name: "example",
  onSubmit: handleSubmit,
  onAddressValidation: handleAddressValidation
};

state.savedAddress ? <Address address={state.savedAddress} /> : <div>
  <AddressCapture {...props} ref={(formEl) => { _form = formEl; }} />
  <Button onClick={() => { _form.submit() }} isWaiting={state.isProcessing}>{state.validationResults ? "Capture" : "Validate"}</Button>
</div>
```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop | Default | Description |
