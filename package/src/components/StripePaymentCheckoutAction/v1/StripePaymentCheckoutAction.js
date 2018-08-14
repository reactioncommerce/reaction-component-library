import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { CustomPropTypes } from "../../../utils";

class StripePaymentCheckoutAction extends Component {
  static propTypes = {
    /**
     * If you've set up a components context using @reactioncommerce/components-context
     * (recommended), then this prop will come from there automatically. If you have not
     * set up a components context or you want to override one of the components in a
     * single spot, you can pass in the components prop directly.
     */
    components: PropTypes.shape({
      StripeForm: CustomPropTypes.component.isRequired
    }),
    isSaving: PropTypes.bool,
    /**
     * This callback will fired when the collected information is ready to by saved, 
     * and move to the next step
     */
    onReadyForSaveChange: PropTypes.func,
    /**
     * Status of the action component, the rendered UI will match the current status of the component.
     */
    status: PropTypes.oneOf(["active", "complete", "incomplete"])
  };

  static defaultProps = {
    onReadyForSaveChange() { }
  };


  static renderComplete = (stripePayment) => (
    <div>
      Visa ending in 0000
    </div>
  );

  state = {
    status: "active"
  };

  componentDidMount() {
    const { onReadyForSaveChange } = this.props;
    onReadyForSaveChange(true);
  }

  render() {
    const { components: { StripeForm } } = this.props;

    return (
      <Fragment>
        <StripeForm />
      </Fragment>
    );
  }
}

export default withComponents(StripePaymentCheckoutAction);
