import React, { Component } from "react";
import { Elements } from "react-stripe-elements";

export default function withStripeElements(WrappedComponent) {
  return class extends Component {
    static displayName = "withStripeElements";

    render() {
      return (
        <Elements>
          <WrappedComponent {...this.props} />
        </Elements>
      );
    }
  };
}
