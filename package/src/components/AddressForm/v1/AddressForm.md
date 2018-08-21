### Overview
The `AddressForm` component is based on the [Composable Form Spec](http://forms.dairystatedesigns.com/) and uses [reacto-form](http://forms.dairystatedesigns.com/reacto-form/) to handle form state and validation.

#### Usage
The AddressForm is composed of several components: `Field`, `TextInput`, `Select`, `Button` and `ErrorsBlock` and allows for configuring selectable `regions` and `countries` objects.

```jsx
const countries = [
  { value: "US", label: "United States" },
  { value: "DE", label: "Germany" },
  { value: "NU", label: "Nigeria" }
];

const regions = [
  { value: "LA", label: "Louisiana" },
  { value: "CA", label: "California" }
];

<AddressForm
  countries={countries}
  regions={regions}
  onSubmit={(address) => console.log(address)}
 />
```

#### With address
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
}

const countries = [
  { value: "US", label: "United States" },
  { value: "DE", label: "Germany" },
  { value: "NU", label: "Nigeria" }
];

const regions = [
  { value: "LA", label: "Louisiana" },
  { value: "CA", label: "California" }
];

<AddressForm
  countries={countries}
  regions={regions}
  onSubmit={(address) => console.log("submited adddress", address)}
  value={address}
 />
```


#### With address without region options
If a selected country does not have any predefined region options, then the region field input will render as a TextInput

```jsx
const address = {
 address1: "35 Akin Adesola St",
 address2: "",
 country: "NU",
 city: "Lagos",
 firstName: "Ocean Basket",
 lastName: "Victoria Island",
 postal: "101241",
 region: "Victoria Island",
 phone: "234 816 059 1821"
}

const countries = [
  { value: "US", label: "United States" },
  { value: "DE", label: "Germany" },
  { value: "NU", label: "Nigeria" }
];

<AddressForm
  countries={countries}
  onSubmit={(address) => console.log("submited adddress", address)}
  value={address}
 />
```

#### With errors
The `AddressForm` can take an array of [error](http://forms.dairystatedesigns.com/user/errors/#errors) object and apply an error state to the approperate field.
```jsx
const countries = [
  { value: "US", label: "United States" },
  { value: "DE", label: "Germany" },
  { value: "NU", label: "Nigeria" }
];

const regions = [
  { value: "LA", label: "Louisiana" },
  { value: "CA", label: "California" }
];

const errors = [{ message: "error message", name: "address1"}];

<AddressForm
  countries={countries}
  errors={errors}
  regions={regions}
  onSubmit={(address) => console.log(address)}
 />
```

#### Address name field
You may want to save mutiple addresses, `shouldShowAddressNameField` renders a field so the user can "name" each address they enter.
```jsx
const countries = [
  { value: "US", label: "United States" },
  { value: "DE", label: "Germany" },
  { value: "NU", label: "Nigeria" }
];

const regions = [
  { value: "LA", label: "Louisiana" },
  { value: "CA", label: "California" }
];

<AddressForm
  countries={countries}
  regions={regions}
  onSubmit={(address) => console.log(address)}
  addressNamePlaceholder="Headquarters"
  shouldShowAddressNameField
 />
```

#### Is commercial address field
Some `fulfillmentMethods` will charge a different shipping rate if shipping to a commercial address.
```jsx
const countries = [
  { value: "US", label: "United States" },
  { value: "DE", label: "Germany" },
  { value: "NU", label: "Nigeria" }
];

const regions = [
  { value: "LA", label: "Louisiana" },
  { value: "CA", label: "California" }
];

<AddressForm
  countries={countries}
  regions={regions}
  onSubmit={(address) => console.log(address)}
  shouldShowIsCommercialField
 />
```

#### Address Form Implementation Example
Simple `AddressForm` implementation example. Bind to the form element via a `ref` method that can be used by any `Button` to trigger `submit` & `validate` form methods.

```jsx
class AddressExample extends React.Component {
  constructor(props) {
    super(props);

    this._addressForm;

    this.state = {
      activeCountry: "US",
      countries: [
        { value: "US", label: "United States" },
        { value: "DE", label: "Germany" },
        { value: "NU", label: "Nigeria" }
      ],
      regions: {
        US: [
          { value: "LA", label: "Louisiana" },
          { value: "CA", label: "California" }
        ]
      }
    };

    this.bindForm.bind(this);
    this.handleCountryChange.bind(this);
  }

  bindForm(formEl) {
    if (formEl) {
      this._addressForm = formEl;
    }
  }

  handleCountryChange(country) {
    const activeCountry = this.state.countries.find((cnty) => cnty.value === country);

    if (activeCountry) {
      this.setState({
        activeCountry: activeCountry.value
      });
    }
  }

  render() {
    return (
      <div>
        <AddressForm
          ref={(formEl) => { this.bindForm(formEl) }}
          countries={this.state.countries}
          regions={this.state.regions[this.state.activeCountry]}
          onCountryChange={(value) => this.handleCountryChange(value)}
          onSubmit={(address) => console.log("Address submitted", address)}
        />
        <Button onClick={() => this._addressForm.submit()}>Submit</Button>
      </div>
    );
  }
}

<AddressExample />
```
