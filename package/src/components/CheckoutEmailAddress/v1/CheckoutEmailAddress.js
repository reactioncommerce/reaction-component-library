import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const StyledDiv = styled.div`
  color: ${applyTheme("color_coolGrey500")};
  font-family: ${applyTheme("font_family")};
  font-size: ${applyTheme("font_size_small")};
`;

const StyledSpan = styled.span`
  font-weight: ${applyTheme("font_weight_bold")};
`;

class CheckoutEmailAddress extends Component {
  static propTypes = {
    emailAddress: PropTypes.string,
    isAccountEmail: PropTypes.bool
  };

  renderAccountEmail = () => {
    const { isAccountEmail } = this.props;

    if (isAccountEmail) {
      return "Signed in as";
    }

    return null;
  }

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
