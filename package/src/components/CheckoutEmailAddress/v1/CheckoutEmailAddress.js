import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { addTypographyStyles, applyTheme } from "../../../utils";

const StyledDiv = styled.div`
  ${addTypographyStyles("CheckoutEmailAddress", "labelText")}
  border-bottom-color: ${applyTheme("CheckoutEmailAddress.borderBottomColor")};
  border-bottom-style: solid;
  border-bottom-width: ${applyTheme("CheckoutEmailAddress.borderBottomWidth")};
  border-left-color: ${applyTheme("CheckoutEmailAddress.borderLeftColor")};
  border-left-style: solid;
  border-left-width: ${applyTheme("CheckoutEmailAddress.borderLeftWidth")};
  border-right-color: ${applyTheme("CheckoutEmailAddress.borderRightColor")};
  border-right-style: solid;
  border-right-width: ${applyTheme("CheckoutEmailAddress.borderRightWidth")};
  border-top-color: ${applyTheme("CheckoutEmailAddress.borderTopColor")};
  border-top-style: solid;
  border-top-width: ${applyTheme("CheckoutEmailAddress.borderTopWidth")};
  padding-bottom: ${applyTheme("CheckoutEmailAddress.paddingBottom")};
  padding-left: ${applyTheme("CheckoutEmailAddress.paddingLeft")};
  padding-right: ${applyTheme("CheckoutEmailAddress.paddingRight")};
  padding-top: ${applyTheme("CheckoutEmailAddress.paddingTop")};
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
