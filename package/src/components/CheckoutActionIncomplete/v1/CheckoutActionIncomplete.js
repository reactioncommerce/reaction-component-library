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
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
     */
    className: PropTypes.string,
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
    const { className, label, stepNumber } = this.props;
    const stepAndLabel = stepNumber ? `${stepNumber}. ${label || ""}` : label;

    return (
      <CheckoutActionIncompleteContainer className={className}>
        {stepAndLabel}
      </CheckoutActionIncompleteContainer>
    );
  }
}

export default CheckoutActionIncomplete;
