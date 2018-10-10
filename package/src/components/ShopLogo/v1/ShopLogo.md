### Overview
Renders a shop's logo if a logo URL is provided, otherwise, it will render the shop's name.

### Usage

#### Default

```jsx
<ShopLogo shopLogoUrl="//placehold.it/60" shopName="Reaction" />
```

#### Without a logo

```jsx
<ShopLogo shopName="Reaction" />
```

### Theme

See [Theming Components](./#!/Theming%20Components).

#### Typography

- The text rendered when there is not a logo uses `titleTextBold` style with `rui_components.ShopLogo` override
