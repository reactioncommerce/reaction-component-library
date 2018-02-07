import React, { Component } from "react";
import PropTypes from "prop-types";
import preventAccidentalDoubleClick from "../../helpers/preventAccidentalDoubleClick";
import { containerStyles, fullWidthContainerStyles, fullWidthTextContainerStyles } from "./styles";

class Button extends Component {
  static propTypes = {
    /**
     * The type of action performed by the button
     */
    actionType: PropTypes.oneOf(["danger", "default", "important", "secondary"]),
    /**
     * The contents of the button, such as text, icons, or any combination of React and HTML components
     */
    children: PropTypes.node,
    /**
     * Classes for the button element
     */
    className: PropTypes.string,
    /**
     * Set to `true` to prevent the button from calling `onClick` when clicked
     */
    disabled: PropTypes.bool,
    /**
     * Button should take full width
     */
    fullWidth: PropTypes.bool,
    /**
     * Called with no arguments whenever the button is clicked. There is double-click protection,
     * so if the user double-clicks quickly, onClick is called only once.
     */
    onClick: PropTypes.func,
    /**
     * The string for the `title` attribute of the button element
     */
    title: PropTypes.string
  };

  static defaultProps = {
    actionType: "default",
    disabled: false,
    fullWidth: false,
    onClick() {}
  };

  handleClick = preventAccidentalDoubleClick((event) => {
    event.preventDefault();

    const { disabled, onClick } = this.props;

    if (!disabled) {
      onClick();
    }
  });

  handleKeyPress = (event) => {
    if (event.keyCode === 13) this.handleClick(event);
  };

  render() {
    const { children, className, disabled, fullWidth, title, actionType } = this.props;

    // Build className
    const finalClassName = `rui--btn rui--btn-${actionType} ${disabled ? "rui--btn-disabled " : ""}${className}`.trim();

    // Build style
    let style;
    if (fullWidth) {
      if (typeof children === "string") {
        style = fullWidthTextContainerStyles;
      } else {
        style = fullWidthContainerStyles;
      }
    } else {
      style = containerStyles;
    }

    return (
      <div
        className={finalClassName}
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
        role="button"
        style={style}
        tabIndex={0}
        title={title}
      >
        {children}
      </div>
    );
  }
}

export default Button;
