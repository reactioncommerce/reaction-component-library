# Component Development Guidelines

- Use ES6
- Include a `static propTypes = {};` at the top of the component class definition.
- Include a description comment above each propType property, wrapped in `/** */`. The style guide will automatically pull these in as the prop description in the Properties table.
- If the component takes and renders children, use `children: PropTypes.node` as the propType definition.
- If the component relies on a prop being set and cannot provide a defaultProp for it, add `.isRequired` to the prop type.
- Add `static defaultProps` below `static propTypes` if necessary.
- For all props that are `PropTypes.func`, define a default no-op function. You then do not have to check whether that prop exists before calling the function.
    ```js
    static defaultProps = {
      onClick() {}
    };
    ```
- Wrap all `onClick` handlers in the `preventAccidentalDoubleClick` function from `utils`. See the `Button` component for an example.

## [Component Theme](./styling-conventions.md)

## Using Other Components in a Component

If you are creating a component that renders other components within it, for example, a component with a button in it, you should not import those other components. Instead, have them passed in as props, and use the components context.

Read about the components context [here](https://github.com/reactioncommerce/components-context).

In general:

(1) Add a prop named `components` that expects an object with components in it by name. The names should exactly match our component names. Here's an example for `Button`:

```js
/**
 * If you've set up a components context using
 * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
 * (recommended), then this prop will come from there automatically. If you have not
 * set up a components context or you want to override one of the components in a
 * single spot, you can pass in the components prop directly.
 */
components: PropTypes.shape({
  /**
   * Pass either the Reaction Button component or your own component that is
   * compatible with ReactoForm.
   */
  Button: CustomPropTypes.component.isRequired,
}).isRequired,
```

- Use the same or similar comments as in the above example.
- Remove `.isRequired` if your component can render without it.

(2) Import withComponents and wrap your component

```js
import { withComponents } from "@reactioncommerce/components-context";

// ...

export default withComponents(SomeComponent);
```

This will merge components from a components context provider into the `components` prop so that they don't need to be passed in explicitly unless they need to be overridden in a specific instance.

(3) Use mockComponents in your tests

```js
import mockComponents from "../../../tests/mockComponents";
```

Everywhere you render your component in a Jest test function:

```js
<SomeComponent components={mockComponents}>
```

(4) Update appComponents and mockComponents

If you expect a component that has never been expected by another component before, add it in the following places:

- `/styleguide/src/appComponents.js`
- `/package/src/tests/mockComponents.js`
- `/styleguide/src/sections/InstallingandImporting.md` (this must match `appComponents.js` but with imports coming from the package)
