### Overview

The `StripePaymentInput` component is intended to be used as the `InputComponent` for the `stripe_card` payment method in a Reaction client UI. Provide it in the `paymentMethods` array passed to the [PaymentsCheckoutAction](./#!/PaymentsCheckoutAction) component.

### Usage

```jsx
import Button from "../../Button/v1/Button";
class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isReady: false };
  }

  render() {
    return (
      <div>
        <StripePaymentInput
          ref={(ref) => { this.form = ref; }}
          onChange={(...args) => { console.log("onChange", ...args); }}
          onReadyForSaveChange={(isReady) => {
            console.log("onReadyForSaveChange", isReady);
            this.setState({ isReady });
          }}
          onSubmit={(doc) => { console.log("onSubmit", doc); }}
        />
        <Button isDisabled={!this.state.isReady} onClick={() => { this.form.submit(); }}>Submit</Button>
      </div>
    );
  }
}

<Example />
```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

#### Typography

- The "Your Information is private and secure" text uses `captionText` style with `rui_components.StripePaymentInputCaption` override
