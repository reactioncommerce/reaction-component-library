import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { CustomPropTypes } from "../../../utils";

const Items = styled.div``;

class CartItems extends Component {
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
       * Pass either the Reaction `CartItem` component or your own component
       * that takes `items`, `isMiniCart`, `onChangeCartItemQuantity`, and
       * `onRemoveItemFromCart` props and uses them to render a single cart item.
       */
      CartItem: CustomPropTypes.component.isRequired
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
     * CartItem data. Only the `_id` prop is required by this component. Each item is passed to
     * CartItem, which may require additional props.
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
    onRemoveItemFromCart: PropTypes.func,
    /**
     * Product URL path to be prepended before the slug. Should end with with "/"
     */
    productURLPath: PropTypes.string
  };

  static defaultProps = {
    isMiniCart: false,
    isReadOnly: false,
    onChangeCartItemQuantity() { },
    onRemoveItemFromCart() { }
  };

  render() {
    const { className, items, components: { CartItem, ...components }, ...props } = this.props;
    return (
      <Items className={className}>
        {items.map((item) => <CartItem key={item._id} item={item} components={components} {...props} />)}
      </Items>
    );
  }
}

export default withComponents(CartItems);
