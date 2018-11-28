import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import isEqual from "lodash.isequal";
import { withComponents } from "@reactioncommerce/components-context";
import { CustomPropTypes } from "../../../utils";

const ENTRY = "entry";
const EDIT = "edit";
const REVIEW = "review";

class AddressCapture extends Component {
  static propTypes = {
    /**
     * AddressForm component props
     */
    addressFormProps: PropTypes.shape({
      /**
       * Place holder for Address Name field.
       */
      addressNamePlaceholder: PropTypes.string,
      /**
       * Errors array
       */
      errors: PropTypes.arrayOf(
        PropTypes.shape({
          /**
           * Error message
           */
          message: PropTypes.string.isRequired,
          /**
           * Error name
           */
          name: PropTypes.string.isRequired
        })
      ),
      /**
       * OnChange event callback
       */
      onChange: PropTypes.func,
      /**
       * Should the AddressForm show the "Address Names" field.
       */
      shouldShowAddressNameField: PropTypes.bool,
      /**
       * Should the AddressForm show the "Is Commercial Address" field.
       */
      shouldShowIsCommercialField: PropTypes.bool,
      /**
       * Address object to be edited
       */
      value: CustomPropTypes.address
    }),
    /**
     * AddressReview component props
     */
    addressReviewProps: PropTypes.shape({
      /**
       * Address entered
       */
      addressEntered: CustomPropTypes.address,
      /**
       * Address validations address suggestion
       */
      addressSuggestion: CustomPropTypes.address,
      /**
       * Address validation error object
       */
      validationError: PropTypes.object,
      /**
       * The selected address option
       */
      value: PropTypes.string
    }),
    /**
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
     */
    className: PropTypes.string,
    /**
     * If you've set up a components context using
     * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
     * (recommended), then this prop will come from there automatically. If you have not
     * set up a components context or you want to override one of the components in a
     * single spot, you can pass in the components prop directly.
     */
    components: PropTypes.shape({
      /**
       * Pass either the Reaction AddressForm component or your own component that is
       * compatible with the AddressForm spec.
       */
      AddressForm: CustomPropTypes.component.isRequired,
      /**
       * Pass either the Reaction AddressReview component or your own component that is
       * compatible with AddressReview spec.
       */
      AddressReview: CustomPropTypes.component.isRequired
    }).isRequired,
    /**
     * Is data being saved
     */
    isSaving: PropTypes.bool,
    /**
     * Form name
     */
    name: PropTypes.string,
    /**
     * Address validation event callback.
     */
    onAddressValidation: PropTypes.func,
    /**
     * Form submit event callback
     */
    onSubmit: PropTypes.func
  };

  static defaultProps = {
    addressFormProps: {
      value: null
    },
    addressReviewProps: {
      addressEntered: null,
      addressSuggestion: null
    },
    isSaving: false
  };

  state = { status: this.hasAddressSuggestion ? REVIEW : ENTRY };

  componentDidUpdate({ addressReviewProps: { addressSuggestion: prevAddressSuggestion } }) {
    if (!isEqual(prevAddressSuggestion, this.addressSuggestion) && this.hasAddressSuggestion) {
      this.toggleStatus = REVIEW;
    }
  }

  _form = null;

  /**
   *
   * @method hasAddressSuggestion
   * @summary returns true if we have a suggested address from a address validation service
   * @return {Boolean} - true if address suggestion on props
   */
  get hasAddressSuggestion() {
    const { addressReviewProps: { addressSuggestion } } = this.props;
    return !!addressSuggestion;
  }

  /**
   *
   * @method hasValidationError
   * @summary returns true if we have any validation errors from a address validation service
   * @return {Boolean} - true if validation errors on props
   */
  get hasValidationError() {
    const { addressReviewProps: { validationError } } = this.props;
    return !!validationError;
  }

  /**
   *
   * @method addressEntered
   * @summary getter that returns the entered address
   * @return {Object} addressEntered -  Address object
   */
  get addressEntered() {
    const { addressReviewProps: { addressEntered } } = this.props;
    return addressEntered && addressEntered;
  }

  /**
   *
   * @method addressSuggestion
   * @summary getter that returns the suggested address
   * @return {Object} addressSuggestion -  Address object
   */
  get addressSuggestion() {
    const { addressReviewProps: { addressSuggestion } } = this.props;
    return addressSuggestion && addressSuggestion;
  }

  /**
   *
   * @method addressProvided
   * @summary getter that returns the provided address form value
   * @return {Object} addressProvided -  Address object
   */
  get addressProvided() {
    const { addressFormProps: { value } } = this.props;
    return value && value;
  }

  /**
   *
   * @method inEntry
   * @summary getter that returns true if in entry mode
   * @return {Boolean}
   */
  get inEntry() {
    const { status } = this.state;
    return status === ENTRY;
  }

  /**
   *
   * @method inEdit
   * @summary getter that returns true if in edit mode
   * @return {Boolean}
   */
  get inEdit() {
    const { status } = this.state;
    return status === EDIT;
  }

  /**
   *
   * @method inReview
   * @summary getter that returns true if in review mode
   * @return {Boolean}
   */
  get inReview() {
    const { status } = this.state;
    return status === REVIEW;
  }

  /**
   *
   * @method toggleStatus
   * @summary setter that toggles the Component's status.
   * @return {undefined}
   */
  set toggleStatus(status) {
    this.setState({ status });
  }

  /**
   *
   * @method formRef
   * @summary binds the active form element to the `_form` property
   * @param {Object} form - React ref element
   * @return {undefined}
   */
  formRef = (form) => {
    this._form = form;
  };

  /**
   *
   * @name submit
   * @summary Instance method that submits the form, this allows a parent component access to the Form submit event.
   * @return {undefined}
   */
  submit = () => {
    this._form.submit();
  };

  /**
   *
   * @method handleSubmit
   * @summary validate or submit the entered address object.
   * @param {Object} address - submited address object
   * @return {undefined}
   */
  handleSubmit = async (address) => {
    const { onAddressValidation, onSubmit } = this.props;
    if (onAddressValidation && !address.isValid) {
      await onAddressValidation(address);
      if (!this.hasAddressSuggestion && !this.hasValidationError) await onSubmit(address);
    } else {
      await onSubmit(address);
    }
  };

  renderForm() {
    const { addressFormProps, components: { AddressForm }, isSaving } = this.props;
    return (
      <AddressForm
        {...addressFormProps}
        ref={this.formRef}
        isSaving={isSaving}
        onSubmit={this.handleSubmit}
        value={this.inEdit ? this.addressEntered : this.addressProvided}
      />
    );
  }

  renderReview() {
    const { addressReviewProps, components: { AddressReview, Button }, isSaving } = this.props;
    return (
      <Fragment>
        <AddressReview {...addressReviewProps} ref={this.formRef} isSaving={isSaving} onSubmit={this.handleSubmit} />
        <Button
          isTextOnly
          onClick={() => {
            this.toggleStatus = EDIT;
          }}
        >
          Edit entered address
        </Button>
      </Fragment>
    );
  }

  render() {
    const { className } = this.props;
    return <div className={className}>{this.inReview ? this.renderReview() : this.renderForm()}</div>;
  }
}

export default withComponents(AddressCapture);
