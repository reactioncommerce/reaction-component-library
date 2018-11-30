import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { addressToString, applyTheme, addTypographyStyles, CustomPropTypes } from "../../../utils";

const AddressElement = styled.address`
  ${addTypographyStyles("Address", "bodyText")};
`;

const AddressPropertyError = styled.span`
  ${addTypographyStyles("AddressPropertyError", "bodyTextBold")};
  background-color: ${applyTheme("Address.addressPropertyErrorBackgroundColor")};
  border-color: ${applyTheme("Address.addressPropertyErrorBorderColor")};
  border-style: ${applyTheme("Address.addressPropertyErrorBorderStyle")};
  border-width: ${applyTheme("Address.addressPropertyErrorBorderWidth")};
  border-radius: ${applyTheme("Address.addressPropertyErrorBorderRadius")};
  color: ${applyTheme("Address.addressPropertyErrorColor")};
  padding-bottom: ${applyTheme("Address.addressPropertyErrorPaddingBottom")};
  padding-left: ${applyTheme("Address.addressPropertyErrorPaddingLeft")};
  padding-right: ${applyTheme("Address.addressPropertyErrorPaddingRight")};
  padding-top: ${applyTheme("Address.addressPropertyErrorPaddingTop")};
`;

const ADDRESS_ORDER = ["fullName", "address1", "address2", "city", "region", "postal", "country"];

class Address extends Component {
  static propTypes = {
    /**
     * Address object to render
     */
    address: CustomPropTypes.address.isRequired,
    /**
     * Order of `address` properties
     */
    addressOrder: PropTypes.arrayOf(PropTypes.string),
    /**
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
     */
    className: PropTypes.string,
    /**
     * Array of invalid address property keys
     */
    invalidAddressProperties: PropTypes.arrayOf(PropTypes.string),
    /**
     * Render the address as a flat string.
     */
    isFlat: PropTypes.bool
  };

  static defaultProps = {
    addressOrder: ADDRESS_ORDER,
    invalidAddressProperties: [],
    isFlat: false
  };

  /**
   *
   * @name renderAddressProperty
   * @summary Renders each address object property
   * @param {String} key - Address property key
   * @return {String|Element|null} -  value string, `<span />` with value string or `null`
   */
  renderAddressProperty = (key) => {
    const { address, invalidAddressProperties } = this.props;

    // Skip empty address values
    if (!address[key]) return null;

    // Is the address property invalid?
    const isInvalid = invalidAddressProperties.includes(key);
    const addressProp = isInvalid ? <AddressPropertyError>{address[key]}</AddressPropertyError> : address[key];

    // Formating the address
    let addressElement;
    switch (key) {
      case "city":
        addressElement = <Fragment>{addressProp}, </Fragment>;
        break;
      case "country":
        addressElement = addressProp;
        break;
      // case "region":
      //   addressElement = <Fragment>{addressProp} </Fragment>;
      //   break;
      default:
        addressElement = (
          <Fragment>
            {addressProp} <br />
          </Fragment>
        );
    }

    return <Fragment key={key}>{addressElement}</Fragment>;
  };

  render() {
    const { address, addressOrder, className, isFlat } = this.props;
    return (
      <AddressElement className={className}>
        {isFlat ? addressToString(address) : addressOrder.map(this.renderAddressProperty)}
      </AddressElement>
    );
  }
}

export default Address;
