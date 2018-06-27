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
    flex: 1 1 auto;
  }
`;

const ItemContentQuantityInput = styled.div`
  margin: 1rem 0;

  @media (min-width: 992px) {
    margin: 0;
  }
`;

const ItemContentPrice = styled.div`
  bottom: 0;
  flex: 0 1 auto;
  position: absolute;
  right: 0;

  @media (min-width: 768px) {
    margin-left: 1.5rem;
    position: relative;
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
      attributes: PropTypes.arrayOf(PropTypes.shape({
        /**
           * Attribute label (i.e. "Color").
           */
        label: PropTypes.string,
        /**
           *  Attribute value (i.e. "Red").
           */
        value: PropTypes.string
      })),
      /**
       * Current stock quantity of item
       */
      currentQuantity: PropTypes.number,
      /**
       * Image url of chosen item
       */
      imageUrl: PropTypes.string,
      /**
       * Price object of chosen item
       */
      price: PropTypes.shape({
        /**
         * Chosen items compare at price
         */
        compareAtPrice: PropTypes.string,
        /**
         * Chosen items display price
         */
        displayPrice: PropTypes.string
      }),
      /**
       * Chosen items slug
       */
      productSlug: PropTypes.string,
      /**
       * Chosen items title
       */
      title: PropTypes.string,
      /**
       * Quantity of chosen item in cart
       */
      quantity: PropTypes.number
    }),
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
    item: {
      attributes: [],
      price: {}
    },
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
    const { onRemoveItemFromCart } = this.props;
    onRemoveItemFromCart();
  };

  renderImage() {
    const { item: { imageUrl, productSlug } } = this.props;
    return (
      <a href={productSlug}>
        <picture>
          <source srcSet={`${imageUrl}/150`} media="(min-width: 768px)" />
          <img src={`${imageUrl}/100`} alt="" />
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
      item: { attributes, currentQuantity, productSlug, title, quantity, price: { displayPrice, compareAtPrice } }
    } = this.props;
    return (
      <Item>
        {this.renderImage()}
        <ItemContent>
          <ItemContentDetail>
            <ItemContentDetailInner>
              <ItemContentDetailInfo>
                <CartItemDetailComponent title={title} productSlug={productSlug} attributes={attributes} />

                <CartItemStockWarningComponent inventoryQuantity={currentQuantity} isLowInventoryQuantity />
              </ItemContentDetailInfo>

              <ItemContentQuantityInput>
                <CartItemQuantityInputComponent value={quantity} onChange={this.handleChangeCartItemQuantity} />
              </ItemContentQuantityInput>
            </ItemContentDetailInner>

            <ItemRemoveButton onClick={this.handleRemoveItemFromCart}>Remove</ItemRemoveButton>
          </ItemContentDetail>

          <ItemContentPrice>
            <CartItemPriceComponent displayPrice={displayPrice} displayCompareAtPrice={compareAtPrice} />
          </ItemContentPrice>
        </ItemContent>
      </Item>
    );
  }
}

export default CartItem;
