### Overview
The `CheckoutActions` component is responsible for:
  * Displaying each `CheckoutAction` and managing it's status. (complte, incomplete, active)
  * Providing each  `CheckoutAction` with any data it may need from the `cart` object.
  * Capturing/Editing of `CheckoutAction` data.
  * Rendering captured `CheckoutAction` data in a `CheckoutActionComplete` component.

#### Usage
`CheckoutActions` take an array of `actions`, each `action` needs a `label` and a checkout action component that will be responsible to capturing a piece of checkout data as well as a `props` object. Each `props` object will include the piece of `cart.checkout` data the action needs to display and the cart mutation that needs to be called during capture.

**Example of Actions array**
```js static
const actions = [
  {
    label: "Shipping Information",
    component: ShippingAddressCheckoutAction,
    props: {
      cartData: cart.checkout.fulfillmentGroup,
      cartMutation: setShippingAddress
    }
  },
  {
    label: "Shipping Options",
    component: ShippingOptionCheckoutAction,
    props: {
      cartData: cart.checkout.fulfillmentGroup.avalibleFulfilmentGroups,
      cartMutation: setShippingOption
    }
  },
  { 
    label: "Payment Information", 
    component: PaymentCheckoutAction, 
    props: { 
      cartData: cart.checkout.payments[0], 
      cartMutation: setPayment
    } 
  }
];

```

**Note:** These examples only use the `ShippingAddressCheckoutAction` as the actions component. This will be updated with more actions as they get created.

```jsx
const mockAddress = {
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

let cart = {
  fulfillmentGroup: {
    data: null
  }
}

const getCart = () => cart;

const mockMutation = (data) => new Promise((resolve, reject) => {
  setTimeout(() => {
    cart.fulfillmentGroup.data = { shippingAddress: mockAddress };
    console.log("updating car data", cart.fulfillmentGroup)
    resolve(mockAddress);
  }, 2000, { mockAddress });
});

const actions = [
  {
    label: "Shipping Information",
    component: ShippingAddressCheckoutAction,
    props: {
      cartData: getCart().fulfillmentGroup,
      cartMutation: mockMutation
    }
  },
  { 
    label: "Second Shipping Information", 
    component: ShippingAddressCheckoutAction, 
    props: { 
      cartData: {
        data: {
          shippingAddress: mockAddress
        }
      }, 
      cartMutation: mockMutation 
    } 
  }
];


<CheckoutActions actions={actions} />

```
