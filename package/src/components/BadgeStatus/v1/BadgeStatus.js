import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { applyTheme } from "../../../utils";

const baseBadgeStyles = css`
  border-bottom-left-radius: ${applyTheme("BadgeStatus.borderBottomLeftRadius")};
  border-bottom-right-radius: ${applyTheme("BadgeStatus.borderBottomRightRadius")};
  border-top-left-radius: ${applyTheme("BadgeStatus.borderTopLeftRadius")};
  border-top-right-radius: ${applyTheme("BadgeStatus.borderTopRightRadius")};
  display: inline;
  font-size: ${applyTheme("BadgeStatus.fontSize")};
  font-weight: ${applyTheme("BadgeStatus.fontWeight")};
  height: auto;
  line-height: ${applyTheme("BadgeStatus.lineHeight")};
  padding-bottom: ${applyTheme("BadgeStatus.paddingBottom")};
  padding-left: ${applyTheme("BadgeStatus.paddingLeft")};
  padding-right: ${applyTheme("BadgeStatus.paddingRight")};
  padding-top: ${applyTheme("BadgeStatus.paddingTop")};
`;

const StatusBadge = styled.div`
  ${baseBadgeStyles}
  ${(props) => {
    const { type } = props;
    switch (type) {
      case "orderReceived":
        return css`
          background-color: ${applyTheme("BadgeStatus.backgroundColor_orderReceived")};
          color: ${applyTheme("BadgeStatus.color_orderReceived")};
`;
      case "shipped":
        return css`
          background-color: ${applyTheme("BadgeStatus.backgroundColor_shipped")};
          color: ${applyTheme("BadgeStatus.color_shipped")};
`;
      default:
        return css`
        background-color: ${applyTheme("BadgeStatus.backgroundColor_default")};
        color: ${applyTheme("BadgeStatus.color_default")};
`;
    }
  }}
`;

class BadgeStatus extends Component {
  static propTypes = {
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
     * Text to display inside badge
     */
    label: PropTypes.string.isRequired,
    /**
     * Type of badge to render
     */
    type: PropTypes.string.isRequired
  };

  static defaultProps = {

  };

  render() {
    const { className, label, type } = this.props;

    return (
      <StatusBadge className={className} type={type}>{label}</StatusBadge>
    );
  }
}

export default BadgeStatus;
