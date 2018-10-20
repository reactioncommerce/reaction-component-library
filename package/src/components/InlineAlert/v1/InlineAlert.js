import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { applyTheme, addTypographyStyles } from "../../../utils";

const StyledDiv = styled.div`
  ${addTypographyStyles("InlineAlert", "bodyText")};
  border-radius: ${applyTheme("InlineAlert.borderRadius")};
  border-style: ${applyTheme("InlineAlert.borderStyle")};
  border-width: ${applyTheme("InlineAlert.borderWidth")};
  padding-bottom: ${applyTheme("InlineAlert.paddingBottom")};
  padding-left: ${applyTheme("InlineAlert.paddingLeft")};
  padding-right: ${applyTheme("InlineAlert.paddingRight")};
  padding-top: ${applyTheme("InlineAlert.paddingTop")};
  white-space: pre-wrap;
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
        return "";
    }
  }} `;

const StyledTitle = styled.div`
  ${addTypographyStyles("InlineAlert", "bodyTextBold")};
  padding-bottom: 10px;
`;

class InlineAlert extends Component {
  static propTypes = {
    /**
     * The type of alert
     */
    alertType: PropTypes.oneOf(["error", "information", "success", "warning"]).isRequired,
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
    }).isRequired,
    /**
     * Alert message
     */
    message: PropTypes.string.isRequired,
    /**
     * Alert title, optional
     */
    title: PropTypes.string
  };

  static defaultProps = {

  };

  render() {
    const { alertType, className, message, title } = this.props;

    return (
      <StyledDiv className={className} alertType={alertType}>
        {title ? <StyledTitle>{title}</StyledTitle> : null}
        {message}
      </StyledDiv>
    );
  }
}

export default InlineAlert;
