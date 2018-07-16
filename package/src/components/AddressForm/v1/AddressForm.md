### AddressForm


#### Basic Usage
```jsx
const components = {
 TextInputComponent: TextInput,
 SelectInputComponent: Select,
 PhoneInputComponent: TextInput,
 ButtonComponent: Button
};

const countries = [
  { value: "US", label: "United State" },
  { value: "DE", label: "Germany" },
  { value: "NU", label: "Nigeria" }
];

const regions = [
  { value: "LA", label: "Llouisiana" },
  { value: "CA", label: "California" }
];

<AddressForm
  components={components}
  countries={countries}
  regions={regions}
  onSubmit={(address) => console.log(address)}
 />
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
 TextInputComponent: TextInput,
 SelectInputComponent: Select,
 PhoneInputComponent: TextInput,
 ButtonComponent: Button
};

const countries = [
  { value: "US", label: "United State" },
  { value: "DE", label: "Germany" },
  { value: "NU", label: "Nigeria" }
];

let regions = [
  { value: "LA", label: "Llouisiana" },
  { value: "CA", label: "California" }
];

const onCountryChange = (country) => {
  if (country !== "US") {
    regions = undefined;
  }
}

<AddressForm
  address={address}
  components={components}
  countries={countries}
  regions={regions}
  onCountryChange={onCountryChange}
  onSubmit={(address) => console.log(address)}
  isCancellable
 />
```

