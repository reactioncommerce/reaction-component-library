### Overview
Renders an overlay that displays a primary and secondary badge for a product, if appropriate.

#### Usage

##### Sold out
When sold out, the overlay and its children are faded to 50% visibility.

```jsx
<BadgeOverlay
  product={{
    isSoldOut: true,
    isBackorder: false,
    isOnSale: false,
    isLowQuantity: false,
    isBestseller: false
  }}
>
  <img src="/reaction-design-system-logo.svg" width="200" height="200" alt="Reaction Design System Logo" />
</BadgeOverlay>
```

##### Backorder

```jsx
<BadgeOverlay
  product={{
    isSoldOut: true,
    isBackorder: true,
    isOnSale: false,
    isLowQuantity: false,
    isBestseller: false
  }}
>
  <img src="/reaction-design-system-logo.svg" width="200" height="200" alt="Reaction Design System Logo" />
</BadgeOverlay>
```

##### On sale

```jsx
<BadgeOverlay
  product={{
    isSoldOut: false,
    isBackorder: false,
    isOnSale: true,
    isLowQuantity: false,
    isBestseller: false
  }}
>
  <img src="/reaction-design-system-logo.svg" width="200" height="200" alt="Reaction Design System Logo" />
</BadgeOverlay>
```

##### On sale with low quantity secondary badge

```jsx
<BadgeOverlay
  product={{
    isSoldOut: false,
    isBackorder: false,
    isOnSale: true,
    isLowQuantity: true,
    isBestseller: false
  }}
>
  <img src="/reaction-design-system-logo.svg" width="200" height="200" alt="Reaction Design System Logo" />
</BadgeOverlay>
```

##### On sale with best seller secondary badge

```jsx
<BadgeOverlay
  product={{
    isSoldOut: false,
    isBackorder: false,
    isOnSale: true,
    isLowQuantity: false,
    isBestseller: true
  }}
>
  <img src="/reaction-design-system-logo.svg" width="200" height="200" alt="Reaction Design System Logo" />
</BadgeOverlay>
```

##### Low quantity

```jsx
<BadgeOverlay
  product={{
    isSoldOut: false,
    isBackorder: false,
    isOnSale: false,
    isLowQuantity: true,
    isBestseller: false
  }}
>
  <img src="/reaction-design-system-logo.svg" width="200" height="200" alt="Reaction Design System Logo" />
</BadgeOverlay>
```

##### Low quantity with best seller secondary badge

```jsx
<BadgeOverlay
  product={{
    isSoldOut: false,
    isBackorder: false,
    isOnSale: false,
    isLowQuantity: true,
    isBestseller: true
  }}
>
  <img src="/reaction-design-system-logo.svg" width="200" height="200" alt="Reaction Design System Logo" />
</BadgeOverlay>
```

##### Best seller

```jsx
<BadgeOverlay
  product={{
    isSoldOut: false,
    isBackorder: false,
    isOnSale: false,
    isLowQuantity: false,
    isBestseller: true
  }}
>
  <img src="/reaction-design-system-logo.svg" width="200" height="200" alt="Reaction Design System Logo" />
</BadgeOverlay>
```
