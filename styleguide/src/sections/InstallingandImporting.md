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
import Button from "@reactioncommerce/components/Button/v1";
import CartItem from "@reactioncommerce/components/CartItem/v1";
import CartItemDetail from "@reactioncommerce/components/CartItemDetail/v1";
import CartItems from "@reactioncommerce/components/CartItems/v1";
import CartSummary from "@reactioncommerce/components/CartSummary/v1";
import ErrorsBlock from "@reactioncommerce/components/ErrorsBlock/v1";
import Field from "@reactioncommerce/components/Field/v1";
import MiniCartSummary from "@reactioncommerce/components/MiniCartSummary/v1";
import PhoneNumberInput from "@reactioncommerce/components/PhoneNumberInput/v1";
import Price from "@reactioncommerce/components/Price/v1";
import QuantityInput from "@reactioncommerce/components/QuantityInput/v1";
import Select from "@reactioncommerce/components/Select/v1";
import StockWarning from "@reactioncommerce/components/StockWarning/v1";
import spinner from "@reactioncommerce/components/utils/spinner";
import TextInput from "@reactioncommerce/components/TextInput/v1";

const FontIcon = styled.i`
  font-size: 1em;
  vertical-align: middle;
`;

const iconClear = <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" style={{ height: "100%", maxHeight: "100%", verticalAlign: "middle" }}><path d="M9.926 9.105l-2.105-2.105 2.105-2.105-0.82-0.82-2.105 2.105-2.105-2.105-0.82 0.82 2.105 2.105-2.105 2.105 0.82 0.82 2.105-2.105 2.105 2.105zM7 1.176c3.227 0 5.824 2.598 5.824 5.824s-2.598 5.824-5.824 5.824-5.824-2.598-5.824-5.824 2.598-5.824 5.824-5.824z" /></svg>;

export default {
  Button,
  CartItem,
  CartItemDetail,
  CartItems,
  CartSummary,
  ErrorsBlock,
  Field,
  iconClear,
  iconError: <FontIcon className="fas fa-exclamation-triangle" />,
  iconValid: (<FontIcon className="far fa-check-circle" />),
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

<!-- Font Awesome for icons -->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.9/css/all.css" integrity="sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ" crossorigin="anonymous">
```

## Updating

In the future, when there are new releases of `@reactioncommerce/components`, you will need to:

1. `npm update` the package
2. Update your components context with any new components that are now shown in the base example.
3. As you have time and need, update your components context to pull in newer versions of individual components.
