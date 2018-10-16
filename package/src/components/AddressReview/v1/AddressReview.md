### Overview
#### Usage

```jsx
const addressEntered = {
  address1: "7742 Hwy 25",
  address2: "",
  country: "US",
  city: "Belle Chasse",
  fullName: "Salvos Seafood",
  postal: "70047",
  region: "LA",
  phone: "(504) 393-7303"
};

const addressSuggestion = {
  address1: "7742 Hwy 23",
  address2: "",
  country: "US",
  city: "Belle Chasse",
  fullName: "Salvos Seafood",
  postal: "70037",
  region: "LA",
  phone: "(504) 393-7303"
};

<AddressReview {...{ addressEntered, addressSuggestion }} />
```
