### CartItem Overview

#### General Usage

#### Component Usage

```jsx
const item = {
  attributes: [{ label: "Color", value: "Blue" }, { label: "Size", value: "Small" }],
  currentQuantity: 3,
  imageUrl: "http://placehold.it",
  price: {
    displayPrice: "$20.00",
    compareAtPrice: "$35.00"
  },
  productSlug: "/product-slug",
  title: "A Great Product",
  quantity: 2
};

<CartItem
  components={{
    CartItemDetailComponent: () => "Cart Item Detail",
    CartItemStockWarningComponent: StockWarning,
    CartItemPriceComponent: Price,
    CartItemQuantityInputComponent: () => "Quantity Input"
  }}
  item={item}
/>
```
