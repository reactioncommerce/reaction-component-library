import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const Span = styled.div`
  color: ${applyTheme("color_stockWarning")};
  font-family: ${applyTheme("font_family")};
  font-size: ${applyTheme("font_size_small")};
`;

class StockWarning extends Component {
  static propTypes = {
    /**
     * The product's current stock level
     */
    inventoryQuantity: PropTypes.number,
    /**
     * When true, indicates that a product's inventory level has reached
     * the low level threshold.
     */
    isLowInventoryQuantity: PropTypes.bool
  };

  render() {
    const { inventoryQuantity, isLowInventoryQuantity } = this.props;

    if (!isLowInventoryQuantity) return null;

    return <Span>Only {inventoryQuantity} in stock</Span>;
  }
}

export default StockWarning;
