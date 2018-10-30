import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import isEqual from "lodash.isequal";
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
    /**
     * Address validation results object
     */
    addressValidationResults: PropTypes.object,
    /**
     * Alert object provides alert into to InlineAlert.
     */
    alert: PropTypes.shape({
      /**
       * The type of alert: Error, Information, Success or Warning
       */
      alertType: PropTypes.oneOf(["error", "information", "success", "warning"]),
      /**
       * Alert message
       */
      message: PropTypes.string.isRequired,
      /**
       * Alert title, optional
       */
      title: PropTypes.string
    }),
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
      AddressReview: CustomPropTypes.component.isRequired,
      /**
       * Pass either the Reaction InlineAlert component or your own component that
       * accepts compatible props.
       */
      InlineAlert: CustomPropTypes.component.isRequired
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
    stepNumber: PropTypes.number.isRequired,
    /**
     * Address validation function.
     */
    validation: PropTypes.func
  };

  static defaultProps = {
    isSaving: false,
    onReadyForSaveChange() {}
  };

  state = {
    status: !this.hasShippingAddressOnCart && this.hasValidationResults ? REVIEW : ENTRY
  };

  componentDidMount() {
    if (this.inReview) this.ready();
  }

  componentDidUpdate({ addressValidationResults: prevValidationResults }) {
    const { addressValidationResults } = this.props;
    if (!isEqual(prevValidationResults, addressValidationResults) && this.inEntry) this.toggleStatus = REVIEW;
  }

  _form = null;

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

  get inEntry() {
    const { status } = this.state;
    return status === ENTRY;
  }

  get inReview() {
    const { status } = this.state;
    return status === REVIEW;
  }

  set toggleStatus(status) {
    this.setState({ status });
  }

  isFormFilled = (values) => Object.keys(values).every((key) => (key === "address2" ? true : values[key] !== null));

  submit = () => {
    this._form.submit();
  };

  ready = () => {
    const { onReadyForSaveChange } = this.props;
    onReadyForSaveChange(true);
  };

  handleSubmit = async (value) => {
    const { onSubmit, validation } = this.props;
    if (validation && this.inEntry) {
      await validation(value);
    } else {
      await onSubmit(value);
    }
  };

  handleChange = (values) => {
    if (this.isFormFilled(values)) this.ready();
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
    const { alert, components: { InlineAlert }, label, stepNumber } = this.props;
    const { status } = this.state;
    return (
      <Fragment>
        <Title>
          {stepNumber}. {label}
        </Title>
        {alert ? <InlineAlert {...alert} /> : ""}
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
