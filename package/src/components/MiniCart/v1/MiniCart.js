import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

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
       * CartItem data. This is passed to CartItemComponent, which may require some props.
       */
      items: PropTypes.arrayOf(PropTypes.object).isRequired
    }),
    /**
     * Provided child components to display item data
     */
    components: PropTypes.shape({
      /**
       * CartCheckoutButton component
       */
      CartCheckoutButtonComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      /**
       * CartSummary component
       */
      CartSummaryComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      /**
       * CartItems component
       */
      CartItemsComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
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
      CartCheckoutButtonComponent: "Cart Checkout Button",
      CartSummaryComponent: "Cart Summary",
      CartItemsComponent: "Cart Items"
    },
    onChangeCartItemQuantity() {},
    onRemoveItemFromCart() {}
  };

  render() {
    const {
      cart: { checkout: { summary }, items },
      components: {
        ButtonComponent,
        CartCheckoutButtonComponent,
        CartItemsComponent,
        CartSummaryComponent,
        ...components
      },
      ...props
    } = this.props;
    return (
      <Cart>
        <Items>
          <CartItemsComponent items={items} components={components} {...props} isMiniCart />
        </Items>
        <Footer count={items.length}>
          <CartSummaryComponent displaySubtotal={summary.subtotal.displayAmount} />
          <CartCheckoutButtonComponent components={{ Button: ButtonComponent }} />
          <span>Shipping and tax calculated in checkout</span>
        </Footer>
      </Cart>
    );
  }
}

export default MiniCart;
