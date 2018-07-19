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

## Adding an NPM Dependency

For a package imported by style guide code, add it with Yarn in the root package.json:

```bash
yarn add some-package
```

For a package imported by a component library component, add it with Yarn in the `package` folder package.json:

```bash
cd package
yarn add some-package
```

For a dev dependency, it's usually safest to add it to both package.json files.
