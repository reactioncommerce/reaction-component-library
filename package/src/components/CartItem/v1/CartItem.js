import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const Item = styled.div`
  border-bottom: solid 1px ${applyTheme("color_black05")};
  box-sizing: border-box;
  display: flex;
  padding: 1rem;
  width: 100%;
`;

const ItemContent = styled.div`
  background-color: rgba(145, 234, 86, 0.2);
  display: flex;
  margin-left: 1rem;
  width: 100%;
`;

const ItemContentDetail = styled.div`
  background-color: rgba(45, 24, 86, 0.2);
  display: flex;
  flex: 1 1 100%;
  flex-direction: column;
`;

const ItemContentDetailInner = styled.div`
  background-color: rgba(134, 200, 200, 0.2);
  flex: 1 1 auto;
`;

const ItemContentPrice = styled.div`
  background-color: rgba(5, 224, 186, 0.2);
  align-self: flex-end;
  flex: 0 1 auto;
`;

const ItemRemoveButton = styled.button`
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
`;

class CartItem extends Component {
  static propTypes = {
    components: PropTypes.shape({
      CartItemDetailComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      CartItemStockWarningComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      CartItemPriceComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      CartItemQuantityInputComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      CartItemRemoveButtonComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
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
            <ItemContentDetailInner>
              <CartItemDetailComponent />

              <CartItemStockWarningComponent inventoryQuantity={1} isLowInventoryQuantity={10} />

              <CartItemQuantityInputComponent />
            </ItemContentDetailInner>

            <ItemRemoveButton onClick={this.handleRemoveItemFromCart}>Remove</ItemRemoveButton>
          </ItemContentDetail>

          <ItemContentPrice>
            <CartItemPriceComponent displayPrice="$20.00" displayCompareAtPrice="$35.00" />
          </ItemContentPrice>
        </ItemContent>
      </Item>
    );
  }
}

export default CartItem;
