import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { addTypographyStyles, applyTheme } from "../../../utils";

const StyledDiv = styled.div`
  ${addTypographyStyles("CheckoutEmailAddress", "labelText")}
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
  padding-bottom: ${applyTheme("checkoutEmailAddressPaddingBottom")};
  padding-left: ${applyTheme("checkoutEmailAddressPaddingLeft")};
  padding-right: ${applyTheme("checkoutEmailAddressPaddingRight")};
  padding-top: ${applyTheme("checkoutEmailAddressPaddingTop")};
`;

const StyledSpan = styled.span`
  ${addTypographyStyles("CheckoutEmailAddressEmphasis", "labelTextBold")}
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
