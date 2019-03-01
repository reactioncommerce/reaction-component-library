#### Install

```bash
npm install --save react@16 prop-types styled-components@3 reacto-form @reactioncommerce/components-context @reactioncommerce/components
```

or

```bash
yarn add react@16 prop-types styled-components@3 reacto-form @reactioncommerce/components-context @reactioncommerce/components
```

Note that the minimum required React version is 16.4.1 because this package uses newer APIs like `createContext` and `forwardRef`. The `react`, `prop-types`, `@reactioncommerce/components-context`, `reacto-form`, and `styled-components` packages are peer dependencies, which means that you must install the proper versions in your app. They are not included with this package.

##### Verify Peer Dependencies

View the current list of `"peerDependencies"` in the `package.json` of the `@reactioncommerce/components` package, and make sure that you have installed them all in your app.

> If you use the `StripeForm` component, then you must also install `react-stripe-elements >= 2.0.1`. It is an optional peer dependency.

##### Tell Webpack 4 How to Handle .mjs Files

The `@reactioncommerce/components` package exports both CommonJS and EcmaScript modules. EcmaScript modules are newer and better in that they don't require transpiling for most newer browsers and they allow you to "tree shake" your app (remove unused package code while building).

Webpack 4 tries to use .mjs files, which are EcmaScript modules, if a package provides them. However, there is still mixed support for EcmaScript modules and when your app or a package mixes NPM packages with CommonJS and EcmaScript exports, errors can happen. If you see an error similar to `Can't import the named export 'Component' from non EcmaScript module` when building or starting your Webpack app, the solution is to add the following in your Webpack config `module.rules` array:

```jsx static
{
  test: /\.mjs$/,
  include: /node_modules/,
  type: "javascript/auto"
}
```

For a `create-react-app` app that hasn't been ejected, add `react-app-rewired` as a dev dependency, and in `package.json`, update the `start`, `build`, and `test` scripts to replace `react-scripts` with `react-app-rewired`:

```json
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test",
  "eject": "react-scripts eject"
},
```

Then paste this into a file in the project root directory named `config-overrides.js`:

```jsx static
module.exports = function override(webpackConfig) {
  webpackConfig.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: "javascript/auto"
  });

  return webpackConfig;
}
```

For a NextJS app, you can add this to the exported object in your `next.config.js` file:

```jsx static
webpack(webpackConfig) {
  webpackConfig.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: "javascript/auto"
  });

  return webpackConfig;
}
```

##### Provide the Components Context

Most components in this library do not directly import other components in this library. Instead, they rely on the components being injected through a `components` prop or through a central components React context. While this makes it slightly more work to get going, you'll find it to be much nicer in the long run because you can update to new releases of this library without any fear of pulling in component changes (potentially appearance or behavior changes) that you don't expect.

Component injection also allows you to, for example, use a Button component from another library while still using any of our components that render buttons for you.

Check out the [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context) package documentation for details about how to provide this context. To get started quickly, you may start by using the following object as the `value` of your app's `ComponentsProvider`. However, we recommend that you remove the imports for any components that aren't used by the components you use. (Refer to `components` prop documentation for each component you use.)

```jsx static
import iconClear from "@reactioncommerce/components/svg/iconClear";
import iconDismiss from "@reactioncommerce/components/svg/iconDismiss";
import iconError from "@reactioncommerce/components/svg/iconError";
import iconValid from "@reactioncommerce/components/svg/iconValid";
import iconExpand from "@reactioncommerce/components/svg/iconExpand";
import iconPlus from "@reactioncommerce/components/svg/iconPlus";
import iconAmericanExpress from "@reactioncommerce/components/svg/iconAmericanExpress";
import iconDiscover from "@reactioncommerce/components/svg/iconDiscover";
import iconLock from "@reactioncommerce/components/svg/iconLock";
import iconMastercard from "@reactioncommerce/components/svg/iconMastercard";
import iconVisa from "@reactioncommerce/components/svg/iconVisa";
import spinner from "@reactioncommerce/components/svg/spinner";
import Accordion from "@reactioncommerce/components/Accordion/v1";
import AccordionFormList from "@reactioncommerce/components/AccordionFormList/v1";
import AddressBook from "@reactioncommerce/components/AddressBook/v1";
import AddressForm from "@reactioncommerce/components/AddressForm/v1";
import AddressReview from "@reactioncommerce/components/AddressReview/v1";
import BadgeOverlay from "@reactioncommerce/components/BadgeOverlay/v1";
import Button from "@reactioncommerce/components/Button/v1";
import CartItem from "@reactioncommerce/components/CartItem/v1";
import CartItemDetail from "@reactioncommerce/components/CartItemDetail/v1";
import CartItems from "@reactioncommerce/components/CartItems/v1";
import CartSummary from "@reactioncommerce/components/CartSummary/v1";
import CatalogGrid from "@reactioncommerce/components/CatalogGrid/v1";
import CatalogGridItem from "@reactioncommerce/components/CatalogGridItem/v1";
import Checkbox from "@reactioncommerce/components/Checkbox/v1";
import CheckoutAction from "@reactioncommerce/components/CheckoutAction/v1";
import CheckoutActionComplete from "@reactioncommerce/components/CheckoutActionComplete/v1";
import CheckoutActionIncomplete from "@reactioncommerce/components/CheckoutActionIncomplete/v1";
import ErrorsBlock from "@reactioncommerce/components/ErrorsBlock/v1";
import Field from "@reactioncommerce/components/Field/v1";
import InlineAlert from "@reactioncommerce/components/InlineAlert/v1";
import InPageMenuItem from "@reactioncommerce/components/InPageMenuItem/v1";
import Link from "@reactioncommerce/components/Link/v1";
import MiniCartSummary from "@reactioncommerce/components/MiniCartSummary/v1";
import MultiSelect from "@reactioncommerce/components/MultiSelect/v1";
import PhoneNumberInput from "@reactioncommerce/components/PhoneNumberInput/v1";
import Price from "@reactioncommerce/components/Price/v1";
import ProfileImage from "@reactioncommerce/components/ProfileImage/v1";
import ProgressiveImage from "@reactioncommerce/components/ProgressiveImage/v1";
import QuantityInput from "@reactioncommerce/components/QuantityInput/v1";
import RegionInput from "@reactioncommerce/components/RegionInput/v1";
import Select from "@reactioncommerce/components/Select/v1";
import StockWarning from "@reactioncommerce/components/StockWarning/v1";
import StripeForm from "@reactioncommerce/components/StripeForm/v1";
import SelectableItem from "@reactioncommerce/components/SelectableItem/v1";
import SelectableList from "@reactioncommerce/components/SelectableList/v1";
import TextInput from "@reactioncommerce/components/TextInput/v1";


export default {
  Accordion,
  AccordionFormList,
  AddressBook,
  AddressForm,
  AddressReview,
  BadgeOverlay,
  Button,
  CartItem,
  CartItemDetail,
  CartItems,
  CartSummary,
  CatalogGrid,
  CatalogGridItem,
  Checkbox,
  CheckoutAction,
  CheckoutActionComplete,
  CheckoutActionIncomplete,
  ErrorsBlock,
  Field,
  iconClear,
  iconDismiss,
  iconError,
  iconExpand,
  iconPlus,
  iconValid,
  iconAmericanExpress,
  iconDiscover,
  iconLock,
  iconMastercard,
  iconVisa,
  InlineAlert,
  InPageMenuItem,
  Link,
  MiniCartSummary,
  MultiSelect,
  PhoneNumberInput,
  Price,
  ProfileImage,
  ProgressiveImage,
  QuantityInput,
  RegionInput,
  Select,
  spinner,
  StockWarning,
  StripeForm,
  SelectableItem,
  SelectableList,
  TextInput
};
```

#### Import

In your React component code:

```jsx static
import Button from "@reactioncommerce/components/Button/v1"
```

Notice that you must specify what version of the component you want. If you update to a newer minor or patch release of the `@reactioncommerce/components` package, none of your components will change by default. You will also have to change where you import them from, for example, change `v1` to `v2`. Occasionally we will release a new major version of the package, and some of the older component versions may disappear.

In your HTML:

```html
<!-- Font for display type -->
<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,600,700" rel="stylesheet">
```

#### Updating

In the future, when there are new releases of `@reactioncommerce/components`, you will need to:

1. `npm update` the package
2. Update your components context with any new components that are now shown in the base example.
3. As you have time and need, update your components context to pull in newer versions of individual components.
