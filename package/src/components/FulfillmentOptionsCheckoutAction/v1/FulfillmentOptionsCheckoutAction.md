### Overview

#### Usage

```jsx
const options = [{
  fulfillmentMethod: {
    _id: "111",
    name: "Standard",
    displayName: "Standard (5-9 Days)"
  },
  price: {
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
    displayAmount: "$5.99"
  }
}];

<FulfillmentOptionsCheckoutAction stepNumber={2} label="Choose a shipping method" availableFulfillmentOptions={options} />
```

```jsx
const options = [];

<FulfillmentOptionsCheckoutAction stepNumber={2} label="Choose a shipping method" availableFulfillmentOptions={options} />
```