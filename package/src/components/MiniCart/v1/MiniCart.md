### Overview

#### Usage

##### Default

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
  productSlug: "/product-slug",
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
  productSlug: "/product-slug",
  productVendor: "Patagonia",
  title: "Another Great Product",
  quantity: 1
}];

const components = {
  CartCheckoutButtonComponent: () => <Button actionType="important" isFullWidth>Checkout</Button>,
  CartSummaryComponent: MiniCartSummary,
  CartItemsComponent: CartItems,
  CartItemComponent: CartItem,
  CartItemDetailComponent: CartItemDetail,
  CartItemStockWarningComponent: StockWarning,
  CartItemPriceComponent: Price,
  CartItemQuantityInputComponent: QuantityInput
};

<MiniCart cart={{ checkout, items }} components={components} />
```

##### Scrolling

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
  productSlug: "/product-slug",
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
  productSlug: "/product-slug",
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
  productSlug: "/product-slug",
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
  productSlug: "/product-slug",
   productVendor: "Greats",
  title: "Another Product",
  quantity: 1
}];

const components = {
  CartCheckoutButtonComponent: () => <Button actionType="important" isFullWidth>Checkout</Button>,
  CartSummaryComponent: MiniCartSummary,
  CartItemsComponent: CartItems,
  CartItemComponent: CartItem,
  CartItemDetailComponent: CartItemDetail,
  CartItemStockWarningComponent: StockWarning,
  CartItemPriceComponent: Price,
  CartItemQuantityInputComponent: QuantityInput
};

<MiniCart cart={{ checkout, items }} components={components} />
```
