### Overview
#### Usage

```jsx
const fullfillment = {
  data: {
    shippingAddress: null
  }
};

<ShippingAddressCheckoutAction fullfillmentGroup={fullfillment} />
```

#### Complete
```jsx
const fullfillment = {
  data: {
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
  }
};

<ShippingAddressCheckoutAction fullfillmentGroup={fullfillment} />
```


#### Active with Address
```jsx
const fullfillment = {
  data: {
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
  }
};

<ShippingAddressCheckoutAction fullfillmentGroup={fullfillment} status="active" />

```

#### Active without Address
```jsx
const fullfillment = {
  data: {
    shippingAddress: null
  }
};

<ShippingAddressCheckoutAction fullfillmentGroup={fullfillment} status="active" />
```
