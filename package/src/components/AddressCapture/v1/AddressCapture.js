import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withComponents } from "@reactioncommerce/components-context";
import { CustomPropTypes } from "../../../utils";

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
    addressFormProps: {},
    addressReviewProps: {
      addressSuggestion: null
    },
    isSaving: false
  };

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
      if (!this.hasAddressSuggestion) await onSubmit(address);
    } else {
      await onSubmit(address);
    }
  };

  renderForm() {
    const { addressFormProps, components: { AddressForm }, isSaving } = this.props;
    return <AddressForm {...addressFormProps} ref={this.formRef} isSaving={isSaving} onSubmit={this.handleSubmit} />;
  }

  renderReview() {
    const { addressReviewProps, components: { AddressReview, Button }, isSaving } = this.props;
    return (
      <Fragment>
        <AddressReview {...addressReviewProps} ref={this.formRef} isSaving={isSaving} onSubmit={this.handleSubmit} />
        <Button isTextOnly>Edit entered address</Button>
      </Fragment>
    );
  }

  render() {
    const { className } = this.props;
    return <div className={className}>{this.hasAddressSuggestion ? this.renderReview() : this.renderForm()}</div>;
  }
}

export default withComponents(AddressCapture);
