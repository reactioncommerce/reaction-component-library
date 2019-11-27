import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { addTypographyStyles, applyTheme } from "../../../utils";

const Detail = styled.div`
  flex: 0 0 fit;
`;

const Title = styled.h3`
  ${addTypographyStyles("CartItemDetailTitle", "headingTextBold")}
  margin-top: ${applyTheme("CartItemDetailTitle.marginTop")};
  margin-bottom: ${applyTheme("CartItemDetailTitle.marginBottom")};
  margin-left: ${applyTheme("CartItemDetailTitle.marginLeft")};
  margin-right: ${applyTheme("CartItemDetailTitle.marginRight")};

  a {
    ${addTypographyStyles("CartItemDetailTitle", "headingTextBold")}
    text-decoration: none;
    &:focus,
    &:hover {
      color: ${applyTheme("CartItemDetailTitle.color_focus")};
    }
  }
`;

const Text = styled.p`
  ${addTypographyStyles("CartItemDetailAttributes", "labelText")}
  margin: 0;
`;

const Attributes = styled.div`
  margin-bottom: 0.5rem;
`;

const Attr = styled.p`
  ${addTypographyStyles("CartItemDetailAttributes", "labelText")}
  margin: 0;
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
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
     */
    className: PropTypes.string,
    /**
     * Is in a MiniCart component
     */
    isMiniCart: PropTypes.bool,
    /**
     * Product slug of chosen item.
     */
    productSlug: PropTypes.string,
    /**
     * Product URL path to be prepended before the slug
     */
    productURLPath: PropTypes.string,
    /**
     * Product vendor of chosen item.
     */
    productVendor: PropTypes.string,
    /**
     * Item quantity
     */
    quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * The text for the "Quantity" label text.
     */
    quantityText: PropTypes.string,
    /**
     * Product title of chosen item.
     */
    title: PropTypes.string
  };

  static defaultProps = {
    quantityText: "Quantity"
  }

  renderBlockAttributes() {
    const { attributes } = this.props;

    return (attributes || []).map(({ label, value }) => {
      if (!label && !value) return null;

      // For now, due to strange implementation of attributes/options in the product data,
      // we allow labels without values and values without labels.
      return (
        <Attr key={label || value}>
          {label ? <span>{label}:</span> : null} {value}
        </Attr>
      );
    });
  }

  renderInlineAttributes() {
    const { attributes } = this.props;
    if (!attributes || !attributes.length) return null;

    const values = attributes.map(({ value }) => value).filter((value) => !!value);
    return (
      <Attr>{values.join(", ")}</Attr>
    );
  }

  renderAttributes() {
    const { attributes, isMiniCart, productVendor, quantity, quantityText } = this.props;

    if ((!attributes || attributes.length === 0) && !productVendor) return null;

    return (
      <Attributes isMiniCart={isMiniCart}>
        {productVendor ? <Text>{productVendor}</Text> : null}
        {isMiniCart ? this.renderInlineAttributes() : this.renderBlockAttributes()}
        {quantity ? <Text>{quantityText}: {quantity}</Text> : null}
      </Attributes>
    );
  }

  render() {
    const { className, productURLPath, productSlug, title } = this.props;
    return (
      <Detail className={className}>
        <Title>
          <a href={[productURLPath, productSlug].join("")}>{title}</a>
        </Title>
        {this.renderAttributes()}
      </Detail>
    );
  }
}

export default CartItemDetail;
