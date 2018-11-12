import React, { Component } from "react";
import PropTypes from "prop-types";
import uniqueId from "lodash.uniqueid";
import { Form } from "reacto-form";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, CustomPropTypes } from "../../../utils";

const FormWrapper = styled.div`
  margin-top: ${applyTheme("AddressReview.formSpacingTop")};
`;

const ENTERED = "entered";
const SUGGESTED = "suggested";

class AddressReview extends Component {
  static propTypes = {
    /**
     * Address entered
     */
    addressEntered: CustomPropTypes.address.isRequired,
    /**
     * Address validations address suggestion
     */
    addressSuggestion: CustomPropTypes.address.isRequired,
    /**
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
     */
    className: PropTypes.string,
    /**
     * If you've set up a components context using @reactioncommerce/components-context
     * (recommended), then this prop will come from there automatically. If you have not
     * set up a components context or you want to override one of the components in a
     * single spot, you can pass in the components prop directly.
     */
    components: PropTypes.shape({
      /**
       * Pass either the Reaction Address component or your own component that
       * accepts compatible props.
       */
      Address: CustomPropTypes.component.isRequired,
      /**
       * Pass either the Reaction SelectableList component or your own component that
       * accepts compatible props.
       */
      SelectableList: CustomPropTypes.component.isRequired
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
     * Form submit event callback
     */
    onSubmit: PropTypes.func,
    /**
     * The selected address option
     */
    value: PropTypes.string
  };

  static defaultProps = {
    isSaving: false,
    value: SUGGESTED
  };

  _form = null;

  uniqueInstanceIdentifier = uniqueId("AddressReviewForm_");

  /**
   *
   * @name submit
   * @summary Instance method that submits the form, this allows a parent component access to the Form submit event.
   * @return {Undefined} - Nothing
   */
  submit = () => {
    this._form.submit();
  };

  /**
   *
   * @name invalidAddressProperties
   * @summary Creates an array of invalid address property keys.
   * @return {Array} - `["address1", "postal"]`
   */
  get invalidAddressProperties() {
    const { addressEntered, addressSuggestion } = this.props;
    return (
      addressEntered &&
      Object.keys(addressEntered).filter((key) => {
        if (key === "fullName") return null;
        return addressEntered[key] !== addressSuggestion[key] ? key : null;
      })
    );
  }

  /**
   *
   * @method xformAddress
   * @summary If missing adds the entered addresses `fullName`, `phone` & `isCommercial` property to a suggested address.
   * This is needed since most validation service results will not have these Reaction expected properties.
   * @param {Object} address - An address object
   * @return {Object} Address - complete Reaction `Address` object
   */
  xformAddress(address) {
    const {
      fullName: enteredFullName,
      phone: enteredPhone,
      isCommercial: enteredIsCommercial
    } = this.props.addressEntered;
    const { fullName, phone, isCommercial } = address;
    return {
      fullName: fullName || enteredFullName,
      phone: phone || enteredPhone,
      isCommercial: isCommercial || enteredIsCommercial,
      ...address
    };
  }

  /**
   *
   * @name handleSubmit
   * @summary Form `onSubmit` callback that check the submitted value
   * and passes the correct address object to the `props.onSubmit` function.
   * @param {String} value - "entered" or "seggested"
   * @return {Undefined} - Nothing
   */
  handleSubmit = async ({ AddressReview: value }) => {
    const { addressEntered, addressSuggestion, onSubmit } = this.props;
    const selectedAddress =
      value === ENTERED ? this.xformAddress(addressEntered) : this.xformAddress(addressSuggestion);
    await onSubmit(selectedAddress);
  };

  render() {
    const {
      addressEntered,
      addressSuggestion,
      className,
      components: { Address, SelectableList },
      isSaving,
      value
    } = this.props;

    const options = [
      {
        id: `${ENTERED}_${this.uniqueInstanceIdentifier}`,
        detail: (
          <Address
            address={this.xformAddress(addressEntered)}
            invalidAddressProperties={this.invalidAddressProperties}
          />
        ),
        label: "Entered Address:",
        value: ENTERED
      },
      {
        id: `${SUGGESTED}_${this.uniqueInstanceIdentifier}`,
        detail: <Address address={this.xformAddress(addressSuggestion)} />,
        label: "Suggested Address:",
        value: SUGGESTED
      }
    ];

    return (
      <div className={className}>
        <FormWrapper>
          <Form
            ref={(formEl) => {
              this._form = formEl;
            }}
            onSubmit={this.handleSubmit}
          >
            <SelectableList
              isHorizontal
              isStacked
              options={options}
              name="AddressReview"
              value={value}
              isReadOnly={isSaving}
            />
          </Form>
        </FormWrapper>
      </div>
    );
  }
}

export default withComponents(AddressReview);
