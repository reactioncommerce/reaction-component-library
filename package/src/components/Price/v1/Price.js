import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const Span = styled.span`
  display: block;
  font-family: ${applyTheme("font_family")};
  font-size: ${applyTheme("font_size_small")};
`;

const Del = styled.del`
  color: ${applyTheme("color_disabled")};
  display: block;
  font-family: ${applyTheme("font_family")};
  font-size: ${applyTheme("font_size_small")};
`;

class Price extends Component {
  static propTypes = {
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
    const { displayCompareAtPrice, displayPrice, hasPriceBottom } = this.props;

    return (
      <div>
        {hasPriceBottom ? "" : <Span>{displayPrice}</Span>}
        {displayCompareAtPrice ? this.renderCompareAtPrice() : null}
        {hasPriceBottom ? <Span>{displayPrice}</Span> : ""}
      </div>
    );
  }
}

export default Price;
