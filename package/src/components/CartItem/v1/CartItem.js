import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../../Button/v1";
import { applyTheme } from "../../../utils";

const Item = styled.div`
  border-bottom: solid 1px #f5f5f5;
  box-sizing: border-box;
  display: flex;
  padding: 1rem;
  width: 100%;
`;

const ItemContent = styled.div`
  background-color: rgba(145, 234, 86, 0.2);
  margin-left: 1rem;
  width: 100%;
`;

const ItemContentDetail = styled.div`
  background-color: rgba(45, 24, 86, 0.2);
`;

const ItemContentMaybe = styled.div`
  background-color: rgba(45, 24, 86, 0.2);
`;

class CartItem extends Component {
  static propTypes = {
    components: PropTypes.shape({
      CartItemDetailComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      CartItemStockWarningComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      CartItemPriceComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      CartItemQuantityInputComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    }),
    item: PropTypes.shape({}),
    onChangeCartItemQuantity: PropTypes.func,
    onRemoveItemFromCart: PropTypes.func
  };

  static defaultProps = {
    item: {},
    onChangeCartItemQuantity() {},
    onRemoveItemFromCart() {}
  };

  handleChangeCartItemQuantity = () => {};

  handleRemoveItemFromCart = () => {};

  render() {
    const {
      components: {
        CartItemDetailComponent,
        CartItemStockWarningComponent,
        CartItemPriceComponent,
        CartItemQuantityInputComponent
      },
      item
    } = this.props;
    return (
      <Item>
        <img src="http://placehold.it/100" />
        <ItemContent>
          <ItemContentDetail>
            <CartItemDetailComponent />
            <CartItemStockWarningComponent inventoryQuantity={1} isLowInventoryQuantity={10} />
            <CartItemQuantityInputComponent />
          </ItemContentDetail>
          <Button isShortHeight isTextOnly onClick={this.handleRemoveItemFromCart}>
            Remove
          </Button>
          <CartItemPriceComponent displayPrice="$20.00" />
        </ItemContent>
      </Item>
    );
  }
}

export default CartItem;
