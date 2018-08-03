import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, CustomPropTypes } from "../../../utils";

const Item = styled.div`
  align-items: flex-start;
  border-bottom: solid 1px ${applyTheme("color_black05")};
  box-sizing: border-box;
  display: flex;
  padding: 1rem;
  width: 100%;

  &:first-of-type {
    border-top: solid 1px ${applyTheme("color_black05")};
  }

  > * {
    box-sizing: border-box;
  }
`;

const ItemContent = styled.div`
  display: flex;
  margin-left: 1rem;
  position: relative;
  width: 100%;
`;

const ItemContentDetail = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
`;

const ItemContentDetailInner = styled.div`
  display: flex;
  flex: 1 1 100%;
  flex-wrap: wrap;
`;

const ItemContentDetailInfo = styled.div`
  flex: 1 1 100%;

  @media (min-width: 992px) {
    flex: 1 1 ${({ isMiniCart }) => (isMiniCart ? "100%" : "auto")};
  }
`;

const ItemContentQuantityInput = styled.div`
  margin: 0.75rem 0 0.5rem;

  @media (min-width: 992px) {
    margin: ${({ isMiniCart }) => (isMiniCart ? "0.75rem 0 0.5rem" : "0")};
  }
`;

const ItemContentPrice = styled.div`
  bottom: 0;
  flex: 0 1 auto;
  position: absolute;
  right: 0;

  @media (min-width: 768px) {
    margin-left: 1.5rem;
    position: ${({ isMiniCart }) => (isMiniCart ? "absolute" : "relative")};
  }
`;

const ItemRemoveButton = styled.button`
  align-self: flex-start;
  background-color: transparent;
  border: none;
  color: ${applyTheme("color_coolGrey400")};
  cursor: pointer;
  display: table;
  flex: 0 1 auto;
  font-family: ${applyTheme("font_family")};
  font-size: ${applyTheme("font_size_small")};
  font-weight: normal;
  line-height: normal;
  letter-spacing: normal;
  margin: 0.5rem 0 0;
  padding: 0;
  width: auto;

  &:focus,
  &:hover {
    color: ${applyTheme("color_coolGrey")};
  }
`;

class CartItem extends Component {
  static propTypes = {
    /**
     * If you've set up a components context using @reactioncommerce/components-context
     * (recommended), then this prop will come from there automatically. If you have not
     * set up a components context or you want to override one of the components in a
     * single spot, you can pass in the components prop directly.
     */
    components: PropTypes.shape({
      /**
       * Pass either the Reaction CartItemDetail component or your own component that
       * accepts compatible props.
       */
      CartItemDetail: CustomPropTypes.component.isRequired,
      /**
       * Pass either the Reaction Price component or your own component that
       * accepts compatible props.
       */
      Price: CustomPropTypes.component.isRequired,
      /**
       * Pass either the Reaction QuantityInput component or your own component that
       * accepts compatible props.
       */
      QuantityInput: CustomPropTypes.component.isRequired,
      /**
       * Pass either the Reaction StockWarning component or your own component that
       * accepts compatible props.
       */
      StockWarning: CustomPropTypes.component.isRequired
    }).isRequired,
    /**
     * Is in a MiniCart component
     */
    isMiniCart: PropTypes.bool,
    /**
     * CartItem data
     */
    item: PropTypes.shape({
      /**
       * The cart item ID
       */
      _id: PropTypes.string,
      /**
       * Array of additional attributes of the chosen item.
       */
      attributes: PropTypes.arrayOf(PropTypes.object),
      /**
       * The current compareAt price (MSRP)
       */
      compareAtPrice: PropTypes.shape({
        /**
         * The display price
         */
        displayAmount: PropTypes.string.isRequired
      }),
      /**
       * Current stock quantity of item
       */
      currentQuantity: PropTypes.number,
      /**
       * Image URLs of chosen item
       */
      imageURLs: PropTypes.shape({
        large: PropTypes.string,
        medium: PropTypes.string,
        original: PropTypes.string,
        small: PropTypes.string,
        thumbnail: PropTypes.string
      }),
      /**
       * Is the chosen item have a low quantity
       */
      isLowQuantity: PropTypes.bool,
      /**
       * Price object of chosen item
       */
      price: PropTypes.shape({
        /**
         * The display price
         */
        displayAmount: PropTypes.string.isRequired
      }).isRequired,
      /**
       * Chosen items slug
       */
      productSlug: PropTypes.string,
      /**
       * Chosen items vendor
       */
      productVendor: PropTypes.string,
      /**
       * Chosen items title
       */
      title: PropTypes.string,
      /**
       * Quantity of chosen item in cart
       */
      quantity: PropTypes.number
    }).isRequired,
    /**
     * On cart item quantity change handler
     */
    onChangeCartItemQuantity: PropTypes.func,
    /**
     * On remove item from cart handler
     */
    onRemoveItemFromCart: PropTypes.func
  };

  static defaultProps = {
    isMiniCart: false,
    onChangeCartItemQuantity() {},
    onRemoveItemFromCart() {}
  };

  state = {
    isProcessing: false
  };

  handleChangeCartItemQuantity = (value) => {
    const { onChangeCartItemQuantity, item: { _id } } = this.props;
    onChangeCartItemQuantity(value, _id);
  };

  handleRemoveItemFromCart = () => {
    const { onRemoveItemFromCart, item: { _id } } = this.props;
    onRemoveItemFromCart(_id);
  };

  renderImage() {
    const { isMiniCart, item: { imageURLs, productSlug } } = this.props;

    const { small, thumbnail } = imageURLs || {};

    if (!small || !thumbnail) return null;

    return (
      <a href={productSlug}>
        <picture>
          {isMiniCart ? "" : <source srcSet={small} media="(min-width: 768px)" />}
          <img src={thumbnail} alt="" style={{ display: "block" }} />
        </picture>
      </a>
    );
  }

  render() {
    const {
      components,
      isMiniCart,
      item: {
        attributes,
        compareAtPrice,
        currentQuantity,
        productSlug,
        productVendor,
        title,
        quantity,
        isLowQuantity,
        price: { displayAmount: displayPrice }
      }
    } = this.props;

    const { displayAmount: displayCompareAtPrice } = compareAtPrice || {};

    const {
      CartItemDetail,
      Price,
      QuantityInput,
      StockWarning
    } = components || {};

    return (
      <Item>
        {this.renderImage()}
        <ItemContent>
          <ItemContentDetail>
            <ItemContentDetailInner>
              <ItemContentDetailInfo isMiniCart={isMiniCart}>
                <CartItemDetail
                  attributes={attributes}
                  isMiniCart={isMiniCart}
                  productSlug={productSlug}
                  productVendor={productVendor}
                  title={title}
                />

                <StockWarning
                  inventoryQuantity={currentQuantity}
                  isLowInventoryQuantity={isLowQuantity}
                />
              </ItemContentDetailInfo>

              <ItemContentQuantityInput isMiniCart={isMiniCart}>
                <QuantityInput value={quantity} onChange={this.handleChangeCartItemQuantity} />
              </ItemContentQuantityInput>
            </ItemContentDetailInner>

            <ItemRemoveButton onClick={this.handleRemoveItemFromCart}>Remove</ItemRemoveButton>
          </ItemContentDetail>

          <ItemContentPrice isMiniCart={isMiniCart}>
            <Price
              displayPrice={displayPrice}
              displayCompareAtPrice={displayCompareAtPrice}
              hasPriceBottom={isMiniCart}
            />
          </ItemContentPrice>
        </ItemContent>
      </Item>
    );
  }
}

export default withComponents(CartItem);
