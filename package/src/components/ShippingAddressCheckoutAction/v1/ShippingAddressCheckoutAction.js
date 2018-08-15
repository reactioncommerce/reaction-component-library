import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { CustomPropTypes } from "../../../utils";

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
     * Selected fulfillment group from cart
     */
    fulfillmentGroup: PropTypes.shape({
      data: PropTypes.shape({
        shippingAddress: PropTypes.object
      })
    }).isRequired,
    /**
     * Is the shipping address being saved
     */
    isSaving: PropTypes.bool,
    /**
     * When action is ready for save call this prop method to
     * enable the save button with in the `CheckoutActions`
     */
    onReadyForSaveChange: PropTypes.func
  };

  static defaultProps = {
    isSaving: false,
    onReadyForSaveChange() {}
  };

  state = {
    activeAddress: this.props.fulfillmentGroup.data.shippingAddress,
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

  handleSubmit = (address) => {
    this.setState({
      activeAddress: address
    });
  };

  getFullfillmentData = () =>
    this._addressForm.validate().then((errs) => {
      if (errs.length <= 0) {
        return this._addressForm.getValue();
      }
      // returning nothing since validation failed
      // the child Form will handle displaying validation errors
      return;
    });

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
    const { components: { AddressForm }, fulfillmentGroup: { data: { shippingAddress } }, isSaving } = this.props;
    return (
      <Fragment>
        <AddressForm
          ref={(formEl) => {
            this._addressForm = formEl;
          }}
          countries={this.state.countries}
          isDisabled={isSaving}
          regions={this.state.regions[this.state.activeCountry]}
          onCountryChange={(value) => this.handleCountryChange(value)}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
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
