import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const Surface = styled.div`
  background-color: ${props => props.isDense ? "transparent" : applyTheme("color_black02")(props)};
  padding: ${props => props.isDense ? "0" : "1rem"};
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  font-family: ${applyTheme("font_family")};
  text-align: left;
`;

const Thr = styled.th`
  text-align: right;
  color: ${applyTheme("color_black30")};
  font-family: ${applyTheme("font_family")};
  font-weight: normal;
`;

const Td = styled.td`
  font-family: ${applyTheme("font_family")};
  padding: ${props => props.isDense ? "0.5rem 0" : "1rem 0"};
  color: ${applyTheme("color_coolGrey400")};
  border-top: ${props => props.isBorder ? `1px solid ${applyTheme("color_black10")(props)}` : "initial" };
  border-bottom: ${props => props.isBorder ? `1px solid ${applyTheme("color_black10")(props)}` : "initial"};
`;

const TdValue = Td.extend`
  font-family: ${applyTheme("font_family")};
  text-align: right;
  color: ${applyTheme("color_coolGrey500")};
`;

const Title = styled.span`
  font-family: ${applyTheme("font_family")};
  font-weight: ${applyTheme("font_weight_bold")};
  color: ${applyTheme("color_coolGrey500")};
`;

const Discount = styled.span`
  font-family: ${applyTheme("font_family")};
  color: ${applyTheme("color_forestGreen300")};
  font-weight: ${applyTheme("font_weight_bold")};
`;

const Total = styled.span`
  font-family: ${applyTheme("font_family")};
  font-weight: ${applyTheme("font_weight_bold")};
  color: ${applyTheme("color_coolGrey500")};
`;

class CartSummary extends Component {
  static propTypes = {
    /**
     * Discount amount associated with promo code
     */
    displayDiscount: PropTypes.string,
    /**
     * Shipping cost
     */
    displayShipping: PropTypes.string,
    /**
     * Subtotal amount
     */
    displaySubtotal: PropTypes.string.isRequired,
    /**
     * Calculated tax amount
     */
    displayTax: PropTypes.string,
    /**
     * Total amount
     */
    displayTotal: PropTypes.string.isRequired,
    /**
     * Dense layout with a transparent background color
     */
    isDense: PropTypes.bool,
    /**
     * If a product qualifies for free shipping, display "FREE" for shipping method
     */
    isFreeShipping: PropTypes.bool,
    /**
     * Quantity of products in shopping cart
     */
    itemsQuantity: PropTypes.number.isRequired
  };

  renderHeader() {
    const { itemsQuantity } = this.props;

    return (
      <thead>
        <tr>
          <Th>
            <Title>Cart Summary</Title>
          </Th>
          <Thr>{itemsQuantity} items</Thr>
        </tr>
      </thead>
    )
  }

  renderDiscount() {
    const { displayDiscount, isDense } = this.props;

    return (
      <tr>
        <Td isDense={isDense}>Promo code applied</Td>
        <TdValue isDense={isDense}>
          <Discount>{displayDiscount}</Discount>
        </TdValue>
      </tr>
    );
  };

  tdComponent

  render() {
    const {
      displayDiscount,
      displayShipping,
      displaySubtotal,
      displayTax,
      displayTotal,
      isDense,
      isFreeShipping,
      itemsQuantity
    } = this.props;

    const shipping = isFreeShipping ? "FREE" : displayShipping;
    const tax = displayTax || "-";
    const header = !isDense && this.renderHeader();
    const discount = displayDiscount && this.renderDiscount();

    return (
      <Surface isDense={isDense}>
        <Table>
          {header}
          <tbody>
            <tr>
              <Td isDense={isDense}>Item total</Td>
              <TdValue isDense={isDense}>{displaySubtotal}</TdValue>
            </tr>
            <tr>
              <Td isDense={isDense}>Shipping</Td>
              <TdValue isDense={isDense}>{shipping}</TdValue>
            </tr>
            {discount}
            <tr>
              <Td isDense={isDense}>Tax</Td>
              <TdValue isDense={isDense}>{tax}</TdValue>
            </tr>
            <tr>
              <Td isDense={isDense} isBorder>Order total</Td>
              <TdValue isDense={isDense} isBorder>
                <Total>{displayTotal}</Total>
              </TdValue>
            </tr>
          </tbody>
        </Table>
      </Surface>
    );
  }
}

export default CartSummary;
