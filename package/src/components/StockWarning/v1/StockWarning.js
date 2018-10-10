import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { addTypographyStyles } from "../../../utils";

const Span = styled.div`
  ${addTypographyStyles("StockWarning", "labelText")}
`;

class StockWarning extends Component {
  static propTypes = {
    /**
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
     */
    className: PropTypes.string,
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
    const { className, inventoryQuantity, isLowInventoryQuantity } = this.props;

    if (!isLowInventoryQuantity) return null;

    return <Span className={className}>Only {inventoryQuantity} in stock</Span>;
  }
}

export default StockWarning;
