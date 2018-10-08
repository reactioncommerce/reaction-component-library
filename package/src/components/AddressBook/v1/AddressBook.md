### Overview
#### Usage

The `AddressBook` excepts the `account` object as a prop and uses the `account.addressBook` array to populate the address book list. If the `account.addressBook` array is empty the `AddressBook` will default to the `AddressForm`.

```jsx
const account = {
  addressBook: []
};

<AddressBook account={account} />
```

With `addressBook`
```jsx
const account = {
  addressBook: [
    {
      address1: "7742 Hwy 23",
      address2: "",
      country: "US",
      city: "Belle Chasse",
      firstName: "Salvos",
      lastName: "Seafood",
      postal: "70037",
      region: "LA",
      phone: "(504) 393-7303"
    },
    {
      address1: "35 Akin Adesola St",
      address2: "",
      country: "NG",
      city: "Lagos",
      firstName: "Ocean Basket",
      lastName: "Victoria Island",
      postal: "101241",
      region: "Victoria Island",
      phone: "234 816 059 1821"
    }
  ]
};

<AddressBook account={account} />
```

With `validatedValue`
```jsx
const props = {
  account: {
    addressBook: []
  },
  value: {
    address1: "7742 Hwy 25",
    address2: "",
    country: "US",
    city: "Belle Chasse",
    firstName: "Salvos",
    lastName: "Seafood",
    postal: "70047",
    region: "LA",
    phone: "(504) 393-7303"
  },
  validatedValue: {
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
};

<AddressBook {...props} />
```
