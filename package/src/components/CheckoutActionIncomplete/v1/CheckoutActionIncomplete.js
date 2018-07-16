import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const CheckoutActionIncompleteContainer = styled.div`
  color: ${applyTheme("color_black35")};
  font-family: ${applyTheme("font_family")};
  font-size: ${applyTheme("font_size_small")}
`;

class CheckoutActionIncomplete extends Component {
  static propTypes = {
    /**
     * The incomplete action name
     */
    label: PropTypes.string.isRequired,
    /**
     * Checkout process step number
     */
    stepNumber: PropTypes.number
  };

  render() {
    const { label, stepNumber } = this.props;
    const step = stepNumber ? <Fragment>{stepNumber}.&nbsp;</Fragment> : null;

    return (
      <CheckoutActionIncompleteContainer>
        {step}{label}
      </CheckoutActionIncompleteContainer>
    );
  }
}

export default CheckoutActionIncomplete;
