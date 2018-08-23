### Overview

The ProgressiveImage component renders an image with a Medium/Instagram-like progressive loading effect. It also provides support for responsive images via the HTML `<picture />` tag.

#### Usage

##### Simple image without progressive loading effect

ProgressiveImage can be used as a drop-in replacement for the HTML `<img />` tag.

```jsx
<ProgressiveImage src="/reaction-design-system-logo.svg" alt="Reaction Design System Logo" />
```

##### Image with progressive loading effect
Set the `presrc` prop to enable the progressive loading effect when the image is within 50x of the viewport.

```jsx
<ProgressiveImage
  src="/images/sticker/medium.jpg"
  presrc="/images/sticker/small.png"
/>
```

##### Responsive image with progressive loading effect
To create a responsive image, set the `srcs` prop to an object that references small, medium, and large image URLs.

```jsx
<ProgressiveImage
  presrc="/images/sticker/small.png"
  srcs={{
    large: "/images/sticker/large.jpg",
    medium: "/images/sticker/medium.jpg",
    small: "/images/sticker/small.png"
  }}
/>
```
