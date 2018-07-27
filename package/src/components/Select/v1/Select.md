### Overview

Selects are form elements that allow the user to choose a single value from a set of options.

#### Usage

There are two basic types of selects: simple and searchable.

##### Simple select

The simple select can be used in cases where there are fewer than 10 options.

```jsx
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

<Select options={options} />
```

##### Searchable select

A searchable select should be used when there are more than 10 options or when the options are not known until the user starts typing.

```jsx
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

<Select options={options} isSearchable />
```

In cases where you want a smaller width for the select, set `maxWidth` property to a number of pixels based on how much space your longest option label needs.

```jsx
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

<Select options={options} maxWidth={150} />
```

#### States

A select can be in one of three states: normal, invalid, or valid. Normal state is as shown previously

##### Invalid state

When used within a form, a selected value might be deemed invalid, either because the user has not selected a value or because the user has selected a value that is not allowed based on other information entered in the same form. In this case, one or more error objects can be passed in the `errors` prop and will cause the select to appear as invalid.

```jsx
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

<Select name="flavor" options={options} errors={[{ name: "flavor", message: "Please choose one" }]} />
```

##### Valid state

When used within a form, a selected value might be deemed valid after its value has been checked. If the `errors` prop is empty and the `hasBeenValidated` prop is true and there is a selected value, the select will appear valid.

```jsx
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

<Select options={options} value="vanilla" hasBeenValidated />
```
