### Overview
The `InventoryStatus` displays a low inventory warning when the `isLowQuantity` prop is true.

### Usage

An inventory warning will be rendered when the `isLowQuantity` prop is `true`, and does not render when a product has a normal inventory level.

#### Backorder
```jsx
  const productData = {
    isBackorder: true,
    isLowQuantity: true,
    isSoldOut: true,
    inventoryAvailableToSell: 0
  };

  <InventoryStatus product={productData} />
```

#### Low inventory
```jsx
  const productData = {
    isBackorder: false,
    isLowQuantity: true,
    isSoldOut: false,
    inventoryAvailableToSell: 4
  };

  <InventoryStatus product={productData} />
```

#### Regular inventory
```jsx
  const productData = {
    isBackorder: false,
    isLowQuantity: false,
    isSoldOut: false,
    inventoryAvailableToSell: 4
  };

  <InventoryStatus product={productData} />
```

#### Sold out
```jsx
  const productData = {
    isBackorder: false,
    isLowQuantity: true,
    isSoldOut: true,
    inventoryAvailableToSell: 0
  };

  <InventoryStatus product={productData} />
```

### Theme

See [Theming Components](./#!/Theming%20Components).

#### Typography

- The text uses `labelText` style with `rui_components.InventoryStatus` override
