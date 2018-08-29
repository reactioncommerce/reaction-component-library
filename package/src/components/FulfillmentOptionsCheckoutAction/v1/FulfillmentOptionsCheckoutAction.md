### Overview

#### Usage

##### Show fulfillment options

```jsx
const options = [{
  fulfillmentMethod: {
    _id: "111",
    name: "Standard",
    displayName: "Standard (5-9 Days)"
  },
  price: {
    amount: 0,
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
    amount: 5.99,
    displayAmount: "$5.99"
  }
},
{
  fulfillmentMethod: {
    _id: "333",
    name: "Express",
    displayName: "Express 2 Day"
  },
  price: {
    amount: 12.99,
    displayAmount: "$12.99"
  }
}, {
  fulfillmentMethod: {
    _id: "444",
    name: "Overnight",
    displayName: "Overnight Expedited"
  },
  price: {
    amount: 24.99,
    displayAmount: "$24.99"
  }
},
];

<FulfillmentOptionsCheckoutAction stepNumber={2} label="Choose a shipping method" availableFulfillmentOptions={options} />
```

##### No fulfillment options

```jsx
const options = [];

<FulfillmentOptionsCheckoutAction stepNumber={2} label="Choose a shipping method" availableFulfillmentOptions={options} />
```

##### Completed state: Show selected fulfillment option

```jsx
const seletedMethod = {
  fulfillmentMethod: {
    _id: "1111",
    name: "Standard",
    displayName: "Standard (5-9 Days)"
  },
  price: {
    displayAmount: "Free"
  }
};

const action = FulfillmentOptionsCheckoutAction

action.renderComplete(seletedMethod)
```