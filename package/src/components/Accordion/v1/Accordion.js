import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, CustomPropTypes } from "../../../utils";

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
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
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

const AccordionHeaderIcon = styled.span`
  height: ${applyTheme("selectableListIconHeight")};
  margin: 0;
  width: ${applyTheme("selectableListIconWidth")};
  svg {
    height: ${applyTheme("selectableListIconHeight")};
    transform: ${({ expanded }) => (expanded ? "rotateZ(180deg)" : "rotateZ(0)")};
    transition: transform ${duration} ${ease};
    width: ${applyTheme("selectableListIconWidth")};
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
      iconExpand: CustomPropTypes.component.isRequired
    }).isRequired,
    detail: PropTypes.string,
    expanded: PropTypes.bool,
    icon: PropTypes.node,
    label: PropTypes.string.isRequired
  };

  static defaultProps = {
    expanded: false
  };

  state = {
    expanded: this.props.expanded
  };

  _accordion = null;

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
            <b>{label}</b>
            {detail ? `, ${detail}` : ""}
          </span>
          <AccordionHeaderIcon expanded={expanded}>{iconExpand}</AccordionHeaderIcon>
        </AccordionHeader>
        <AccordionContent expanded={expanded}>{children}</AccordionContent>
      </AccordionWrapper>
    );
  }
}

export default withComponents(Accordion);
