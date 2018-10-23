import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { addTypographyStyles, CustomPropTypes } from "../../../utils";

const Title = styled.h3`
  ${addTypographyStyles("ShippingAddressCheckoutActionTitle", "subheadingTextBold")};
`;

const Address = styled.address`
  ${addTypographyStyles("ShippingAddressCheckoutActionAddress", "bodyText")};
`;

const ENTRY = "entry";
const REVIEW = "review";

class ShippingAddressCheckoutAction extends Component {
  static propTypes = {
    addressValidationResults: PropTypes.object,
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
      AddressForm: CustomPropTypes.component.isRequired,
      /**
       * Pass either the Reaction AddressReview component or your own component that
       * accepts compatible props.
       */
      AddressReview: CustomPropTypes.component.isRequired
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

  state = {
    status: !this.hasShippingAddressOnCart && this.hasValidationResults ? REVIEW : ENTRY
  };

  get hasShippingAddressOnCart() {
    const { fulfillmentGroup } = this.props;
    return !!(fulfillmentGroup && fulfillmentGroup.data.shippingAddress);
  }

  get hasValidationResults() {
    const { addressValidationResults } = this.props;
    return !!(
      addressValidationResults &&
      addressValidationResults.suggestedAddresses.length &&
      addressValidationResults.submittedAddress
    );
  }

  get isReady() {
    return false;
  }

  componentDidMount() {
    const { status } = this.state;
    if (!this.isReady && status === REVIEW) this.ready();
  }

  _form = null;

  submit = () => {
    this._form.submit();
  };

  ready = () => {
    const { onReadyForSaveChange } = this.props;
    onReadyForSaveChange(true);
  };

  handleSubmit = async (value) => {
    const { onSubmit } = this.props;
    await onSubmit(value);
  };

  handleChange = (values) => {
    const isFilled = Object.keys(values).every((key) => (key === "address2" ? true : values[key] !== null));
    if (isFilled) this.ready();
  };

  renderAddressReview() {
    const {
      addressValidationResults: { submittedAddress, suggestedAddresses },
      components: { AddressReview }
    } = this.props;
    return (
      <AddressReview
        ref={(formEl) => {
          this._form = formEl;
        }}
        addressEntered={submittedAddress}
        addressSuggestion={suggestedAddresses[0]}
        onSubmit={this.handleSubmit}
      />
    );
  }

  renderAddressForm() {
    const { components: { AddressForm }, fulfillmentGroup, isSaving } = this.props;
    const shippingAddress = fulfillmentGroup ? fulfillmentGroup.data.shippingAddress : null;
    return (
      <AddressForm
        ref={(formEl) => {
          this._form = formEl;
        }}
        isSaving={isSaving}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        value={shippingAddress}
      />
    );
  }

  render() {
    const { label, stepNumber } = this.props;
    const { status } = this.state;
    return (
      <Fragment>
        <Title>
          {stepNumber}. {label}
        </Title>
        {status === REVIEW ? this.renderAddressReview() : this.renderAddressForm()}
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
