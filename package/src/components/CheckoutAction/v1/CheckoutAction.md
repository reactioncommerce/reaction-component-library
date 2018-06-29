### Overview

The `CheckoutAction` component wraps the `CheckoutActionComplete` and `CheckoutActionIncomplete` components.

#### Usage

##### Default: `Active` status

```jsx
const Address = (
  <div>
    Ms. Jane Doe<br />
    123 Main Street<br />
    Anytown, USA 01776
  </div>
);

<div>
  <CheckoutAction
    activeStepElement="Placeholder: active step isn't yet available"
    completeStepElement={
      <CheckoutActionComplete
        content={Address}
        onClickChangeButton={() => {}}
      />
    }
    incompleteStepElement={
      <CheckoutActionIncomplete />
    }
    cart={{}}
    isLoading={false}
    label="Shipping address"
    status="active"
    stepNumber={2}
  />
</div>
```

##### Default: `Complete` status
```jsx
const Address = (
  <div>
    Ms. Jane Doe<br />
    123 Main Street<br />
    Anytown, USA 01776
  </div>
);

<div>
  <CheckoutAction
    activeStepElement="Placeholder: active step isn't yet available"
    completeStepElement={
      <CheckoutActionComplete
        content={Address}
        onClickChangeButton={() => {}}
      />
    }
    incompleteStepElement={
      <CheckoutActionIncomplete />
    }
    cart={{}}
    isLoading={false}
    label="Shipping address"
    status="complete"
    stepNumber={2}
  />
</div>
```

##### Default: `Incomplete` status
```jsx
const Address = (
  <div>
    Ms. Jane Doe<br />
    123 Main Street<br />
    Anytown, USA 01776
  </div>
);

<div>
  <CheckoutAction
    activeStepElement="Placeholder: active step isn't yet available"
    completeStepElement={
      <CheckoutActionComplete
        content={Address}
        onClickChangeButton={() => {}}
      />
    }
    incompleteStepElement={
      <CheckoutActionIncomplete />
    }
    cart={{}}
    isLoading={false}
    label="Shipping address"
    status="incomplete"
    stepNumber={2}
  />
</div>
```

#### Override default `label` or `stepNumber`

```jsx
const onClick = () => {};
const Address = (
  <div>
    Ms. Jane Doe<br />
    123 Main Street<br />
    Anytown, USA 01776
  </div>
);

<div>
  <CheckoutAction
    activeStepElement="Placeholder: active step isn't yet available"
    completeStepElement={
      <CheckoutActionComplete
        content={Address}
        label="Label Override via props"
        onClickChangeButton={onClick}
        stepNumber={500}
      />
    }
    incompleteStepElement={
      <CheckoutActionIncomplete />
    }
    cart={{}}
    isLoading={false}
    label="Shipping address"
    status="complete"
    stepNumber={2}
  />
</div>
```
