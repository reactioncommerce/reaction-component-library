import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { addTypographyStyles, applyTheme } from "../../../utils";

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  background-color: ${(props) => (props.isDense ? applyTheme("CartSummary.denseBackgroundColor")(props) : applyTheme("CartSummary.backgroundColor")(props))};
  padding-left: ${(props) => (props.isDense ? "0" : applyTheme("CartSummary.paddingLeft")(props))};
  padding-right: ${(props) => (props.isDense ? "0" : applyTheme("CartSummary.paddingRight")(props))};
  padding-top: ${(props) => (props.isDense ? "0" : applyTheme("CartSummary.paddingTop")(props))};
  padding-bottom: ${(props) => (props.isDense ? "0" : applyTheme("CartSummary.paddingBottom")(props))};
`;

const Th = styled.th`
  ${addTypographyStyles("CartSummaryLeftColumnHeader", "bodyText")}
  text-align: left;
`;

const Thr = styled.th`
  ${addTypographyStyles("CartSummaryRightColumnHeader", "bodyText")}
  text-align: right;
`;

const Td = styled.td`
  ${addTypographyStyles("CartSummaryLeftColumn", "bodyText")}
  border-top-color: ${applyTheme("CartSummary.borderColor")};
  border-top-style: solid;
  border-top-width: ${(props) => (props.isBordered ? applyTheme("CartSummary.borderWidth")(props) : "0")};
  padding-bottom: ${(props) => (props.isDense ? applyTheme("CartSummary.rowDensePaddingBottom")(props) : applyTheme("CartSummary.rowPaddingBottom")(props))};
  padding-left: 0;
  padding-right: 0;
  padding-top: ${(props) => (props.isDense ? applyTheme("CartSummary.rowDensePaddingTop")(props) : applyTheme("CartSummary.rowPaddingTop")(props))};
  text-align: left;
`;

const TdValue = styled(Td)`
  ${addTypographyStyles("CartSummaryRightColumn", "bodyText")}
  text-align: right;
`;

const Title = styled.span`
  ${addTypographyStyles("CartSummaryTitle", "bodyTextBold")}
`;

const Discount = styled.span`
  ${addTypographyStyles("CartSummaryDiscount", "bodyTextBold")}
`;

const Total = styled.span`
  ${addTypographyStyles("CartSummaryTotal", "bodyTextBold")}
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
     * Surcharge amount
     */
    displaySurcharge: PropTypes.string,
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
      className,
      displayDiscount,
      displayShipping,
      displaySubtotal,
      displaySurcharge,
      displayTax,
      displayTotal,
      isDense,
      isFreeShipping
    } = this.props;

    const shipping = (isFreeShipping ? "FREE" : displayShipping) || "-";
    const tax = displayTax || "-";
    const header = !isDense && this.renderHeader();
    const discount = displayDiscount && this.renderDiscount();
    const surcharge = displaySurcharge || "-";

    return (
      <Table className={className} isDense={isDense}>
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
            <Td isDense={isDense}>Surcharge</Td>
            <TdValue isDense={isDense}>{surcharge}</TdValue>
          </tr>
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
