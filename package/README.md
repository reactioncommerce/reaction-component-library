# @reactioncommerce/components

## Getting Started

```bash
npm install --save react@16.4.2 prop-types@15.6.2 styled-components@3.3.3 reacto-form@0.0.2 @reactioncommerce/components-context@1.0.0 @reactioncommerce/components
```

or

```bash
yarn add react@16.4.2 prop-types@15.6.2 styled-components@3.3.3 reacto-form@0.0.2 @reactioncommerce/components-context@1.0.0 @reactioncommerce/components
```

Note that the minimum required React version is 16.4.1 because this package uses newer APIs like `createContext` and `forwardRef`. The `react`, `prop-types`, `@reactioncommerce/components-context`, `reacto-form`, and `styled-components` packages are peer dependencies, which means that you must install the proper versions in your app. They are not included with this package.

> If you use the `StripeForm` component, then you must also install `react-stripe-elements@2.0.1`. It is an optional peer dependency.

Then import a component:

```js
import Button from "@reactioncommerce/components/Button/v1";
```

Notice that you must specify what version of the component you want. If you update to a newer minor or patch release of the `@reactioncommerce/components` package, none of your components will change by default. You will also have to change where you import them from, for example, change `v1` to `v2`. Occasionally we will release a new major version of the package, and some of the older component versions may disappear.

In your HTML:

```html
// Font for display type
<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,600,700" rel="stylesheet">
```

## SVGs

Several components in this library use [Font Awesome](https://fontawesome.com/) icons in scalable vector graphic format (SVGs), under the [Font Awesome Free License](https://fontawesome.com/license/free).