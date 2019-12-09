import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { addTypographyStyles, applyTheme, CustomPropTypes } from "../../../utils";

const Item = styled.div`
  position: relative;
  align-items: flex-start;
  border-bottom-color: ${applyTheme("CartItem.borderBottomColor")};
  border-bottom-style: solid;
  border-bottom-width: ${applyTheme("CartItem.borderBottomWidth")};
  border-left-color: ${applyTheme("CartItem.borderLeftColor")};
  border-left-style: solid;
  border-left-width: ${applyTheme("CartItem.borderLeftWidth")};
  border-right-color: ${applyTheme("CartItem.borderRightColor")};
  border-right-style: solid;
  border-right-width: ${applyTheme("CartItem.borderRightWidth")};
  border-top-color: ${applyTheme("CartItem.borderTopColor")};
  border-top-style: solid;
  border-top-width: ${applyTheme("CartItem.borderTopWidth")};
  box-sizing: border-box;
  display: flex;
  padding-bottom: ${applyTheme("CartItem.paddingBottom")};
  padding-left: ${applyTheme("CartItem.paddingLeft")};
  padding-right: ${applyTheme("CartItem.paddingRight")};
  padding-top: ${applyTheme("CartItem.paddingTop")};
  width: 100%;

  &:first-of-type {
    border-top: none;
  }

  &:last-of-type {
    border-bottom: none;
  }

  > * {
    box-sizing: border-box;
  }
`;

const ItemContent = styled.div`
  display: flex;
  margin-left: ${applyTheme("CartItem.imageContentSpacing")};
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
  margin-top: ${applyTheme("CartItem.quantityInputSpacingAbove")};
  margin-bottom: ${applyTheme("CartItem.quantityInputSpacingBelow")};
  margin-left: 0;
  margin-right: 0;

  @media (min-width: 992px) {
    margin-top: ${(props) => (props.isMiniCart ? applyTheme("CartItem.quantityInputSpacingAbove")(props) : "0")};
    margin-bottom: ${(props) => (props.isMiniCart ? applyTheme("CartItem.quantityInputSpacingBelow")(props) : "0")};
  }
`;

const ItemContentPrice = styled.div`
  position: initial;
  bottom: ${applyTheme("CartItem.paddingBottom")};
  right: 0;
  text-align: right;
  @media (max-width: 768px) {
    position: absolute;
  }
  @media (min-width: 768px) {
    margin-left: 1.5rem;
  }
`;

const ItemContentSubtotal = styled.div`
  position: absolute;
  margin-top: ${(props) => (props.isMiniCart ? applyTheme("CartItem.subtotalDisplaySpacingAbove")(props) : "0")};
  bottom: ${applyTheme("CartItem.paddingBottom")};
  right: 0;
  text-align: right;
  @media (max-width: 768px) {
    position: initial;
    margin-top: ${applyTheme("CartItem.subtotalDisplaySpacingAbove")};
  }
`;

const ItemContentSubtotalTitle = styled.div`
  ${addTypographyStyles("ItemContentSubtotalTitle", "labelText")};
  white-space: pre;
`;

const ItemContentSubtotalDisplay = styled.div`
  ${addTypographyStyles("ItemContentSubtotalDisplay", "bodyTextSemiBold")};
`;

const ItemRemoveButton = styled.button`
  ${addTypographyStyles("CartItemRemoveButton", "labelText")}
  align-self: flex-start;
  background-color: transparent;
  border: none;
  color: ${applyTheme("CartItem.removeButtonColor")};
  cursor: pointer;
  display: table;
  flex: 0 1 auto;
  margin-bottom: ${applyTheme("CartItem.removeButtonSpacingBelow")};
  margin-left: 0;
  margin-right: 0;
  margin-top: ${applyTheme("CartItem.removeButtonSpacingAbove")};
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  width: auto;

  &:focus,
  &:hover {
    color: ${applyTheme("CartItem.removeButtonColor_focus")};
  }
`;

class CartItem extends Component {
  static propTypes = {
    /**
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
     */
    className: PropTypes.string,
    /**
     * If you've set up a components context using
     * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
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
     * Hide remove button and quantity input
     */
    isReadOnly: PropTypes.bool,
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
      subtotal: PropTypes.shape({
        /**
         * The display subtotal
         */
        displayAmount: PropTypes.string
      }),
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
    onRemoveItemFromCart: PropTypes.func,
    /**
     * Product URL path to be prepended before the slug
     */
    productURLPath: PropTypes.string,
    /**
     * Text to display inside the remove button
     */
    removeText: PropTypes.string,
    /**
     * The text for the "Total" title text.
     */
    totalText: PropTypes.string
  };

  static defaultProps = {
    isMiniCart: false,
    isReadOnly: false,
    onChangeCartItemQuantity() { },
    onRemoveItemFromCart() { },
    removeText: "Remove",
    totalText: "Total"
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
    const { isMiniCart, item: { imageURLs, productSlug }, productURLPath } = this.props;

    const { small, thumbnail } = imageURLs || {};

    if (!small || !thumbnail) return null;

    return (
      <a href={[productURLPath, productSlug].join("")}>
        <picture>
          {isMiniCart ? "" : <source srcSet={small} media="(min-width: 768px)" />}
          <img src={thumbnail} alt="" style={{ display: "block" }} />
        </picture>
      </a>
    );
  }

  render() {
    const {
      className,
      components,
      isMiniCart,
      isReadOnly,
      productURLPath,
      item: {
        attributes,
        compareAtPrice,
        currentQuantity,
        productSlug,
        productVendor,
        title,
        quantity,
        isLowQuantity,
        price: { displayAmount: displayPrice },
        subtotal
      },
      removeText,
      totalText
    } = this.props;

    const { displayAmount: displaySubtotal } = subtotal || {};
    const { displayAmount: displayCompareAtPrice } = compareAtPrice || {};

    const {
      CartItemDetail,
      Price,
      QuantityInput,
      StockWarning
    } = components || {};

    return (
      <Item className={className}>
        {this.renderImage()}
        <ItemContent>
          <ItemContentDetail>
            <ItemContentDetailInner>
              <ItemContentDetailInfo isMiniCart={isMiniCart}>
                <CartItemDetail
                  attributes={attributes}
                  isMiniCart={isMiniCart}
                  productURLPath={productURLPath}
                  productSlug={productSlug}
                  productVendor={productVendor}
                  quantity={isReadOnly ? quantity : null}
                  title={title}
                />

                <StockWarning
                  inventoryQuantity={currentQuantity}
                  isLowInventoryQuantity={isLowQuantity}
                />
              </ItemContentDetailInfo>


              {!isReadOnly &&
                <ItemContentQuantityInput isMiniCart={isMiniCart}>
                  <QuantityInput value={quantity} onChange={this.handleChangeCartItemQuantity} />
                </ItemContentQuantityInput>
              }
            </ItemContentDetailInner>

            {!isReadOnly && <ItemRemoveButton onClick={this.handleRemoveItemFromCart}>{removeText}</ItemRemoveButton>}
          </ItemContentDetail>
        </ItemContent>
        <ItemContentPrice isMiniCart={isMiniCart}>
          <Price
            displayPrice={displayPrice}
            displayCompareAtPrice={displayCompareAtPrice}
            hasPriceBottom={isMiniCart}
          />
          { quantity !== 1 ?
            <ItemContentSubtotal isMiniCart={isMiniCart}>
              <ItemContentSubtotalTitle>{totalText} ({quantity}):</ItemContentSubtotalTitle>
              <ItemContentSubtotalDisplay>{displaySubtotal}</ItemContentSubtotalDisplay>
            </ItemContentSubtotal>
            :
            null
          }
        </ItemContentPrice>
      </Item>
    );
  }
}

export default withComponents(CartItem);
