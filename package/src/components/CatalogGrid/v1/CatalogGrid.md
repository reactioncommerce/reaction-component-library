### Overview
The `CatalogGrid` component creates a responsive grid that displays `CatalogItem`s.

#### Usage

##### Grid with default min-width breakpoints (600px = 3 per row, 960px = 4 per row)
Note: displays best at full-width of page

```jsx
  <CatalogGrid
    placeholderImageURL="/images/placeholder.gif"
    products={[
      {
        title: "Product A",
        slug: "product-a",
        vendor: "Vendor A",
        primaryImage: {
          URLs: {
            large: "/images/responsive-sticker/large.jpg",
            medium: "/images/responsive-sticker/medium.jpg",
            small: "/images/responsive-sticker/small.png",
            thumbnail: "/images/responsive-sticker/thumbnail.png"
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
      },
      {
        title: "Product B",
        slug: "product-b",
        vendor: "Vendor B",
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
        isLowQuantity: true,
        isBestseller: false
      },
      {
        title: "Sticker",
        slug: "sticker",
        vendor: "Reaction",
        primaryImage: {
          URLs: {
            large: "/images/responsive-sticker/large.jpg",
            medium: "/images/responsive-sticker/medium.jpg",
            small: "/images/responsive-sticker/small.png",
            thumbnail: "/images/responsive-sticker/thumbnail.png"
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
        isSoldOut: true,
        isBackorder: false,
        isOnSale: false,
        isLowQuantity: false,
        isBestseller: false
      },
      {
        title: "Product C",
        slug: "product-c",
        vendor: "Vendor C",
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
        isBestseller: false
      },
    ]}
  />
```

##### Grid with custom min-width breakpoints (960px = 3 per row, 1280px = 4 per row)

```jsx
  <CatalogGrid
    threePerRowWidth={960}
    fourPerRowWidth={1280}
    placeholderImageURL="/images/placeholder.gif"
    products={[
      {
        title: "Product A",
        slug: "product-a",
        vendor: "Vendor A",
        primaryImage: {
          URLs: {
            large: "/images/responsive-sticker/large.jpg",
            medium: "/images/responsive-sticker/medium.jpg",
            small: "/images/responsive-sticker/small.png",
            thumbnail: "/images/responsive-sticker/thumbnail.png"
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
      },
      {
        title: "Product B",
        slug: "product-b",
        vendor: "Vendor B",
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
        isLowQuantity: true,
        isBestseller: false
      },
      {
        title: "Sticker",
        slug: "sticker",
        vendor: "Reaction",
        primaryImage: {
          URLs: {
            large: "/images/responsive-sticker/large.jpg",
            medium: "/images/responsive-sticker/medium.jpg",
            small: "/images/responsive-sticker/small.png",
            thumbnail: "/images/responsive-sticker/thumbnail.png"
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
        isSoldOut: true,
        isBackorder: false,
        isOnSale: false,
        isLowQuantity: false,
        isBestseller: false
      },
      {
        title: "Product C",
        slug: "product-c",
        vendor: "Vendor C",
        primaryImage: null,
        pricing: [{
          currency: {
            code: "USD"
          },
          compareAtPrice: null,
          price: 19.99,
          displayPrice: "$12.99 - $19.99"
        }],
        isSoldOut: true,
        isBackorder: false,
        isOnSale: false,
        isLowQuantity: false,
        isBestseller: false
      },
    ]}
  />
```
