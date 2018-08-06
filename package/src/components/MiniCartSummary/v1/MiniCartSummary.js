import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const Table = styled.table`
  width: 100%;
  padding: 0.5rem;
  font-family: ${applyTheme("font_family")};
`;

const Td = styled.td`
  padding: 0.5rem 0.3rem 0.5rem 0.5rem;
  color: ${applyTheme("color_coolGrey400")};
  text-align: right;
`;

const TdValue = styled.td`
  text-align: left;
  padding: 0.5rem 0.5rem 0.5rem 0.3rem;
  color: ${applyTheme("color_coolGrey500")};
  font-weight: ${applyTheme("font_weight_bold")};
`;

class MiniCartSummary extends Component {
  static propTypes = {
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
      <Table>
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
