### Overview
Renders a link with an onClick handler and text, icons, or any combination of React and HTML components

#### Usage

Simple text link without onClick handler:

```jsx
<Link href="http://google.com">Click here</Link>
```

Link with image and custom onClick handler:

```jsx
<Link href="http://google.com" onClick={() => alert("clicked")}>
  <img src="/reaction-design-system-logo.svg" width="200" height="200" alt="Reaction Design System Logo" />
</Link>
```

Link with onClick handler but no href:

```jsx
<Link onClick={() => alert("clicked")}>Click here</Link>
```
