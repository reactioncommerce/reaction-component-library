import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../../utils";
import Button from "../../Button/v1";

const EmptyButton = styled.div`
  display: flex;
  justify-content: center;
`;

const EmptyMessage = styled.div`
  color: #3c3c3c;
  letter-spacing: 0.3px;
  font-size: 16px;
  margin-bottom: 54px;
  display: flex;
  justify-content: center;
`;

class CartEmptyMessage extends Component {
  // static propTypes: {
  //   components: PropTypes.shape({
  //     continueShoppingButton: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  //   })
  // }

  static defaultProps = {
    onClick() {}
  };

  render() {
    return (
      <Fragment>
        <EmptyMessage>Your shopping cart is empty.</EmptyMessage>
        <EmptyButton>
          <Button className="emptyCartBtn" actionType="important">Continue shopping</Button>
        </EmptyButton>
      </Fragment>
    );
  }
}

export default CartEmptyMessage;
