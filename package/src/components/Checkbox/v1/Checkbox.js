import React, { Component } from "react";
import PropTypes from "prop-types";
import uniqueId from "lodash.uniqueid";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const StyledDiv = styled.div`
  margin-bottom: ${applyTheme("checkboxVerticalSpacing")};
`;

/* eslint-disable max-len */
/* eslint-disable quotes */
const checkboxIconSVG = encodeURIComponent("<svg aria-hidden='true' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'></path></svg>");
/* eslint-enable quotes */
/* eslint-enable max-len */

const StyledInput = styled.input`
  opacity: 0;
  + label::after {
    content: " ";
  }
  &:checked + label::after {
    background-image: url("data:image/svg+xml; utf8,${checkboxIconSVG}");
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
    content: " ";
    display: inline-block;
    width: 1em;
    height: 1em;
    position: absolute;
    top: 2px;
    left: 3px;
    line-height: 1;
  }
`;

class Checkbox extends Component {
  static propTypes = {
    /**
     * Custom class name
     */
    className: PropTypes.string,
    /**
     * Enable to make the checkboxp read-only / disabled by default
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
    /* eslint-disable react/boolean-prop-naming */
    value: PropTypes.bool
    /* eslint-enable react/boolean-prop-naming */
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
