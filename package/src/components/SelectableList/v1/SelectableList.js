import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { CustomPropTypes, applyTheme } from "../../../utils";

const StyledListAction = styled.div`
  padding: ${applyTheme("selectableListItemPadding")};
  height: ${applyTheme("selectableListHeight")};
  display: flex;
  align-options: center;
  box-sizing: border-box;
  @media (max-width: 768px) {
    height: ${applyTheme("selectableListHeightMobile")};
  }
`;

const BorderedListAction = styled(StyledListAction)`
  border-bottom: ${applyTheme("selectableListBorderStyle")} ${applyTheme("selectableListBorderColor")};
  border-left: ${applyTheme("selectableListBorderStyle")} ${applyTheme("selectableListBorderColor")};
  border-right: ${applyTheme("selectableListBorderStyle")} ${applyTheme("selectableListBorderColor")};
`;

const StyledWrapper = styled.div`
  padding: ${applyTheme("selectableListItemPadding")};
`;

const StyledList = styled.div`
  width: 100%;
  fieldset {
    border-color: transparent;
    padding: ${applyTheme("selectableListPadding")};
    margin: ${applyTheme("selectableListMargin")};
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
  }
  > *:last-child {
    border-bottom-right-radius: ${applyTheme("selectableListBorderRadius")};
    border-bottom-left-radius: ${applyTheme("selectableListBorderRadius")};
    div:last-child {
      border-bottom-right-radius: ${applyTheme("selectableListBorderRadius")};
      border-bottom-left-radius: ${applyTheme("selectableListBorderRadius")};
    }
  }
`;

const BorderedWrapper = styled.div`
  padding: ${applyTheme("selectableListItemPadding")};
  border-bottom: ${applyTheme("selectableListBorderStyle")} ${applyTheme("selectableListBorderColor")};
  border-left: ${applyTheme("selectableListBorderStyle")} ${applyTheme("selectableListBorderColor")};
  border-right: ${applyTheme("selectableListBorderStyle")} ${applyTheme("selectableListBorderColor")};
  > *:last-child {
    border-bottom-right-radius: ${applyTheme("selectableListBorderRadius")};
    border-bottom-left-radius: ${applyTheme("selectableListBorderRadius")};
  }
`;

class SelectableList extends Component {
  static isFormInput = true;

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
     * Is Left Aligned
     */
    isLeftAligned: PropTypes.bool,
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
       * Optional text, SVG or element displayed on the right-hand side
       */
      detail: PropTypes.node,
      /**
       * Optional icon (SVG) displayed on the left-hand side
       */
      icon: PropTypes.node,
      /**
       * The item ID. Each option must have a unique ID
       */
      id: PropTypes.string.isRequired,
      /**
       * Label
       */
      label: PropTypes.string.isRequired,
      /**
       * Value of this option, which will be the value passed back from SelectableList if
       * this option is selected.
       */
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired
    })).isRequired,
    /**
     * Set this to the current saved value, if editing, or a default value if creating. The closest form implementing
     * the Composable Forms spec will pass this automatically.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
  };

  static defaultProps = {
    isBordered: false,
    isLeftAligned: false,
    isReadOnly: false,
    onChange() { },
    onChanging() { }
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ""
    };
  }

  UNSAFE_componentWillMount() { // eslint-disable-line camelcase
    this.handleChange(this.props.value || "");
  }

  UNSAFE_componentWillReceiveProps(nextProps) { // eslint-disable-line camelcase
    const { value } = this.props;
    const { value: nextValue } = nextProps;

    // Whenever a changed value prop comes in, we reset state to that, thus becoming clean.
    if (nextValue && value !== nextValue) {
      this.setState({ value: nextValue || "" });
      this.handleChange(nextValue || "");
    }
  }

  onChange = (isChecked, value) => {
    if (isChecked) {
      this.setValue(value);
    }
  };

  getValue() {
    return this.state.value;
  }

  setValue(value) {
    this.setState({ value });
    this.handleChange(value);
  }

  resetValue() {
    this.setValue(this.props.value || "");
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
      options,
      listAction,
      isBordered,
      isLeftAligned,
      isReadOnly,
      components: { SelectableItem }
    } = this.props;
    return (
      <div>
        {isBordered ?
          <BorderedList>
            <fieldset>
              {options.map((option) => (
                <BorderedWrapper key={option.id}>
                  <SelectableItem
                    detail={option.detail}
                    icon={option.icon}
                    isChecked={option.value === this.state.value}
                    isLeftAligned={isLeftAligned}
                    isReadOnly={isReadOnly}
                    label={option.label}
                    onChange={this.onChange}
                    value={option.value}
                  />
                </BorderedWrapper>
              ))}
            </fieldset>
            {listAction ? <BorderedListAction>{listAction}</BorderedListAction> : null}
          </BorderedList>
          :
          <StyledList>
            <fieldset>
              {options.map((option) => (
                <StyledWrapper key={option.id}>
                  <SelectableItem
                    detail={option.detail}
                    icon={option.icon}
                    isChecked={option.value === this.state.value}
                    isLeftAligned={isLeftAligned}
                    isReadOnly={isReadOnly}
                    label={option.label}
                    onChange={this.onChange}
                    value={option.value}
                  />
                </StyledWrapper>
              ))}
            </fieldset>
            {listAction ? <StyledListAction>{listAction}</StyledListAction> : null}
          </StyledList>
        }
      </div>
    );
  }
}

const WrappedSelectableList = withComponents(SelectableList);

WrappedSelectableList.isFormInput = true;

export default WrappedSelectableList;
