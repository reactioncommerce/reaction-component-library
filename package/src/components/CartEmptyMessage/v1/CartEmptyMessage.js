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
  static propTypes = {
  /**
   * On object of component children to pass into this component
   */
  components: PropTypes.shape({
    ContinueShoppingButton: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  }),
  /**
   * Onclick function to pass to the Button component. Not handled internally, directly passed
   */
  onClick: PropTypes.func,
}

  static defaultProps = {
    onClick() {}
  };

  render() {
    const { onClick } = this.props;
    const { ContinueShoppingButton } = this.props.components;

    return (
      <Fragment>
        <EmptyMessage>Your shopping cart is empty.</EmptyMessage>
        <EmptyButton>
          <ContinueShoppingButton className="emptyCartBtn" actionType="important" onClick={onClick}>Continue shopping</ContinueShoppingButton>
        </EmptyButton>
      </Fragment>
    );
  }
}

export default CartEmptyMessage;
