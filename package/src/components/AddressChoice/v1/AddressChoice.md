### Overview

The `AddressChoice` component is a way of collecting an address while giving an option of choosing a previously saved address. If no previously saved addresses are provided, it will render an [AddressForm](./#!/AddressForm). Otherwise it will render a choice list where each address is in the list and the final option is to enter a new address.

### Usage

#### Simple
If you don't pass in any `addresses`, it renders an [AddressForm](./#!/AddressForm).

```jsx
<AddressChoice onChange={console.log.bind(console)} />
```

#### Read Only
Use `isReadOnly` prop to disable editing, such as when submitting the form or loading something.

```jsx
<AddressChoice isReadOnly />
```

#### With Addresses
When you provide one or more `addresses`, they are presented in a [SelectableList](./#!/SelectableList) along with a final option that shows the [AddressForm](./#!/AddressForm) when selected.

`onChange` prop is called whenever the address changes, whether by selecting an existing address or changing a field in the custom address form.

```jsx
const addresses = [
  {
    _id: "20",
    address1: "7742 Hwy 23",
    address2: "",
    country: "US",
    city: "Belle Chasse",
    fullName: "Salvos Seafood",
    postal: "70037",
    region: "LA",
    phone: "(504) 393-7303"
  },
  {
    _id: "21",
    address1: "35 Akin Adesola St",
    address2: "",
    country: "NG",
    city: "Lagos",
    fullName: "Ocean Basket Victoria Island",
    postal: "101241",
    region: "Victoria Island",
    phone: "234 816 059 1821"
  }
];

<AddressChoice addresses={addresses} onChange={console.log.bind(console)} />
```

#### Read Only With Addresses

```jsx
const addresses = [
  {
    _id: "20",
    address1: "7742 Hwy 23",
    address2: "",
    country: "US",
    city: "Belle Chasse",
    fullName: "Salvos Seafood",
    postal: "70037",
    region: "LA",
    phone: "(504) 393-7303"
  },
  {
    _id: "21",
    address1: "35 Akin Adesola St",
    address2: "",
    country: "NG",
    city: "Lagos",
    fullName: "Ocean Basket Victoria Island",
    postal: "101241",
    region: "Victoria Island",
    phone: "234 816 059 1821"
  }
];

<AddressChoice addresses={addresses} isReadOnly onChange={console.log.bind(console)} />
```
