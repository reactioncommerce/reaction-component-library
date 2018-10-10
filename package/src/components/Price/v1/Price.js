import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { addTypographyStyles } from "../../../utils";

const PriceDiv = styled.div`
  ${addTypographyStyles("Price", "labelText")}
`;

const Del = styled.del`
  ${addTypographyStyles("PriceCompare", "labelText")}
  display: block;
`;

class Price extends Component {
  static propTypes = {
    /**
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
     */
    className: PropTypes.string,
    /**
     * A comparison price value, usually MSRP.
     * This value is expected to have the currency symbol, i.e. $300.00
     */
    displayCompareAtPrice: PropTypes.string,
    /**
     * The product's price.
     * This value is expected to have the currency symbol, i.e. $300.00
     */
    displayPrice: PropTypes.string.isRequired,
    /**
     * Renders price below the compare at price
     */
    hasPriceBottom: PropTypes.bool
  };

  renderCompareAtPrice = () => {
    const { displayCompareAtPrice, displayPrice } = this.props;

    // If there is no price difference, don't render compare at price.
    if (displayPrice === displayCompareAtPrice) return null;

    return <Del>{displayCompareAtPrice}</Del>;
  };

  render() {
    const { className, displayCompareAtPrice, displayPrice, hasPriceBottom } = this.props;

    return (
      <div className={className}>
        {hasPriceBottom ? "" : <PriceDiv>{displayPrice}</PriceDiv>}
        {displayCompareAtPrice ? this.renderCompareAtPrice() : null}
        {hasPriceBottom ? <PriceDiv>{displayPrice}</PriceDiv> : ""}
      </div>
    );
  }
}

export default Price;
