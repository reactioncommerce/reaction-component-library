import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { addTypographyStyles, applyTheme } from "../../../utils";

const Table = styled.table`
  width: 100%;
  padding-top: ${applyTheme("miniCartSummaryPaddingTop")};
  padding-bottom: ${applyTheme("miniCartSummaryPaddingBottom")};
  padding-left: ${applyTheme("miniCartSummaryPaddingLeft")};
  padding-right: ${applyTheme("miniCartSummaryPaddingRight")};
`;

const Td = styled.td`
  ${addTypographyStyles("MiniCartSummaryLeft", "bodyText")}
  padding-top: ${applyTheme("miniCartSummaryLeftCellPaddingTop")};
  padding-bottom: ${applyTheme("miniCartSummaryLeftCellPaddingBottom")};
  padding-left: ${applyTheme("miniCartSummaryLeftCellPaddingLeft")};
  padding-right: ${applyTheme("miniCartSummaryLeftCellPaddingRight")};
  text-align: right;
`;

const TdValue = styled.td`
  ${addTypographyStyles("MiniCartSummaryRight", "bodyTextBold")}
  padding-top: ${applyTheme("miniCartSummaryRightCellPaddingTop")};
  padding-bottom: ${applyTheme("miniCartSummaryRightCellPaddingBottom")};
  padding-left: ${applyTheme("miniCartSummaryRightCellPaddingLeft")};
  padding-right: ${applyTheme("miniCartSummaryRightCellPaddingRight")};
  text-align: left;
`;

class MiniCartSummary extends Component {
  static propTypes = {
    /**
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
     */
    className: PropTypes.string,
    /**
     * The subtotal for the items in the cart.
     */
    displaySubtotal: PropTypes.string.isRequired,
    /**
     * The computed taxes for items in the cart.
     */
    displayTax: PropTypes.string
  };

  renderTax = () => {
    const { displayTax } = this.props;

    return (
      <tr>
        <Td>Tax</Td>
        <TdValue>{displayTax}</TdValue>
      </tr>
    );
  };

  render() {
    const { displaySubtotal, displayTax } = this.props;
    const taxes = displayTax && this.renderTax();

    return (
      <Table className={this.props.className}>
        <tbody>
          <tr>
            <Td>Subtotal</Td>
            <TdValue>{displaySubtotal}</TdValue>
          </tr>
          {taxes}
        </tbody>
      </Table>
    );
  }
}

export default MiniCartSummary;
