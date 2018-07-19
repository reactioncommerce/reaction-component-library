import React, { Component } from "react";
import PropTypes from "prop-types";
import uniqueId from "lodash.uniqueid";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const StyledDiv = styled.div`
  margin-bottom: ${applyTheme("checkboxVerticalSpacing")};
`;

const StyledInput = styled.input`
  opacity: 0;
  + label::after {
    content: none;
  }
  &:checked + label::after {
    content: ${applyTheme("checkboxIcon")};
  }
  &:focus + label::before {
    outline: ${applyTheme("checkboxFocusStyle")};
  }
  &:disabled + label {
    opacity: ${applyTheme("checkboxDisabledOpacity")};
  }
  &:disabled + label::before {
    background: ${applyTheme("checkboxDisabledColor")};
    opacity: ${applyTheme("checkboxDisabledOpacity")};
  }
  &:disabled + label:hover {
    cursor: not-allowed;
  }
`;

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  font-size: ${applyTheme("checkboxLabelFontSize")};
  font-family: ${applyTheme("font_family")};
  padding-left: ${applyTheme("checkboxLabelSpacing")};
  &:hover {
    cursor: pointer;
  }
  &::before,
  &::after {
    position: absolute;
  }
  &::before {
    content: " ";
    display: inline-block;
    height: ${applyTheme("checkboxHeightAndWidth")};
    width: ${applyTheme("checkboxHeightAndWidth")};
    border: ${applyTheme("checkboxBorderWidth")} solid ${applyTheme("checkboxBorderColor")};
    border-radius: ${applyTheme("checkboxBorderRadius")};
    box-sizing: border-box;
    left: ${applyTheme("checkboxLeftSpacing")};
    top: ${applyTheme("checkboxTopSpacing")};
  }
  &::after {
    content: ${applyTheme("checkboxIcon")};
    display: inline-block;
    font-family: ${applyTheme("checkboxIconFont")};
    font-size: ${applyTheme("checkboxIconSize")};
    color: ${applyTheme("checkboxIconColor")};
    line-height: 1;
    left:  ${applyTheme("checkboxIconLeftSpacing")};
    top:  ${applyTheme("checkboxIconTopSpacing")};
  }
`;

class Checkbox extends Component {
  static propTypes = {
    /**
     * Custom class name
     */
    className: PropTypes.string,
    /**
     * Enable to make the checkbox read-only / disabled by default
     */
    isReadOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    /**
     * Label for checkbox for viewers to read
     */
    label: PropTypes.string.isRequired,
    /**
     * Name of input
     */
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
     * True for a checked checkbox, undefined for an unchecked checkbox
     */
    value: PropTypes.bool
  };

  static defaultProps = {
    className: undefined,
    isReadOnly: false,
    name: undefined,
    onChange() { },
    onChanging() { },
    value: undefined
  };

  constructor(props) {
    super(props);

    this.state = {
      id: uniqueId("Checkbox_"),
      value: props.value || false
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
    const { className, isReadOnly, label } = this.props;
    const { id, value } = this.state;

    return (
      <StyledDiv className={className}>
        <StyledInput
          checked={value === true}
          id={id}
          onChange={this.onChange}
          disabled={isReadOnly}
          type="checkbox"
          value="true"
        />
        <StyledLabel htmlFor={id}>
          {label}
        </StyledLabel>
      </StyledDiv>
    );
  }
}

export default Checkbox;
