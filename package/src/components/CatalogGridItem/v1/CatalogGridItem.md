### Overview
The `CatalogGridItem` component is used for displaying a product in a catalog.

### Usage

#### With product image
```jsx
<div style={{ borderStyle: "dotted", borderWidth: "1px", borderColor: "#999999", width: 400 }}>
  <CatalogGridItem
  placeholderImageURL="/resources/placeholder.gif"
    product={{
      title: "Basic Reaction Product",
      vendor: "Example Manufacturer",
      primaryImage: {
        URLs: {
          large: "/images/sticker/large.jpg",
          medium: "/images/sticker/medium.jpg",
          small: "/images/sticker/small.png",
          thumbnail: "/images/sticker/thumbnail.png"
        }
      },
      pricing: [{
        currency: {
          code: "USD"
        },
        compareAtPrice: null,
        price: 19.99,
        displayPrice: "$12.99 - $19.99"
      }],
      isSoldOut: false,
      isBackorder: false,
      isOnSale: false,
      isLowQuantity: false,
      isBestseller: true
    }}
    currencyCode="USD"
  />
</div>
```

#### With placeholder image
```jsx
<div style={{ borderStyle: "dotted", borderWidth: "1px", borderColor: "#999999", width: 400 }}>
  <CatalogGridItem
    placeholderImageURL="/images/placeholder.gif"
    product={{
      title: "Basic Reaction Product",
      vendor: "Example Manufacturer",
      primaryImage: null,
      pricing: [{
        currency: {
          code: "USD"
        },
        compareAtPrice: null,
        price: 19.99,
        displayPrice: "$12.99 - $19.99"
      }],
      isSoldOut: false,
      isBackorder: false,
      isOnSale: false,
      isLowQuantity: false,
      isBestseller: true
    }}
    currencyCode="USD"
  />
</div>
```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop                         | Default     | Description                                                                              |
| ---------------------------------- | ----------- | ---------------------------------------------------------------------------------------- |
| `CatalogGridItem.mediaBackgroundColor` | white | The background color for the media block |
| `CatalogGridItem.verticalSpacingBetweenImageAndInfo` | 10px | Vertical space between the bottom of the image and the top of the item info |

#### Typography

- The left column header uses `headingTextBold` style with `rui_components.CatalogGridItemProductTitle` override
- The left column header uses `labelText` style with `rui_components.CatalogGridItemProductVendor` override
