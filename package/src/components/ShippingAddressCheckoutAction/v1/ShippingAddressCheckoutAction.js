import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withComponents } from "@reactioncommerce/components-context";
import { CustomPropTypes } from "../../../utils";

class ShippingAddressCheckoutAction extends Component {
  static propTypes = {
    /**
     * If you've set up a components context using @reactioncommerce/components-context
     * (recommended), then this prop will come from there automatically. If you have not
     * set up a components context or you want to override one of the components in a
     * single spot, you can pass in the components prop directly.
     */
    components: PropTypes.shape({
      /**
       * Pass either the Reaction AddressForm component or your own component that
       * accepts compatible props.
       */
      AddressForm: CustomPropTypes.component.isRequired,
      CheckoutAction: CustomPropTypes.component.isRequired,
      CheckoutActionComplete: CustomPropTypes.component.isRequired,
      CheckoutActionIncomplete: CustomPropTypes.component.isRequired
    }).isRequired,
    fullfillmentGroup: PropTypes.shape({
      data: PropTypes.shape({
        shippingAddress: PropTypes.object
      })
    }).isRequired,
    isSaving: PropTypes.bool,
    onReadyForSaveChange: PropTypes.func
  };

  static defaultProps = {
    onReadyForSaveChange() {}
  };

  state = {
    actionStatus: this.props.fullfillmentGroup.data.shippingAddress ? "complete" : "incomplete"
  };

  componentDidMount() {
    const { onReadyForSaveChange } = this.props;
    onReadyForSaveChange(true);
  }

  getFullfillmentData() {}

  renderActive() {
    const { components: { AddressForm } } = this.props;
    return <AddressForm />;
  }

  renderComplete() {
    const { components: { CheckoutActionComplete } } = this.props;
    return <CheckoutActionComplete />;
  }

  renderIncomplete() {
    const { components: { CheckoutActionIncomplete } } = this.props;
    return <CheckoutActionIncomplete />;
  }

  render() {
    const { components: { CheckoutAction } } = this.props;
    const { actionStatus } = this.state;
    return (
      <CheckoutAction
        status={actionStatus}
        label="Shipping Information"
        stepNumber={2}
        activeStepElement={this.renderActive()}
        completeStepElement={this.renderComplete()}
        incompleteStepElement={this.renderIncomplete()}
      />
    );
  }
}

export default withComponents(ShippingAddressCheckoutAction);
