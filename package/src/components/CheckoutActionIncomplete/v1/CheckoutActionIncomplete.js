import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { addTypographyStyles } from "../../../utils";

const CheckoutActionIncompleteContainer = styled.div`
  ${addTypographyStyles("CheckoutActionIncomplete", "captionText")}
`;

class CheckoutActionIncomplete extends Component {
  static propTypes = {
    /**
     * The incomplete action name
     */
    label: PropTypes.string,
    /**
     * Checkout process step number
     */
    stepNumber: PropTypes.number
  };

  render() {
    const { label, stepNumber } = this.props;
    const stepAndLabel = stepNumber ? `${stepNumber}. ${label || ""}` : label;

    return (
      <CheckoutActionIncompleteContainer>
        {stepAndLabel}
      </CheckoutActionIncompleteContainer>
    );
  }
}

export default CheckoutActionIncomplete;
