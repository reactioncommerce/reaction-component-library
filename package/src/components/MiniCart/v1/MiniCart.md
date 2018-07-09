### MiniCart

```jsx
const checkout = {
  summary: {
    subtotal: {
      displayAmount: "$25.00"
    },
    tax: {
      displayAmount: "$2.50"
    }
  }
}

const items = [
{
  _id: "123",
  attributes: [{ label: "vendor", value: "Patagonia" }, { label: "Color", value: "Red" }, { label: "Size", value: "Medium" }],
  currentQuantity: 3,
  imageUrl: "http://placehold.it",
  isLowInventoryQuantity: true,
  price: {
    displayPrice: "$20.00",
    compareAtPrice: "$45.00"
  },
  productSlug: "/product-slug",
  title: "A Great Product",
  quantity: 2
},
{
  _id: "456",
  attributes: [{ label: "vendor", value: "Nike" }, { label: "Color", value: "Black" }, { label: "Size", value: "10" }],
  currentQuantity: 500,
  imageUrl: "http://placehold.it",
  isLowInventoryQuantity: false,
  price: {
    displayPrice: "$78.00"
  },
  productSlug: "/product-slug",
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

```jsx
const checkout = {
  summary: {
    subtotal: {
      displayAmount: "$25.00"
    },
    tax: {
      displayAmount: "$2.50"
    }
  }
}

const items = [{
  _id: "123",
  attributes: [{ label: "vendor", value: "Patagonia" }, { label: "Color", value: "Red" }, { label: "Size", value: "Medium" }],
  currentQuantity: 3,
  imageUrl: "http://placehold.it",
  isLowInventoryQuantity: true,
  price: {
    displayPrice: "$20.00",
    compareAtPrice: "$45.00"
  },
  productSlug: "/product-slug",
  title: "A Great Product",
  quantity: 2
},
{
  _id: "456",
  attributes: [{ label: "vendor", value: "Nike" }, { label: "Color", value: "Black" }, { label: "Size", value: "10" }],
  currentQuantity: 500,
  imageUrl: "http://placehold.it",
  isLowInventoryQuantity: false,
  price: {
    displayPrice: "$78.00"
  },
  productSlug: "/product-slug",
  title: "Another Great Product",
  quantity: 1
},
{
  _id: "789",
  attributes: [{ label: "vendor", value: "Everlane" }, { label: "Color", value: "White" }, { label: "Size", value: "Medium" }],
  currentQuantity: 3,
  imageUrl: "http://placehold.it",
  isLowInventoryQuantity: false,
  price: {
    displayPrice: "$20.00"
  },
  productSlug: "/product-slug",
  title: "A Product",
  quantity: 2
},
{
  _id: "112",
  attributes: [{ label: "vendor", value: "Greats" }, { label: "Color", value: "Black" }, { label: "Size", value: "10" }],
  currentQuantity: 500,
  imageUrl: "http://placehold.it",
  isLowInventoryQuantity: false,
  price: {
    displayPrice: "$150.00"
  },
  productSlug: "/product-slug",
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
