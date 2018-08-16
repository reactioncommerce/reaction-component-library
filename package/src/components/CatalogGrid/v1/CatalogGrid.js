import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, getFromTheme, CustomPropTypes } from "../../../utils";

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: calc(100% + 24px);
  margin: -12px;
`;

const GridItem = styled.div`
  padding: 12px;
  flex-grow: 0;
  max-width: 100%;
  flex-basis: 100%;
  margin: 0;
  box-sizing: border-box;

  ${(props) => {
    // Media query for when to display 3 products per row
    const { threePerRowWidth } = props;

    let mediaQuery = "";
    if (threePerRowWidth) {
      mediaQuery = `min-width: ${threePerRowWidth}px`;
    } else {
      mediaQuery = `${getFromTheme(props, "rui_bp_sm")}`;
    }

    return `
      @media (${mediaQuery}) {
        flex-grow: 0;
        max-width: 33.33333%;
        flex-basis: 33.33333%;
      }
    `;
  }}

  ${(props) => {
    // Media query for when to display 4 products per row
    const { fourPerRowWidth } = props;

    let mediaQuery = "";
    if (fourPerRowWidth) {
      mediaQuery = `min-width: ${fourPerRowWidth}px`;
    } else {
      mediaQuery = `${getFromTheme(props, "rui_bp_md")}`;
    }

    return `
      @media (${mediaQuery}) {
        flex-grow: 0;
        max-width: 25%;
        flex-basis: 25%;
      }
    `;
  }}
`;

class CatalogGrid extends Component {
  static propTypes = {
    /**
     * If you've set up a components context using @reactioncommerce/components-context
     * (recommended), then this prop will come from there automatically. If you have not
     * set up a components context or you want to override one of the components in a
     * single spot, you can pass in the components prop directly.
     */
    components: PropTypes.shape({
      CatalogItem: CustomPropTypes.component.isRequired
    }).isRequired,
    /**
     * Currency code to display the price for. Product must include a pricing object with the code in `product.pricing`
     */
    currencyCode: PropTypes.string,
    /**
     * Minimum width (in px) to display 4 products per row. Defaults to value from theme (600px)
     */
    fourPerRowWidth: PropTypes.number,
    /**
     * Image to display when product doesn't have a primary image
     */
    placeholderImageURL: PropTypes.string,
    /**
     * Products to display in the grid. Refer to `CatalogItem`'s documentation
     */
    products: PropTypes.arrayOf(PropTypes.object),
    /**
     * Minimum width (in px) to display 3 products per row. Defaults to value from theme (960px)
     */
    threePerRowWidth: PropTypes.number
  };

  static defaultProps = {
    currencyCode: "USD",
    placeholderImageURL: "/resources/placeholder.gif",
    products: []
  };

  render() {
    const {
      components: { CatalogItem },
      currencyCode,
      placeholderImageURL,
      products
    } = this.props;

    return (
      <GridContainer>
        {products.map((product, index) => (
          <GridItem key={`grid-item-${index}`} {...this.props}>
            <CatalogItem
              currencyCode={currencyCode}
              placeholderImageURL={placeholderImageURL}
              product={product}
            />
          </GridItem>
        ))}
      </GridContainer>
    );
  }
}

export default withComponents(CatalogGrid);
