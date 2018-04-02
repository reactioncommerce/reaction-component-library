With NPM:

```bash
npm install --save @reactioncommerce/components
```

With Yarn:

```bash
yarn add @reactioncommerce/components
```

In your React component code:

```js static
import { Button } from "@reactioncommerce/components/v1"
```

Notice that you must specify what version of the component you want. If you update to a newer minor or patch release of the `@reactioncommerce/components` package, none of your components will change by default. You will also have to change where you import them from, for example, change `v1` to `v2`. Occasionally we will release a new major version of the package, and some of the older component versions may disappear.

TODO... explain how to tree shake
