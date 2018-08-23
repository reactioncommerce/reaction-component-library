### Overview
The `CatalogGrid` component creates a responsive grid that displays `CatalogGridItem`s.

#### Usage

##### Default - responsive grid
`CatalogGrid` automatically adjusts itself based on the width of its container. This ensures
that products always render appropriately regardless of where the grid is rendered.

```js noeditor
  // Import mock products behind the scenes
  products = require("./__mocks__/products").default; ""
```

```jsx
  <CatalogGrid products={products} onItemClick={(event) => event.preventDefault()} />
```

##### Fixed-width container, 1 product per row (325px width)

```jsx
  <div style={{ width: 325, borderWidth: 1, borderColor: "black", borderStyle: "solid", margin: "0 auto" }}>
    <CatalogGrid products={products} />
  </div>
```

##### Fixed-width container, 2 per row (450px width)

```jsx
  <div style={{ width: 450, borderWidth: 1, borderColor: "black", borderStyle: "solid", margin: "0 auto" }}>
    <CatalogGrid products={products} />
  </div>
```

##### Fixed-width container, 3 per row (650px width)

```jsx
  <div style={{ width: 650, borderWidth: 1, borderColor: "black", borderStyle: "solid", margin: "0 auto" }}>
    <CatalogGrid products={products} />
  </div>
```

##### Fixed-width container, 4 per row (960px width)

```jsx
  <div style={{ width: 960, borderWidth: 1, borderColor: "black", borderStyle: "solid", margin: "0 auto" }}>
    <CatalogGrid products={products} />
  </div>
```

##### Custom placeholder image
By default, `CatalogGrid` expects a placeholder image to be located at /resources/placeholder.gif.
Specify the `placeholderImageURL` to override:

```js noeditor
  // Clone products and remove images
  productsWithoutImages = products.slice().map((product) => {
    const clonedProduct = Object.assign({}, product);
    clonedProduct.primaryImage = null;
    return clonedProduct;
  });""
```

```jsx
  <CatalogGrid
    placeholderImageURL="/images/placeholder.gif"
    products={productsWithoutImages}
  />
```
