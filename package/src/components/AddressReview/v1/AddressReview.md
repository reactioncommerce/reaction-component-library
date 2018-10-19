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
  fullName: "Salvos Seafood",
  postal: "70037",
  region: "LA",
  phone: "(504) 393-7303"
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
  fullName: "Salvos Seafood",
  postal: "70037",
  region: "LA",
  phone: "(504) 393-7303"
};

const props = { addressEntered, addressSuggestion, value: "entered" };

<AddressReview {...props} />
```

##### Warning Message
The displayed warning message can be changed by providing a `warningMessage` string as a prop. The text of this element respects line breaks via `\n` within the strings text.
```jsx
const addressEntered = {
  address1: "46 Avenue M",
  address2: "",
  country: "HT",
  city: "Port-au-Prince",
  fullName: "Yanvalou",
  postal: "6111",
  region: "OU",
  phone: "509 38 01 7051"
};

const addressSuggestion = {
  address1: "46 Avenue N",
  address2: "",
  country: "HT",
  city: "Port-au-Prince",
  fullName: "Yanvalou",
  postal: "6110",
  region: "OU",
  phone: "509 38 01 7051"
};

const props = { 
  addressEntered, 
  addressSuggestion, 
  warningMessage: "Adrès ou te antre a ka kòrèk oswa enkonplè.\n\nTanpri revize sijesyon nou anba a, epi chwazi ki vèsyon ou ta renmen itilize. Erè yo montre nan wouj." 
};

<AddressReview {...props} />
```

#### Example implamentation
Simple `AddressReview` example.
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

| Theme Prop           | Default | Description                                                                              |
| -------------------- | ------- | ---------------------------------------------------------------------------------------- |
| `AddressReview.warningMessageBorderColor` | yellow400   | Warning message border color |
| `AddressReview.warningMessageBorderStyle` | solid   | Warning message border style |
| `AddressReview.warningMessageBorderWidth` | 1px   | Warning message border width |
| `AddressReview.warningMessageBackgroundColor` | yellow100   | Warning message background color |
| `AddressReview.warningMessageColor` | yellow600  | Warning message color |
| `AddressReview.warningMessagePaddingBottom` | 14px   | Warning message bottom padding |
| `AddressReview.warningMessagePaddingLeft` | 20px   | Warning message left padding |
| `AddressReview.warningMessagePaddingRight` | 20px   | Warning message right padding |
| `AddressReview.warningMessagePaddingTop` | 14px   | Warning message top padding |
| `AddressReview.formSpacingTop` | 40px   | Space between form and warning message |

#### Typography

- The warning message text uses `labelText` style with `rui_components.WarningMessage` override
