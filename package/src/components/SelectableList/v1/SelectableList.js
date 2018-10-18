import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { CustomPropTypes, applyTheme } from "../../../utils";

const StyledListAction = styled.div`
  align-options: center;
  box-sizing: border-box;
  display: flex;
  height: ${applyTheme("SelectableList.height")};
  padding-bottom: ${applyTheme("SelectableList.itemPaddingBottom")};
  padding-left: ${applyTheme("SelectableList.itemPaddingLeft")};
  padding-right: ${applyTheme("SelectableList.itemPaddingRight")};
  padding-top: ${applyTheme("SelectableList.itemPaddingTop")};
  @media (max-width: 768px) {
    height: ${applyTheme("SelectableList.heightMobile")};
  }
`;

const BorderedListAction = styled(StyledListAction)`
  border-bottom-color: ${applyTheme("SelectableList.borderColor")};
  border-bottom-style: ${applyTheme("SelectableList.borderStyle")};
  border-bottom-width: ${applyTheme("SelectableList.borderWidth")};
  border-left-color: ${applyTheme("SelectableList.borderColor")};
  border-left-style: ${applyTheme("SelectableList.borderStyle")};
  border-left-width: ${applyTheme("SelectableList.borderWidth")};
  border-right-color: ${applyTheme("SelectableList.borderColor")};
  border-right-style: ${applyTheme("SelectableList.borderStyle")};
  border-right-width: ${applyTheme("SelectableList.borderWidth")};
`;

const StyledWrapper = styled.div`
  padding-bottom: ${applyTheme("SelectableList.itemPaddingBottom")};
  padding-left: ${applyTheme("SelectableList.itemPaddingLeft")};
  padding-right: ${applyTheme("SelectableList.itemPaddingRight")};
  padding-top: ${applyTheme("SelectableList.itemPaddingTop")};
`;

const StyledList = styled.div`
  width: 100%;
  fieldset {
    border-color: transparent;
    margin: 0;
    padding: 0;
  }
`;

const BorderedList = styled(StyledList)`
  fieldset {
    border-bottom: none;
    border-left: none;
    border-right: none;
    border-top-color: ${applyTheme("SelectableList.borderColor")};
    border-top-left-radius: ${applyTheme("SelectableList.borderRadius")};
    border-top-right-radius: ${applyTheme("SelectableList.borderRadius")};
    border-top-style: ${applyTheme("SelectableList.borderStyle")};
    border-top-width: ${applyTheme("SelectableList.borderWidth")};
  }
  > *:last-child {
    border-bottom-right-radius: ${applyTheme("SelectableList.borderRadius")};
    border-bottom-left-radius: ${applyTheme("SelectableList.borderRadius")};
    div:last-child {
      border-bottom-right-radius: ${applyTheme("SelectableList.borderRadius")};
      border-bottom-left-radius: ${applyTheme("SelectableList.borderRadius")};
    }
  }
`;

const BorderedWrapper = styled.div`
  border-bottom-color: ${applyTheme("SelectableList.borderColor")};
  border-bottom-style: ${applyTheme("SelectableList.borderStyle")};
  border-bottom-width: ${applyTheme("SelectableList.borderWidth")};
  border-left-color: ${applyTheme("SelectableList.borderColor")};
  border-left-style: ${applyTheme("SelectableList.borderStyle")};
  border-left-width: ${applyTheme("SelectableList.borderWidth")};
  border-right-color: ${applyTheme("SelectableList.borderColor")};
  border-right-style: ${applyTheme("SelectableList.borderStyle")};
  border-right-width: ${applyTheme("SelectableList.borderWidth")};
  padding-bottom: ${applyTheme("SelectableList.itemPaddingBottom")};
  padding-left: ${applyTheme("SelectableList.itemPaddingLeft")};
  padding-right: ${applyTheme("SelectableList.itemPaddingRight")};
  padding-top: ${applyTheme("SelectableList.itemPaddingTop")};
  > *:last-child {
    border-bottom-left-radius: ${applyTheme("SelectableList.borderRadius")};
    border-bottom-right-radius: ${applyTheme("SelectableList.borderRadius")};
  }
`;

const HorizontalList = styled.div`
  display: flex;
`;

const HorizontalWrapper = styled.div`
  border-left-color: ${applyTheme("SelectableList.borderColor")};
  border-left-style: ${applyTheme("SelectableList.borderStyle")};
  border-left-width: ${applyTheme("SelectableList.borderWidth")};
  flex: 1 1 auto;
  padding-bottom: ${applyTheme("SelectableList.horizontalItemPaddingBottom")};
  padding-left: ${applyTheme("SelectableList.horizontalItemPaddingLeft")};
  padding-right: ${applyTheme("SelectableList.horizontalItemPaddingRight")};
  padding-top: ${applyTheme("SelectableList.horizontalItemPaddingTop")};

  &:first-of-type {
    border-left: none;
    padding-right: ${applyTheme("SelectableList.horizontalFirstItemPaddingRight")};
  }

  &:last-of-type {
    padding-left: ${applyTheme("SelectableList.horizontalLastItemPaddingLeft")};
  }

  div {
    display: block;
    height: auto;
  }
`;

class SelectableList extends Component {
  static isFormInput = true;

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
     * Displays SelectableList horizontaly
     */
    isHorizontal: PropTypes.bool,
    /**
     * Is Left Aligned
     */
    isLeftAligned: PropTypes.bool,
    /**
     * Adds styles and blocks users from selecting items
     */
    isReadOnly: PropTypes.bool,
    isStacked: PropTypes.bool,
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
    options: PropTypes.arrayOf(
      PropTypes.shape({
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
      })
    ).isRequired,
    /**
     * Set this to the current saved value, if editing, or a default value if creating. The closest form implementing
     * the Composable Forms spec will pass this automatically.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
  };

  static defaultProps = {
    isBordered: false,
    isHorizontal: false,
    isLeftAligned: false,
    isReadOnly: false,
    onChange() {},
    onChanging() {}
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ""
    };
  }

  UNSAFE_componentWillMount() {
    // eslint-disable-line camelcase
    this.handleChange(this.props.value || "");
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // eslint-disable-line camelcase
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

  renderBorderedList() {
    const { options, listAction, isLeftAligned, isReadOnly, components: { SelectableItem } } = this.props;

    return (
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
    );
  }

  renderVerticalList() {
    const { options, listAction, isLeftAligned, isReadOnly, components: { SelectableItem } } = this.props;

    return (
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
    );
  }

  renderHorizontalList() {
    const { options, listAction, isStacked, isReadOnly, components: { SelectableItem } } = this.props;
    return (
      <HorizontalList>
        {options.map((option) => (
          <HorizontalWrapper key={option.id}>
            <SelectableItem
              detail={option.detail}
              icon={option.icon}
              isChecked={option.value === this.state.value}
              isStacked={isStacked}
              isReadOnly={isReadOnly}
              label={option.label}
              onChange={this.onChange}
              value={option.value}
            />
          </HorizontalWrapper>
        ))}
        {listAction ? <StyledListAction>{listAction}</StyledListAction> : null}
      </HorizontalList>
    );
  }

  render() {
    const { className, isBordered, isHorizontal } = this.props;
    return (
      <div className={className}>
        {isHorizontal
          ? this.renderHorizontalList()
          : isBordered ? this.renderBorderedList() : this.renderVerticalList()}
      </div>
    );
  }
}

const WrappedSelectableList = withComponents(SelectableList);

WrappedSelectableList.isFormInput = true;

export default WrappedSelectableList;
