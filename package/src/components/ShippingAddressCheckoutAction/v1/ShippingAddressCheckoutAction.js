import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { addTypographyStyles, CustomPropTypes } from "../../../utils";

const Title = styled.h3`
  ${addTypographyStyles("ShippingAddressCheckoutActionTitle", "subheadingTextBold")}
`;

const Address = styled.address`
  ${addTypographyStyles("ShippingAddressCheckoutActionAddress", "bodyText")}
`;

class ShippingAddressCheckoutAction extends Component {
  static propTypes = {
    /**
     * If you've set up a components context using
     * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
     * (recommended), then this prop will come from there automatically. If you have not
     * set up a components context or you want to override one of the components in a
     * single spot, you can pass in the components prop directly.
     */
    components: PropTypes.shape({
      /**
       * Pass either the Reaction AddressForm component or your own component that
       * accepts compatible props.
       */
      AddressForm: CustomPropTypes.component.isRequired
    }).isRequired,
    /**
     * Checkout data needed for form
     */
    fulfillmentGroup: PropTypes.shape({
      data: PropTypes.shape({
        shippingAddress: CustomPropTypes.address
      })
    }),
    /**
     * Is the shipping address being saved
     */
    isSaving: PropTypes.bool,
    /**
     * Label of workflow step
     */
    label: PropTypes.string.isRequired,
    /**
     * When action is ready for save call this prop method to
     * enable the save button with in the `CheckoutActions`
     */
    onReadyForSaveChange: PropTypes.func,
    /**
     * When an action form passes validation and submits
     * the value will be passed to this callback
     * this function needs to return a Promise
     * if being used with reacto-form
     */
    onSubmit: PropTypes.func,
    /**
     * Checkout process step number
     */
    stepNumber: PropTypes.number.isRequired
  };

  static defaultProps = {
    isSaving: false,
    onReadyForSaveChange() {}
  };

  state = {};

  _addressForm = null;

  submit = () => {
    this._addressForm.submit();
  };

  handleSubmit = async (value) => {
    const { onSubmit } = this.props;
    await onSubmit(value);
  };

  handleChange = (values) => {
    const { onReadyForSaveChange } = this.props;
    const isFilled = Object.keys(values).every((key) => (key === "address2" ? true : values[key] !== null));
    onReadyForSaveChange(isFilled);
  };

  render() {
    const { components: { AddressForm }, fulfillmentGroup, isSaving, label, stepNumber } = this.props;
    const shippingAddress = fulfillmentGroup ? fulfillmentGroup.data.shippingAddress : null;
    return (
      <Fragment>
        <Title>
          {stepNumber}. {label}
        </Title>
        <AddressForm
          ref={(formEl) => {
            this._addressForm = formEl;
          }}
          isSaving={isSaving}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          value={shippingAddress}
        />
      </Fragment>
    );
  }
}

const WrappedShippingAddressCheckoutAction = withComponents(ShippingAddressCheckoutAction);

// eslint-disable-next-line
WrappedShippingAddressCheckoutAction.renderComplete = ({ fulfillmentGroup: { data: { shippingAddress } } }) => (
  <Address>
    {shippingAddress.fullName}
    <br />
    {shippingAddress.address1}
    <br />
    {shippingAddress.address2 !== null && shippingAddress.address2 !== "" ? (
      <span>
        {shippingAddress.address2} <br />
      </span>
    ) : null}
    {shippingAddress.city}, {shippingAddress.region} {shippingAddress.postal} <br />
    {shippingAddress.country}
  </Address>
);

export default WrappedShippingAddressCheckoutAction;
