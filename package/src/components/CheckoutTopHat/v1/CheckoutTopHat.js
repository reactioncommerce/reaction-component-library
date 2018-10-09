import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { addTypographyStyles, applyTheme } from "../../../utils";

const TopHatContainer = styled.div`
  background-color: ${applyTheme("CheckoutTopHat.backgroundColor")};
  display: flex;
  height: ${applyTheme("CheckoutTopHat.height")};
  justify-content: center;
  width: 100%;
`;

const TopHatMessage = styled.div`
  ${addTypographyStyles("CheckoutTopHatMessage", "labelTextBold")}
  align-items: center;
  display: flex;
`;

class CheckoutTopHat extends Component {
  static propTypes = {
    checkoutMessage: PropTypes.string
  };

  render() {
    const { checkoutMessage } = this.props;

    if (checkoutMessage) {
      return (
        <TopHatContainer>
          <TopHatMessage>{checkoutMessage}</TopHatMessage>
        </TopHatContainer>
      );
    }

    return null;
  }
}

export default CheckoutTopHat;
