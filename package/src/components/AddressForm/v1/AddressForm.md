### AddressForm


#### Basic Usage
```jsx
const components = {
 ErrorsBlockComponent: ErrorsBlock,
 FieldComponent: Field,
 TextInputComponent: TextInput,
 SelectInputComponent: Select,
 PhoneInputComponent: TextInput,
 ButtonComponent: Button
};

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
  components={components}
  countries={countries}
  regions={regions}
  onSubmit={(address) => console.log(address)}
 />
```

#### Adding Address
```jsx
class AddressExample extends React.Component {
    constructor(props) {
      super(props);
      this.components = {
        ErrorsBlockComponent: ErrorsBlock,
        FieldComponent: Field,
        TextInputComponent: TextInput,
        SelectInputComponent: Select,
        PhoneInputComponent: TextInput,
        ButtonComponent: Button
      };
    
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
      
      this.handleCountryChange.bind(this)
    }
  
    
    handleCountryChange(country ) {
      const activeCountry = this.state.countries.find((cnty) => cnty.value === country);
      console.log("hey", country, activeCountry)
      
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
components={this.components}
countries={this.state.countries}
regions={this.state.regions[this.state.activeCountry]}
onCountryChange={(value) => this.handleCountryChange(value)}
onSubmit={(address) => console.log(address)}
/>
</div>
);
    }
  }

  <AddressExample />

```

#### Editing Address
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

const components = {
 ErrorsBlockComponent: ErrorsBlock,
 FieldComponent: Field,
 TextInputComponent: TextInput,
 SelectInputComponent: Select,
 PhoneInputComponent: TextInput,
 ButtonComponent: Button
};

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
  components={components}
  countries={countries}
  regions={regions}
  onCountryChange={(country) => console.log("country changed", country)}
  onSubmit={(address) => console.log("submited adddress", address)}
  value={address}
  isCancellable
 />
```


#### Address Form without region options
If a selecte country doesn't have any predefined region options then the region field input will render as a TextInput.

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

const components = {
 ErrorsBlockComponent: ErrorsBlock,
 FieldComponent: Field,
 TextInputComponent: TextInput,
 SelectInputComponent: Select,
 PhoneInputComponent: TextInput,
 ButtonComponent: Button
};

const countries = [
  { value: "US", label: "United States" },
  { value: "DE", label: "Germany" },
  { value: "NU", label: "Nigeria" }
];

<AddressForm  
  components={components}
  countries={countries}
  onSubmit={(address) => console.log("submited adddress", address)}
  value={address}
  isCancellable
 />
```
