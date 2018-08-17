import React, { Component } from "react";
import PropTypes from "prop-types";
import { ContainerQuery } from "react-container-query";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { getFromTheme, CustomPropTypes } from "../../../utils";

const mdWidth = getFromTheme({}, "rui_md");
const containerQueries = {
  is2PerRowWidth: {
    minWidth: 450, // Min width that item w/ 2 badges renders appropriately
    maxWidth: 649
  },
  is3PerRowWidth: {
    minWidth: 650,
    maxWidth: mdWidth - 1
  },
  is4PerRowWidth: {
    minWidth: mdWidth
  }
};

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%`;

const GridItem = styled.div`
  padding: 12px;
  flex-grow: 0;
  max-width: 100%;
  flex-basis: 100%;
  margin: 0;
  box-sizing: border-box;

  ${({ containerParams }) => {
    const { is2PerRowWidth, is3PerRowWidth, is4PerRowWidth } = containerParams;
    if (is2PerRowWidth) {
      return `
        max-width: 50%;
        flex-basis: 50%;
      `;
    } else if (is3PerRowWidth) {
      return `
        max-width: 33.33333%;
        flex-basis: 33.33333%;
      `;
    } else if (is4PerRowWidth) {
      return `
        max-width: 25%;
        flex-basis: 25%;
      `;
    }
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
      CatalogGridItem: CustomPropTypes.component.isRequired
    }).isRequired,
    /**
     * Currency code to display the price for. Product must include a pricing object with the code in `product.pricing`
     */
    currencyCode: PropTypes.string,
    /**
     * Image to display when product doesn't have a primary image
     */
    placeholderImageURL: PropTypes.string,
    /**
     * Products to display in the grid. Refer to `CatalogGridItem`'s documentation
     */
    products: PropTypes.arrayOf(PropTypes.object)
  };

  static defaultProps = {
    currencyCode: "USD",
    placeholderImageURL: "/resources/placeholder.gif",
    products: []
  };

  render() {
    const {
      components: { CatalogGridItem },
      currencyCode,
      placeholderImageURL,
      products
    } = this.props;

    return (
      <ContainerQuery query={containerQueries}>
        {(params) => (
          <GridContainer>
            {products.map((product, index) => (
              <GridItem containerParams={params} key={`grid-item-${index}`} {...this.props}>
                <CatalogGridItem
                  currencyCode={currencyCode}
                  placeholderImageURL={placeholderImageURL}
                  product={product}
                />
              </GridItem>
            ))}
          </GridContainer>
        )}
      </ContainerQuery>
    );
  }
}

export default withComponents(CatalogGrid);
