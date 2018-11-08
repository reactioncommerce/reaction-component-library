### Overview

The MiniCart is designed to show the cart in a dropdown menu or side panel throughout the application.

### Usage

#### Default

```jsx
const checkout = {
  summary: {
    itemTotal: {
      displayAmount: "$25.00"
    },
    taxTotal: {
      displayAmount: "$2.50"
    }
  }
}

const items = [
{
  _id: "123",
  attributes: [{ label: "Color", value: "Red" }, { label: "Size", value: "Medium" }],
  compareAtPrice: {
    displayAmount: "$45.00"
  },
  currentQuantity: 3,
  imageURLs: {
    small: "//placehold.it/150",
    thumbnail: "//placehold.it/100"
  },
  isLowQuantity: true,
  price: {
    displayAmount: "$20.00"
  },
  productSlug: "product-slug",
  productVendor: "Patagonia",
  title: "A Great Product",
  quantity: 2
},
{
  _id: "456",
  attributes: [{ label: "Color", value: "Black" }, { label: "Size", value: "10" }],
  currentQuantity: 500,
  imageURLs: {
    small: "//placehold.it/150",
    thumbnail: "//placehold.it/100"
  },
  isLowQuantity: false,
  price: {
    displayAmount: "$78.00"
  },
  productSlug: "product-slug",
  productVendor: "Patagonia",
  title: "Another Great Product",
  quantity: 1
}];

<MiniCart cart={{ checkout, items }} productURLPath="product/" onCheckoutButtonClick={() => alert("Checkout!")} />
```

### Custom Cart Checkout Button
Provide a custom checkout button via `props.components.CartCheckoutButton`, you can add this directly to the `MiniCart` within your app or just add your custom button to the `components-context`.
```jsx
const checkout = {
  summary: {
    itemTotal: {
      displayAmount: "$25.00"
    },
    taxTotal: {
      displayAmount: "$2.50"
    }
  }
}

const items = [
{
  _id: "123",
  attributes: [{ label: "Color", value: "Red" }, { label: "Size", value: "Medium" }],
  compareAtPrice: {
    displayAmount: "$45.00"
  },
  currentQuantity: 3,
  imageURLs: {
    small: "//placehold.it/150",
    thumbnail: "//placehold.it/100"
  },
  isLowQuantity: true,
  price: {
    displayAmount: "$20.00"
  },
  productSlug: "product-slug",
  productVendor: "Patagonia",
  title: "A Great Product",
  quantity: 2
},
{
  _id: "456",
  attributes: [{ label: "Color", value: "Black" }, { label: "Size", value: "10" }],
  currentQuantity: 500,
  imageURLs: {
    small: "//placehold.it/150",
    thumbnail: "//placehold.it/100"
  },
  isLowQuantity: false,
  price: {
    displayAmount: "$78.00"
  },
  productSlug: "product-slug",
  productVendor: "Patagonia",
  title: "Another Great Product",
  quantity: 1
}];

const CustomCartCheckoutButton = ({ onClick }) => (<button onClick={onClick} style={{width: "100%", padding: "10px", backgroundColor: "limegreen", font: "20px serif" }}>Custom</button>);

<MiniCart components={{CartCheckoutButton: CustomCartCheckoutButton}} cart={{ checkout, items }} productURLPath="product/" onCheckoutButtonClick={() => alert("Checkout!")} />

```

#### Scrolling

```jsx
const checkout = {
  summary: {
    itemTotal: {
      displayAmount: "$25.00"
    },
    taxTotal: {
      displayAmount: "$2.50"
    }
  }
}

const items = [{
  _id: "123",
  attributes: [{ label: "Color", value: "Red" }, { label: "Size", value: "Medium" }],
  compareAtPrice: {
    displayAmount: "$45.00"
  },
  currentQuantity: 3,
  imageURLs: {
    small: "//placehold.it/150",
    thumbnail: "//placehold.it/100"
  },
  isLowQuantity: true,
  price: {
    displayAmount: "$20.00"
  },
  productSlug: "product-slug",
  productVendor: "Patagonia",
  title: "A Great Product",
  quantity: 2
},
{
  _id: "456",
  attributes: [{ label: "Color", value: "Black" }, { label: "Size", value: "10" }],
  currentQuantity: 500,
  imageURLs: {
    small: "//placehold.it/150",
    thumbnail: "//placehold.it/100"
  },
  isLowQuantity: false,
  price: {
    displayAmount: "$78.00"
  },
  productSlug: "product-slug",
  productVendor: "Nike",
  title: "Another Great Product",
  quantity: 1
},
{
  _id: "789",
  attributes: [{ label: "Color", value: "White" }, { label: "Size", value: "Medium" }],
  currentQuantity: 3,
  imageURLs: {
    small: "//placehold.it/150",
    thumbnail: "//placehold.it/100"
  },
  isLowQuantity: false,
  price: {
    displayAmount: "$20.00"
  },
  productSlug: "product-slug",
  productVendor: "Everlane",
  title: "A Product",
  quantity: 2
},
{
  _id: "112",
  attributes: [{ label: "Color", value: "Black" }, { label: "Size", value: "10" }],
  currentQuantity: 500,
  imageURLs: {
    small: "//placehold.it/150",
    thumbnail: "//placehold.it/100"
  },
  isLowQuantity: false,
  price: {
    displayAmount: "$150.00"
  },
  productSlug: "product-slug",
   productVendor: "Greats",
  title: "Another Product",
  quantity: 1
}];

<MiniCart cart={{ checkout, items }}  onCheckoutButtonClick={() => alert("Checkout!")} />
```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop                            | Default | Description                                                    |
| ------------------------------------- | ------- | -------------------------------------------------------------- |
| `MiniCart.borderBottomColor`          | black10 | Border bottom color                                            |
| `MiniCart.borderBottomWidth`          | 1px     | Border bottom width                                            |
| `MiniCart.borderLeftColor`            | black10 | Border left color                                              |
| `MiniCart.borderLeftWidth`            | 1px     | Border left width                                              |
| `MiniCart.borderRightColor`           | black10 | Border right color                                             |
| `MiniCart.borderRightWidth`           | 1px     | Border right width                                             |
| `MiniCart.borderTopColor`             | black10 | Border top color                                               |
| `MiniCart.borderTopWidth`             | 1px     | Border top width                                               |
| `MiniCart.listHeightToBeginScrolling` | 420px   | The maximum height of the list area before it begins to scroll |
| `MiniCart.listPaddingBottom`          | 0       | Bottom padding for the list area                               |
| `MiniCart.listPaddingLeft`            | 10px    | Left padding for the list area                                 |
| `MiniCart.listPaddingRight`           | 10px    | Right padding for the list area                                |
| `MiniCart.listPaddingTop`             | 0       | Top padding for the list area                                  |
| `MiniCart.maxWidth`                   | 360px   | Maximum width of the component                                 |
| `MiniCartFooter.borderTopColor`       | black10 | Top border color of the footer                                 |
| `MiniCartFooter.borderTopWidth`       | 1px     | Top border width of the footer                                 |
| `MiniCartFooter.boxShadow_overflow`   | depth1  | Footer box shadow after list begins to scroll                  |
| `MiniCartFooter.boxShadow`            | depth0  | Footer box shadow before list begins to scroll                 |
| `MiniCartFooter.paddingBottom`        | 16px    | Footer bottom padding                                          |
| `MiniCartFooter.paddingLeft`          | 16px    | Footer left padding                                            |
| `MiniCartFooter.paddingRight`         | 16px    | Footer right padding                                           |
| `MiniCartFooter.paddingTop`           | 0       | Footer top padding                                             |
| `MiniCartFooterMessage.paddingBottom` | 0       | Footer message bottom padding                                  |
| `MiniCartFooterMessage.paddingLeft`   | 0       | Footer message left padding                                    |
| `MiniCartFooterMessage.paddingRight`  | 0       | Footer message right padding                                   |
| `MiniCartFooterMessage.paddingTop`    | 8px     | Footer message top padding                                     |

#### Typography

- The footer message text uses `captionText` style with `rui_components.MiniCartFooterMessage` override
