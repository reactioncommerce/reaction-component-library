import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, CustomPropTypes } from "../../../utils";

const Cart = styled.div`
  border: 1px solid ${applyTheme("color_black10")};
  max-width: 360px;
  overflow: hidden;
`;

const Items = styled.div`
  max-height: 420px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Footer = styled.div`
  border-top: 1px solid ${applyTheme("color_black10")};
  box-shadow: ${({ count }) => (count > 2 ? applyTheme("shadow_depth1") : "none")};
  padding: 0 1rem 1rem;
  position: relative;

  span {
    color: ${applyTheme("color_black30")};
    display: block;
    font-family: ${applyTheme("font_family")};
    font-size: ${applyTheme("font_size_small")};
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: 0.3px;
    margin: 0.5rem 0 0;
    text-align: center;
  }
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
           * Checkout summary subtotal info
           */
          subtotal: PropTypes.shape({
            /**
             * Checkout summary subtotal display amount
             */
            displayAmount: PropTypes.string
          }),
          /**
           * Checkout summary tax info
           */
          tax: PropTypes.shape({
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
     * If you've set up a components context using @reactioncommerce/components-context
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
     * On remove item from cart handler
     */
    onRemoveItemFromCart: PropTypes.func
  };

  static defaultProps = {
    onChangeCartItemQuantity() {},
    onRemoveItemFromCart() {}
  };

  render() {
    const {
      cart: { checkout: { summary }, items },
      components: {
        Button,
        cartCheckoutButton,
        CartItems,
        MiniCartSummary,
        ...components
      },
      ...props
    } = this.props;
    return (
      <Cart>
        <Items>
          <CartItems items={items} components={components} {...props} isMiniCart />
        </Items>
        <Footer count={items.length}>
          <MiniCartSummary components={components} displaySubtotal={summary.subtotal.displayAmount} />
          {cartCheckoutButton || <Button actionType="important" components={components} isFullWidth>Checkout</Button>}
          <span>Shipping and tax calculated in checkout</span>
        </Footer>
      </Cart>
    );
  }
}

export default withComponents(MiniCart);
