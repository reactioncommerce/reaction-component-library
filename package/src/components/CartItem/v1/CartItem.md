### CartItem 

#### Overview
This component will be used when there is a need to show an item that customer has added to their cart.
It could be used in the future to show items that are within a "Wish List", "Saved for Later", or other customer generated lists of un-purchased products. There's potential that with a few modifications could be used to show Order Items, though the type and amount of information shown within an order item may be different enough to warrant a separate component.

#### Basic Usage
```jsx
const item = {
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
};

<CartItem
  components={{
    CartItemDetailComponent: CartItemDetail,
    CartItemStockWarningComponent: StockWarning,
    CartItemPriceComponent: Price,
    CartItemQuantityInputComponent: QuantityInput
  }}
  item={item}
  onChangeCartItemQuantity={value => console.log("cart item quantity changed to", value)}
  onRemoveItemFromCart={() => console.log("Item removed from cart")}
/>
```

#### Without Compare At Price
```jsx
const item = {
  _id: "123",
  attributes: [{ label: "vendor", value: "Patagonia" }, { label: "Color", value: "Red" }, { label: "Size", value: "Medium" }],
  currentQuantity: 3,
  imageUrl: "http://placehold.it",
  isLowInventoryQuantity: true,
  price: {
    displayPrice: "$20.00"
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
    CartItemQuantityInputComponent: QuantityInput
  }}
  item={item}
  onChangeCartItemQuantity={value => console.log("cart item quantity changed to", value)}
  onRemoveItemFromCart={() => console.log("Item removed from cart")}
/>
```

#### Without Stock Warning
```jsx
const item = {
  _id: "123",
  attributes: [{ label: "vendor", value: "Patagonia" }, { label: "Color", value: "Red" }, { label: "Size", value: "Medium" }],
  currentQuantity: 3,
  imageUrl: "http://placehold.it",
  isLowInventoryQuantity: false,
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
    CartItemQuantityInputComponent: QuantityInput
  }}
  item={item}
  onChangeCartItemQuantity={value => console.log("cart item quantity changed to", value)}
  onRemoveItemFromCart={() => console.log("Item removed from cart")}
/>
```
