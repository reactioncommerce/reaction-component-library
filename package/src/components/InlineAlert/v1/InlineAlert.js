import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, addTypographyStyles } from "../../../utils";

const StyledDiv = styled.div`
  ${addTypographyStyles("InlineAlert", "bodyText")};
  border-radius: ${applyTheme("InlineAlert.borderRadius")};
  border-style: ${applyTheme("InlineAlert.borderStyle")};
  border-width: ${({ isClosed }) => (isClosed ? "0px" : applyTheme("InlineAlert.borderWidth"))};
  padding-bottom: ${({ isClosed }) => (isClosed ? "0px" : applyTheme("InlineAlert.paddingBottom"))};
  padding-left: ${({ isClosed }) => (isClosed ? "0px" : applyTheme("InlineAlert.paddingLeft"))};
  padding-right: ${({ isClosed }) => (isClosed ? "0px" : applyTheme("InlineAlert.paddingRight"))};
  padding-top: ${({ isClosed }) => (isClosed ? "0px" : applyTheme("InlineAlert.paddingTop"))};
  position: relative;
  white-space: pre-wrap;
  overflow: hidden;
  max-height: ${({ isClosed }) => (isClosed ? "0px" : "3000vh")};
  opacity: ${({ isClosed }) => (isClosed ? 0 : 1)};
  transition: ${applyTheme("InlineAlert.transition")};
  ${(props) => {
    const { alertType } = props;
    switch (alertType) {
      case "error":
        return css`
          color: ${applyTheme("InlineAlert.color_error")};
          background-color: ${applyTheme("InlineAlert.backgroundColor_error")};
          border-color: ${applyTheme("InlineAlert.borderColor_error")};
        `;
      case "information":
        return css`
          color: ${applyTheme("InlineAlert.color_information")};
          background-color: ${applyTheme("InlineAlert.backgroundColor_information")};
          border-color: ${applyTheme("InlineAlert.borderColor_information")};
        `;
      case "success":
        return css`
          color: ${applyTheme("InlineAlert.color_success")};
          background-color: ${applyTheme("InlineAlert.backgroundColor_success")};
          border-color: ${applyTheme("InlineAlert.borderColor_success")};
        `;
      case "warning":
        return css`
          color: ${applyTheme("InlineAlert.color_warning")};
          background-color: ${applyTheme("InlineAlert.backgroundColor_warning")};
          border-color: ${applyTheme("InlineAlert.borderColor_warning")};
        `;
      default:
        return css`
          display: none;
        `;
    }
  }};
`;

const StyledTitle = styled.div`
  ${addTypographyStyles("InlineAlert", "bodyTextSemiBold")};
  padding-bottom: ${applyTheme("InlineAlert.titlePaddingBottom")};
`;

const StyledDismissButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: ${applyTheme("InlineAlert.buttonHeight")};
  padding: 0;
  position: absolute;
  right: ${applyTheme("InlineAlert.buttonPositionRight")};
  top: ${applyTheme("InlineAlert.buttonPositionTop")};
  width: ${applyTheme("InlineAlert.buttonWidth")};
`;

class InlineAlert extends Component {
  static propTypes = {
    /**
     * The type of alert: Error, Information, Success or Warning
     * An empty alertType will not render an alert
     */
    alertType: PropTypes.oneOf(["error", "information", "success", "warning"]),
    /**
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
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
       * Pass an element (e.g., rendered SVG) to use as the Dismiss/Close icon
       */
      iconDismiss: PropTypes.node
    }),
    /**
     * isAutoClosing: Closes automatically in 10 seconds
     */
    isAutoClosing: PropTypes.bool,
    /**
     * isClosed: Whether the alert is closed or open
     */
    isClosed: PropTypes.bool,
    /**
     * isDismissable: Display a Close/Dismiss button
     */
    isDismissable: PropTypes.bool,
    /**
     * Alert message
     */
    message: PropTypes.string,
    /**
     * Alert title, optional
     */
    title: PropTypes.string
  };

  static defaultProps = {
    actionType: "",
    message: "",
    isAutoClosing: false,
    isClosed: false,
    isDismissable: false
  };

  state = {
    isClosed: this.props.isClosed
  };

  componentDidMount() {
    if (this.props.isAutoClosing === true) {
      setTimeout(() => {
        this.setState({ isClosed: true });
      }, 10000);
    }
  }

  handleDismissClick = (event) => {
    event.preventDefault();
    this.setState({ isClosed: true });
  };

  handleDismissKeyPress = (event) => {
    if (event.keyCode === 13) this.handleDismissClick(this.setState({ isClosed: true }));
  };

  autoClose = () => {
    window.setTimeout(10000, this.setState({ isClosed: true }));
  };

  render() {
    const { alertType, className, components, isDismissable, message, title } = this.props;
    const { iconDismiss } = components || {};
    const { isClosed } = this.state;

    return (
      <StyledDiv className={className} alertType={alertType} isClosed={isClosed}>
        {title ? <StyledTitle>{title}</StyledTitle> : null}
        {isDismissable ? (
          <StyledDismissButton
            type="button"
            aria-label="close"
            onClick={this.handleDismissClick}
            onKeyPress={this.handleDismissKeyPress}
          >
            {iconDismiss}
          </StyledDismissButton>
        ) : null}
        {message}
      </StyledDiv>
    );
  }
}

export default withComponents(InlineAlert);
