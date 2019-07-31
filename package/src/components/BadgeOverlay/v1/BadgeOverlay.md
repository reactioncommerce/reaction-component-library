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
  <img src="/storefront-component-library-logo.svg" width="200" height="200" alt="Reaction Storefront Component Library logo" />
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
  <img src="/storefront-component-library-logo.svg" width="200" height="200" alt="Reaction Storefront Component Library logo" />
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
  <img src="/storefront-component-library-logo.svg" width="200" height="200" alt="Reaction Storefront Component Library" />
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
  <img src="/storefront-component-library-logo.svg" width="200" height="200" alt="Reaction Storefront Component Library" />
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
  <img src="/storefront-component-library-logo.svg" width="200" height="200" alt="Reaction Storefront Component Library" />
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
  <img src="/storefront-component-library-logo.svg" width="200" height="200" alt="Reaction Storefront Component Library" />
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
  <img src="/storefront-component-library-logo.svg" width="200" height="200" alt="Reaction Storefront Component Library" />
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
  <img src="/storefront-component-library-logo.svg" width="200" height="200" alt="Reaction Storefront Component Library" />
</BadgeOverlay>
```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop                                           | Default  | Description                                                                   |
|------------------------------------------------------|----------|-------------------------------------------------------------------------------|
| BadgeOverlay.fadedOpacity                            | 0.5      | Opacity of the entire component and its contents when the status is "soldOut" |
| BadgeOverlayPrimaryBadge.backgroundColor_backorder   | coolGrey | Label background color for the primary badge when the status is "backorder"   |
| BadgeOverlayPrimaryBadge.backgroundColor_bestseller  | teal     | Label background color for the primary badge when the status is "bestseller"  |
| BadgeOverlayPrimaryBadge.backgroundColor_lowQuantity | coolGrey | Label background color for the primary badge when the status is "lowQuantity" |
| BadgeOverlayPrimaryBadge.backgroundColor_sale        | red300   | Label background color for the primary badge when the status is "sale"        |
| BadgeOverlayPrimaryBadge.backgroundColor_soldOut     | coolGrey | Label background color for the primary badge when the status is "soldOut"     |
| BadgeOverlayPrimaryBadge.borderBottomLeftRadius      | 4px      | Bottom left corner border radius for the primary badge                        |
| BadgeOverlayPrimaryBadge.borderBottomRightRadius     | 4px      | Bottom right corner border radius for the primary badge                       |
| BadgeOverlayPrimaryBadge.borderTopLeftRadius         | 4px      | Top left corner border radius for the primary badge                           |
| BadgeOverlayPrimaryBadge.borderTopRightRadius        | 4px      | Top right corner border radius for the primary badge                          |
| BadgeOverlayPrimaryBadge.color_backorder             | white    | Label text color for the primary badge when the status is "backorder"         |
| BadgeOverlayPrimaryBadge.color_bestseller            | white    | Label text color for the primary badge when the status is "bestseller"        |
| BadgeOverlayPrimaryBadge.color_lowQuantity           | white    | Label text color for the primary badge when the status is "lowQuantity"       |
| BadgeOverlayPrimaryBadge.color_sale                  | white    | Label text color for the primary badge when the status is "sale"              |
| BadgeOverlayPrimaryBadge.color_soldOut               | white    | Label text color for the primary badge when the status is "soldOut"           |
| BadgeOverlayPrimaryBadge.offsetBottom                | auto     | The primary badge is absolutely positioned with this bottom offset            |
| BadgeOverlayPrimaryBadge.offsetLeft                  | 8px      | The primary badge is absolutely positioned with this left offset              |
| BadgeOverlayPrimaryBadge.offsetRight                 | auto     | The primary badge is absolutely positioned with this right offset             |
| BadgeOverlayPrimaryBadge.offsetTop                   | 8px      | The primary badge is absolutely positioned with this top offset               |
| BadgeOverlayPrimaryBadge.paddingBottom               | 4px      | Bottom padding for the primary badge                                          |
| BadgeOverlayPrimaryBadge.paddingLeft                 | 8px      | Left padding for the primary badge                                            |
| BadgeOverlayPrimaryBadge.paddingRight                | 8px      | Right padding for the primary badge                                           |
| BadgeOverlayPrimaryBadge.paddingTop                  | 4px      | Top padding for the primary badge                                             |
| BadgeOverlaySecondaryBadge.borderBottomLeftRadius    | 4px      | Bottom left corner border radius for the secondary badge                      |
| BadgeOverlaySecondaryBadge.borderBottomRightRadius   | 4px      | Bottom right corner border radius for the secondary badge                     |
| BadgeOverlaySecondaryBadge.borderTopLeftRadius       | 4px      | Top left corner border radius for the secondary badge                         |
| BadgeOverlaySecondaryBadge.borderTopRightRadius      | 4px      | Top right corner border radius for the secondary badge                        |
| BadgeOverlaySecondaryBadge.color                     | coolGrey | Label text color for the secondary badge                                      |
| BadgeOverlaySecondaryBadge.offsetBottom              | auto     | The secondary badge is absolutely positioned with this bottom offset          |
| BadgeOverlaySecondaryBadge.offsetLeft                | auto     | The secondary badge is absolutely positioned with this left offset            |
| BadgeOverlaySecondaryBadge.offsetRight               | 8px      | The secondary badge is absolutely positioned with this right offset           |
| BadgeOverlaySecondaryBadge.offsetTop                 | 8px      | The secondary badge is absolutely positioned with this top offset             |
| BadgeOverlaySecondaryBadge.paddingBottom             | 4px      | Bottom padding for the secondary badge                                        |
| BadgeOverlaySecondaryBadge.paddingLeft               | 8px      | Left padding for the secondary badge                                          |
| BadgeOverlaySecondaryBadge.paddingRight              | 8px      | Right padding for the secondary badge                                         |
| BadgeOverlaySecondaryBadge.paddingTop                | 4px      | Top padding for the secondary badge                                           |
