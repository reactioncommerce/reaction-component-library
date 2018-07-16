import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const Detail = styled.div`
  flex: 0 0 fit;

  h3 {
    font-family: ${applyTheme("font_family")};
    letter-spacing: 0.3px;
    line-height: 1;
    margin: 0 0 10px;
  }

  a {
    color: ${applyTheme("color_coolGrey500")};
    text-decoration: none;
    &:focus,
    &:hover {
      color: ${applyTheme("color_coolGrey300")};
    }
  }
`;

const Title = styled.h3`
  font-size: ${applyTheme("font_size_default")};
`;

const Vendor = styled.p`
  color: ${applyTheme("color_black65")};
  display: block;
  font-family: ${applyTheme("font_family")};
  font-size: ${applyTheme("font_size_small")};
  margin: 0;
`;

const Attributes = styled.div`
  margin-bottom: 0.5rem;

  span {
    display: none;

    @media (min-width: 768px) {
      display: ${({ isMiniCart }) => (isMiniCart ? "none" : "inline")};
    }
  }
`;

const Attr = styled.p`
  color: ${applyTheme("color_black65")};
  display: inline;
  font-family: ${applyTheme("font_family")};
  font-size: ${applyTheme("font_size_small")};
  margin: 0 0.05rem 0 0;

  &:after {
    content: ",";
  }

  &:last-of-type:after {
    content: "";
  }

  @media (min-width: 768px) {
    display: ${({ isMiniCart }) => (isMiniCart ? "inline" : "block")};

    &:after {
      content: ${({ isMiniCart }) => (isMiniCart ? "','" : "''")};
    }
  }
`;

class CartItemDetail extends Component {
  static propTypes = {
    /**
     * Array of additional attributes of the chosen item.
     */
    attributes: PropTypes.arrayOf(PropTypes.shape({
      /**
       * Attribute label (i.e. "Color").
       */
      label: PropTypes.string,
      /**
       * Attribute value (i.e. "Red").
       */
      value: PropTypes.string
    })),
    /**
     * Is in a MiniCart component
     */
    isMiniCart: PropTypes.bool,
    /**
     * Product slug of chosen item.
     */
    productSlug: PropTypes.string,
    /**
     * Product vendor of chosen item.
     */
    productVendor: PropTypes.string,
    /**
     * Product title of chosen item.
     */
    title: PropTypes.string
  };

  renderAttributes() {
    let { attributes, isMiniCart, productVendor } = this.props;

    if ((!attributes || attributes.length === 0) && !productVendor) return null;

    return (
      <Attributes isMiniCart={isMiniCart}>
        {productVendor ? <Vendor>{productVendor}</Vendor> : null}
        {(attributes || []).map(({ label, value }) => {
          if (!label && !value) return null;

          // For now, due to strange implementation of attributes/options in the product data,
          // we allow labels without values and values without labels.
          return (
            <Attr key={label || value} isMiniCart={isMiniCart}>
              {label ? <span>{label}:</span> : null} {value}
            </Attr>
          );
        })}
      </Attributes>
    );
  }

  render() {
    const { attributes, productSlug, title } = this.props;
    return (
      <Detail>
        <Title>
          <a href={productSlug}>{title}</a>
        </Title>
        {this.renderAttributes()}
      </Detail>
    );
  }
}

export default CartItemDetail;
