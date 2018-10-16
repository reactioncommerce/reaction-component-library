import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { addTypographyStyles, CustomPropTypes } from "../../../utils";

const AddressElement = styled.address`
  ${addTypographyStyles("Address", "bodyText")};
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
    /**
     * If you've set up a components context using
     * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
     * (recommended), then this prop will come from there automatically. If you have not
     * set up a components context or you want to override one of the components in a
     * single spot, you can pass in the components prop directly.
     */
    components: PropTypes.shape({}).isRequired
  };

  static defaultProps = {};

  render() {
    const { address, className } = this.props;

    return (
      <AddressElement className={className}>
        {address.fullName}
        <br />
        {address.address1}
        <br />
        {address.address2 !== null && address.address2 !== "" ? (
          <span>
            {address.address2} <br />
          </span>
        ) : null}
        {address.city}, {address.region} {address.postal} <br />
        {address.country}
      </AddressElement>
    );
  }
}

export default Address;
