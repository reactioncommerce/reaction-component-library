import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, addTypographyStyles } from "../../../utils";

const AccordionWrapper = styled.div`
  border-color: ${applyTheme("Accordion.borderColor")};
  border-style: ${applyTheme("Accordion.borderStyle")};
  border-width: ${applyTheme("Accordion.borderWidth")};
  box-sizing: border-box;
  color: inherit;
  overflow: hidden;
  &:first-of-type {
    border-top-left-radius: ${applyTheme("Accordion.borderRadius")};
    border-top-right-radius: ${applyTheme("Accordion.borderRadius")};
  }
  &:not(:first-of-type) {
    border-top: none;
  }
`;

const AccordionHeader = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding-bottom: ${applyTheme("Accordion.paddingBottom")};
  padding-left: ${applyTheme("Accordion.paddingLeft")};
  padding-right: ${applyTheme("Accordion.paddingRight")};
  padding-top: ${applyTheme("Accordion.paddingTop")};
`;

const AccordionHeaderLabel = styled.span`
  ${addTypographyStyles("AccordionHeaderLabel", "labelTextBold")};
`;

const AccordionHeaderDetail = styled.span`
  ${addTypographyStyles("AccordionHeaderDetail", "labelText")};
`;

const AccordionHeaderIcon = styled.span`
  height: ${applyTheme("Accordion.iconHeight")};
  margin: 0;
  width: ${applyTheme("Accordion.iconWidth")};
  svg {
    height: ${applyTheme("Accordion.iconHeight")};
    transform: ${({ isExpanded }) => (isExpanded ? "rotateZ(180deg)" : "rotateZ(0)")};
    transition: ${applyTheme("Accordion.iconTransition")};
    width: ${applyTheme("Accordion.iconWidth")};
  }
`;

const AccordionContent = styled.div`
  background-color: ${applyTheme("Accordion.contentBackgroundColor")};
  border-top-color: ${applyTheme("Accordion.borderColor")};
  border-top-style: ${applyTheme("Accordion.borderStyle")};
  border-top-width: ${({ isExpanded }) => (isExpanded ? applyTheme("Accordion.borderWidth") : "0")};
  color: inherit;
  height: auto;
  max-height: ${({ isExpanded }) => (isExpanded ? "150vh" : "0")};
  overflow: hidden;
  padding: ${({ isExpanded }) => (isExpanded ? applyTheme("Accordion.padding") : "0")};
  transition: ${({ isExpanded }) => (isExpanded ? applyTheme("Accordion.openTransition") : applyTheme("Accordion.closeTransition"))};
`;

class Accordion extends Component {
  static propTypes = {
    /**
     * Content to be displayed inside the accordion
     */
    children: PropTypes.any,
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
      iconExpand: PropTypes.node.isRequired
    }).isRequired,
    /**
     * Accordion header details
     */
    detail: PropTypes.string,
    /**
     * Accordion header icon
     */
    icon: PropTypes.node,
    /**
     * Render expanded accordion
     */
    isExpanded: PropTypes.bool,
    /**
     * Accordion header bold label
     */
    label: PropTypes.string.isRequired
  };

  static defaultProps = {
    isExpanded: false
  };

  state = {
    isExpanded: this.props.isExpanded
  };

  _accordion = null;

  toggle = () => this.handleToggle();

  // handle accordion toggle
  handleToggle = () => {
    const { isExpanded } = this.state;
    this.setState({ isExpanded: !isExpanded });
  };

  render() {
    const { children, className, components: { iconExpand }, detail, icon, label } = this.props;
    const { isExpanded } = this.state;

    return (
      <AccordionWrapper
        className={className}
        ref={(accordionEl) => {
          this._accordion = accordionEl;
        }}
      >
        <AccordionHeader onClick={this.handleToggle}>
          <span>
            {icon ? <AccordionHeaderIcon>{icon}</AccordionHeaderIcon> : null}
            <AccordionHeaderLabel>{label}</AccordionHeaderLabel>
            {detail ? <AccordionHeaderDetail>, {detail}</AccordionHeaderDetail> : ""}
          </span>
          <AccordionHeaderIcon isExpanded={isExpanded}>{iconExpand}</AccordionHeaderIcon>
        </AccordionHeader>
        <AccordionContent isExpanded={isExpanded}>{children}</AccordionContent>
      </AccordionWrapper>
    );
  }
}

export default withComponents(Accordion);
