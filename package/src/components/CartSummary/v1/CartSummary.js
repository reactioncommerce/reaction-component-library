import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { addTypographyStyles, applyTheme } from "../../../utils";

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  background-color: ${(props) => (props.isDense ? applyTheme("cartSummaryDenseBackgroundColor")(props) : applyTheme("cartSummaryBackgroundColor")(props))};
  padding-left: ${(props) => (props.isDense ? "0" : applyTheme("cartSummaryPaddingLeft")(props))};
  padding-right: ${(props) => (props.isDense ? "0" : applyTheme("cartSummaryPaddingRight")(props))};
  padding-top: ${(props) => (props.isDense ? "0" : applyTheme("cartSummaryPaddingTop")(props))};
  padding-bottom: ${(props) => (props.isDense ? "0" : applyTheme("cartSummaryPaddingBottom")(props))};
`;

const Th = styled.th`
  ${addTypographyStyles("CartSummaryLeftColumnHeader", "bodyText")}
  color: ${applyTheme("cartSummaryLeftColumnHeaderColor")};
  text-align: left;
`;

const Thr = styled.th`
  ${addTypographyStyles("CartSummaryRightColumnHeader", "bodyText")}
  color: ${applyTheme("cartSummaryRightColumnHeaderColor")};
  text-align: right;
`;

const Td = styled.td`
  ${addTypographyStyles("CartSummaryLeftColumn", "bodyText")}
  border-top-color: ${applyTheme("cartSummaryBorderColor")};
  border-top-style: solid;
  border-top-width: ${(props) => (props.isBordered ? applyTheme("cartSummaryBorderWidth")(props) : "0")};
  color: ${applyTheme("cartSummaryLeftColumnColor")};
  padding-bottom: ${(props) => (props.isDense ? applyTheme("cartSummaryRowDensePaddingBottom")(props) : applyTheme("cartSummaryRowPaddingBottom")(props))};
  padding-left: 0;
  padding-right: 0;
  padding-top: ${(props) => (props.isDense ? applyTheme("cartSummaryRowDensePaddingTop")(props) : applyTheme("cartSummaryRowPaddingTop")(props))};
  text-align: left;
`;

const TdValue = Td.extend`
  ${addTypographyStyles("CartSummaryRightColumn", "bodyText")}
  color: ${applyTheme("cartSummaryRightColumnColor")};
  text-align: right;
`;

const Title = styled.span`
  ${addTypographyStyles("CartSummaryTitle", "bodyTextBold")}
`;

const Discount = styled.span`
  ${addTypographyStyles("CartSummaryDiscount", "bodyTextBold")}
  color: ${applyTheme("cartSummaryDiscountColor")};
`;

const Total = styled.span`
  ${addTypographyStyles("CartSummaryTotal", "bodyTextBold")}
  color: ${applyTheme("cartSummaryTotalColor")};
`;

class CartSummary extends Component {
  static propTypes = {
    /**
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
     */
    className: PropTypes.string,
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
    itemsQuantity: PropTypes.number
  }

  renderHeader() {
    const { itemsQuantity } = this.props;
    const itemsLabel = itemsQuantity >= 0 ? `${itemsQuantity} items` : null;

    return (
      <thead>
        <tr>
          <Th>
            <Title>Cart Summary</Title>
          </Th>
          <Thr>{itemsLabel}</Thr>
        </tr>
      </thead>
    );
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
  }

  render() {
    const {
      displayDiscount,
      displayShipping,
      displaySubtotal,
      displayTax,
      displayTotal,
      isDense,
      isFreeShipping
    } = this.props;

    const shipping = isFreeShipping ? "FREE" : displayShipping;
    const tax = displayTax || "-";
    const header = !isDense && this.renderHeader();
    const discount = displayDiscount && this.renderDiscount();

    return (
      <Table className={this.props.className} isDense={isDense}>
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
            <Td isDense={isDense} isBordered>Order total</Td>
            <TdValue isDense={isDense} isBordered>
              <Total>{displayTotal}</Total>
            </TdValue>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default CartSummary;
