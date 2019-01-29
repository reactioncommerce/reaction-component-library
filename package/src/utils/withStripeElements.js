import React, { Component } from "react";
import { Elements } from "react-stripe-elements";

/**
 * @summary A HOC creator that wraps the component with `Elements` from react-stripe-elements
 * @param {React.Component|Function} WrappedComponent The component class or function to wrap
 * @returns {React.Component} Higher order component
 */
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
