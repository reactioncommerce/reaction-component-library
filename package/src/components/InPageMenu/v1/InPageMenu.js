import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { CustomPropTypes } from "../../../utils";

const InPageMenuContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
`;

class InPageMenu extends Component {
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
       * Pass either the Reaction InPageMenuItem component or your own component that
       * accepts compatible props.
       */
      InPageMenuItem: CustomPropTypes.component.isRequired
    }).isRequired,
    /**
     * An array that contains objects of label and navigational data for each InPageMenuItem
     */
    menuItems: PropTypes.arrayOf(PropTypes.shape({
      href: PropTypes.string,
      id: PropTypes.string,
      isSelected: PropTypes.bool,
      label: PropTypes.string
    }))
  };

  static defaultProps = {
    menuItems: []
  };

  render() {
    const { className, components: { InPageMenuItem }, menuItems } = this.props;

    return (
      <InPageMenuContainer className={className}>
        {menuItems.map((menuItem, index) => (
          <InPageMenuItem
            href={menuItem.href}
            isSelected={menuItem.isSelected}
            key={menuItem.id || `item-${index}`}
            label={menuItem.label}
          />
        ))}
      </InPageMenuContainer>
    );
  }
}

export default withComponents(InPageMenu);

