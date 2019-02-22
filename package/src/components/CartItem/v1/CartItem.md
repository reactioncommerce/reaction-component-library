### Overview

This component will be used when there is a need to show an item that customer has added to their cart. A CartItem displays an item's image, name, quantity, price and attributes. CartItem can also display a compare at price and stock quantity warning label. A CartItem allows users to change the quantity of the item and remove the item.

### Usage

CartItem can be used in CartItems and also in MiniCart. It could be used in the future to show items that are within a "Wish List", "Saved for Later", or other customer generated lists of un-purchased products. There's potential that with a few modifications could be used to show Order Items, though the type and amount of information shown within an order item may be different enough to warrant a separate component.

#### Default

```jsx
const item = {
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
  subtotal: {
    displayAmount: "$40.00",
  },
  title: "A Great Product",
  quantity: 2,
};

<CartItem
  item={item}
  onChangeCartItemQuantity={(value, _id) => console.log("cart item quantity changed to", value, "for item", _id)}
  onRemoveItemFromCart={() => console.log("Item removed from cart")}
/>
```

#### Default: isMiniCart

```jsx
const item = {
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
  subtotal: {
    displayAmount: "$40.00",
  },
  title: "A Great Product",
  quantity: 2
};

<CartItem
  isMiniCart
  item={item}
  onChangeCartItemQuantity={(value, _id) => console.log("cart item quantity changed to", value, "for item", _id)}
  onRemoveItemFromCart={() => console.log("Item removed from cart")}
/>
```

#### Without Compare At Price
```jsx
const item = {
  _id: "123",
  attributes: [{ label: "Color", value: "Red" }, { label: "Size", value: "Medium" }],
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
};

<CartItem
  item={item}
  onChangeCartItemQuantity={(value, _id) => console.log("cart item quantity changed to", value, "for item", _id)}
  onRemoveItemFromCart={() => console.log("Item removed from cart")}
/>
```

#### Without Stock Warning
```jsx
const item = {
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
  isLowQuantity: false,
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
};

<CartItem
  item={item}
  onChangeCartItemQuantity={(value, _id) => console.log("cart item quantity changed to", value, "for item", _id)}
  onRemoveItemFromCart={() => console.log("Item removed from cart")}
/>
```

#### In Mini Cart
```jsx
const item = {
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
};

<CartItem
  isMiniCart
  item={item}
  onChangeCartItemQuantity={(value, _id) => console.log("cart item quantity changed to", value, "for item", _id)}
  onRemoveItemFromCart={() => console.log("Item removed from cart")}
/>
```

#### Read-only
```jsx
const item = {
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
};

<CartItem
  isMiniCart
  isReadOnly
  item={item}
  onChangeCartItemQuantity={(value, _id) => console.log("cart item quantity changed to", value, "for item", _id)}
  onRemoveItemFromCart={() => console.log("Item removed from cart")}
/>
```

#### With `productURLPath`

```jsx
const item = {
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
};

<CartItem
  item={item}
  productURLPath="product/path/here/"
  onChangeCartItemQuantity={(value, _id) => console.log("cart item quantity changed to", value, "for item", _id)}
  onRemoveItemFromCart={() => console.log("Item removed from cart")}
/>
```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop                           | Default     | Description                                                                 |
| ------------------------------------ | ----------- | --------------------------------------------------------------------------- |
| `CartItem.borderBottomColor`         | black05     | Color of the bottom border                                                  |
| `CartItem.borderBottomWidth`         | 1px         | Width of the bottom border                                                  |
| `CartItem.borderLeftColor`           | black05     | Color of the left border                                                    |
| `CartItem.borderLeftWidth`           | 0           | Width of the left border                                                    |
| `CartItem.borderRightColor`          | black05     | Color of the right border                                                   |
| `CartItem.borderRightWidth`          | 0           | Width of the right border                                                   |
| `CartItem.borderTopColor`            | black05     | Color of the top border                                                     |
| `CartItem.borderTopWidth`            | 0           | Width of the top border                                                     |
| `CartItem.imageContentSpacing`       | 16px        | Space between the item image and the other item content                     |
| `CartItem.paddingBottom`             | 16px        | Bottom padding                                                              |
| `CartItem.paddingLeft`               | 0           | Left padding                                                                |
| `CartItem.paddingRight`              | 0           | Right padding                                                               |
| `CartItem.paddingTop`                | 16px        | Top padding                                                                 |
| `CartItem.quantityInputSpacingAbove` | 12px        | Space between the quantity input and the content above it when `isMiniCart` |
| `CartItem.quantityInputSpacingBelow` | 8px         | Space between the quantity input and the content below it when `isMiniCart` |
| `CartItem.removeButtonColor_focus`   | coolGrey    | Color of the remove button when focused                                     |
| `CartItem.removeButtonColor`         | coolGrey400 | Color of the remove button when not focused                                 |
| `CartItem.removeButtonSpacingAbove`  | 8px         | Space between the remove button and the content above it                    |
| `CartItem.removeButtonSpacingBelow`  | 0           | Space between the remove button and the content below it                    |


#### Typography

- The remove button uses `labelText` style with `rui_components.CartItemRemoveButton` override
