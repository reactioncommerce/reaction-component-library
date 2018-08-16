import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, CustomPropTypes } from "../../../utils";

const Title = styled.h3`
  font-size: ${applyTheme("font_size_h3")};
  font-weight: ${applyTheme("font_weight_bold")};
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: 0.4px;
`;

const Address = styled.address`
  font-style: normal;
`;

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
      AddressForm: CustomPropTypes.component.isRequired
    }).isRequired,
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
     */
    onSubmit: PropTypes.func,
    /**
     * Checkout process step number
     */
    stepNumber: PropTypes.number.isRequired,
    /**
     * Checkout data needed for form
     */
    value: PropTypes.shape({
      shippingAddress: PropTypes.object
    })
  };

  static defaultProps = {
    isSaving: false,
    onReadyForSaveChange() {}
  };

  state = {
    activeAddress: this.props.value ? this.props.value.shippingAddress : null,
    activeCountry: "US",
    countries: [
      { value: "US", label: "United States" },
      { value: "DE", label: "Germany" },
      { value: "NU", label: "Nigeria" }
    ],
    regions: {
      US: [{ value: "LA", label: "Louisiana" }, { value: "CA", label: "California" }]
    }
  };

  componentDidMount() {
    const { onReadyForSaveChange } = this.props;
    onReadyForSaveChange(false);
  }

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

  handleCountryChange(country) {
    const activeCountry = this.state.countries.find((cnty) => cnty.value === country);
    if (activeCountry) {
      this.setState({
        activeCountry: activeCountry.value
      });
    }
  }

  render() {
    const { components: { AddressForm }, value, isSaving, label, stepNumber } = this.props;
    const shippingAddress = value ? value.shippingAddress : null;
    return (
      <Fragment>
        <Title>
          {stepNumber}. {label}
        </Title>
        <AddressForm
          ref={(formEl) => {
            this._addressForm = formEl;
          }}
          countries={this.state.countries}
          isDisabled={isSaving}
          regions={this.state.regions[this.state.activeCountry]}
          onCountryChange={(val) => this.handleCountryChange(val)}
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
WrappedShippingAddressCheckoutAction.renderComplete = ({ shippingAddress }) => (
  <Address>
    {shippingAddress.firstName} {shippingAddress.lastName}
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
