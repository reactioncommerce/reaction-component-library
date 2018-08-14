### Overview
The `CheckoutActions` component is responsible for:
1. Displaying each `CheckoutAction` and managing it's status. (complte, incomplete, active)
2. Providing each  `CheckoutAction` with any data it may need from the `cart` object.
3. Capturing/Editing of `CheckoutAction` data.
4. Rendering captured `CheckoutAction` data in a `CheckoutActionComplete` component.

#### Usage
`CheckoutActions` take an array of `actions`, each `action` needs a `label` and a checout action component that will be responsible to capturing a piece of checkout data.

**Note:** These examples are only use the `ShippingAddressCheckoutAction` as the actions component. This will be updated with more actions as they get created.

```jsx
const actions = [
  {
    label: "Shipping Information",
    component: ShippingAddressCheckoutAction
  },
   {
    label: "Another Step",
    component: ShippingAddressCheckoutAction
  }
];


<CheckoutActions actions={actions} />
```

#### With Cart

```jsx
const actions = [
  {
    label: "Shipping Information",
    component: ShippingAddressCheckoutAction
  },
   {
    label: "Another Step",
    component: ShippingAddressCheckoutAction
  }
];

const cart = {
 fulfillmentGroup: {
   data: {
    shippingAddress: null
   }
 }
};


<CheckoutActions actions={actions} cart={cart} />
```

#### With Cart Data

```jsx
const actions = [
  {
    label: "Shipping Information",
    component: ShippingAddressCheckoutAction
  },
   {
    label: "Another Step",
    component: ShippingAddressCheckoutAction
  }
];

const cart = {
 fulfillmentGroup: {
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
 }
};


<CheckoutActions actions={actions} cart={cart} />
```
