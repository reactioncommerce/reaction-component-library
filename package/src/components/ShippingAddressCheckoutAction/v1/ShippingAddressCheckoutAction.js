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
const EDIT = "edit";
const REVIEW = "review";
const FORM_ERRORS = [
  { message: "", name: "country" },
  { message: "", name: "fullName" },
  { message: "", name: "address1" },
  { message: "", name: "city" },
  { message: "", name: "region" },
  { message: "", name: "postal" }
];

class ShippingAddressCheckoutAction extends Component {
  static renderComplete({ fulfillmentGroup: { data: { shippingAddress } } }) {
    return (
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
  }

  static propTypes = {
    /**
     * Address validation results object
     */
    addressValidationResults: PropTypes.object,
    /**
     * Alert object provides alert into to InlineAlert.
     */
    alert: CustomPropTypes.alert,
    /**
     * If you've set up a components context using
     * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
     * (recommended), then this prop will come from there automatically. If you have not
     * set up a components context or you want to override one of the components in a
     * single spot, you can pass in the components prop directly.
     */
    components: PropTypes.shape({
      /**
       * Pass either the Reaction AddressCapture component or your own component that
       * accepts compatible props.
       */
      AddressCapture: CustomPropTypes.component.isRequired,
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
     * Address validation function.
     */
    onAddressValidation: PropTypes.func,
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
    status: !this.hasShippingAddressOnCart && this.hasValidationResults ? REVIEW : ENTRY,
    formErrors: this.hasValidationResults ? FORM_ERRORS : []
  };

  componentDidMount() {
    if (this.inReview) this.ready();
  }

  componentDidUpdate({ addressValidationResults: prevValidationResults }) {
    const { addressValidationResults } = this.props;
    if (!isEqual(prevValidationResults, addressValidationResults) && this.hasValidationResults) {
      this.setFormErrors = FORM_ERRORS;
      this.toggleStatus = EDIT;
    }
  }

  _form = null;

  get hasShippingAddressOnCart() {
    const { fulfillmentGroup } = this.props;
    return !!(fulfillmentGroup && fulfillmentGroup.data.shippingAddress);
  }

  get hasValidationResults() {
    const { addressValidationResults } = this.props;
    return !!(addressValidationResults && addressValidationResults.validationErrors.length);
  }

  get getSubmittedAddress() {
    if (!this.hasValidationResults) return null;
    const { addressValidationResults: { submittedAddress } } = this.props;
    return submittedAddress;
  }

  get getShippingAddress() {
    if (!this.hasShippingAddressOnCart) return null;
    const { fulfillmentGroup: { data: { shippingAddress } } } = this.props;
    return shippingAddress;
  }

  get inEntry() {
    const { status } = this.state;
    return status === ENTRY;
  }

  get inEdit() {
    const { status } = this.state;
    return status === EDIT;
  }

  get inReview() {
    const { status } = this.state;
    return status === REVIEW;
  }

  set toggleStatus(status) {
    this.setState({ status });
  }

  set setFormErrors(formErrors) {
    this.setState({ formErrors });
  }

  isFormFilled = (values) => Object.keys(values).every((key) => (key === "address2" ? true : values[key] !== null));

  submit = () => {
    this._form.submit();
  };

  ready = () => {
    const { onReadyForSaveChange } = this.props;
    onReadyForSaveChange(true);
  };

  handleChange = (values) => {
    const { formErrors } = this.state;
    if (formErrors.length) this.setFormErrors = [];
    if (this.isFormFilled(values)) this.ready();
  };

  renderAddressCapture() {
    const {
      addressValidationResults,
      components: { AddressCapture },
      isSaving,
      onSubmit,
      onAddressValidation
    } = this.props;
    const { formErrors } = this.state;

    const captureProps = {
      addressFormProps: {
        onChange: this.handleChange,
        shouldShowIsCommercialField: true,
        value: this.inEdit ? this.getSubmittedAddress : this.getShippingAddress,
        errors: formErrors
      },
      addressReviewProps: {
        addressEntered: this.getSubmittedAddress,
        addressSuggestion: this.hasValidationResults ? addressValidationResults.suggestedAddresses[0] : null,
        validationError: this.hasValidationResults ? addressValidationResults.validationErrors[0] : null
      },
      isSaving,
      onAddressValidation,
      onSubmit
    };

    return (
      <AddressCapture
        ref={(formEl) => {
          this._form = formEl;
        }}
        {...captureProps}
      />
    );
  }

  render() {
    const { alert, components: { InlineAlert }, label, stepNumber } = this.props;
    return (
      <Fragment>
        <Title>
          {stepNumber}. {label}
        </Title>
        {alert ? <InlineAlert {...alert} /> : ""}
        {this.renderAddressCapture()}
      </Fragment>
    );
  }
}

export default withComponents(ShippingAddressCheckoutAction);
