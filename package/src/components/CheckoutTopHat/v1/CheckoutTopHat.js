import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const TopHatContainer = styled.div`
  background-color: ${applyTheme("color_black05")};
  display: flex;
  height: 30px;
  justify-content: center;
  width: 100%;
`;

const TopHatMessage = styled.div`
  align-items: center;
  color: ${applyTheme("color_coolGrey500")};
  display: flex;
  font-size: 12px;
  font-weight: ${applyTheme("font_weight_bold")};
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
