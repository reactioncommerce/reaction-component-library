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
    checkoutMessage: PropTypes.string,
    /**
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
     */
    className: PropTypes.string
  };

  render() {
    const { className, checkoutMessage } = this.props;

    if (checkoutMessage) {
      return (
        <TopHatContainer className={className}>
          <TopHatMessage>{checkoutMessage}</TopHatMessage>
        </TopHatContainer>
      );
    }

    return null;
  }
}

export default CheckoutTopHat;
