import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const ActionIncompleteContainer = styled.div`
  color: ${applyTheme("color_black35")};
  font-family: ${applyTheme("font_family")};
`;

class ActionIncomplete extends Component {
  static propTypes = {
    /**
     * The inconplete action name
     */
    label: PropTypes.string.isRequired,
    /**
     * Checkout step number
     */
    stepNumber: PropTypes.number.isRequired
  };

  render() {
    const { label, stepNumber } = this.props;

    return (
      <ActionIncompleteContainer>
        <span>{stepNumber}.&nbsp;</span>
        <span>{label}</span>
      </ActionIncompleteContainer>
    );
  }
}

export default ActionIncomplete;
