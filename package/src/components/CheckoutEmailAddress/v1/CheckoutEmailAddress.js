import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const StyledDiv = styled.div`
  border-bottom-color: ${applyTheme("checkoutEmailAddressBorderBottomColor")};
  border-bottom-style: solid;
  border-bottom-width: ${applyTheme("checkoutEmailAddressBorderBottomWidth")};
  border-left-color: ${applyTheme("checkoutEmailAddressBorderLeftColor")};
  border-left-style: solid;
  border-left-width: ${applyTheme("checkoutEmailAddressBorderLeftWidth")};
  border-right-color: ${applyTheme("checkoutEmailAddressBorderRightColor")};
  border-right-style: solid;
  border-right-width: ${applyTheme("checkoutEmailAddressBorderRightWidth")};
  border-top-color: ${applyTheme("checkoutEmailAddressBorderTopColor")};
  border-top-style: solid;
  border-top-width: ${applyTheme("checkoutEmailAddressBorderTopWidth")};
  color: ${applyTheme("checkoutEmailAddressColor")};
  font-family: ${applyTheme("font_family")};
  font-size: ${applyTheme("font_size_small")};
  padding-bottom: ${applyTheme("checkoutEmailAddressPaddingBottom")};
  padding-left: ${applyTheme("checkoutEmailAddressPaddingLeft")};
  padding-right: ${applyTheme("checkoutEmailAddressPaddingRight")};
  padding-top: ${applyTheme("checkoutEmailAddressPaddingTop")};
`;

const StyledSpan = styled.span`
  font-weight: ${applyTheme("font_weight_bold")};
`;

class CheckoutEmailAddress extends Component {
  static propTypes = {
    emailAddress: PropTypes.string.isRequired,
    isAccountEmail: PropTypes.bool.isRequired
  };

  renderAccountEmail = () => {
    const { isAccountEmail } = this.props;

    if (isAccountEmail) {
      return "Signed in as";
    }

    return null;
  };

  render() {
    const { emailAddress } = this.props;
    return (
      <StyledDiv>
        {this.renderAccountEmail()} <StyledSpan>{emailAddress}</StyledSpan>
      </StyledDiv>
    );
  }
}

export default CheckoutEmailAddress;
