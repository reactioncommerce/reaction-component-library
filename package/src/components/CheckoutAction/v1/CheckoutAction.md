#### Overview
The CheckoutActionComplete component will show when a checkout action has been completed. It is a summary of the information inside the completed action.

#### Basic usage, `active` status
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
        components={{ChangeButton: Button}}
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

#### Basic usage, `complete` status
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
        components={{ChangeButton: Button}}
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

#### Basic usage, `incomplete` status
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
        components={{ChangeButton: Button}}
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

#### Passing in `label` or `stepNumber` props on an element to override default
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
        components={{ChangeButton: Button}}
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
