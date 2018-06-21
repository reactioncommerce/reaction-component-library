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
      CartCheckoutButton: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    }),
    /**
     * Set to `true` to prevent the button from calling `onClick` when clicked
     */
    isDisabled: PropTypes.bool,
    /**
     * Onclick function to pass to the Button component. Not handled internally, directly passed
     */
    onClick: PropTypes.func.isRequired
    /**
     * The url for the checkout to redirect to
     */
    url: PropTypes.string.isRequired
  }

  static defaultProps = {
    buttonText: "Checkout"
  };

  handleOnClick = () => {
    const { url } = this.props;

    console.log("url", url);

    // Do something with the url inside here??

    this.props.onClick();
  }

  render() {
    const { buttonText, isDisabled } = this.props;
    const { CartCheckoutButton } = this.props.components;

    return (
      <CartCheckoutButton className="cartCheckoutBtn" actionType="important" isDisabled={isDisabled} onClick={this.handleOnClick} fullWidth>{buttonText}</CartCheckoutButton>
    );
  }
}

export default CartCheckoutButton;
