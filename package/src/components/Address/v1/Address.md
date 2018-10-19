### Overview
This component is used when there is a need to display an `address`.

### Usage
The `Address` component is just a simple block element that formats and renders an `address`.

```jsx
const address = {
  _id: "5",
  address1: "2110 Main Street",
  address2: "Suite 207",
  country: "US",
  city: "Santa Monica",
  fullName: "Reaction Commerce, Inc.",
  postal: "90405",
  region: "US-CA"
};

<Address address={address} />
```

`Address` will skip rendering empty `address` properties.
```jsx
const address = {
  _id: "21",
  address1: "35 Akin Adesola St",
  address2: "",
  country: "NG",
  city: "Lagos",
  fullName: "Ocean Basket Victoria Island",
  postal: "101241",
  region: "NG-LA",
  phone: "234 816 059 1821"
};

<Address address={address} />
```

#### With invalid address properties
Call out invalid `address` properties by passing an array of `address` property keys.
```jsx
const address = {
  _id: "1",
  address1: "7742 Hwy 23",
  address2: "",
  country: "US",
  city: "Belle Chasse",
  fullName: "Salvos Seafood",
  postal: "70037",
  region: "US-LA",
  phone: "(504) 393-7303"
};

const invalidAddressProperties = ["fullName", "address1", "region"];

<Address address={address} invalidAddressProperties={invalidAddressProperties} />

```
Reorder or limit which `address` properties render by providing an array of `address` property keys.
#### Address Order
```jsx
const address = {
  address1: "46 Avenue N",
  address2: "",
  country: "HT",
  city: "Port-au-Prince",
  fullName: "Yanvalou",
  postal: "6110",
  region: "HT-OU",
  phone: "+509 38 01 7051"
};

const addressOrder = ["fullName", "phone", "city", "region"];

<Address address={address} addressOrder={addressOrder} />

```

#### Flat Address
Render the `Address` in a flat string format by providing the `isFlat` prop.
```jsx
const address = {
  _id: "1",
  address1: "7742 Hwy 23",
  address2: "",
  country: "US",
  city: "Belle Chasse",
  fullName: "Salvos Seafood",
  postal: "70037",
  region: "US-LA",
  phone: "(504) 393-7303"
};

<Address address={address} isFlat />

```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop           | Default | Description                                                                              |
| -------------------- | ------- | ---------------------------------------------------------------------------------------- |
| `Address.addressPropertyErrorBorderColor` | yellow400   | Warning message border color |
| `Address.addressPropertyErrorBorderStyle` | solid   | Warning message border style |
| `Address.addressPropertyErrorBorderWidth` | 1px   | Warning message border width |
| `Address.addressPropertyErrorBackgroundColor` | yellow100   | Warning message background color |
| `Address.addressPropertyErrorColor` | yellow600  | Warning message color |
| `Address.addressPropertyErrorPaddingBottom` | 14px   | Warning message bottom padding |
| `Address.addressPropertyErrorPaddingLeft` | 20px   | Warning message left padding |
| `Address.addressPropertyErrorPaddingRight` | 20px   | Warning message right padding |
| `Address.addressPropertyErrorPaddingTop` | 14px   | Warning message top padding |

#### Typography

- The address preview text uses `bodyText` style with `rui_components.Address` override
