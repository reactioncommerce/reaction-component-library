### CheckoutAction

#### Overview
The CheckoutActionComplete component will show when a checkout action has been completed. It is a summary of the information inside the completed action.

#### Basic usage, `active` status
```jsx
const cart = {};
const isLoading = false;
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
        onClickChangeButton={onClick}
      />
    }
    incompleteStepEomponent={
      <CheckoutActionIncomplete />
    }
    cart={cart}
    isLoading={isLoading}
    label="Shipping address"
    status="active"
    stepNumber={2}
  />
</div>
```

#### Basic usage, `complete` status
```jsx
const cart = {};
const isLoading = false;
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
        onClickChangeButton={onClick}
      />
    }
    incompleteStepEomponent={
      <CheckoutActionIncomplete />
    }
    cart={cart}
    isLoading={isLoading}
    label="Shipping address"
    status="complete"
    stepNumber={2}
  />
</div>
```

#### Basic usage, `incomplete` status
```jsx
const cart = {};
const isLoading = false;
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
        onClickChangeButton={onClick}
      />
    }
    incompleteStepEomponent={
      <CheckoutActionIncomplete />
    }
    cart={cart}
    isLoading={isLoading}
    label="Shipping address"
    status="incomplete"
    stepNumber={2}
  />
</div>
```
