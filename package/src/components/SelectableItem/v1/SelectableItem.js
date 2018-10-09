import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import uniqueId from "lodash.uniqueid";
import { withComponents } from "@reactioncommerce/components-context";
import { addTypographyStyles, applyTheme } from "../../../utils";

const StyledLabel = styled.label`
  ${addTypographyStyles("SelectableItemLabel", "labelText")}
  align-items: center;
  cursor: pointer;
  display: flex;
`;

const StyledRadioButton = styled.span`
  align-items: center;
  background-color: ${applyTheme("selectableItemRadioButtonBackgroundColor")};
  border-radius: 50%;
  border-color: ${applyTheme("selectableItemRadioButtonBorderColor")};
  border-style: solid;
  border-width: ${applyTheme("selectableItemRadioButtonBorderWidth")};
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  height: ${applyTheme("selectableItemRadioButtonSize")};
  justify-content: center;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: ${applyTheme("selectableItemRadioButtonSpacingToLabel")};
  margin-top: 0;
  width: ${applyTheme("selectableItemRadioButtonSize")};
`;

const StyledInput = styled.input`
  border: 0;
  clip: rect(0, 0, 0, 0);
  cursor: pointer;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  visibility: visible;
  white-space: nowrap;
  width: 1px;
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
  ${addTypographyStyles("SelectableItemDetail", "bodyText")}
  align-items: center;
  display: flex;
  justify-content: center;
`;

const StyledIcon = styled.span`
  border-radius: ${applyTheme("selectableListBorderRadius")};
  border-color: ${applyTheme("selectableListBorderColor")};
  border-style: ${applyTheme("selectableListBorderStyle")};
  border-width: ${applyTheme("selectableListBorderWidth")};
  height: ${applyTheme("selectableListIconHeight")};
  margin-bottom: 0;
  margin-left: 0;
  margin-right: ${applyTheme("selectableListIconSpacingToLabel")};
  margin-top: 0;
  width: ${applyTheme("selectableListIconWidth")};
  svg {
    height: ${applyTheme("selectableListIconHeight")};
    width: ${applyTheme("selectableListIconWidth")};
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
    font-weight: ${applyTheme("selectableListLeftAlignedLabelFontWeight")};
  }
  ${StyledDetail} {
    ${addTypographyStyles("SelectableItemDetail", "labelText")}
    margin-left: ${applyTheme("selectableListLeftAlignedDetailSpacingToLabel")};
  }
`;


class SelectableItem extends Component {
  static propTypes = {
    /**
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
     */
    className: PropTypes.string,
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
      className,
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
      <div className={className}>
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
