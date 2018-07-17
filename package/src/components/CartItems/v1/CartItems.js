import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Items = styled.div``;

class CartItems extends Component {
  static propTypes = {
    /**
     * Provided child components to display item data
     */
    components: PropTypes.shape({
      /**
       * CartItem component
       */
      CartItemComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    }),
    /**
     * Is in a MiniCart component
     */
    isMiniCart: PropTypes.bool,
    /**
     * CartItem data. Only the `_id` prop is required by this component. Each item is passed to
     * CartItemComponent, which may require additional props.
     */
    items: PropTypes.arrayOf(PropTypes.shape({
      /**
       * The cart item ID
       */
      _id: PropTypes.string.isRequired
    })).isRequired,
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
      CartItemComponent: "Cart Item"
    },
    isMiniCart: false,
    onChangeCartItemQuantity() {},
    onRemoveItemFromCart() {}
  };

  render() {
    const { items, components: { CartItemComponent, ...components }, ...props } = this.props;
    return (
      <Items>
        {items.map((item) => <CartItemComponent key={item._id} item={item} components={components} {...props} />)}
      </Items>
    );
  }
}

export default CartItems;
