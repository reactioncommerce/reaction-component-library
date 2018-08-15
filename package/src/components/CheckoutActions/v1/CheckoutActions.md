### Overview
The `CheckoutActions` component is responsible for:
  * Displaying each `CheckoutAction` and managing it's status. (complte, incomplete, active)
  * Providing each  `CheckoutAction` with any data it may need from the `cart` object.
  * Capturing/Editing of `CheckoutAction` data.
  * Rendering captured `CheckoutAction` data in a `CheckoutActionComplete` component.

#### Usage
`CheckoutActions` take an array of `actions`, each `action` needs a `label` and a checout action component that will be responsible to capturing a piece of checkout data.

**Note:** These examples are only use the `ShippingAddressCheckoutAction` as the actions component. This will be updated with more actions as they get created.

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

const cart = {
 fulfillmentGroup: {
   data: {
    shippingAddress: mockAddress
  }
 }
};

const mockMutationCall = (data) => new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, { mockAddress });
});


class CheckoutExample extends React.Component {
  constructor(props) {
    super(props);
    
    this.actions = [
      {
        label: "Second Shipping Information",
        component: ShippingAddressCheckoutAction,
        props: {
          cartData: { data: null },
          cartMutation: mockMutationCall
        }
      }
    ];
    
    this.onClick.bind(this);
  }
  
  onClick() {
    mockMutationCall({ thing: 1 }).then((success) => {
      console.log("hey response", success)
    })
  }

  render() {
    return (
      <div>
      <button onClick={this.onClick}>click</button>
        <CheckoutActions actions={this.actions} />
      </div>
    );
  }
}

<CheckoutExample cart={cart} />
```


{
        label: "Shipping Information",
        component: ShippingAddressCheckoutAction,
        props: {
          cartData: props.cart.fulfillmentGroup,
          cartMutation: mockMutationCall
        }
      },
