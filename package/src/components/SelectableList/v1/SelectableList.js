import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { CustomPropTypes, applyTheme } from "../../../utils";

const StyledList = styled.div`
  width: 100%;
  fieldset {
    border-top: ${applyTheme("selectableListBorderStyle")} ${applyTheme("selectableListBorderColor")};
    border-left: none;
    border-right: none;
    border-bottom: none;
    border-top-right-radius: ${applyTheme("selectableListBorderRadius")};
    border-top-left-radius: ${applyTheme("selectableListBorderRadius")};
    padding: ${applyTheme("selectableListPadding")};
    margin: ${applyTheme("selectableListMargin")};
    .wrapper {
      border-bottom: ${applyTheme("selectableListBorderStyle")} ${applyTheme("selectableListBorderColor")};
      border-left: ${applyTheme("selectableListBorderStyle")} ${applyTheme("selectableListBorderColor")};
      border-right: ${applyTheme("selectableListBorderStyle")} ${applyTheme("selectableListBorderColor")};
      padding: ${applyTheme("selectableListItemPadding")};
      .leftAligned {
        justify-content: flex-start;
        label {
          font-weight: ${applyTheme("selectableListLabelFontWeight")}
        }
        .detail {
          font-size: ${applyTheme("selectableListDetailFontSize")};
          font-family: ${applyTheme("selectableListFontFamily")};
          margin-left: 2px;
        }
      }
      .amex,
      .visa {
        label {
          position: relative;
        }
        span {
          margin: ${applyTheme("selectableListIconMargin")}
        }
        label span:after {
          left: ${applyTheme("selectableListIconLeft")};
          position: absolute;
          content: " ";
          width: ${applyTheme("selectableListIconWidth")};
          height: ${applyTheme("selectableListIconHeight")};
          display: inline-block;
          border-radius: ${applyTheme("selectableListBorderRadius")};;
          border: ${applyTheme("selectableListBorderStyle")} ${applyTheme("selectableListBorderColor")};
        }
      }
    }
  }
  .listAction {
    border-bottom: ${applyTheme("selectableListBorderStyle")} ${applyTheme("selectableListBorderColor")};
    border-left: ${applyTheme("selectableListBorderStyle")} ${applyTheme("selectableListBorderColor")};
    border-right: ${applyTheme("selectableListBorderStyle")} ${applyTheme("selectableListBorderColor")};
    padding: ${applyTheme("selectableListItemPadding")};
    height: ${applyTheme("selectableListHeight")};
    display: flex;
    align-items: center;
    box-sizing: border-box;
    @media (max-width: 768px) {
      height: ${applyTheme("selectableListHeightMobile")};
    }
  }
  > *:last-child {
    border-bottom-right-radius: ${applyTheme("selectableListBorderRadius")};
    border-bottom-left-radius: ${applyTheme("selectableListBorderRadius")};
    .wrapper:last-child {
      border-bottom-right-radius: ${applyTheme("selectableListBorderRadius")};
      border-bottom-left-radius: ${applyTheme("selectableListBorderRadius")};
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
    /**
     * An extra row at the bottom of the list for an action, like Add an address
     */
    listAction: PropTypes.node,
    /**
     * Name for input
     */
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
        <fieldset>
          {items.map((item) =>
            <div className="wrapper" key={item._id}>
              <SelectableItem
                name={name}
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
