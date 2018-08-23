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
     * Adds styles and blocks users from selecting items
     */
    isReadOnly: PropTypes.bool,
    /**
     * An extra row at the bottom of the list for an action, like Add an address
     */
    listAction: PropTypes.node,
    /**
     * The name for the SelectableList radio group. Each radio group on a page should have a unique name.
     */
    name: PropTypes.string.isRequired,
    /**
     * Called with the new selected value each time the user changes the selection
     */
    onChange: PropTypes.func,
    /**
     * Called with the new selected value each time the user changes the selection
     */
    onChanging: PropTypes.func,
    /**
     * Options, an Array of SelectableItems
     */
    options: PropTypes.arrayOf(PropTypes.shape({
      /**
       * The item ID - each radio input must have a unique ID
       */
      id: PropTypes.string.isRequired,
      /**
       * Checked: True if the item is checked
       */
      checked: PropTypes.bool,
      /**
       * Value of the input that is submitted from the form
       */
      value: PropTypes.any.isRequired
    })).isRequired,
    /**
     * Set this to the current saved value, if editing, or a default value if creating. The closest form implementing
     * the Composable Forms spec will pass this automatically.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
  };

  static defaultProps = {
    isReadOnly: false,
    isBordered: false,
    onChange() { },
    onChanging() { }
  };

  static isFormInput = true;

  constructor(props) {
    super(props);

    this.state = {
      value: this.getInitialValue()
    };
  }

  componentWillMount() {
    this.handleChange(this.props.value || false);
  }

  componentWillReceiveProps(nextProps) {
    const { value } = this.props;
    const { value: nextValue } = nextProps;

    // Whenever a changed value prop comes in, we reset state to that, thus becoming clean.
    if (value !== nextValue) {
      this.setState({ value: nextValue || false });
      this.handleChange(nextValue || false);
    }
  }

  onChange = (event) => {
    this.setValue(event.target.value);
  };

  getInitialValue() {
    const initialCheckedItem = this.props.options.find((o) => o.checked === true);
    if (initialCheckedItem !== undefined) {
      return initialCheckedItem.value;
    }
  }

  getValue() {
    return this.state.value;
  }

  setValue(value) {
    this.setState({ value });
    this.handleChange(value);
  }

  resetValue() {
    this.setValue(this.props.value || false);
  }

  handleChange(value) {
    if (this.lastValue === value) return;
    this.lastValue = value;
    const { onChanging, onChange } = this.props;
    onChanging(value);
    onChange(value);
  }

  // Input is dirty if value prop doesn't match value state. Whenever a changed
  // value prop comes in, we reset state to that, thus becoming clean.
  isDirty() {
    return this.state.value !== this.props.value;
  }

  render() {
    const {
      name,
      options,
      listAction,
      isBordered,
      isReadOnly,
      components: { SelectableItem, ...components },
      ...props
    } = this.props;

    const listoptions = (
      <fieldset onChange={this.onChange}>
        {options.map((item) => (
          <div className="wrapper" key={item.id}>
            <SelectableItem
              name={name}
              item={item}
              checked={item.checked}
              value={item.value}
              isReadOnly={isReadOnly}
              component={components}
              {...props}
            />
          </div>
        ))}
      </fieldset>
    );

    return (
      <div>
        {isBordered ?
          <BorderedList>
            {listoptions}
            {listAction ? <div className="listAction">{listAction}</div> : null}
          </BorderedList>
          :
          <StyledList>
            {listoptions}
            {listAction ? <div className="listAction">{listAction}</div> : null}
          </StyledList>
        }
      </div>
    );
  }
}

export default withComponents(SelectableList);
