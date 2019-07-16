### Overview
The `CatalogGrid` component creates a responsive grid that displays `CatalogGridItem`s.

### Usage

#### Default - responsive grid
`CatalogGrid` automatically adjusts itself based on the width of its container. This ensures
that products always render appropriately regardless of where the grid is rendered.

```js noeditor
// Import mock products behind the scenes
products = require("./__mocks__/products").default; ""
```

```jsx
<CatalogGrid products={products} onItemClick={(event, product) => {
  event.preventDefault();
  console.log(product.title);
}} />
```

#### Fixed-width container, 1 product per row (325px width)

```jsx
<div style={{ width: 325, borderWidth: 1, borderColor: "black", borderStyle: "solid", margin: "0 auto" }}>
  <CatalogGrid products={products} />
</div>
```

#### Fixed-width container, 2 per row (450px width)

```jsx
<div style={{ width: 450, borderWidth: 1, borderColor: "black", borderStyle: "solid", margin: "0 auto" }}>
  <CatalogGrid products={products} />
</div>
```

#### Fixed-width container, 3 per row (650px width)

```jsx
<div style={{ width: 650, borderWidth: 1, borderColor: "black", borderStyle: "solid", margin: "0 auto" }}>
  <CatalogGrid products={products} />
</div>
```

#### Fixed-width container, 4 per row (960px width)

```jsx
<div style={{ width: 960, borderWidth: 1, borderColor: "black", borderStyle: "solid", margin: "0 auto" }}>
  <CatalogGrid products={products} />
</div>
```

#### Custom placeholder image
By default, `CatalogGrid` expects a placeholder image to be located at /resources/placeholder.gif.
Specify the `placeholderImageURL` to override:

```js static
// Clone products and remove images
const productsWithoutImages = products.slice().map((product) => {
  const clonedProduct = Object.assign({}, product);
  clonedProduct.primaryImage = null;
  return clonedProduct;
});
```

```jsx
const productsWithoutImages = products.slice().map((product) => {
  const clonedProduct = Object.assign({}, product);
  clonedProduct.primaryImage = null;
  return clonedProduct;
});

<CatalogGrid
  placeholderImageURL="/images/placeholder.gif"
  products={productsWithoutImages}
/>
```

#### Custom badge labels

```jsx
<CatalogGrid
  products={products}
  badgeLabels={{
    BACKORDER: "Back Order!",
    BESTSELLER: "Best-selling Product",
    LOW_QUANTITY: "Only few left!",
    SOLD_OUT: "None Left",
    SALE: "Limited-time Sale"
  }}
/>
```

##### Cover vs contain fit
Catalog automatically chooses the image fit based on image dimensions. Cover is used if the image is landscape, and contain if portrait.

```jsx
<CatalogGrid
  products={[{
    title: "Landscape",
    slug: "landscape",
    vendor: "Reaction",
    primaryImage: {
      URLs: {
        large: "/images/landscape/large.jpg",
        medium: "/images/landscape/medium.jpg",
        small: "/images/landscape/small.png",
        thumbnail: "/images/landscape/thumbnail.png"
      }
    },
    pricing: [{
      currency: {
        code: "USD"
      },
      compareAtPrice: null,
      price: 15,
      displayPrice: "$15.00"
    }],
    isSoldOut: false,
    isBackorder: false,
    isOnSale: false,
    isLowQuantity: false,
    isBestseller: false
  },
  {
    title: "Portrait",
    slug: "portrait",
    vendor: "Reaction",
    primaryImage: {
      URLs: {
        large: "/images/portrait/large.jpg",
        medium: "/images/portrait/medium.jpg",
        small: "/images/portrait/small.png",
        thumbnail: "/images/portrait/thumbnail.png"
      }
    },
    pricing: [{
      currency: {
        code: "USD"
      },
      compareAtPrice: null,
      price: 15,
      displayPrice: "$15.00"
    }],
    isSoldOut: false,
    isBackorder: false,
    isOnSale: false,
    isLowQuantity: false,
    isBestseller: false
  }]}
/>
```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop                         | Default     | Description                                                                              |
| ---------------------------------- | ----------- | ---------------------------------------------------------------------------------------- |
| `CatalogGrid.fourPerRowMinWidth` | 960px | The component width at which it should switch from rendering three items per row to rendering four items per row |
| `CatalogGrid.threePerRowMinWidth` | 650px | The component width at which it should switch from rendering two items per row to rendering three items per row |

#### Typography

None
