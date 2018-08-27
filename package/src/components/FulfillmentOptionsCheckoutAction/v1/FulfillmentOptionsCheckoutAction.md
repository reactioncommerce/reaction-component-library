### Overview

#### Usage

```jsx

const options = [{
  id: "111",
  label: "Standard (5-9 days)",
  detail: "Free",
  value: "Standard"
},
{
  id: "222",
  label: "Priority (3-5 days)",
  detail: "$5.99",
  value: "Priority"
}];

<FulfillmentOptionsCheckoutAction stepNumber={2} label="Choose a shipping method" fulfillmentOptions={options} />
```

Document component here. See https://react-styleguidist.js.org/docs/documenting.html