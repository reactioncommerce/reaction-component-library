### Overview
The `CheckoutActions` component is responsible for:
  * Displaying each `CheckoutAction` and managing it's status. (complete, incomplete, active)
  * Providing each  `CheckoutAction` with any data it may need from the `cart` object.
  * Capturing/Editing of `CheckoutAction` data.
  * Rendering captured `CheckoutAction` data in a `CheckoutActionComplete` component.

#### Usage
`CheckoutActions` take an array of `actions`, each `action` needs a `label` and a checkout action component that will be responsible to capturing a piece of checkout data as well as a `props` object to include the piece of `cart.checkout` data the action needs to display and a `onSubmit` funciton that needs to be called during action submission.

**Example of Actions array**
```js static
const actions = [
  {
    label: "Shipping Information",
    component: ShippingAddressCheckoutAction,
    onSubmit: setShippingAddress
    props: cart.checkout.fulfillmentGroup
  },
  {
    label: "Shipping Options",
    component: ShippingOptionCheckoutAction,
    onSubmit: setShippingOption
    props: cart.checkout.fulfillmentGroup.avalibleFulfilmentGroups
  },
  { 
    label: "Payment Information", 
    component: PaymentCheckoutAction,
    onSubmit: setPayment,
    props: cart.checkout.payments[0]
  }
];

```

**Note:** These examples only use the `ShippingAddressCheckoutAction` as the actions component. This will be updated with more actions as they get created.

```jsx
initialState = { cart: null }
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

const mockMutation = (data) => new Promise((resolve, reject) => {
  setTimeout(() => {
    setState({
      cart: {
        fulfillmentGroup: {
          data: {
            shippingAddress: mockAddress
          }
        }
      }
    });
    resolve(mockAddress);
  }, 2000, { mockAddress });
});

const actions = [
  {
    label: "Shipping Information",
    component: ShippingAddressCheckoutAction,
    onSubmit: mockMutation,
    props: state.cart
  },
  { 
    label: "Second Shipping Information", 
    component: ShippingAddressCheckoutAction,
    onSubmit: mockMutation,
    props: {
      fulfillmentGroup: {
        data: {
          shippingAddress: mockAddress
        }
      }
    } 
  }
];


<CheckoutActions actions={actions} />

```
