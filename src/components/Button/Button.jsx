import React, { Component } from "react";
import PropTypes from "prop-types";
import preventAccidentalDoubleClick from "../../helpers/preventAccidentalDoubleClick";
import { containerStyles, flexContainerStyles } from "./styles";

class Button extends Component {
  static propTypes = {
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
    disabled: false,
    onClick() {}
  };

  onClick = preventAccidentalDoubleClick((event) => {
    const { disabled, onClick } = this.props;

    if (!disabled) {
      onClick(event);
    }
  });

  render() {
    const { children, className, disabled, title } = this.props;

    const finalClassName = `btn-default ${disabled ? "btn-disabled " : ""}${className}`.trim();
    const style = typeof children === "string" ? containerStyles : flexContainerStyles;

    return (
      <div className={finalClassName} onClick={this.onClick} style={style} title={title}>
        {children}
      </div>
    );
  }
}

export default Button;
