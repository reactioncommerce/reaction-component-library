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

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop                                         | Default | Description                                                                             |
| -------------------------------------------------- | ------- | --------------------------------------------------------------------------------------- |
| `ShopLogo.height` | `auto` | The height of `ShopLogo`'s `img` tag, when providing a logo URL |

#### Typography

- The text rendered when there is not a logo uses `titleTextBold` style with `rui_components.ShopLogo` override

