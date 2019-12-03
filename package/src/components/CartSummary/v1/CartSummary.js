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
  ${addTypographyStyles("CartSummaryLeftColumn", "labelText")}
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
  ${addTypographyStyles("CartSummaryRightColumn", "labelText")}
  text-align: right;
`;

const Title = styled.span`
  ${addTypographyStyles("CartSummaryTitle", "bodyTextBold")}
`;

const Discount = styled.span`
  ${addTypographyStyles("CartSummaryDiscount", "labelTextBold")}
`;


const TdTax = styled.td`
  ${addTypographyStyles("CartSummaryLeftColumn", "labelText")}
  border-top-color: ${applyTheme("CartSummary.borderColor")};
  border-top-style: solid;
  border-top-width: ${(props) => (props.isBordered ? applyTheme("CartSummary.borderWidth")(props) : "0")};
  padding-bottom: ${applyTheme("CartSummary.rowPaddingBottom")};
  padding-left: 0;
  padding-right: 0;
  padding-top: ${(props) => (props.isDense ? applyTheme("CartSummary.rowDensePaddingTop")(props) : applyTheme("CartSummary.rowPaddingTop")(props))};
  text-align: left;
`;

const TdTaxValue = styled(Td)`
  ${addTypographyStyles("CartSummaryRightColumn", "labelText")}
  padding-bottom: ${applyTheme("CartSummary.rowPaddingBottom")};
  text-align: right;
`;

const TdTotal = styled.td`
  ${addTypographyStyles("CartSummaryLeftColumn", "labelText")}
  border-top-color: ${applyTheme("CartSummary.borderColor")};
  border-top-style: solid;
  border-top-width: ${(props) => (props.isBordered ? applyTheme("CartSummary.borderWidth")(props) : "0")};
  padding-bottom: ${applyTheme("CartSummary.rowPaddingBottom")};
  padding-left: 0;
  padding-right: 0;
  padding-top: ${applyTheme("CartSummary.rowPaddingTop")};
  text-align: left;
`;

const TdTotalValue = styled(Td)`
  text-align: right;
  padding-bottom: ${applyTheme("CartSummary.rowPaddingBottom")};
  padding-top: ${applyTheme("CartSummary.rowPaddingTop")};
`;

const Total = styled.span`
  ${addTypographyStyles("CartSummaryTotal", "subheadingTextBold")}
`;

class CartSummary extends Component {
  static propTypes = {
    /**
     * The text for the "Cart" title text.
     */
    cartTitleText: PropTypes.string,
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
     * The text for the "FREE" label text.
     */
    freeText: PropTypes.string,
    /**
     * Dense layout with a transparent background color
     */
    isDense: PropTypes.bool,
    /**
     * If a product qualifies for free shipping, display "FREE" for shipping method
     */
    isFreeShipping: PropTypes.bool,
    /**
     * The text for the "Items" label text.
     */
    itemLabelText: PropTypes.string,
    /**
     * Quantity of products in shopping cart
     */
    itemsQuantity: PropTypes.number,
    /**
     * The text for the "items" header text.
     */
    itemsText: PropTypes.string,
    /**
     * The text for the "Order total" label text.
     */
    orderTotalLabelText: PropTypes.string,
    /**
     * The text for the "Promo code applied" text.
     */
    promoCodeText: PropTypes.string,
    /**
     * The text for the "Shipping" label text.
     */
    shippingLabelText: PropTypes.string,
    /**
     * The text for the "Surcharges" label text.
     */
    surchargesLabelText: PropTypes.string,
    /**
     * The text for the "Tax" label text.
     */
    taxLabelText: PropTypes.string
  }

  static defaultProps = {
    cartTitleText: "Cart Summary",
    freeText: "FREE",
    itemLabelText: "Items",
    itemsText: "items",
    orderTotalLabelText: "Order total",
    promoCodeText: "Promo code applied",
    shippingLabelText: "Shipping",
    surchargesLabelText: "Surcharges",
    taxLabelText: "Tax"
  }

  renderHeader() {
    const { cartTitleText, itemsQuantity, itemsText } = this.props;
    const itemsLabel = itemsQuantity >= 0 ? `${itemsQuantity} ${itemsText}` : null;

    return (
      <thead>
        <tr>
          <Th>
            <Title>{cartTitleText}</Title>
          </Th>
          <Thr>{itemsLabel}</Thr>
        </tr>
      </thead>
    );
  }

  renderDiscount() {
    const { displayDiscount, isDense, promoCodeText } = this.props;

    return (
      <tr>
        <Td isDense={isDense}>{promoCodeText}:</Td>
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
      isFreeShipping,
      freeText,
      itemLabelText,
      orderTotalLabelText,
      shippingLabelText,
      surchargesLabelText,
      taxLabelText
    } = this.props;

    // Use "-" to indicate we are still calculating this field.
    const shipping = (isFreeShipping ? freeText : displayShipping) || "-";
    const tax = displayTax || "-";
    const header = !isDense && this.renderHeader();
    const discount = displayDiscount && this.renderDiscount();
    const surcharge = displaySurcharge || "-";

    return (
      <Table className={className} isDense={isDense}>
        {header}
        <tbody>
          <tr>
            <Td isDense={isDense}>{itemLabelText}:</Td>
            <TdValue isDense={isDense}>{displaySubtotal}</TdValue>
          </tr>
          <tr>
            <Td isDense={isDense}>{shippingLabelText}:</Td>
            <TdValue isDense={isDense}>{shipping}</TdValue>
          </tr>
          {discount}
          <tr>
            <Td isDense={isDense}>{surchargesLabelText}:</Td>
            <TdValue isDense={isDense}>{surcharge}</TdValue>
          </tr>
          <tr>
            <TdTax isDense={isDense}>{taxLabelText}:</TdTax>
            <TdTaxValue isDense={isDense}>{tax}</TdTaxValue>
          </tr>
          <tr>
            <TdTotal isDense={isDense} isBordered>{orderTotalLabelText}:</TdTotal>
            <TdTotalValue isDense={isDense} isBordered>
              <Total>{displayTotal}</Total>
            </TdTotalValue>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default CartSummary;
