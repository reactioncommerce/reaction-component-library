import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, preventAccidentalDoubleClick } from "../../../utils";
import applyThemeWithActionType from "./utils/applyThemeWithActionType";

const paddingFunc = (props) => {
  const { isShortHeight } = props;
  if (isShortHeight) return applyTheme("Button.verticalPaddingShort");
  return applyTheme("Button.verticalPadding");
};

const ButtonDiv = styled.div`
  -webkit-font-smoothing: antialiased;
  align-items: center;
  background-color: ${applyThemeWithActionType("Button.backgroundColor")};
  border-color: ${applyThemeWithActionType("Button.borderColor")};
  border-style: solid;
  border-width: 1px;
  border-radius: ${applyTheme("Button.borderRadius")};
  box-sizing: border-box;
  color: ${applyThemeWithActionType("Button.foregroundColor")};
  cursor: ${(props) => {
    const { isDisabled } = props;
    if (isDisabled) {
      return "default";
    }
    return "pointer";
  }};
  display: ${(props) => {
    const { isFullWidth } = props;
    if (isFullWidth) {
      return "flex";
    }
    return "inline-flex";
  }};
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, sans-serif;
  justify-content: center;
  margin: 0;
  min-width: ${(props) => (props.isTextOnlyNoPadding ? 0 : applyTheme("Button.minimumWidth")(props))};
  outline: none;
  padding-left: ${(props) => {
    const { isTextOnlyNoPadding } = props;
    if (isTextOnlyNoPadding) {
      return "0px";
    }
    return applyTheme("Button.horizontalPadding")(props);
  }};
  padding-right: ${(props) => {
    const { isTextOnlyNoPadding } = props;
    if (isTextOnlyNoPadding) {
      return "0px";
    }
    return applyTheme("Button.horizontalPadding")(props);
  }};
  padding-top: ${paddingFunc};
  padding-bottom: ${paddingFunc};
  position: relative;
  text-align: center;
  user-select: none;
  width: ${(props) => (props.isFullWidth ? "100%" : "fit-content")};

  &:hover {
    background-color: ${applyThemeWithActionType("Button.backgroundColor", "hover")};
    border-color: ${applyThemeWithActionType("Button.borderColor", "hover")};
    color: ${applyThemeWithActionType("Button.foregroundColor", "hover")};
  }

  &:active {
    background-color: ${applyThemeWithActionType("Button.backgroundColor", "active")};
    border-color: ${applyThemeWithActionType("Button.borderColor", "active")};
    color: ${applyThemeWithActionType("Button.foregroundColor", "active")};
  }
`;

const SpinnerWrap = styled.div`
  display: flex;
  overflow: hidden;
  padding-left: ${applyTheme("Button.horizontalPadding")};
  transition: width 0.2s ease-out 0s, padding-left 0.2s ease-out 0s, opacity 0.2s ease-out 0.2s;

  & svg path,
  & svg rect {
    fill: ${applyThemeWithActionType("Button.foregroundColor")};
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
     * If you've set up a components context using
     * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
     * (recommended), then this prop will come from there automatically. If you have not
     * set up a components context or you want to override one of the components in a
     * single spot, you can pass in the components prop directly.
     */
    components: PropTypes.shape({
      /**
       * A spinner element to show on the button when `isWaiting` is true. You can also
       * set this to `null` to prevent adding a spinner to the button while waiting.
       */
      spinner: PropTypes.node
    }),
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
     * Enable this in rare cases where left and right padding should be removed from a button to better align the button.
     */
    isTextOnlyNoPadding: PropTypes.bool,
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
     * The string for the `title` attribute of the button element
     */
    title: PropTypes.string
  };

  static defaultProps = {
    actionType: "default",
    isDisabled: false,
    isFullWidth: false,
    isWaiting: false,
    onClick() {}
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
    const {
      actionType,
      children,
      className,
      components,
      isDisabled,
      isFullWidth,
      isShortHeight,
      isTextOnly,
      isTextOnlyNoPadding,
      isWaiting,
      title
    } = this.props;
    const { spinner } = components || {};

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
        isDisabled={isDisabled}
        isFullWidth={isFullWidth}
        isShortHeight={isShortHeight}
        isTextOnly={isTextOnly}
        isTextOnlyNoPadding={isTextOnlyNoPadding}
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
            isTextOnlyNoPadding={isTextOnlyNoPadding}
            style={spinnerStyles}
          >
            {spinner}
          </SpinnerWrap>
        }
        {!!isWaiting && <WaitingOverlay />}
      </ButtonDiv>
    );
  }
}

export default withComponents(Button);
