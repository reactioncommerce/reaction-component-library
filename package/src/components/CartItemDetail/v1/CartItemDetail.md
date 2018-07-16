### CartItemDetail

#### Overview
Display CartItem title and attributes.

#### Basic Usage
```jsx
const attributes = [{ label: "Color", value: "Red" }, { label: "Size", value: "Medium" }];
<CartItemDetail title="Amazing Product Title" productSlug="/product-slug" attributes={attributes} />
```

#### With Vendor Attribute
If a `CartItemAttribute` has a label of `"vendor"` the `CartItemDetail` component will render the vendor value above the rest of the cart item attributes.
```jsx
const attributes = [{ label: "Color", value: "Red" }, { label: "Size", value: "Medium" }];
<CartItemDetail title="Amazing Product Title" productSlug="/product-slug" productVendor="Patagonia" attributes={attributes} />
```

#### In Mini Cart
```jsx
const attributes = [{ label: "Color", value: "Red" }, { label: "Size", value: "Medium" }];
<CartItemDetail title="Amazing Product Title" productSlug="/product-slug" productVendor="Patagonia" attributes={attributes} isMiniCart />
```
