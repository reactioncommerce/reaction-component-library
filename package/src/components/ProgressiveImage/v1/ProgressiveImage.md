### Overview

The ProgressiveImage component renders an image with a Medium/Instagram-like progressive loading effect. It also provides support for responsive images via the HTML `<picture />` tag.

### Usage

#### Simple image without progressive loading effect

ProgressiveImage can be used as a drop-in replacement for the HTML `<img />` tag.

```jsx
<div style={{ borderStyle: "dotted", borderWidth: "1px", borderColor: "#999999", width: 400 }}>
  <ProgressiveImage src="/storefront-component-library-logo.svg" alt="Reaction Storefront Component Library Logo" />
</div>
```

#### Image with progressive loading effect
Set the `presrc` prop to enable the progressive loading effect when the image is within 50x of the viewport.

```jsx
<div style={{ borderStyle: "dotted", borderWidth: "1px", borderColor: "#999999", width: 400 }}>
  <ProgressiveImage
    src="/images/sticker/medium.jpg"
    presrc="/images/sticker/small.png"
  />
</div>
```

#### Responsive image with progressive loading effect
To create a responsive image, set the `srcs` prop to an object that references small, medium, and large image URLs.

```jsx
<div style={{ borderStyle: "dotted", borderWidth: "1px", borderColor: "#999999", width: 400 }}>
  <ProgressiveImage
    presrc="/images/sticker/small.png"
    srcs={{
      large: "/images/sticker/large.jpg",
      medium: "/images/sticker/medium.jpg",
      small: "/images/sticker/small.png"
    }}
  />
</div>
```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop                         | Default     | Description                                                                              |
| ---------------------------------- | ----------- | ---------------------------------------------------------------------------------------- |
| `ProgressiveImage.backgroundColor` | white | Background color. Shows prior to the image appearing and potentially around the image if the image is not set to cover the whole component |

#### Typography

None
