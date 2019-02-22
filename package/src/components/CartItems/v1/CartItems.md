### Overview
This component renders a list of CartItems that are in a customers cart.

### Usage

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
  productSlug: "product-slug",
  productVendor: "Patagonia",
  title: "A Great Product",
  quantity: 2,
  subtotal: {
    displayAmount: "$40.00",
  }
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
  quantity: 1,
  subtotal: {
    displayAmount: "$40.00",
  }
}];

const handleChangeCartItemQuantity = (value, _id) => console.log("cart items new quantity", value, "for item", _id);
const handleRemoveItemFromCart = (_id) => console.log("cart items remove this item", _id);

<CartItems
  items={items}
  productURLPath="product/"
  onChangeCartItemQuantity={handleChangeCartItemQuantity}
  onRemoveItemFromCart={handleRemoveItemFromCart}
/>
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
  productSlug: "product-slug",
  title: "A Great Product",
  quantity: 2,
  subtotal: {
    displayAmount: "$40.00",
  }
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
  quantity: 1,
  subtotal: {
    displayAmount: "$78.00",
  }
}];

const handleChangeCartItemQuantity = (value, _id) => console.log("cart items new quantity", value, "for item", _id);
const handleRemoveItemFromCart = (_id) => console.log("cart items remove this item", _id);

<CartItems
  isMiniCart
  items={items}
  onChangeCartItemQuantity={handleChangeCartItemQuantity}
  onRemoveItemFromCart={handleRemoveItemFromCart}
/>
```

#### Read-only list
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
  productSlug: "product-slug",
  title: "A Great Product",
  quantity: 2,
  subtotal: {
    displayAmount: "$40.00",
  }
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
}];

const handleChangeCartItemQuantity = (value, _id) => console.log("cart items new quantity", value, "for item", _id);
const handleRemoveItemFromCart = (_id) => console.log("cart items remove this item", _id);

<CartItems
  isReadOnly
  items={items}
  onChangeCartItemQuantity={handleChangeCartItemQuantity}
  onRemoveItemFromCart={handleRemoveItemFromCart}
/>
```

#### With `productURLPath`
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
  productSlug: "product-slug",
  title: "A Great Product",
  quantity: 2,
  subtotal: {
    displayAmount: "$40.00",
  }
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
}];

const handleChangeCartItemQuantity = (value, _id) => console.log("cart items new quantity", value, "for item", _id);
const handleRemoveItemFromCart = (_id) => console.log("cart items remove this item", _id);

<CartItems
  productURLPath="special/path/"
  items={items}
  onChangeCartItemQuantity={handleChangeCartItemQuantity}
  onRemoveItemFromCart={handleRemoveItemFromCart}
/>
```


### Theme

Refer to [CartItem](./#!/CartItem) theme

#### Typography

Refer to [CartItem](./#!/CartItem) theme
