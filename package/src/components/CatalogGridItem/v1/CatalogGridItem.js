import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, CustomPropTypes } from "../../../utils";
import { priceByCurrencyCode } from "./utils";

const ProductMediaWrapper = styled.div`
  background-color: ${applyTheme("color_white")};
  position: relative;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`;

const ProductTitle = styled.aside`
  color: rgba(0, 0, 0, 0.87);
  font-family: ${applyTheme("font_family")};
  font-size: ${applyTheme("font_size_default")};
  font-weight: ${applyTheme("font_weight_bold")};
  line-height: 27px;
`;

const ProductVendor = styled.span`
  color: rgba(0, 0, 0, 0.87);
  font-family: ${applyTheme("font_family")};
  font-size: ${applyTheme("font_size_default")};
  font-weight: ${applyTheme("font_weight_normal")};
  line-height: 23px;
`;

const PriceContainer = styled.div`
  text-align: right;
`;

class CatalogGridItem extends Component {
  static propTypes = {
    /**
     * If you've set up a components context using @reactioncommerce/components-context
     * (recommended), then this prop will come from there automatically. If you have not
     * set up a components context or you want to override one of the components in a
     * single spot, you can pass in the components prop directly.
     */
    components: PropTypes.shape({
      BadgeOverlay: CustomPropTypes.component.isRequired,
      Link: CustomPropTypes.component.isRequired,
      Price: CustomPropTypes.component.isRequired,
      ProgressiveImage: CustomPropTypes.component.isRequired
    }),
    /**
     * Currency code to display the price for. Product must include a pricing object with the code in `product.pricing`
     */
    currencyCode: PropTypes.string.isRequired,
    /**
     * Image to display when product doesn't have a primary image
     */
    placeholderImageURL: PropTypes.string,
    /**
     * Product to display
     */
    product: PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
      vendor: PropTypes.string,
      primaryImage: PropTypes.shape({
        URLs: PropTypes.shape({
          large: PropTypes.string,
          medium: PropTypes.string,
          small: PropTypes.string,
          thumbnail: PropTypes.string
        })
      }),
      pricing: PropTypes.arrayOf(PropTypes.shape({
        currency: PropTypes.shape({
          code: PropTypes.string
        }),
        displayPrice: PropTypes.string
      })),
      isSoldOut: PropTypes.bool,
      isBackorder: PropTypes.bool,
      isOnSale: PropTypes.bool,
      isLowQuantity: PropTypes.bool,
      isBestseller: PropTypes.bool
    })
  };

  static defaultProps = {
    placeholderImageURL: ""
  };

  get productDetailHref() {
    const { product: { slug } } = this.props;
    const url = `/product/${slug}`;
    return url;
  }

  get primaryImage() {
    const { product: { primaryImage }, placeholderImageURL } = this.props;
    if (!primaryImage) {
      return {
        URLs: {
          thumbnail: placeholderImageURL,
          small: placeholderImageURL,
          medium: placeholderImageURL,
          large: placeholderImageURL
        }
      };
    }
    return primaryImage;
  }

  handleOnClick = () => {};

  renderProductMedia() {
    const { components: { ProgressiveImage }, product: { description } } = this.props;

    return (
      <ProductMediaWrapper>
        <ProgressiveImage
          altText={description}
          presrc={this.primaryImage.URLs.thumbnail}
          srcs={this.primaryImage.URLs}
        />
      </ProductMediaWrapper>
    );
  }

  renderProductInfo() {
    const {
      components: { Price },
      currencyCode,
      product: { pricing, title, vendor }
    } = this.props;
    const productPrice = priceByCurrencyCode(currencyCode, pricing) || {};

    return (
      <div>
        <ProductInfo>
          <ProductTitle>{title}</ProductTitle>
          <PriceContainer>
            <Price displayPrice={productPrice.displayPrice} />
          </PriceContainer>
        </ProductInfo>
        <div>
          <ProductVendor>{vendor}</ProductVendor>
        </div>
      </div>
    );
  }

  render() {
    const { components: { BadgeOverlay, Link }, product } = this.props;

    return (
      <div>
        <Link
          href={this.productDetailHref}
          onClick={this.handleOnClick}
        >
          <BadgeOverlay product={product}>
            {this.renderProductMedia()}
            {this.renderProductInfo()}
          </BadgeOverlay>
        </Link>
      </div>
    );
  }
}

export default withComponents(CatalogGridItem);
