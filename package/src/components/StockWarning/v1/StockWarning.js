import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const Span = styled.span`
  display: block;
  color: ${applyTheme("color_error")};
`;

class StockWarning extends Component {
  static propTypes = {
    /**
     * The product's current stock level
     */
    inventoryQuantity: PropTypes.number.isRequired,
    /**
     * When true, indicates that a product's inventory level has reached
     * the low level threshold.
     */
    isLowInventoryQuantity: PropTypes.bool.isRequired
  };

  render() {
    const { inventoryQuantity, isLowInventoryQuantity } = this.props;

    if (!isLowInventoryQuantity) return null;

    return (
      <Span>Only { inventoryQuantity } in stock</Span>
    );
  }
}

export default StockWarning;
