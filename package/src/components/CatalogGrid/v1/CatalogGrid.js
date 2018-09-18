import React, { Component } from "react";
import PropTypes from "prop-types";
import { ContainerQuery } from "react-container-query";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { getFromTheme, CustomPropTypes, preventAccidentalDoubleClick } from "../../../utils";

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
    return "";
  }}
  `;

class CatalogGrid extends Component {
  static propTypes = {
    /**
     * Labels to use for the various badges. Refer to `BadgeOverlay`'s prop documentation.
     */
    badgeLabels: PropTypes.shape({
      BACKORDER: PropTypes.string,
      BESTSELLER: PropTypes.string,
      LOW_QUANTITY: PropTypes.string,
      SOLD_OUT: PropTypes.string,
      SALE: PropTypes.string
    }),
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
     * The inital size the grid should render at. Use to set grid width during SSR.
     */
    initialSize: PropTypes.shape({
      height: PropTypes.number,
      width: PropTypes.number
    }),
    /**
     * Item click handler
     */
    onItemClick: PropTypes.func,
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
    badgeLabels: null,
    currencyCode: "USD",
    initialSize: {
      width: 325
    },
    onItemClick() {},
    placeholderImageURL: "/resources/placeholder.gif",
    products: []
  };

  handleOnClick = preventAccidentalDoubleClick((event, product) => {
    this.props.onItemClick(event, product);
  });

  render() {
    const {
      badgeLabels,
      components: { CatalogGridItem },
      currencyCode,
      initialSize,
      onItemClick,
      placeholderImageURL,
      products
    } = this.props;

    const gridItemProps = {
      currencyCode,
      placeholderImageURL,
      onClick: onItemClick
    };

    if (badgeLabels) {
      gridItemProps.badgeLabels = badgeLabels;
    }

    return (
      <ContainerQuery query={containerQueries} initialSize={initialSize}>
        {(params) => (
          <GridContainer>
            {products.map((product, index) => (
              <GridItem containerParams={params} key={`grid-item-${index}`} {...this.props}>
                <CatalogGridItem product={product} {...gridItemProps} />
              </GridItem>
            ))}
          </GridContainer>
        )}
      </ContainerQuery>
    );
  }
}

export default withComponents(CatalogGrid);
