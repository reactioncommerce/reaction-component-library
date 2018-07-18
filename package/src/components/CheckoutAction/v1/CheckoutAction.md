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


const activeAction = "This is a placeholder for when we have active actions";

<div>
  <CheckoutAction
    ActiveStepComponent="Placeholder: active step isn't yet available"
    CompleteStepComponent={
      <CheckoutActionComplete
        components={{ChangeButton: Button}}
        label="Shipping address"
        content={Address}
        onClickChangeButton={onClick}
        stepNumber={2}
      />
    }
    IncompleteStepComponent={
      <CheckoutActionIncomplete
        label="Shipping address"
        stepNumber={2}
      />
    }
    cart={cart}
    components={CheckoutActionComplete}
    isLoading={isLoading}
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

const completeAction = (
  <CheckoutActionComplete
    components={{ChangeButton: Button}}
    label="Shipping address"
    content={Address}
    onClickChangeButton={onClick}
    stepNumber={2}
  />
);

<div>
  <CheckoutAction
    ActiveStepComponent="Placeholder: active step isn't yet available"
    CompleteStepComponent={
      <CheckoutActionComplete
        components={{ChangeButton: Button}}
        label="Shipping address"
        content={Address}
        onClickChangeButton={onClick}
        stepNumber={2}
      />
    }
    IncompleteStepComponent={
      <CheckoutActionIncomplete
        label="Shipping address"
        stepNumber={2}
      />
    }
    cart={cart}
    components={CheckoutActionComplete}
    isLoading={isLoading}
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


const incompleteAction = (
  <CheckoutActionIncomplete
    label="Shipping address"
    stepNumber={2}
  />
);

<div>
  <CheckoutAction
    ActiveStepComponent="Placeholder: active step isn't yet available"
    CompleteStepComponent={
      <CheckoutActionComplete
        components={{ChangeButton: Button}}
        label="Shipping address"
        content={Address}
        onClickChangeButton={onClick}
        stepNumber={2}
      />
    }
    IncompleteStepComponent={
      <CheckoutActionIncomplete
        label="Shipping address"
        stepNumber={2}
      />
    }
    cart={cart}
    components={CheckoutActionComplete}
    isLoading={isLoading}
    status="incomplete"
    stepNumber={2}
  />
</div>
```
