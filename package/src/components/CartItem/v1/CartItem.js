import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../../Button/v1";
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
  background-color: blue;
  display: flex;
  margin-left: 1rem;
  position: relative;
  width: 100%;
`;

const ItemContentDetail = styled.div`
  background-color: yellow;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
`;

const ItemContentDetailInner = styled.div`
  background-color: limegreen;
  flex: 1 1 100%;
  justify-self: strech;
`;

const ItemContentPrice = styled.div`
  background-color: orange;
  bottom: 0;
  flex: 0 1 auto;
  position: absolute;
  right: 0;

  @media (min-width: 768px) {
    position: relative;
  }
`;

const ItemRemoveButton = styled.button`
  align-self: flex-start;
  background-color: red;
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

// temp image component
const Img = ({ src }) => (
  <picture>
    <source srcSet={`${src}/150`} media="(min-width: 768px)" />
    <img src={`${src}/100`} />
  </picture>
);

// temp cart detail component
const CartItemDetailComponent = ({ attributes, title, productSlug }) => {
  return (
    <Fragment>
      <h3>
        <a href={productSlug}>{title}</a>
      </h3>
      {attributes.map(({ label, value }) => (
        <p>
          <b>{label}:</b> {value}
        </p>
      ))}
    </Fragment>
  );
};

let inputQuantity;
// temp cart item quantity input component
const CartItemQuantityInputComponent = ({ quantity: initQuantity }) => {
  inputQuantity = 0;
  const decreaseQuantity = (e) => {
    inputQuantity--;
    console.log("decrease inputQuantity", inputQuantity, initQuantity);
  };
  const increaseQuantity = (e) => {
    inputQuantity++;
    console.log("increase inputQuantity", inputQuantity, initQuantity);
  };
  return (
    <Fragment>
      <Button isShortHeight onClick={decreaseQuantity}>
        <i className="fa fa-minus" />
      </Button>
      <input
        type="number"
        value={inputQuantity}
        onChange={({ target: { value } }) => {
          inputQuantity = value;
          console.log("change inputQuantity", inputQuantity, initQuantity, value);
        }}
      />
      <Button isShortHeight onClick={increaseQuantity}>
        <i className="fa fa-plus" />
      </Button>
    </Fragment>
  );
};

class CartItem extends Component {
  static propTypes = {
    components: PropTypes.shape({
      CartItemDetailComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      CartItemStockWarningComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      CartItemPriceComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      CartItemQuantityInputComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      CartItemRemoveButtonComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    }),
    item: PropTypes.shape({
      _id: PropTypes.string,
      attributes: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          value: PropTypes.string
        })
      ),
      currentQuantity: PropTypes.number,
      imageUrl: PropTypes.string,
      price: PropTypes.shape({
        compareAtPrice: PropTypes.string,
        displayPrice: PropTypes.string
      }),
      productSlug: PropTypes.string,
      title: PropTypes.string,
      quantity: PropTypes.number
    }),
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
        //CartItemDetailComponent,
        CartItemStockWarningComponent,
        CartItemPriceComponent
        //CartItemQuantityInputComponent
      },
      item: { attributes, imageUrl, productSlug, title, quantity }
    } = this.props;
    return (
      <Item>
        <Img src={imageUrl} />
        <ItemContent>
          <ItemContentDetail>
            <ItemContentDetailInner>
              <CartItemDetailComponent title={title} productSlug={productSlug} attributes={attributes} />

              <CartItemStockWarningComponent inventoryQuantity={1} isLowInventoryQuantity={10} />

              <CartItemQuantityInputComponent quantity={quantity} />
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
