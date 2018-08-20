### Overview
The `ShippingAddressCheckoutAction` serves 4 purposes:
  * To normalize data input/editing between the `CheckoutActions` component and the `AddressForm` components.
  * To provide `CheckoutActions` with a `renderComplete` method that renders the captured checkout data.
  * To provide `ChecoutActions` a way to know the action is ready for save,
  * To Provide `CheckoutActions` a way to capture the `AddressForm` values.
 
For a full implementation example see the [CheckoutActions](/#!/CheckoutActions)

#### Usage

```jsx
const fullfillment = {
  shippingAddress: null
};

<ShippingAddressCheckoutAction value={fullfillment} label="Shipping Address" stepNumber={1} />
```

#### With Address
```jsx
const fullfillment = {
  shippingAddress: {
    address1: "7742 Hwy 23",
    address2: "",
    country: "US",
    city: "Belle Chasse",
    firstName: "Salvos",
    lastName: "Seafood",
    postal: "70037",
    region: "LA",
    phone: "(504) 393-7303"
  }
};

<ShippingAddressCheckoutAction value={fullfillment} label="Shipping Address" stepNumber={1} />
```

#### Without Address
```jsx
const fullfillment = {
  shippingAddress: null
};

<ShippingAddressCheckoutAction value={fullfillment} label="Shipping Address" stepNumber={1} />
```

#### Ready For Save
Open the browser terminal and fill out this form to see the `onReadyForSaveChange` callback fire.
```jsx
const fullfillment = {
  shippingAddress: null
};

const isReady = (ready) => console.log("is action ready for save?", ready);

<ShippingAddressCheckoutAction value={fullfillment} onReadyForSaveChange={isReady} label="Shipping Address" stepNumber={1} />
```

#### Render Complete Method
```jsx
const capturedData = {
  shippingAddress: {
    address1: "7742 Hwy 23",
    address2: "",
    country: "US",
    city: "Belle Chasse",
    firstName: "Salvos",
    lastName: "Seafood",
    postal: "70037",
    region: "LA",
    phone: "(504) 393-7303"
  }
};
const action = ShippingAddressCheckoutAction;

action.renderComplete(capturedData);

```
