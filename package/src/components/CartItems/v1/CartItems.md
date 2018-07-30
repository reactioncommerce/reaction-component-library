### Overview
This component renders a list of CartItems that are in a customers cart.

#### Usage

CartItems can be used in the Cart or the MiniCart.

#### In Cart

```jsx
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
  productVendor: "Patagonia",
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
  productVendor: "Patagonia",
  productSlug: "/product-slug",
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
