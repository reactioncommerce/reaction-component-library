### Overview

The `CheckoutAction` component wraps the `CheckoutActionComplete` and `CheckoutActionIncomplete` components.

#### Usage

##### Default: `Active` status

```jsx
const ActiveStepComp = () => <span>Active Component</span>;
const Address = (
  <div>
    Ms. Jane Doe<br />
    123 Main Street<br />
    Anytown, USA 01776
  </div>
);

<div>
  <CheckoutAction
    activeStepElement={<ActiveStepComp />}
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
    status="active"
    stepNumber={2}
  />
</div>
```

##### Default: `Complete` status
```jsx
const ActiveStepComp = () => <span>Active Component</span>;
const Address = (
  <div>
    Ms. Jane Doe<br />
    123 Main Street<br />
    Anytown, USA 01776
  </div>
);

<div>
  <CheckoutAction
    activeStepElement={<ActiveStepComp />}
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
    status="complete"
    stepNumber={2}
  />
</div>
```

##### Default: `Incomplete` status
```jsx
const ActiveStepComp = () => <span>Active Component</span>;
const Address = (
  <div>
    Ms. Jane Doe<br />
    123 Main Street<br />
    Anytown, USA 01776
  </div>
);

<div>
  <CheckoutAction
    activeStepElement={<ActiveStepComp />}
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
    status="incomplete"
    stepNumber={2}
  />
</div>
```

#### Action status labels
Each status can have its own label by using the `activeLabel, completeLabel, incompleteLabel` props.

```jsx
const ActiveStepComp = ({label, stepNumber}) => <span>{stepNumber}{label}: Active Component</span>;
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
    activeStepElement={<ActiveStepComp />}
    completeStepElement={
      <CheckoutActionComplete
        content={Address}
        onClickChangeButton={onClick}
      />
    }
    incompleteStepElement={
      <CheckoutActionIncomplete />
    }
    cart={{}}
    activeLabel="Active Label"
    completeLabel="Complete Label"
    incompleteLabel="Incomplete Label"
    isLoading={false}
    status="complete"
    stepNumber={2}
  />
</div>
```

#### Override default `label` or `stepNumber`
Passing `label` and `stepNumber` directly to each "status" component.
```jsx
const ActiveStepComp = () => <span>Active Component</span>;
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
    activeStepElement={<ActiveStepComp />}
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
    status="complete"
    stepNumber={2}
  />
</div>
```
