import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme, addTypographyStyles, CustomPropTypes } from "../../../utils";

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

class Address extends Component {
  static propTypes = {
    /**
     * Address data
     */
    address: CustomPropTypes.address.isRequired,
    /**
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
     */
    className: PropTypes.string,
    invalidAddressProperties: PropTypes.arrayOf(PropTypes.string)
  };

  static defaultProps = {
    invalidAddressProperties: []
  };

  renderAddressProperty(key, value) {
    const { invalidAddressProperties } = this.props;
    const invalid = invalidAddressProperties.includes(key);
    return invalid ? <AddressPropertyError>{value}</AddressPropertyError> : value;
  }

  render() {
    const { address, className } = this.props;

    return (
      <AddressElement className={className}>
        {this.renderAddressProperty("fullName", address.fullName)}
        <br />
        {this.renderAddressProperty("address1", address.address1)}
        <br />
        {address.address2 !== null && address.address2 !== "" ? (
          <span>
            {this.renderAddressProperty("address2", address.address2)}
            <br />
          </span>
        ) : null}
        {this.renderAddressProperty("city", address.city)}, {this.renderAddressProperty("region", address.region)}{" "}
        {this.renderAddressProperty("postal", address.postal)} <br />
        {this.renderAddressProperty("country", address.country)}
      </AddressElement>
    );
  }
}

export default Address;
