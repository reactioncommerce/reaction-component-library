import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import uniqueId from "lodash.uniqueid";
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
     * Optional text, SVG or element displayed on the right-hand side
     */
    detail: PropTypes.node,
    /**
     * Optional icon (SVG) displayed on the left-hand side
     */
    icon: PropTypes.node,
    /**
     * `true` if the item is checked
     */
    isChecked: PropTypes.bool,
    /**
     * Left-aligned style
     */
    isLeftAligned: PropTypes.bool,
    /**
     * Read only and disabled state
     */
    isReadOnly: PropTypes.bool,
    /**
     * Label
     */
    label: PropTypes.string.isRequired,
    /**
     * Called whenever this item becomes selected or unselected. Two arguments are provided,
     * `isChecked` and the `value` prop that was passed in.
     */
    onChange: PropTypes.func,
    /**
     * A value to be passed to `onChange`
     */
    value: PropTypes.string.isRequired
  }

  static defaultProps = {
    onChange() { },
    isChecked: false,
    isLeftAligned: false,
    isReadOnly: false
  };

  uniqueInstanceIdentifier = uniqueId("SelectableItem_");

  handleChange = (event) => {
    const { value } = this.props;
    this.props.onChange(event.target.checked, value);
  };

  render() {
    const {
      detail,
      icon,
      isChecked,
      isLeftAligned,
      isReadOnly,
      label,
      value
    } = this.props;

    const id = `radio_${this.uniqueInstanceIdentifier}`;

    const input = (
      <StyledInput
        id={id}
        checked={isChecked}
        value={value}
        onChange={this.handleChange}
        type="radio"
        disabled={isReadOnly}
      />
    );

    const labelAndButton = (
      <StyledLabel
        htmlFor={id}
      >
        <StyledRadioButton />
        {icon ? <StyledIcon>{icon}</StyledIcon> : null}
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
