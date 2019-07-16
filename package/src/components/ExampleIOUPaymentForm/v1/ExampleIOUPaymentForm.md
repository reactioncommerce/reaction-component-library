### Overview

The `ExampleIOUPaymentForm` component is intended to be used as the `InputComponent` for the `iou_example` payment method in a Reaction client UI. Provide it in the `paymentMethods` array passed to the [PaymentsCheckoutAction](./#!/PaymentsCheckoutAction) component.

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
        <ExampleIOUPaymentForm
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
