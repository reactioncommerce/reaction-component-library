### Overview
The `CatalogGridItem` component is used for displaying a product in a catalog.

#### Usage

##### With product image
```jsx
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
```

##### With placeholder image
```jsx
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
```
