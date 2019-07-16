### Overview
The `AddressForm` component is based on the [Composable Form Spec](http://forms.dairystatedesigns.com/) and uses [reacto-form](http://forms.dairystatedesigns.com/reacto-form/) to handle form state and validation.

### Usage
The `AddressForm` is composed of several components: `Field`, `TextInput`, `Select`, `Button` and `ErrorsBlock` and allows for configuring selectable `regions` and `countries` objects.

```jsx
<AddressForm />
```

#### Locales
The `AddressForm` accepts a `locales` object that maps to the country and regions fields.
```jsx
const locales = {
  "ES": {
    "name": "Essos",
    "states": {
      "BV": {
        "name": "Brovos"
      },
      "MN": {
        "name": "Mareen"
      },
      "PT": {
        "name": "Pentos"
      },
      "VD": {
        "name": "Vaes Dothrak"
      },
      "VO": {
        "name": "Volantis"
      },
      "QA": {
        "name": "Qarth"
      }
    }
  },
  "SY": {
    "name": "Sothoryos",
  },
  "UT": {
    "name": "Ulthos",
  },
  "WS": {
    "name": "Westeros",
    "capital": "Kings Landing",
    "states": {
      "DN": {
        "name": "Dorne"
      },
      "II": {
        "name": "Iron Islands"
      },
      "KL": {
        "name": "The King's Lands"
      },
      "SL": {
        "name": "The Stormlands"
      },
      "TN": {
        "name": "The North"
      },
      "TV": {
        "name": "The Vale"
      }

    }
  }
};


<AddressForm locales={locales} />
```

##### Dynamic Locales
If you need to provide a large amount of locales to the form we suggest creating a higher order component that can dynamiclly load the locales from JSON.

```js static
// example HOC
import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "lodash.isempty";

const DEFAULT_LOCALES_PATH = "./utils/locales/locales.json";

export default function withLocales(ComponentWithLocales) {
  class WithLocales extends Component {
    static propTypes = {
      forwardRef: PropTypes.func,
      locales: PropTypes.object,
      localesPath: PropTypes.string
    };

    static defaultProps = {
      locales: {},
      localesPath: DEFAULT_LOCALES_PATH
    };

    state = {
      locales: this.props.locales
    };

    async componentDidMount() {
      const { locales: currentLocales } = this.state;
      if (isEmpty(currentLocales)) {
        await this.loadLocales().then((locales) => {
          this.setState({ locales });
        });
      }
    }

    async loadLocales() {
      const { localesPath } = this.props;
      let locales;
      try {
        locales = await import(`${localesPath}`);
      } catch (error) {
        locales = await import(`${DEFAULT_LOCALES_PATH}`);
      }
      return locales;
    }

    render() {
      const { locales } = this.state;
      return <ComponentWithLocales ref={this.props.forwardRef} {...this.props} locales={locales} />;
    }
  }

  return React.forwardRef((props, ref) => <WithLocales {...props} forwardRef={ref} />);
}
```

###### Dynamic Locales & Components Context
If you're using the [components-context](https://github.com/reactioncommerce/components-context) you can wrap the `AddressForm` with your locales HOC before you define it in the components context. This way any components using the `AddressForm` off of `props` will automatically have locales available.
```js static
import AddressForm from "@reactioncommerce/components/AddressForm/v1";
import withLocales from "./utils/withLocales.js";

const AddressFormWithLocales = withLocales(AddressForm);

export default {
  AddressForm: AddressFormWithLocales,
  ...
};
```

**Loading a default set of dynamic locales**

```jsx
const withLocales = require("../../../../../styleguide/src/components/withLocales").default;
const AddressFormWithLocales = withLocales(AddressForm);

<AddressFormWithLocales />
```

You can easily provide default locale options by passing each fields value down via props.

```jsx
const withLocales = require("../../../../../styleguide/src/components/withLocales").default;
const AddressFormWithLocales = withLocales(AddressForm);
const defaultValue = {
  country: "DE",
  region: "BE"
};

<AddressFormWithLocales value={defaultValue} />
```

**Loading a custom set of dynamic locales**

```jsx
const withLocales = require("../../../../../styleguide/src/components/withLocales").default;
const AddressFormWithLocales = withLocales(AddressForm);

<AddressFormWithLocales localesPath="./utils/locales/pottermore.json" />
```

#### Value
The `AddressForm` accepts a `value` object that maps to each field.
```jsx
const withLocales = require("../../../../../styleguide/src/components/withLocales").default;
const AddressFormWithLocales = withLocales(AddressForm);
const defaultValue = {
 address1: "7742 Hwy 23",
 address2: "",
 country: "US",
 city: "Belle Chasse",
 fullName: "Salvos Seafood",
 postal: "70037",
 region: "LA",
 phone: "(504) 393-7303"
};

<AddressFormWithLocales value={defaultValue} />
```

All `value` properties are optional.
```jsx
const withLocales = require("../../../../../styleguide/src/components/withLocales").default;
const AddressFormWithLocales = withLocales(AddressForm);
const defaultValue = {
 country: "US",
 city: "Belle Chasse",
 postal: "70037",
 region: "LA"
};

<AddressFormWithLocales value={defaultValue} />
```

If a selected country doesn't have any region options, the region field will render a `TextInput`.
```jsx
const withLocales = require("../../../../../styleguide/src/components/withLocales").default;
const AddressFormWithLocales = withLocales(AddressForm);
const defaultValue = {
 address1: "35 Akin Adesola St",
 address2: "",
 country: "NG",
 city: "Lagos",
 fullName: "Ocean Basket Victoria Island",
 postal: "101241",
 region: "Victoria Island",
 phone: "234 816 059 1821"
};

<AddressFormWithLocales value={defaultValue} />
```

#### With errors
The `AddressForm` can take an array of [error](http://forms.dairystatedesigns.com/user/errors/#errors) object and apply an error state to the approperate field.
```jsx
const errors = [{ message: "error message", name: "address1"}];

<AddressForm errors={errors} />
```

#### Address name field
You may want to save mutiple addresses, `shouldShowAddressNameField` renders a field so the user can "name" each address they enter. You can require the Address Name field by adding the `isAddressNameRequired` prop.
```jsx
<AddressForm
  addressNamePlaceholder="Headquarters"
  shouldShowAddressNameField
 />
```

#### Is commercial address field
Some `fulfillmentMethods` will charge a different shipping rate if shipping to a commercial address.
```jsx
<AddressForm shouldShowIsCommercialField />
```

#### Address Form Implementation Example
Simple `AddressForm` implementation example. Bind to the form element via a `ref` method that can be used by any `Button` to trigger `submit` & `validate` form methods.
```jsx
import Button from "../../Button/v1/Button";
initState = { isProcessing: false };
const withLocales = require("../../../../../styleguide/src/components/withLocales").default;
const AddressFormWithLocales = withLocales(AddressForm);
let _form = null;

const handleSubmit = (value) => new Promise((resolve, reject) => {
  setState({ isProcessing: true });
  setTimeout(async () => {
    console.log("Address saved", value);
    setState({ isProcessing: false });
    resolve(value)
  }, 2000);
});

<div>
  <AddressFormWithLocales ref={(formEl) => { _form = formEl; }} onSubmit={handleSubmit} />
  <Button onClick={() => { _form.submit(); }} isWaiting={state.isProcessing} >Submit</Button>
</div>
```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop           | Default | Description                                                                              |
| -------------------- | ------- | ---------------------------------------------------------------------------------------- |
| `rui_breakpoints.sm` | 320px   | Used to determine when the component begins to render two short fields on the same line. |
