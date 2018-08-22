import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { CustomPropTypes, applyTheme } from "../../../utils";

const StyledList = styled.div`
  width: 100%;
  fieldset {
    border-color: transparent;
    padding: ${applyTheme("selectableListPadding")};
    margin: ${applyTheme("selectableListMargin")};
    .wrapper {
      padding: ${applyTheme("selectableListItemPadding")};
      .leftAligned {
        justify-content: flex-start;
        label {
          font-weight: ${applyTheme("selectableListLabelFontWeight")};
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
          margin: ${applyTheme("selectableListIconMargin")};
        }
        label span:after {
          left: ${applyTheme("selectableListIconLeft")};
          position: absolute;
          content: " ";
          width: ${applyTheme("selectableListIconWidth")};
          height: ${applyTheme("selectableListIconHeight")};
          display: inline-block;
          border-radius: ${applyTheme("selectableListBorderRadius")};
          border: ${applyTheme("selectableListBorderStyle")} ${applyTheme("selectableListBorderColor")};
        }
      }
    }
  }
  .listAction {
    padding: ${applyTheme("selectableListItemPadding")};
    height: ${applyTheme("selectableListHeight")};
    display: flex;
    align-options: center;
    box-sizing: border-box;
    @media (max-width: 768px) {
      height: ${applyTheme("selectableListHeightMobile")};
    }
  }
`;

const BorderedList = styled(StyledList)`
  fieldset {
    border-top: ${applyTheme("selectableListBorderStyle")} ${applyTheme("selectableListBorderColor")};
    border-left: none;
    border-right: none;
    border-bottom: none;
    border-top-right-radius: ${applyTheme("selectableListBorderRadius")};
    border-top-left-radius: ${applyTheme("selectableListBorderRadius")};
    .wrapper {
      border-bottom: ${applyTheme("selectableListBorderStyle")} ${applyTheme("selectableListBorderColor")};
      border-left: ${applyTheme("selectableListBorderStyle")} ${applyTheme("selectableListBorderColor")};
      border-right: ${applyTheme("selectableListBorderStyle")} ${applyTheme("selectableListBorderColor")};
    }
  }
  .listAction {
    border-bottom: ${applyTheme("selectableListBorderStyle")} ${applyTheme("selectableListBorderColor")};
    border-left: ${applyTheme("selectableListBorderStyle")} ${applyTheme("selectableListBorderColor")};
    border-right: ${applyTheme("selectableListBorderStyle")} ${applyTheme("selectableListBorderColor")};
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
       * that takes `options` props and uses them to render a single item.
       */
      SelectableItem: CustomPropTypes.component.isRequired
    }).isRequired,
    /**
     * Adds borders to the list and each item
     */
    isBordered: PropTypes.bool,
    /**
     * Read Only state
     */
    isReadOnly: PropTypes.bool,
    /**
     * An extra row at the bottom of the list for an action, like Add an address
     */
    listAction: PropTypes.node,
    /**
     * options
     */
    options: PropTypes.arrayOf(PropTypes.shape({
      /**
       * The item ID
       */
      id: PropTypes.string.isRequired,
      /**
       * Checked: True if checked
       */
      checked: PropTypes.bool
    })).isRequired
  };

  static defaultProps = {
    isReadOnly: false
  };

  static isFormInput = true;

  render() {
    const {
      options,
      listAction,
      isBordered,
      isReadOnly,
      components: { SelectableItem, ...components },
      ...props
    } = this.props;

    const listoptions = (
      <fieldset>
        {options.map((item) => (
          <div className="wrapper" key={item.id}>
            <SelectableItem
              name={name}
              item={item}
              checked={item.checked}
              isReadOnly={isReadOnly}
              component={components}
              {...props}
            />
          </div>
        ))}
      </fieldset>
    );

    return (
      <div>{isBordered ? <BorderedList>{listoptions}</BorderedList> : <StyledList>{listoptions}</StyledList>}</div>
    );
  }
}

export default withComponents(SelectableList);
