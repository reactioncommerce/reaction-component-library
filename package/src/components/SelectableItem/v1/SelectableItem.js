import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import uniqueId from "lodash.uniqueid";
import { withComponents } from "@reactioncommerce/components-context";
import { addTypographyStyles, applyTheme } from "../../../utils";

const StyledLabel = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
  ${(props) => {
    if (props.isStacked) {
      return addTypographyStyles("SelectableItemLabel", "labelTextBold");
    }
    return addTypographyStyles("SelectableItemLabel", "labelText");
  }}
`;

const StyledRadioButton = styled.span`
  align-items: center;
  background-color: ${applyTheme("SelectableItemRadioButton.backgroundColor")};
  border-radius: 50%;
  border-color: ${applyTheme("SelectableItemRadioButton.borderColor")};
  border-style: solid;
  border-width: ${applyTheme("SelectableItemRadioButton.borderWidth")};
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  height: ${applyTheme("SelectableItemRadioButton.size")};
  justify-content: center;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: ${applyTheme("SelectableItemRadioButton.spacingToLabel")};
  margin-top: 0;
  width: ${applyTheme("SelectableItemRadioButton.size")};
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
    width: ${applyTheme("SelectableItemRadioButton.checkSize")};
    height: ${applyTheme("SelectableItemRadioButton.checkSize")};
    border-radius: 50%;
    background-color: ${applyTheme("SelectableItemRadioButton.color")};
  }
  &:focus + ${StyledLabel} ${StyledRadioButton} {
    box-shadow: ${applyTheme("SelectableItemRadioButton.focus")};
    outline: ${applyTheme("SelectableItemRadioButton.focusOutline")}
  }
  &:disabled + ${StyledLabel} ${StyledRadioButton} {
    background-color: ${applyTheme("SelectableItemRadioButton.disabledFillColor")};
  }
  &:disabled + ${StyledLabel} {
    opacity: ${applyTheme("SelectableItemRadioButton.disabledOpacity")};
  }
  &:disabled + ${StyledLabel}:hover {
    cursor:  ${applyTheme("SelectableItemRadioButton.disabledCursor")};
  }
`;

const StyledDetail = styled.div`
  ${addTypographyStyles("SelectableItemDetail", "bodyText")}
  align-items: center;
  display: flex;
  justify-content: ${(props) => (props.isStacked ? "flex-start" : "center")};
  margin-left: ${(props) => (props.isStacked ? applyTheme("SelectableList.stackedSpacingToLabel") : "0")}
  margin-top: ${(props) => (props.isStacked ? applyTheme("SelectableList.stackedSpacingBelowLabel") : "0")};
`;

const StyledIcon = styled.span`
  border-radius: ${applyTheme("SelectableList.borderRadius")};
  border-color: ${applyTheme("SelectableList.borderColor")};
  border-style: ${applyTheme("SelectableList.borderStyle")};
  border-width: ${applyTheme("SelectableList.borderWidth")};
  height: ${applyTheme("SelectableList.iconHeight")};
  margin-bottom: 0;
  margin-left: 0;
  margin-right: ${applyTheme("SelectableList.iconSpacingToLabel")};
  margin-top: 0;
  width: ${applyTheme("SelectableList.iconWidth")};
  svg {
    height: ${applyTheme("SelectableList.iconHeight")};
    width: ${applyTheme("SelectableList.iconWidth")};
  }
`;

const StyledItem = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isStacked ? "none" : "space-between")};
  flex-direction: ${(props) => (props.isStacked ? "column" : "row")};
  height:${(props) => (props.isStacked ? "inherit" : applyTheme("SelectableList.height"))};
  @media (max-width: 768px) {
    height: ${applyTheme("SelectableList.heightMobile")};
  }
`;

const LeftAlignedItem = styled.div`
  display: flex;
  justify-content: flex-start;
  height: ${applyTheme("SelectableList.height")};
  @media (max-width: 768px) {
    height: ${applyTheme("SelectableList.heightMobile")};
  }
  ${StyledLabel} {
    position: relative;
    font-weight: ${applyTheme("SelectableList.leftAlignedLabelFontWeight")};
  }
  ${StyledDetail} {
    ${addTypographyStyles("SelectableItemDetailLeft", "labelText")}
    margin-left: ${applyTheme("SelectableList.leftAlignedDetailSpacingToLabel")};
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
     * Stacked style, designed to be used with isHorizontal SelectableList
     */
    isStacked: PropTypes.bool,
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
    isReadOnly: false,
    isStacked: false
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
      isStacked,
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
        isStacked={isStacked}
      >
        <StyledRadioButton />
        {icon ? <StyledIcon>{icon}</StyledIcon> : null}
        {label}
      </StyledLabel>
    );

    return (
      <div className={className}>
        {isLeftAligned ?
          <LeftAlignedItem isStacked={isStacked}>
            {input}
            {labelAndButton}
            {detail ? <StyledDetail isStacked={isStacked}>{detail}</StyledDetail> : null}
          </LeftAlignedItem>
          :
          <StyledItem isStacked={isStacked}>
            {input}
            {labelAndButton}
            {detail ? <StyledDetail isStacked={isStacked}>{detail}</StyledDetail> : null}
          </StyledItem>
        }
      </div>
    );
  }
}

export default withComponents(SelectableItem);
