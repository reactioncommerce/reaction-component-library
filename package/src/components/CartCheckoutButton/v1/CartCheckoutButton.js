import React, { Component } from "react";
import PropTypes from "prop-types";


class CartCheckoutButton extends Component {
  static propTypes = {
    /**
     * Text to display inside the button
     */
    buttonText: PropTypes.string,
    /**
     * On object of component children to pass into this component
     */
    components: PropTypes.shape({
      Button: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    }),
    /**
     * Set to `true` to prevent the button from calling `onClick` when clicked
     */
    isDisabled: PropTypes.bool,
    /**
     * Onclick function to pass to the Button component. Not handled internally, directly passed
     */
    onClick: PropTypes.func.isRequired
  }

  static defaultProps = {
    buttonText: "Checkout"
  };

  handleOnClick = () => {
    this.props.onClick();
  }

  render() {
    const { buttonText, isDisabled } = this.props;
    const { Button } = this.props.components;

    return (
      <Button
        actionType="important"
        isDisabled={isDisabled}
        onClick={this.handleOnClick}
      >
        {buttonText}
      </Button>
    );
  }
}

export default CartCheckoutButton;
