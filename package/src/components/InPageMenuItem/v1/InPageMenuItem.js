import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, addTypographyStyles, preventAccidentalDoubleClick } from "../../../utils";

const InPageMenuItemContainer = styled.div`
  align-items: center;
  background: ${(props) => (props.isSelected ? "#ecf8fe" : "#f5f5f5")};
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 13px;
  padding-bottom: 13px;
  margin-bottom: 4px;
`;
const InPageMenuItemText = styled.div`
  ${addTypographyStyles("InPageMenuItemText", "headingTextBold")}
  display: flex;
  flex: 1 1 auto;
`;
const InPageMenuItemIcon = styled.span`
  display: flex;
  flex: 0 0 auto;
  height: 24px;
  margin: 0;
  width: 24px;
  svg {
    height: 24px;
    transform: rotateZ(270deg);
    width: 24px;
  }
`;

class InPageMenuItem extends Component {
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
      /**
       * Pass either the Reaction iconExpand component or your own component that
       * accepts compatible props.
       */
      iconExpand: PropTypes.node.isRequired,
      Link: PropTypes.node.isRequired
    }).isRequired,
    /**
     * URL to provide to MenuItem
     */
    href: PropTypes.string.isRequired,
    /**
     * Render selected style
     */
    isSelected: PropTypes.bool,
    /**
     * Menu Item label
     */
    label: PropTypes.string.isRequired,
    /**
     * Function to pass to button onClick
     */
    onClick: PropTypes.func,
  };

  static defaultProps = {
    isSelected: false
  };

  handleClick = preventAccidentalDoubleClick((event) => {
    const { onClick } = this.props;

    if (onClick) {
      return onClick();
    }

    return null;
  });

  render() {
    const { className, components: { iconExpand, Link }, href, isSelected, label } = this.props;

    return (
      <Link href={href} onClick={this.handleClick}>
        <InPageMenuItemContainer className={className} isSelected={isSelected}>
          <InPageMenuItemText>{label}</InPageMenuItemText>
          <InPageMenuItemIcon>{iconExpand}</InPageMenuItemIcon>
        </InPageMenuItemContainer>
      </Link>
    );
  }
}

export default withComponents(InPageMenuItem);