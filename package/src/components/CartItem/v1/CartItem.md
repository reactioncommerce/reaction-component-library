### CartItem Overview

#### General Usage

#### Component Usage

```jsx
const item = {
  attributes: [{ value: "Patagonia" }, { label: "Color", value: "Red" }, { label: "Size", value: "Medium" }],
  currentQuantity: 3,
  imageUrl: "http://placehold.it",
  price: {
    displayPrice: "$20.00",
    compareAtPrice: "$45.00"
  },
  productSlug: "/product-slug",
  title: "A Great Product",
  quantity: 2
};

<CartItem
  components={{
    CartItemDetailComponent: CartItemDetail,
    CartItemStockWarningComponent: StockWarning,
    CartItemPriceComponent: Price,
    CartItemQuantityInputComponent: () => "Quantity Input"
  }}
  item={item}
/>
```
