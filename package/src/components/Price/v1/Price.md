### Overview
The `Price` component will be used anywhere a product's price is displayed.

### Usage

#### Default, without a Compare At price

```jsx
<div>
  <Price displayPrice="$300.00" />
</div>
```

#### With a price and Compare At price that are different

```jsx
<div>
  <Price displayPrice="$200.00" displayCompareAtPrice="$300.00" />
</div>
```

#### With a  price and Compare At price are the equal

The component expects string values of the prices to be strictly equal.

```jsx
<div>
  <Price displayPrice="$300.00" displayCompareAtPrice="$300.00" />
</div>
```

#### With the price below the Compare At price

```jsx
<div>
  <Price displayPrice="$200.00" displayCompareAtPrice="$300.00" hasPriceBottom />
</div>
```

### Theme

See [Theming Components](./#!/Theming%20Components).

#### Typography

- The price text uses `labelText` style with `rui_components.Price` override
- The comparison price text uses `labelText` style with `rui_components.PriceCompare` override
