### Overview
Display CartItem title and attributes.

#### Usage

It can be used in Cart or in Mini Cart.

```jsx
const attributes = [{ label: "Color", value: "Red" }, { label: "Size", value: "Medium" }];
<CartItemDetail title="Amazing Product Title" productSlug="/product-slug" attributes={attributes} />
```

##### With Product Vendor
```jsx
const attributes = [{ label: "Color", value: "Red" }, { label: "Size", value: "Medium" }];
<CartItemDetail title="Amazing Product Title" productSlug="/product-slug" productVendor="Patagonia" attributes={attributes} />
```

##### In Mini Cart
```jsx
const attributes = [{ label: "Color", value: "Red" }, { label: "Size", value: "Medium" }];
<CartItemDetail title="Amazing Product Title" productSlug="/product-slug" productVendor="Patagonia" attributes={attributes} isMiniCart />
```
