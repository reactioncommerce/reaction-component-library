### Overview

The `RegionInput` component renders either a `Select` or `TextInput`, based on the number of region options.

### Usage

#### Input in a form

```jsx
const locales = {
  "NR": {
    "name": "Country Without Regions",
  },
  "WR": {
    "name": "Country With Regions",
    "states": {
      "AA": {
        "name": "A State"
      },
      "BB": {
        "name": "B State"
      }
    }
  }
};

<AddressForm isOnDarkBackground locales={locales} />
```

#### Input with a value

```jsx
<RegionInput isOnDarkBackground isReadOnly value="California" />
```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop | Default | Description |
