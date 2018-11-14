import React, { Component } from "react";
import PropTypes from "prop-types";
import { withComponents } from "@reactioncommerce/components-context";
import { CustomPropTypes } from "../../../utils";

class AddressCapture extends Component {
  static propTypes = {
    addressFormProps: PropTypes.shape({
      addressNamePlaceholder: PropTypes.string,
      shouldShowAddressNameField: PropTypes.bool,
      shouldShowIsCommercialField: PropTypes.bool,
      value: CustomPropTypes.address
    }),
    addressReviewProps: PropTypes.shape({
      addressEntered: CustomPropTypes.address,
      addressSuggestion: CustomPropTypes.address,
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
    isSaving: PropTypes.bool,
    name: PropTypes.string,
    onAddressValidation: PropTypes.func,
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
   * @name submit
   * @summary Instance method that submits the form, this allows a parent component access to the Form submit event.
   * @return {Undefined} - Nothing
   */
  submit = () => {
    this._form.submit();
  };

  handleSubmit = async (address) => {
    const { onAddressValidation, onSubmit } = this.props;
    if (onAddressValidation && !address.isValid) {
      await onAddressValidation(address);
    } else {
      await onSubmit(address);
    }
  };

  renderForm() {
    const { addressFormProps, components: { AddressForm }, isSaving } = this.props;
    return (
      <AddressForm
        {...addressFormProps}
        ref={(el) => {
          this._form = el;
        }}
        isSaving={isSaving}
        onSubmit={this.handleSubmit}
      />
    );
  }

  renderReview() {
    const { addressReviewProps, components: { AddressReview }, isSaving } = this.props;
    return (
      <AddressReview
        {...addressReviewProps}
        ref={(el) => {
          this._form = el;
        }}
        isSaving={isSaving}
        onSubmit={this.handleSubmit}
      />
    );
  }

  render() {
    const { addressReviewProps: { addressSuggestion }, className } = this.props;
    return <div className={className}>{addressSuggestion ? this.renderReview() : this.renderForm()}</div>;
  }
}

export default withComponents(AddressCapture);
