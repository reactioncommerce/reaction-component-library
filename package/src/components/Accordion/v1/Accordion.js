import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, addTypographyStyles } from "../../../utils";

const duration = "250ms";
const ease = "ease-in-out";
const openTransition = `max-height ${duration} ${ease}, padding 0ms ${ease}`;
const closeTransition = `max-height ${duration} ${ease}, padding 0ms ${ease} ${duration}, border 0ms ${ease} ${duration}`;

const AccordionWrapper = styled.div`
  border-color: ${applyTheme("accordionBorderColor")};
  border-style: ${applyTheme("accordionBorderStyle")};
  border-width: ${applyTheme("accordionBorderWidth")};
  box-sizing: border-box;
  color: inherit;
  overflow: hidden;
  &:first-of-type {
    border-top-left-radius: ${applyTheme("accordionBorderRadius")};
    border-top-right-radius: ${applyTheme("accordionBorderRadius")};
  }
  &:not(:first-of-type) {
    border-top: none;
  }
`;

const AccordionHeader = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: ${applyTheme("accordionPadding")};
`;

const AccordionHeaderLabel = styled.span`
  ${addTypographyStyles("AccordionHeaderLabel", "labelTextBold")};
`;

const AccordionHeaderDetail = styled.span`
  ${addTypographyStyles("AccordionHeaderDetail", "labelText")};
`;

const AccordionHeaderIcon = styled.span`
  height: ${applyTheme("accordionIconHeight")};
  margin: 0;
  width: ${applyTheme("accordionIconWidth")};
  svg {
    height: ${applyTheme("accordionIconHeight")};
    transform: ${({ expanded }) => (expanded ? "rotateZ(180deg)" : "rotateZ(0)")};
    transition: transform ${duration} ${ease};
    width: ${applyTheme("accordionIconWidth")};
  }
`;

const AccordionContent = styled.div`
  background-color: ${applyTheme("accordionContentBackgroundColor")};
  border-top-color: ${applyTheme("accordionBorderColor")};
  border-top-style: ${applyTheme("accordionBorderStyle")};
  border-top-width: ${({ expanded }) => (expanded ? applyTheme("accordionBorderWidth") : "0")};
  color: inherit;
  height: auto;
  max-height: ${({ expanded }) => (expanded ? "150vh" : "0")};
  overflow: hidden;
  padding: ${({ expanded }) => (expanded ? applyTheme("accordionPadding") : "0")};
  transition: ${({ expanded }) => (expanded ? openTransition : closeTransition)};
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
     * Render expanded accordion
     */
    expanded: PropTypes.bool,
    /**
     * Accordion header icon
     */
    icon: PropTypes.node,
    /**
     * Accordion header bold label
     */
    label: PropTypes.string.isRequired
  };

  static defaultProps = {
    expanded: false
  };

  state = {
    expanded: this.props.expanded
  };

  _accordion = null;

  toggle = () => this.handleToggle();

  // handle accordion toggle
  handleToggle = () => {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  };

  render() {
    const { children, className, components: { iconExpand }, detail, icon, label } = this.props;
    const { expanded } = this.state;

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
          <AccordionHeaderIcon expanded={expanded}>{iconExpand}</AccordionHeaderIcon>
        </AccordionHeader>
        <AccordionContent expanded={expanded}>{children}</AccordionContent>
      </AccordionWrapper>
    );
  }
}

export default withComponents(Accordion);
