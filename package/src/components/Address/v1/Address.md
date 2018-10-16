### Overview

### Usage

Document various live component examples here. See https://react-styleguidist.js.org/docs/documenting.html

```jsx
const address = {
  _id: "1",
  address1: "7742 Hwy 23",
  address2: "",
  country: "US",
  city: "Belle Chasse",
  fullName: "Salvos Seafood",
  postal: "70037",
  region: "LA",
  phone: "(504) 393-7303"
};

<Address address={address} />

```

**With invalid address properties**

```jsx
const address = {
  _id: "1",
  address1: "7742 Hwy 23",
  address2: "",
  country: "US",
  city: "Belle Chasse",
  fullName: "Salvos Seafood",
  postal: "70037",
  region: "LA",
  phone: "(504) 393-7303"
};

const invalidAddressProperties = ["fullName", "address1", "region"];

<Address address={address} invalidAddressProperties={invalidAddressProperties} />

```

### Theme

See [Theming Components](./#!/Theming%20Components).

#### Typography

- The address preview text uses `bodyText` style with `rui_components.Address` override
