import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, addTypographyStyles, CustomPropTypes, preventAccidentalDoubleClick } from "../../../utils";

const InPageMenuItemContainer = styled.div`
  align-items: center;
  ${(props) => {
    if (props.isSelected) {
      return `background-color: ${applyTheme("InPageMenuItemContainer.backgroundColor_selected")(props)};`;
    }
    return `background-color: ${applyTheme("InPageMenuItemContainer.backgroundColor_default")(props)};`;
  }}
  cursor: pointer;
  display: flex;
  flex-direction: row;
  padding-left: ${applyTheme("InPageMenuItemContainer.paddingLeft")};
  padding-right: ${applyTheme("InPageMenuItemContainer.paddingRight")};
  padding-top: ${applyTheme("InPageMenuItemContainer.paddingTop")};
  padding-bottom: ${applyTheme("InPageMenuItemContainer.paddingBottom")};
  margin-bottom: ${applyTheme("InPageMenuItemContainer.marginBottom")};
`;

const InPageMenuItemText = styled.div`
  ${addTypographyStyles("InPageMenuItemText", "headingTextBold")}
  display: flex;
  flex: 1 1 auto;
`;

const InPageMenuItemIcon = styled.span`
  display: flex;
  flex: 0 0 auto;
  height: ${applyTheme("InPageMenuItemIcon.height")};
  margin: 0;
  width: ${applyTheme("InPageMenuItemIcon.width")};
  svg {
    height: ${applyTheme("InPageMenuItemIcon.height")};
    transform: rotateZ(270deg);
    width: ${applyTheme("InPageMenuItemIcon.width")};
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
      /**
       * Pass either the Reaction Link component or your own component that
       * accepts compatible props.
       */
      Link: CustomPropTypes.component.isRequired
    }).isRequired,
    /**
     * URL to provide to MenuItem
     */
    href: PropTypes.string,
    /**
     * Render selected style
     */
    isSelected: PropTypes.bool,
    /**
     * Menu Item label
     */
    label: PropTypes.node.isRequired,
    /**
     * Function to pass to button onClick
     */
    onClick: PropTypes.func
  };

  static defaultProps = {
    isSelected: false
  };

  handleClick = preventAccidentalDoubleClick((event) => {
    event.preventDefault();
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
