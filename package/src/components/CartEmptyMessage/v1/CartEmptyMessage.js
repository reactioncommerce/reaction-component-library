import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const EmptyButton = styled.div`
  display: flex;
  justify-content: center;
`;

const EmptyMessage = styled.div`
  color: ${applyTheme("color_coolGrey500")};
  display: flex;
  font-size: ${applyTheme("cartEmptyMessageFontSize")};
  justify-content: center;
  letter-spacing: ${applyTheme("cartEmptyMessageLetterSpacing")};
  margin-bottom: ${applyTheme("cartEmptyMessageMarginBottom")};
`;

class CartEmptyMessage extends Component {
  static propTypes = {
    /**
     * Text to display inside the button
     */
    buttonText: PropTypes.string,
    /**
     * On object of component children to pass into this component
     */
    components: PropTypes.shape({
      ContinueShoppingButton: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    }),
    /**
     * Text to display inside the message area
     */
    messageText: PropTypes.string,
    /**
     * Onclick function to pass to the Button component. Not handled internally, directly passed
     */
    onClick: PropTypes.func
  }

  static defaultProps = {
    onClick() {}
    buttonText: "Continue shopping",
    messageText: "Your shopping cart is empty."
  };

  render() {
    const { buttonText, messageText, onClick } = this.props;
    const { ContinueShoppingButton } = this.props.components;

    return (
      <Fragment>
        <EmptyMessage>{messageText}</EmptyMessage>
        <EmptyButton>
          <ContinueShoppingButton actionType="important" onClick={this.handleOnClick}>{buttonText}</ContinueShoppingButton>
        </EmptyButton>
      </Fragment>
    );
  }
}

export default CartEmptyMessage;
