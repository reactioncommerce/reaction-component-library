### Price

#### Overview
The `Price` component will be used anywhere a product's price is displayed.

#### Basic usage without a compare at price.
```jsx
<div>
  <Price displayPrice="$300.00" />
</div>
```

#### Usage with a price and compare at price that are different.
```jsx
<div>
  <Price displayPrice="$200.00" displayCompareAtPrice="$300.00" />
</div>
```

#### What is displayed if the price and compare at price are the equal.
The component expects string values of the prices to be strictly equal.
```jsx
<div>
  <Price displayPrice="$300.00" displayCompareAtPrice="$300.00" />
</div>
```

#### Usage with the price below the compare at price.
```jsx
<div>
  <Price displayPrice="$200.00" displayCompareAtPrice="$300.00" hasPriceBottom />
</div>
```
