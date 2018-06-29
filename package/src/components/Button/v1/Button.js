import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme, preventAccidentalDoubleClick, spinner } from "../../../utils";
import applyThemeWithActionType from "./utils/applyThemeWithActionType";

const paddingFunc = (props) => {
  const { isShortHeight } = props;
  if (isShortHeight) return applyTheme("buttonVerticalPaddingShort");
  return applyTheme("buttonVerticalPadding");
};

const ButtonDiv = styled.div`
  -webkit-font-smoothing: antialiased;
  align-items: center;
  background-color: ${applyThemeWithActionType("buttonBackgroundColor")};
  border-color: ${applyThemeWithActionType("buttonBorderColor")};
  border-style: solid;
  border-width: 1px;
  border-radius: ${applyTheme("buttonBorderRadius")};
  box-sizing: border-box;
  color: ${applyThemeWithActionType("buttonForegroundColor")};
  cursor: pointer;
  display: ${(props) => {
    const { fullWidth } = props;
    if (fullWidth) {
      return "flex";
    }
    return "inline-flex";
  }};
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, sans-serif;
  justify-content: center;
  margin: 0;
  min-width: ${applyTheme("buttonMinimumWidth")};
  outline: none;
  padding-left: ${applyTheme("buttonHorizontalPadding")};
  padding-right: ${applyTheme("buttonHorizontalPadding")};
  padding-top: ${paddingFunc};
  padding-bottom: ${paddingFunc};
  position: relative;
  text-align: center;

  &:hover {
    background-color: ${applyThemeWithActionType("buttonBackgroundColor", "hover")};
    border-color: ${applyThemeWithActionType("buttonBorderColor", "hover")};
    color: ${applyThemeWithActionType("buttonForegroundColor", "hover")};
  }

  &:active {
    background-color: ${applyThemeWithActionType("buttonBackgroundColor", "active")};
    border-color: ${applyThemeWithActionType("buttonBorderColor", "active")};
    color: ${applyThemeWithActionType("buttonForegroundColor", "active")};
  }
`;

const SpinnerWrap = styled.div`
  display: flex;
  overflow: hidden;
  padding-left: ${applyTheme("buttonHorizontalPadding")};
  transition: width 0.2s ease-out 0s, padding-left 0.2s ease-out 0s, opacity 0.2s ease-out 0.2s;

  & svg path,
  & svg rect {
    fill: ${applyThemeWithActionType("buttonForegroundColor")};
  }
`;

const WaitingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);
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
     * Set to `true` to prevent clicks, use waiting styles, and show a spinner
     */
    isWaiting: PropTypes.bool,
    /**
     * Called with no arguments whenever the button is clicked. There is double-click protection,
     * so if the user double-clicks quickly, onClick is called only once.
     */
    onClick: PropTypes.func,
    /**
     * A custom spinner component to show on the button when `isWaiting` is true. You can also
     * set this to `null` to prevent adding a spinner to the button while waiting.
     */
    spinnerComponent: PropTypes.node,
    /**
     * The string for the `title` attribute of the button element
     */
    title: PropTypes.string
  };

  static defaultProps = {
    actionType: "default",
    isDisabled: false,
    isFullWidth: false,
    isWaiting: false,
    onClick() {},
    spinnerComponent: spinner
  };

  handleClick = preventAccidentalDoubleClick((event) => {
    event.preventDefault();

    const { isDisabled, isWaiting, onClick } = this.props;

    if (!isDisabled && !isWaiting) onClick();
  });

  handleKeyPress = (event) => {
    if (event.keyCode === 13) this.handleClick(event);
  };

  render() {
    const { actionType, children, className, isDisabled, isFullWidth, isShortHeight, isTextOnly, isWaiting, spinnerComponent, title } = this.props;

    const moreButtonDivProps = {};
    if (isDisabled) {
      moreButtonDivProps["aria-disabled"] = "true";
    }

    // wrap text children so that ButtonDiv flex styling applies correctly
    let kids;
    if (typeof children === "string") {
      kids = <div>{children}</div>;
    } else {
      kids = children;
    }

    const spinnerStyles = {};
    if (isWaiting) {
      spinnerStyles.width = "auto";
      spinnerStyles.opacity = 100;
    } else {
      spinnerStyles.width = 0;
      spinnerStyles.paddingLeft = 0;
      spinnerStyles.opacity = 0;
    }

    return (
      <ButtonDiv
        actionType={actionType}
        className={className}
        fullWidth={isFullWidth}
        isDisabled={isDisabled}
        isShortHeight={isShortHeight}
        isTextOnly={isTextOnly}
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
        role="button"
        tabIndex={0}
        title={title}
        {...moreButtonDivProps}
      >
        {kids}
        {
          <SpinnerWrap
            actionType={actionType}
            isDisabled={isDisabled}
            isTextOnly={isTextOnly}
            style={spinnerStyles}
          >
            {spinnerComponent}
          </SpinnerWrap>
        }
        {!!isWaiting && <WaitingOverlay />}
      </ButtonDiv>
    );
  }
}

export default Button;
