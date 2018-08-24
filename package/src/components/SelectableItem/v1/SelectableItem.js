import React, { Component } from "react";
import PropTypes from "prop-types";
import uniqueId from "lodash.uniqueid";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme } from "../../../utils";

const StyledLabel = styled.label`
  font-family: ${applyTheme("selectableItemLabelFontFamily")};
  color: ${applyTheme("selectableItemLabelColor")};
  font-size: ${applyTheme("selectableItemLabelFontSize")};
  letter-spacing: ${applyTheme("selectableItemLabelLetterSpacing")};
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const StyledRadioButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-color: ${applyTheme("selectableItemRadioButtonBackgroundColor")};
  border: ${applyTheme("selectableItemRadioButtonBorder")};
  height: ${applyTheme("selectableItemRadioButtonSize")};
  width: ${applyTheme("selectableItemRadioButtonSize")};
  margin: ${applyTheme("selectableItemRadioButtonMargin")};
  border-radius: 50%;
  box-sizing: border-box;
`;

const StyledInput = styled.input`
  cursor: pointer;
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
  visibility: visible;
  white-space: nowrap;
  &:checked + ${StyledLabel} ${StyledRadioButton}::before {
    content: " ";
    display: inline-block;
    position: relative;
    width: ${applyTheme("selectableItemRadioButtonCheckSize")};
    height: ${applyTheme("selectableItemRadioButtonCheckSize")};
    border-radius: 50%;
    background-color: ${applyTheme("selectableItemRadioButtonColor")};
  }
  &:focus + ${StyledLabel} ${StyledRadioButton} {
    box-shadow: ${applyTheme("selectableItemRadioFocus")};
    outline: ${applyTheme("selectableItemRadioFocusOutline")}
  }
  &:disabled + ${StyledLabel} ${StyledRadioButton} {
    background-color: ${applyTheme("selectableItemRadioDisabledFillColor")};
  }
  &:disabled + ${StyledLabel} {
    opacity: ${applyTheme("selectableItemRadioDisabledOpacity")};
  }
  &:disabled + ${StyledLabel}:hover {
    cursor:  ${applyTheme("selectableItemRadioDisabledCursor")};
  }
`;

const StyledDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${applyTheme("selectableItemLabelFontFamily")};
  font-size: ${applyTheme("selectableItemDetailFontSize")};
  letter-spacing: ${applyTheme("selectableItemLabelLetterSpacing")};
`;

const StyledIcon = styled.span`
  border-radius: ${applyTheme("selectableListBorderRadius")};
  border: ${applyTheme("selectableListBorderStyle")} ${applyTheme("selectableListBorderColor")};
  margin: ${applyTheme("selectableListIconMargin")};
  width: ${applyTheme("selectableListIconWidth")};
  height: ${applyTheme("selectableListIconHeight")};    
  svg {
    width: ${applyTheme("selectableListIconWidth")};
    height: ${applyTheme("selectableListIconHeight")};
  }
`;

const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  height: ${applyTheme("selectableListHeight")};
  @media (max-width: 768px) {
    height: ${applyTheme("selectableListHeightMobile")};
  }
`;

const LeftAlignedItem = styled.div`
  display: flex;
  justify-content: flex-start;
  height: ${applyTheme("selectableListHeight")};
  @media (max-width: 768px) {
    height: ${applyTheme("selectableListHeightMobile")};
  }
  ${StyledLabel} {
    position: relative;
    font-weight: ${applyTheme("selectableListLabelFontWeight")};
  }
  ${StyledDetail} {
    font-size: ${applyTheme("selectableListDetailFontSize")};
    font-family: ${applyTheme("selectableListFontFamily")};
    margin-left: 2px;
  }
`;


class SelectableItem extends Component {
  static propTypes = {
    /**
     * Left-aligned style
     */
    isLeftAligned: PropTypes.bool,
    /**
     * Read only and disabled state
     */
    isReadOnly: PropTypes.bool,
    /**
     * Item data
     */
    item: PropTypes.shape({
      /**
       * Checked: `true` if item is checked
       */
      checked: PropTypes.bool,
      /**
       * ID
       */
      id: PropTypes.string.isRequired,
      /**
       * Label
       */
      label: PropTypes.string.isRequired,
      /**
       * Optional text, SVG or element displayed on the right-hand side
       */
      detail: PropTypes.node,
      /**
       * Optional icon (SVG) displayed on the left-hand side
       */
      icon: PropTypes.node,
      /**
       * Value of the item input
       */
      value: PropTypes.any.isRequired
    }),
    /** Optional name of input radio group, passed down from for SelectableList */
    name: PropTypes.string,
    /**
     * On change handler for input
     */
    onChange: PropTypes.func,
    /**
     * On change handler for input
     */
    onChanging: PropTypes.func,
    /**
     * Value: True if checked
     */
    value: PropTypes.bool
  }

  static defaultProps = {
    onChange() { },
    onChanging() { },
    isLeftAligned: false
  };

  constructor(props) {
    super(props);

    this.state = {
      id: uniqueId("Radio_"),
      value: props.item.checked || false
    };
  }

  componentWillMount() {
    this.handleChange(this.props.item.checked || false);
  }

  componentWillReceiveProps(nextProps) {
    const value = this.props.item.checked;
    const { value: nextValue } = nextProps;

    // Whenever a changed value prop comes in, we reset state to that, thus becoming clean.
    if (value !== nextValue) {
      this.setState({ value: nextValue || false });
      this.handleChange(nextValue || false);
    }
  }

  onChange = (event) => {
    this.setValue(event.target.checked);
  };

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

  handleChange(checked) {
    if (this.lastValue === checked) return;
    this.lastValue = checked;
    const { onChanging, onChange } = this.props;
    onChanging(checked);
    onChange(checked);
  }

  // Input is dirty if value prop doesn't match value state. Whenever a changed
  // value prop comes in, we reset state to that, thus becoming clean.
  isDirty() {
    return this.state.value !== this.props.value;
  }

  render() {
    const {
      name,
      isLeftAligned,
      isReadOnly,
      item: {
        id,
        checked,
        label,
        detail,
        icon,
        value
      }
    } = this.props;

    const input = (
      <StyledInput
        id={id}
        checked={checked}
        value={value}
        key={id}
        onChange={this.onChange}
        type="radio"
        name={name}
        disabled={isReadOnly}
      />
    );

    const labelAndButton = (
      <StyledLabel
        htmlFor={id}
      >
        <StyledRadioButton />
        {icon ? <StyledIcon>{this.props.item.icon}</StyledIcon> : null}
        {label}
      </StyledLabel>
    );

    return (
      <div>
        {isLeftAligned ?
          <LeftAlignedItem>
            {input}
            {labelAndButton}
            {detail ? <StyledDetail>{detail}</StyledDetail> : null}
          </LeftAlignedItem >
          :
          <StyledItem>
            {input}
            {labelAndButton}
            {detail ? <StyledDetail>{detail}</StyledDetail> : null}
          </StyledItem >
        }
      </div>
    );
  }
}

export default withComponents(SelectableItem);
