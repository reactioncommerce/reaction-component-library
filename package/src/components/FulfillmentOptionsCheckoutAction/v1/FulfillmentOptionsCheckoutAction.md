### Overview

#### Usage

##### Show fulfillment options
```jsx
const options = {
  data: {
    availableFulfillmentOptions: [
      {
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
      }
    ]
  }
};

<FulfillmentOptionsCheckoutAction stepNumber={2} label="Choose a shipping method" fulfillmentGroup={options} />
```

##### Show selected fulfillment options
```jsx
const options = {
  data: {
    selectedFulfillmentOption: 
      {
        fulfillmentMethod: {
          _id: "2232",
          name: "Priority",
          displayName: "Priority (3-5 Days)"
        },
        price: {
          amount: 5.99,
          displayAmount: "$5.99"
        }
      }
    ,
    availableFulfillmentOptions: [
      {
        fulfillmentMethod: {
          _id: "1411",
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
          _id: "2422",
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
          _id: "3353",
          name: "Express",
          displayName: "Express 2 Day"
        },
        price: {
          amount: 12.99,
          displayAmount: "$12.99"
        }
      }, {
        fulfillmentMethod: {
          _id: "4454",
          name: "Overnight",
          displayName: "Overnight Expedited"
        },
        price: {
          amount: 24.99,
          displayAmount: "$24.99"
        }
      }
    ]
  }
};

<FulfillmentOptionsCheckoutAction stepNumber={2} label="Choose a shipping method" fulfillmentGroup={options} />
```

##### Submit a fulfillment option

```jsx
const options = {
  data: {
    availableFulfillmentOptions: [
      {
        fulfillmentMethod: {
          _id: "1121",
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
          _id: "2322",
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
          _id: "3343",
          name: "Express",
          displayName: "Express 2 Day"
        },
        price: {
          amount: 12.99,
          displayAmount: "$12.99"
        }
      }, {
        fulfillmentMethod: {
          _id: "4544",
          name: "Overnight",
          displayName: "Overnight Expedited"
        },
        price: {
          amount: 24.99,
          displayAmount: "$24.99"
        }
      }
    ]
  }
};


class FulfillmentExample extends React.Component {
  constructor(props) {
    super(props);
    this._fulfillmentForm;
    this.bindForm.bind(this);
  }

  bindForm(formEl) {
    if (formEl) {
      this._fulfillmentForm = formEl;
    }
  }

  render() {
    return (
      <div>
        <FulfillmentOptionsCheckoutAction
          ref={(formEl) => { this.bindForm(formEl) }}
          onSubmit={(address) => console.log("Address submitted", address)}
          stepNumber={2} 
          label="Choose a shipping method"
          fulfillmentGroup={options}
        />
        <Button onClick={() => this._fulfillmentForm.submit()}>Submit</Button>
      </div>
    );
  }
}

<FulfillmentExample />
```


##### Show no options

```jsx
const options = {
  data: {
    availableFulfillmentOptions: []
  }
};

<FulfillmentOptionsCheckoutAction stepNumber={2} label="Choose a shipping method" fulfillmentGroup={options} />
```

##### Render complete

```jsx
const data = {
  fulfillmentGroup: {
    data: {
     selectedFulfillmentOption: {
        fulfillmentMethod: {
          _id: "222",
          name: "Priority",
          displayName: "Priority (3-5 Days)"
        },
        price: {
          amount: 5.99,
          displayAmount: "$5.99"
        }
      }
     }
  }
};

const action = FulfillmentOptionsCheckoutAction;

action.renderComplete(data);

```