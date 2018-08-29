### Overview
The `AddressForm` component is based on the [Composable Form Spec](http://forms.dairystatedesigns.com/) and uses [reacto-form](http://forms.dairystatedesigns.com/reacto-form/) to handle form state and validation.

#### Usage
The `AddressForm` is composed of several components: `Field`, `TextInput`, `Select`, `Button` and `ErrorsBlock` and allows for configuring selectable `regions` and `countries` objects.

```jsx
<AddressForm />
```

#### Value
The `AddressForm` accepts a `value` object that maps to each field.
```jsx
const address = {
 address1: "7742 Hwy 23",
 address2: "",
 country: "US",
 city: "Belle Chasse",
 firstName: "Salvos",
 lastName: "Seafood",
 postal: "70037",
 region: "LA",
 phone: "(504) 393-7303"
};

<AddressForm value={address} />
```

All `value` properties are optional.
```jsx
const address = {
 country: "US",
 city: "Belle Chasse",
 postal: "70037",
 region: "LA"
};

<AddressForm value={address} />
```

If a selected country doesn't have any region options, the region field will render a `TextInput`.
```jsx
const address = {
 address1: "35 Akin Adesola St",
 address2: "",
 country: "NG",
 city: "Lagos",
 firstName: "Ocean Basket",
 lastName: "Victoria Island",
 postal: "101241",
 region: "Victoria Island",
 phone: "234 816 059 1821"
};

<AddressForm value={address} />
```

#### Locales
The `AddressForm` accepts a `locales` object that maps to the country and regions fields.
```jsx
const locales = {
  "ES": {
    "name": "Essos",
    "states": {
      "BV": {
        "name": "Brovos"
      },
      "MN": {
        "name": "Mareen"
      },
      "PT": {
        "name": "Pentos"
      },
      "VD": {
        "name": "Vaes Dothrak"
      },
      "VO": {
        "name": "Volantis"
      },
      "QA": {
        "name": "Qarth"
      }
    }
  },
  "SY": {
    "name": "Sothoryos",
  },
  "UT": {
    "name": "Ulthos",
  },
  "WS": {
    "name": "Westeros",
    "capital": "Kings Landing",
    "states": {      
      "DN": {
        "name": "Dorne"
      },
      "II": {
        "name": "Iron Islands"
      },
      "KL": {
        "name": "The King's Lands"
      },
      "SL": {
        "name": "The Stormlands"
      },
      "TN": {
        "name": "The North"
      },
      "TV": {
        "name": "The Vale"
      }
      
    }
  }
};


<AddressForm locales={locales} />
```

#### With errors
The `AddressForm` can take an array of [error](http://forms.dairystatedesigns.com/user/errors/#errors) object and apply an error state to the approperate field.
```jsx
const errors = [{ message: "error message", name: "address1"}];

<AddressForm errors={errors} />
```

#### Address name field
You may want to save mutiple addresses, `shouldShowAddressNameField` renders a field so the user can "name" each address they enter. You can require the Address Name field by adding the `isAddressNameRequired` prop.
```jsx
<AddressForm
  addressNamePlaceholder="Headquarters"
  shouldShowAddressNameField
 />
```

#### Is commercial address field
Some `fulfillmentMethods` will charge a different shipping rate if shipping to a commercial address.
```jsx
<AddressForm shouldShowIsCommercialField />
```

#### Address Form Implementation Example
Simple `AddressForm` implementation example. Bind to the form element via a `ref` method that can be used by any `Button` to trigger `submit` & `validate` form methods.

```jsx
class AddressExample extends React.Component {
  constructor(props) {
    super(props);
    this._addressForm;
    this.bindForm.bind(this);
  }

  bindForm(formEl) {
    if (formEl) {
      this._addressForm = formEl;
    }
  }

  render() {
    return (
      <div>
        <AddressForm
          ref={(formEl) => { this.bindForm(formEl) }}
          onSubmit={(address) => console.log("Address submitted", address)}
        />
        <Button onClick={() => this._addressForm.submit()}>Submit</Button>
      </div>
    );
  }
}

<AddressExample />
```
