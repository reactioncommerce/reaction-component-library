### CartItem Overview

#### General Usage

#### Component Usage

```jsx
<CartItem
  components={{
    CartItemDetailComponent: () => "Cart Item Detail",
    CartItemStockWarningComponent: StockWarning,
    CartItemPriceComponent: Price,
    CartItemQuantityInputComponent: () => "Quantity Input"
  }}
  item={{ prop: "value" }}
/>
```
