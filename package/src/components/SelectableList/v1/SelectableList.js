import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { CustomPropTypes } from "../../../utils";

const StyledList = styled.div`
  fieldset {
    border-top: 1px solid #e6e6e6;
    border-left: none;
    border-right: none;
    border-bottom: none;
    border-top-right-radius: 2px;
    border-top-left-radius: 2px;
    padding: 0;
    margin: 0;
    .wrapper {
      border-bottom: 1px solid #e6e6e6;
      border-left: 1px solid #e6e6e6;
      border-right: 1px solid #e6e6e6;
      padding-left: 10px;
      padding-right: 10px;
      .leftAligned {
        justify-content: flex-start;
        label {
          font-weight: 600
        }
        .detail {
          font-size: 14px;
          font-family: "Source Sans Pro";
          margin-left: 2px;
        }
      }
      .amex,
      .visa {
        label {
          position: relative;
        }
        span {
          margin-right: 60px;
        }
        label span:after {
          left: 30px;
          position: absolute;
          content: " ";
          width: 38px;
          height: 24px;
          display: inline-block;
          border-radius: 2px;
          border: 1px solid #e6e6e6;
        }
      }
    }
  }
  .listAction {
    border-bottom: 1px solid #e6e6e6;
    border-left: 1px solid #e6e6e6;
    border-right: 1px solid #e6e6e6;
    padding-left: 10px;
    padding-right: 10px;
    height: 50px;
    display: flex;
    align-items: center;
  }
  > *:last-child {
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
    .wrapper:last-child {
      border-bottom-right-radius: 2px;
      border-bottom-left-radius: 2px;
    }
  }
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
       * Pass either the Reaction `SelectableItem` component or your own component
       * that takes `items` props and uses them to render a single item.
       */
      SelectableItem: CustomPropTypes.component.isRequired
    }).isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      /**
       * The item ID
       */
      _id: PropTypes.string.isRequired
    })).isRequired,
    listAction: PropTypes.node,
    name: PropTypes.string.isRequired
  };

  render() {
    const {
      items,
      name,
      listAction,
      components: {
        SelectableItem,
        ...components
      },
      ...props
    } = this.props;

    return (
      <StyledList>
        <legend>Legend</legend>
        <fieldset>
          {items.map((item) =>
            <div className="wrapper">
              <SelectableItem
                name={name}
                key={item._id}
                item={item}
                component={components}
                {...props}
              />
            </div>)}
        </fieldset>
        {listAction ? <div className="listAction">{listAction}</div> : null}
      </StyledList>
    );
  }
}

export default withComponents(SelectableList);
