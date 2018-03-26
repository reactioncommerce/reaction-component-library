import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme, preventAccidentalDoubleClick } from "helpers";
import { applyThemeWithActionType } from "./helpers";

const paddingFunc = (props) => {
  const { isShortHeight } = props;
  if (isShortHeight) return applyTheme("buttonVerticalPaddingShort");
  return applyTheme("buttonVerticalPadding");
};

const ButtonDiv = styled.div`
  background-color: ${applyThemeWithActionType("buttonBackgroundColor", true)};
  border-color: ${applyThemeWithActionType("buttonBorderColor", true)};
  border-style: solid;
  border-width: 1px;
  border-radius: ${applyTheme("buttonBorderRadius")};
  box-sizing: border-box;
  color: ${applyThemeWithActionType("buttonForegroundColor", false)};
  cursor: pointer;
  display: ${(props) => {
    const { children, fullWidth } = props;
    if (fullWidth) {
      if (typeof children === "string") return "block";
      return "flex";
    }
    if (typeof children === "string") return "inline-block";
    return "inline-flex";
  }};
  margin: 0;
  min-width: ${applyTheme("buttonMinimumWidth")};
  outline: none;
  padding-left: ${applyTheme("buttonHorizontalPadding")};
  padding-right: ${applyTheme("buttonHorizontalPadding")};
  padding-top: ${paddingFunc};
  padding-bottom: ${paddingFunc};
  text-align: center;

  &:hover {
    background-color: ${applyThemeWithActionType("buttonBackgroundColor", true, "hover")};
    border-color: ${applyThemeWithActionType("buttonBorderColor", true, "hover")};
    color: ${applyThemeWithActionType("buttonForegroundColor", false, "hover")};
  }

  &:active {
    background-color: ${applyThemeWithActionType("buttonBackgroundColor", true, "active")};
    border-color: ${applyThemeWithActionType("buttonBorderColor", true, "active")};
    color: ${applyThemeWithActionType("buttonForegroundColor", false, "active")};
  }
`;

class Button extends Component {
  static propTypes = {
    /**
     * The type of action performed by the button
     */
    actionType: PropTypes.oneOf(["danger", "default", "important", "secondary", "secondaryDanger"]),
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
    isDisabled: PropTypes.bool,
    /**
     * Button should take full width
     */
    isFullWidth: PropTypes.bool,
    /**
     * Enable this when you don’t have enough vertical space, such as in table headers
     */
    isShortHeight: PropTypes.bool,
    /**
     * Enable this in rare cases where having a solid or outline button for an action would be cluttered and visually confusing.
     */
    isTextOnly: PropTypes.bool,
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
    isDisabled: false,
    isFullWidth: false,
    onClick() {}
  };

  handleClick = preventAccidentalDoubleClick((event) => {
    event.preventDefault();

    const { isDisabled, onClick } = this.props;

    if (!isDisabled) onClick();
  });

  handleKeyPress = (event) => {
    if (event.keyCode === 13) this.handleClick(event);
  };

  render() {
    const { actionType, children, className, isDisabled, isFullWidth, isShortHeight, isTextOnly, title } = this.props;

    const moreButtonDivProps = {};
    if (isDisabled) {
      moreButtonDivProps["aria-disabled"] = "true";
    }

    return (
      <ButtonDiv
        actionType={actionType}
        className={className}
        isDisabled={isDisabled}
        fullWidth={isFullWidth}
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
        role="button"
        isShortHeight={isShortHeight}
        isTextOnly={isTextOnly}
        tabIndex={0}
        title={title}
        {...moreButtonDivProps}
      >
        {children}
      </ButtonDiv>
    );
  }
}

export default Button;
