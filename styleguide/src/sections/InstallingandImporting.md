## Install

With NPM:

```bash
npm install --save react@16.4.1 prop-types@15.6.2 styled-components@3.3.3 @reactioncommerce/components
```

With Yarn:

```bash
yarn add react@16.4.1 prop-types@15.6.2 styled-components@3.3.3 @reactioncommerce/components
```

Note that the minimum required React version is 16.4.1 because this package uses newer APIs like `createContext` and `forwardRef`. The `react`, `prop-types`, and `styled-components` packages are peer dependencies, which means that you must install the proper versions in your app. They are not included with this package.

### Verify Peer Dependencies

View the current list of `"peerDependencies"` in the `package.json` of the `@reactioncommerce/components` package, and make sure that you have installed them all in your app.

## Provide the Components Context

Most components in this library do not directly import other components in this library. Instead, they rely on the components being injected through a `components` prop or through a central components React context. While this makes it slightly more work to get going, you'll find it to be much nicer in the long run because you can update to new releases of this library without any fear of pulling in component changes (potentially appearance or behavior changes) that you don't expect.

Component injection also allows you to, for example, use a Button component from another library while still using any of our components that render buttons for you.

Check out the [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context) package documentation for details about how to provide this context. To get started quickly, you may start by using the following object as the `value` of your app's `ComponentsProvider`.

```jsx static
import React from "react";
import styled from "styled-components";
import AddressForm from "../../package/src/components/AddressForm/v1";
import Button from "../../package/src/components/Button/v1";
import CartItem from "../../package/src/components/CartItem/v1";
import CartItemDetail from "../../package/src/components/CartItemDetail/v1";
import CartItems from "../../package/src/components/CartItems/v1";
import CartSummary from "../../package/src/components/CartSummary/v1";
import CheckoutAction from "../../package/src/components/CheckoutAction/v1";
import CheckoutActionComplete from "../../package/src/components/CheckoutActionComplete/v1";
import CheckoutActionIncomplete from "../../package/src/components/CheckoutActionIncomplete/v1";
import ErrorsBlock from "../../package/src/components/ErrorsBlock/v1";
import Field from "../../package/src/components/Field/v1";
import MiniCartSummary from "../../package/src/components/MiniCartSummary/v1";
import PhoneNumberInput from "../../package/src/components/PhoneNumberInput/v1";
import Price from "../../package/src/components/Price/v1";
import QuantityInput from "../../package/src/components/QuantityInput/v1";
import Select from "../../package/src/components/Select/v1";
import StockWarning from "../../package/src/components/StockWarning/v1";
import spinner from "../../package/src/utils/spinner";
import TextInput from "../../package/src/components/TextInput/v1";

/* eslint-disable max-len */

const iconClear = (
  // credit: https://fontawesome.com/icons/times-circle?style=regular
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{ height: "100%", maxHeight: "100%", verticalAlign: "middle" }}
  >
    <path
      fill="#3c3c3c"
      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
    />
  </svg>
);

const iconError = (
  // credit: https://fontawesome.com/icons/exclamation-triangle?style=solid
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
  >
    <path
      fill="#cd3f4c"
      d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
    />
  </svg>
);

const iconValid = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    style={{ height: "100%", maxHeight: "100%", verticalAlign: "middle" }}
  >
    <g id="Symbols" fill="none" fillRule="evenodd">
      <g id="Text-field-/-@fill-states-/-validated-field" transform="translate(-342 -10)">
        <g id="Group" transform="translate(342 10)">
          <circle id="Oval" fill="#158562" cx="10" cy="10"
            r="10"
          />
          <path
            d="M9.09817861,10.8533939 L13.3817633,5.70835779 C13.5584492,5.49613933 13.8737186,5.46733456 14.085937,5.64402054 C14.0864297,5.64443069 14.0869215,5.64484179 14.0874126,5.64525384 L15.4038701,6.74989283 C15.6148323,6.92691118 15.6429374,7.24119179 15.4667318,7.45283332 L9.68800426,14.3936934 C9.51131828,14.6059119 9.19604894,14.6347167 8.98383048,14.4580307 C8.98333784,14.4576205 8.98284599,14.4572094 8.98235494,14.4567974 L7.66589745,13.3521584 C7.65157762,13.3401426 7.63810031,13.3274944 7.62547222,13.3142888 L4.59464425,10.7711222 C4.38310692,10.5936213 4.35551493,10.2782435 4.53301583,10.0667062 C4.53570056,10.0635066 4.53842527,10.0603409 4.54118933,10.0572096 L5.75381491,8.68348828 C5.9333307,8.48012404 6.24225889,8.45699274 6.45005744,8.63135642 L9.09817861,10.8533939 Z"
            id="Combined-Shape"
            fill="#FFF"
          />
        </g>
      </g>
    </g>
  </svg>
);

/* eslint-enable max-len */

export default {
  AddressForm,
  Button,
  CartItem,
  CartItemDetail,
  CartItems,
  CartSummary,
  CheckoutAction,
  CheckoutActionComplete,
  CheckoutActionIncomplete,
  ErrorsBlock,
  Field,
  iconClear,
  iconError,
  iconValid,
  MiniCartSummary,
  PhoneNumberInput,
  Price,
  QuantityInput,
  Select,
  spinner,
  StockWarning,
  TextInput
};
```

## Import

In your React component code:

```js static
import Button from "@reactioncommerce/components/Button/v1"
```

Notice that you must specify what version of the component you want. If you update to a newer minor or patch release of the `@reactioncommerce/components` package, none of your components will change by default. You will also have to change where you import them from, for example, change `v1` to `v2`. Occasionally we will release a new major version of the package, and some of the older component versions may disappear.

In your HTML:

```html
<!-- Font for display type -->
<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,700" rel="stylesheet">
```

## Updating

In the future, when there are new releases of `@reactioncommerce/components`, you will need to:

1. `npm update` the package
2. Update your components context with any new components that are now shown in the base example.
3. As you have time and need, update your components context to pull in newer versions of individual components.
