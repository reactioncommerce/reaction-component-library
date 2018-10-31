### Overview
Display title and attributes of an item in a cart or order

### Usage

Used by [CartItem](./#!/CartItem), or can be used alone.

```jsx
const attributes = [{ label: "Color", value: "Red" }, { label: "Size", value: "Medium" }];
<CartItemDetail title="Amazing Product Title" productSlug="product-slug" attributes={attributes} />
```

#### With Product Vendor
```jsx
const attributes = [{ label: "Color", value: "Red" }, { label: "Size", value: "Medium" }];
<CartItemDetail title="Amazing Product Title" productSlug="product-slug" productVendor="Patagonia" attributes={attributes} />
```

#### With Quantity
```jsx
const attributes = [{ label: "Color", value: "Red" }, { label: "Size", value: "Medium" }];
<CartItemDetail title="Amazing Product Title" productSlug="product-slug" productVendor="Patagonia" attributes={attributes} quantity={3} />
```

#### In Mini Cart
```jsx
const attributes = [{ label: "Color", value: "Red" }, { label: "Size", value: "Medium" }];
<CartItemDetail title="Amazing Product Title" productSlug="product-slug" productVendor="Patagonia" attributes={attributes} isMiniCart />
```

#### With `ProductURLPath`
Pass a custom URL path into `productURLPath` to customize the product link:

- With a `productURLPath` of "products/"
```jsx
const attributes = [{ label: "Color", value: "Red" }, { label: "Size", value: "Medium" }];
<CartItemDetail title="Amazing Product Title" productSlug="product-slug" productURLPath="products/" productVendor="Patagonia" attributes={attributes} isMiniCart />
```

- With a longer `productURLPath`
```jsx
const attributes = [{ label: "Color", value: "Red" }, { label: "Size", value: "Medium" }];
<CartItemDetail title="Amazing Product Title" productSlug="product-slug" productURLPath="fall-winter/women/products" productVendor="Patagonia" attributes={attributes} isMiniCart />
```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop                         | Default     | Description                                                                              |
| ---------------------------------- | ----------- | ---------------------------------------------------------------------------------------- |
| `CartItemDetailTitle.color_focus`  | coolGrey300 | Color of the item detail title text when focused (overrides the value from `typography`) |
| `CartItemDetailTitle.marginTop`    | 0           | Margin above the item title                                                              |
| `CartItemDetailTitle.marginBottom` | 10px        | Margin below the item title                                                              |
| `CartItemDetailTitle.marginLeft`   | 0           | Margin left of the item title                                                            |
| `CartItemDetailTitle.marginRight`  | 0           | Margin right of the item title                                                           |

#### Typography

- The item title uses `headingTextBold` style with `rui_components.CartItemDetailTitle` override
- The attributes use `labelText` style with `rui_components.CartItemDetailAttributes` override
