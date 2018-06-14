import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const Span = styled.span`
  display: block;
`;

const Del = styled.del`
  display: block;
  color: ${applyTheme("color_disabled")};
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
    displayPrice: PropTypes.string.isRequired
  }

  renderCompareAtPrice = () => {
    const { displayCompareAtPrice, displayPrice } = this.props;

    // If there is no price difference, don't render compare at price.
    if (displayPrice === displayCompareAtPrice) return null;

    return (
      <Del>
        {displayCompareAtPrice}
      </Del>
    );
  }

  render() {
    const { displayCompareAtPrice, displayPrice } = this.props;

    return (
      <div>
        <Span>
          {displayPrice}
        </Span>
        {displayCompareAtPrice ? this.renderCompareAtPrice() : null}
      </div>
    );
  }
}

export default Price;
