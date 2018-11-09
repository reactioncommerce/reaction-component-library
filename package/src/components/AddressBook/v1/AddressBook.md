### Overview

The `AddressBook` component shows a list of addresses in an `Accordion`, allowing you to edit them, delete them, and add more.

### Usage

The `AddressBook` excepts the `account` object as a prop and uses the `account.addressBook` array to populate the address book list. If the `account.addressBook` array is empty the `AddressBook` will default to the `AddressForm`.

```jsx
const account = {
  addressBook: []
};

<AddressBook account={account} />
```

When `addressBook` has address objects the `AddressBook` will display as an address list. Saved addresses can be updated and deleted from the list view.
```jsx
const account = {
  addressBook: [
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
  ]
};

<AddressBook account={account} />
```

If the`AddressBook` is provided a `validatedValue`, the address review view will display.
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
    fullName: "Salvos Seafood",
    postal: "70047",
    region: "LA",
    phone: "(504) 393-7303"
  },
  validatedValue: {
    address1: "7742 Hwy 23",
    address2: "",
    country: "US",
    city: "Belle Chasse",
    fullName: "Salvos Seafood",
    postal: "70037",
    region: "LA",
    phone: "(504) 393-7303"
  }
};

<AddressBook {...props} />
```

#### Example implementation
Simple `AddressBook` example with two saved addresses.
```jsx
const salvos =  {
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

const oceanBasket = {
  _id: "2",
  address1: "35 Akin Adesola St",
  address2: "",
  country: "NG",
  city: "Lagos",
  fullName: "Ocean Basket Victoria Island",
  postal: "101241",
  region: "Victoria Island",
  phone: "234 816 059 1821"
};

initialState = { isSaving: false, account: { addressBook: [ salvos, oceanBasket ] } };

function findAddressByID(_id) {
  return state.account.addressBook.find(
    ({ _id: addressBookID }) => addressBookID === _id
  );
}

function findAddressIndex(address) {
  return state.account.addressBook.indexOf(address);
}

function addAddress(newAddress) {
  return new Promise((resolve, reject) => {
    setState({ isSaving: true });
    setTimeout(
      () => {
        const { account: { addressBook } } = state;
        const randID = Math.floor(Math.random() * 1000) + 1;

        setState({
          isSaving: false,
          account: {
            addressBook: [...addressBook, { ...newAddress, _id: String(randID) }]
          }
        });

        console.log("address added", newAddress);
        resolve(newAddress);
      },
      2000,
      { newAddress }
    );
  });
}

function deleteAddress(_id) {
  return new Promise((resolve, reject) => {
    setState({ isSaving: true });
    setTimeout(
      () => {
        const { account: { addressBook } } = state;
        const addressIndex = findAddressIndex(findAddressByID(_id));

        setState({
          isSaving: false,
          account: {
            addressBook: [
              ...addressBook.slice(0, addressIndex),
              ...addressBook.slice(addressIndex + 1)
            ]
          }
        });

        console.log("address deleted", _id);
        resolve(_id);
      },
      2000,
      { _id }
    );
  });
}

function editAddress(_id, editedAddress) {
  return new Promise((resolve, reject) => {
    setState({ isSaving: true });
    setTimeout(
      () => {
        const { account: { addressBook } } = state;
        const oldAddress = findAddressByID(_id);
        const updatedAddress = { ...oldAddress, ...editedAddress };
        const addressIndex = findAddressIndex(oldAddress);

        setState({
          isSaving: false,
          account: {
            addressBook: [
              ...addressBook.slice(0, addressIndex),
              ...updatedAddress,
              ...addressBook.slice(addressIndex + 1)
            ]
          }
        });

        console.log("address updated", updatedAddress);
        resolve(_id);
      },
      2000,
      { _id }
    );
  });
}

<AddressBook {...state} onAddressAdded={addAddress} onAddressDeleted={deleteAddress} onAddressEdited={editAddress} />
```

### Theme

See [AccordionFormList](./#!/AccordionFormList) and [AddressForm](./#!/AddressForm) theme documentation.
