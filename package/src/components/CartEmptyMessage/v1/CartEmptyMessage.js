import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, CustomPropTypes } from "../../../utils";

const EmptyButton = styled.div`
  display: flex;
  justify-content: center;
`;

const EmptyMessage = styled.div`
  color: ${applyTheme("color_coolGrey500")};
  display: flex;
  font-size: ${applyTheme("font_size_default")};
  font-family: ${applyTheme("font_family")};
  justify-content: center;
  letter-spacing: 0.01875rem;
  margin-bottom: 3.375rem;
`;

class CartEmptyMessage extends Component {
  static propTypes = {
    /**
     * Text to display inside the button
     */
    buttonText: PropTypes.string,
    /**
     * If you've set up a components context using
     * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
     * (recommended), then this prop will come from there automatically. If you have not
     * set up a components context or you want to override one of the components in a
     * single spot, you can pass in the components prop directly.
     */
    components: PropTypes.shape({
      /**
       * Pass either the Reaction Button component or your own component that
       * accepts compatible props.
       */
      Button: CustomPropTypes.component.isRequired
    }).isRequired,
    /**
     * Text to display inside the message area
     */
    messageText: PropTypes.string,
    /**
     * Onclick function to pass to the Button component. Not handled internally, directly passed
     */
    onClick: PropTypes.func.isRequired
  }

  static defaultProps = {
    buttonText: "Continue shopping",
    messageText: "Your shopping cart is empty."
  };

  handleOnClick = () => {
    this.props.onClick();
  }

  render() {
    const { buttonText, components, messageText } = this.props;
    const { Button } = components;

    return (
      <Fragment>
        <EmptyMessage>{messageText}</EmptyMessage>
        <EmptyButton>
          <Button actionType="important" onClick={this.handleOnClick}>{buttonText}</Button>
        </EmptyButton>
      </Fragment>
    );
  }
}

export default withComponents(CartEmptyMessage);
