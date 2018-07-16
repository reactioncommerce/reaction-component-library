import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

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
     * Provided child components to display item data
     */
    components: PropTypes.shape({
      /**
       * CartItemDetail component
       */
      CartItemDetailComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      /**
       * Stock warning component
       */
      CartItemStockWarningComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      /**
       * Price component
       */
      CartItemPriceComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      /**
       * QuantityInput component
       */
      CartItemQuantityInputComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    }),
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
    components: {
      CartItemDetailComponent: "Cart Item Detail",
      CartItemStockWarningComponent: "Cart Item Stock Warning",
      CartItemPriceComponent: "Cart Item Price",
      CartItemQuantityInputComponent: "Cart Item Quantity Input"
    },
    isMiniCart: false,
    onChangeCartItemQuantity() {},
    onRemoveItemFromCart() {}
  };

  state = {
    isProcessing: false
  };

  handleChangeCartItemQuantity = (value) => {
    const { onChangeCartItemQuantity } = this.props;
    onChangeCartItemQuantity(value);
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
      components: {
        CartItemDetailComponent,
        CartItemStockWarningComponent,
        CartItemPriceComponent,
        CartItemQuantityInputComponent
      },
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

    return (
      <Item>
        {this.renderImage()}
        <ItemContent>
          <ItemContentDetail>
            <ItemContentDetailInner>
              <ItemContentDetailInfo isMiniCart={isMiniCart}>
                <CartItemDetailComponent
                  title={title}
                  productSlug={productSlug}
                  productVendor={productVendor}
                  attributes={attributes}
                  isMiniCart={isMiniCart}
                />

                <CartItemStockWarningComponent
                  inventoryQuantity={currentQuantity}
                  isLowInventoryQuantity={isLowQuantity}
                />
              </ItemContentDetailInfo>

              <ItemContentQuantityInput isMiniCart={isMiniCart}>
                <CartItemQuantityInputComponent value={quantity} onChange={this.handleChangeCartItemQuantity} />
              </ItemContentQuantityInput>
            </ItemContentDetailInner>

            <ItemRemoveButton onClick={this.handleRemoveItemFromCart}>Remove</ItemRemoveButton>
          </ItemContentDetail>

          <ItemContentPrice isMiniCart={isMiniCart}>
            <CartItemPriceComponent
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

export default CartItem;
