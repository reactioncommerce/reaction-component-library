import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { addTypographyStyles, applyTheme, CustomPropTypes } from "../../../utils";

const Cart = styled.div`
  border-bottom-color: ${applyTheme("miniCartBorderBottomColor")};
  border-bottom-style: solid;
  border-bottom-width: ${applyTheme("miniCartBorderBottomWidth")};
  border-left-color: ${applyTheme("miniCartBorderLeftColor")};
  border-left-style: solid;
  border-left-width: ${applyTheme("miniCartBorderLeftWidth")};
  border-right-color: ${applyTheme("miniCartBorderRightColor")};
  border-right-style: solid;
  border-right-width: ${applyTheme("miniCartBorderRightWidth")};
  border-top-color: ${applyTheme("miniCartBorderTopColor")};
  border-top-style: solid;
  border-top-width: ${applyTheme("miniCartBorderTopWidth")};
  max-width: ${applyTheme("miniCartMaxWidth")};
  overflow: hidden;
`;

const Items = styled.div`
  max-height: ${applyTheme("miniCartListHeightToBeginScrolling")};
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: ${applyTheme("miniCartListPaddingBottom")};
  padding-left: ${applyTheme("miniCartListPaddingLeft")};
  padding-right: ${applyTheme("miniCartListPaddingRight")};
  padding-top: ${applyTheme("miniCartListPaddingTop")};
`;

const Footer = styled.div`
  border-top-color: ${applyTheme("miniCartFooterBorderTopColor")};
  border-top-style: solid;
  border-top-width: ${applyTheme("miniCartFooterBorderTopWidth")};
  box-shadow: ${({ count }) => (count > 2 ? applyTheme("miniCartFooterBoxShadow_overflow") : applyTheme("miniCartFooterBoxShadow"))};
  padding-bottom: ${applyTheme("miniCartFooterPaddingBottom")};
  padding-left: ${applyTheme("miniCartFooterPaddingLeft")};
  padding-right: ${applyTheme("miniCartFooterPaddingRight")};
  padding-top: ${applyTheme("miniCartFooterPaddingTop")};
  position: relative;
`;

const FooterMessage = styled.span`
  ${addTypographyStyles("MiniCartFooterMessage", "captionText")}
  display: block;
  padding-bottom: ${applyTheme("miniCartFooterMessagePaddingBottom")};
  padding-left: ${applyTheme("miniCartFooterMessagePaddingLeft")};
  padding-right: ${applyTheme("miniCartFooterMessagePaddingRight")};
  padding-top: ${applyTheme("miniCartFooterMessagePaddingTop")};
  text-align: center;
`;

class MiniCart extends Component {
  static propTypes = {
    /**
     * Cart data
     */
    cart: PropTypes.shape({
      /**
       * Cart checkout info
       */
      checkout: PropTypes.shape({
        /**
         * Checkout summary
         */
        summary: PropTypes.shape({
          /**
           * Checkout summary item total info
           */
          itemTotal: PropTypes.shape({
            /**
             * Checkout summary item total display amount
             */
            displayAmount: PropTypes.string
          }),
          /**
           * Checkout summary tax info
           */
          taxTotal: PropTypes.shape({
            /**
             * Checkout summary tax display amount
             */
            displayAmount: PropTypes.string
          })
        })
      }),
      /**
       * CartItem data. This is passed to CartItems, which may require some props.
       */
      items: PropTypes.arrayOf(PropTypes.object).isRequired
    }),
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
       * Pass either the Reaction Button component or your own component that
       * accepts compatible props.
       */
      Button: CustomPropTypes.component.isRequired,
      /**
       * An element to show as the cart checkout button. If this isn't provided,
       * a button will be rendered using Button component.
       */
      cartCheckoutButton: PropTypes.node,
      /**
       * Pass either the Reaction CartItems component or your own component that
       * accepts compatible props.
       */
      CartItems: CustomPropTypes.component.isRequired,
      /**
       * Pass either the Reaction MiniCartSummary component or your own component that
       * accepts compatible props.
       */
      MiniCartSummary: CustomPropTypes.component.isRequired
    }),
    /**
     * On cart item quantity change handler
     */
    onChangeCartItemQuantity: PropTypes.func,
    /**
     * On default checkout button click. Not used if a custom button is supplied by `components.cartCheckoutButton`
     */
    onCheckoutButtonClick: PropTypes.func,
    /**
     * On remove item from cart handler
     */
    onRemoveItemFromCart: PropTypes.func
  };

  static defaultProps = {
    onChangeCartItemQuantity() {},
    onCheckoutButtonClick() {},
    onRemoveItemFromCart() {}
  };

  render() {
    const {
      cart: { checkout: { summary }, items },
      className,
      components: {
        Button,
        cartCheckoutButton,
        CartItems,
        MiniCartSummary,
        ...components
      },
      onCheckoutButtonClick,
      ...props
    } = this.props;
    return (
      <Cart className={className}>
        <Items>
          <CartItems items={items} components={components} {...props} isMiniCart />
        </Items>
        <Footer count={items.length}>
          <MiniCartSummary components={components} displaySubtotal={summary.itemTotal.displayAmount} />
          {cartCheckoutButton || <Button actionType="important" components={components} isFullWidth onClick={onCheckoutButtonClick}>Checkout</Button>}
          <FooterMessage>Shipping and tax calculated in checkout</FooterMessage>
        </Footer>
      </Cart>
    );
  }
}

export default withComponents(MiniCart);
