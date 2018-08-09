import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { CustomPropTypes } from "../../../utils";

const StyledList = styled.div`
  color: #333333;
`;

class SelectableList extends Component {
  static propTypes = {
    /**
     * If you've set up a components context using @reactioncommerce/components-context
     * (recommended), then this prop will come from there automatically. If you have not
     * set up a components context or you want to override one of the components in a
     * single spot, you can pass in the components prop directly.
     */
    components: PropTypes.shape({
      /**
       * Pass either the Reaction `CartItem` component or your own component
       * that takes `items`, `isMiniCart`, `onChangeCartItemQuantity`, and
       * `onRemoveItemFromCart` props and uses them to render a single cart item.
       */
      SelectableItem: CustomPropTypes.component.isRequired
    }).isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      /**
       * The cart item ID
       */
      _id: PropTypes.string.isRequired
    })).isRequired
  };

  render() {
    const { items, components: { SelectableItem, ...components }, ...props } = this.props;

    return (
      <StyledList>
        {items.map((item) => <SelectableItem key={item._id} item={item} components={components} {...props} />)}
      </StyledList>
    );
  }
}

export default withComponents(SelectableList);
