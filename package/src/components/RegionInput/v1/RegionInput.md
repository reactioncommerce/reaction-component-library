### Overview

The `RegionInput` component renders either a `Select` or `TextInput`, based on the number of region options.

### Usage

Use the `RegionInput` in a form with country and region locales. In the `AddressForm` component, for example, the form's `activeCountry` state, set by the country select, will trigger the `RegionInput` to appear as a plain text input or a dropdown of regions specified in a locale object or file.

Pass any related form input props, like `isReadOnly`, `placeholder`, `maxLength`, `name`, `id` and more through from the parent component into `RegionInput`. See [Select](./#!/Select) and [TextInput](./#!/TextInput) for more props.

#### With a value in a TextInput

```jsx
<RegionInput name="region" isOnDarkBackground isReadOnly value="California" />
```

#### With a value in a Select

```jsx
const options = [
  {
    "value": "AA",
    "label": "A State"
  },
  {
    "value": "BB",
    "label": "B State"
  }
];

<RegionInput name="region" options={options} value="BB" />
```

#### Implemented in an AddressForm

```jsx
import Button from "../../Button/v1/Button";
import AddressForm from "../../AddressForm/v1/AddressForm";
const locales = {
  "NR": {
    "name": "Country Without Regions",
  },
  "WR": {
    "name": "Country With Regions",
    "states": {
      "AA": {
        "name": "A State"
      },
      "BB": {
        "name": "B State"
      }
    }
  }
};

class AddressExample extends React.Component {
  constructor(props) {
    super(props);
    this._addressForm;
    this.bindForm.bind(this);
  }

  bindForm(formEl) {
    if (formEl) {
      this._addressForm = formEl;
    }
  }

  render() {
    return (
      <div>
        <AddressForm
          locales={locales}
          ref={(formEl) => { this.bindForm(formEl) }}
          onSubmit={(address) => console.log("Address submitted", address)}
        />
        <Button onClick={() => this._addressForm.submit()}>Submit</Button>
      </div>
    );
  }
}

<AddressExample />
```

### Theme

Refer to [Select](./#!/Select), [TextInput](./#!/TextInput) and [AddressForm](./#!/AddressForm) themes.
