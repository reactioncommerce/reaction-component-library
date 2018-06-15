### StockWarning

#### Overview
The `StockWarning` displays a low inventory warning when the `isLowInventoryQuantity` prop is true.

#### An inventory warning will be rendered when the `isLowInventoryQuantity` prop is `true`
```jsx
  <StockWarning inventoryQuantity={10} isLowInventoryQuantity={true} />
```

#### It's not rendered when a product has a normal inventory level
```jsx
  <StockWarning inventoryQuantity={10} isLowInventoryQuantity={false} />
```
