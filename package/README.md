# @reactioncommerce/components

## Getting Started

```bash
npm install --save @reactioncommerce/components
```

or

```bash
yarn add @reactioncommerce/components
```

Then import a component:

```js
import Button from "@reactioncommerce/components/Button/v1";
```

Notice that you must specify what version of the component you want. If you update to a newer minor or patch release of the `@reactioncommerce/components` package, none of your components will change by default. You will also have to change where you import them from, for example, change `v1` to `v2`. Occasionally we will release a new major version of the package, and some of the older component versions may disappear.

In your HTML:

```html
// Font for display type
<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,700" rel="stylesheet">

// Font Awesome for icons
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.9/css/all.css" integrity="sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ" crossorigin="anonymous">
```