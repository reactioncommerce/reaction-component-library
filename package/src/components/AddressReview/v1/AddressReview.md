### Overview
#### Usage
The `AddressReview` is a simple form that requires two address objects, `addressEntered` and `addressSuggestion` will be used to create the `SelectableList` options. The "selected" address will be returned on submit.

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
  postal: "70037",
  region: "LA"
};

const props = { addressEntered, addressSuggestion };

<AddressReview {...props} />
```

##### Value
By default the suggested address is selected but it can easily be changed by pasing a `value` string of "entered" to pre select the entered address.
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
  postal: "70037",
  region: "LA"
};

const props = { addressEntered, addressSuggestion, value: "entered" };

<AddressReview {...props} />
```

#### Example implementation
Simple `AddressReview` example.
```jsx
import Button from "../../Button/v1/Button";
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
  postal: "70037",
  region: "LA"
};

class AddressExample extends React.Component {
  constructor(props) {
    super(props);
    this._addressForm;
    this.bindForm.bind(this);
  }

  bindForm(formEl) {
    if (formEl) {
      this._addressReview = formEl;
    }
  }

  render() {
    return (
      <div>
        <AddressReview
          ref={(formEl) => { this.bindForm(formEl) }}
          onSubmit={(selectAddress) => console.log("Address selected", selectAddress)}
          addressEntered={addressEntered}
          addressSuggestion={addressSuggestion}
        />
        <Button onClick={() => this._addressReview.submit()}>Submit</Button>
      </div>
    );
  }
}

<AddressExample />
```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop                     | Default | Description                            |
| ------------------------------ | ------- | -------------------------------------- |
| `AddressReview.formSpacingTop` | 40px    | Space between form and content above |

#### Typography

None
