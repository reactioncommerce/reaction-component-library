### CartItems

### Overview
This component renders a list of items that are in a customers cart.

#### Basic Usage
```jsx
const items = [{
  _id: "123",
  attributes: [{ label: "vendor", value: "Patagonia" }, { label: "Color", value: "Red" }, { label: "Size", value: "Medium" }],
  currentQuantity: 3,
  imageUrl: "//placehold.it",
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
  imageUrl: "//placehold.it",
  isLowInventoryQuantity: false,
  price: {
    displayPrice: "$78.00"
  },
  productSlug: "/product-slug",
  title: "Another Great Product",
  quantity: 1
}];

const components = {
  CartItemComponent: CartItem,
  CartItemDetailComponent: CartItemDetail,
  CartItemStockWarningComponent: StockWarning,
  CartItemPriceComponent: Price,
  CartItemQuantityInputComponent: QuantityInput
};

<CartItems items={items} components={components} onChangeCartItemQuantity={(value) => console.log("cart items new quantity", value)} onRemoveItemFromCart={(_id) => console.log("cart items remove this item", _id)}/>
```


#### In Mini Cart
```jsx
const items = [{
  _id: "123",
  attributes: [{ label: "vendor", value: "Patagonia" }, { label: "Color", value: "Red" }, { label: "Size", value: "Medium" }],
  currentQuantity: 3,
  imageUrl: "//placehold.it",
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
  imageUrl: "//placehold.it",
  isLowInventoryQuantity: false,
  price: {
    displayPrice: "$78.00"
  },
  productSlug: "/product-slug",
  title: "Another Great Product",
  quantity: 1
}];

const components = {
  CartItemComponent: CartItem,
  CartItemDetailComponent: CartItemDetail,
  CartItemStockWarningComponent: StockWarning,
  CartItemPriceComponent: Price,
  CartItemQuantityInputComponent: QuantityInput
};

<CartItems items={items} components={components} onChangeCartItemQuantity={(value) => console.log("cart items new quantity", value)} onRemoveItemFromCart={(_id) => console.log("cart items remove this item", _id)} isMiniCart />
```
