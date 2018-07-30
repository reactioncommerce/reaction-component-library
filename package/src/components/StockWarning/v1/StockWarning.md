### Overview
The `StockWarning` displays a low inventory warning when the `isLowInventoryQuantity` prop is true.

#### Usage

An inventory warning will be rendered when the `isLowInventoryQuantity` prop is `true`, and does not render when a product has a normal inventory level.

##### Low inventory
```jsx
  <StockWarning inventoryQuantity={10} isLowInventoryQuantity={true} />
```

##### Regular inventory
```jsx
  <StockWarning inventoryQuantity={10} isLowInventoryQuantity={false} />
```
