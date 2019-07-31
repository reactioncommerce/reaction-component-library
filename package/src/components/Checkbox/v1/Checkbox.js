import React, { Component } from "react";
import PropTypes from "prop-types";
import uniqueId from "lodash.uniqueid";
import styled from "styled-components";
import { addTypographyStyles, applyTheme } from "../../../utils";

const StyledDiv = styled.div`
  margin-bottom: ${applyTheme("Checkbox.verticalSpacing")};
`;


/* eslint-disable quotes */
// credit https://fontawesome.com/icons/check?style=solid
const checkboxIconSVG = (props) => encodeURIComponent(`<svg aria-hidden='true' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='${applyTheme("Checkbox.iconColor")(props)}' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'></path></svg>`);
/* eslint-enable quotes */


// Opacity: 0 hides the default input and position: absolute removes it
// from the flow so that it doesn't push the styled checkbox to the right.
const StyledInput = styled.input`
  opacity: 0;
  position: absolute;
  + label::after {
    content: " ";
  }
  &:checked + label::after {
    background-image: ${(props) => `url("data:image/svg+xml; utf8,${checkboxIconSVG(props)}")`};
    display: inline-block;
    position: absolute;
    width: ${applyTheme("Checkbox.iconSize")};
    height: ${applyTheme("Checkbox.iconSize")};
    top: ${applyTheme("Checkbox.iconTopOffset")};
    left: ${applyTheme("Checkbox.iconLeftOffset")};
  }
  &:focus + label::before {
    outline: ${applyTheme("Checkbox.focusStyle")};
  }
  &:disabled + label {
    opacity: ${applyTheme("Checkbox.disabledOpacity")};
  }
  &:disabled + label::before {
    background: ${applyTheme("Checkbox.disabledColor")};
    opacity: ${applyTheme("Checkbox.disabledOpacity")};
  }
  &:disabled + label:hover {
    cursor: not-allowed;
  }
`;

const StyledLabel = styled.label`
  ${addTypographyStyles("CheckboxLabel", "labelText")}
  display: inline-block;
  line-height: ${applyTheme("Checkbox.size")};
  padding-left: ${applyTheme("Checkbox.labelSpacing")};
  position: relative;
  &:hover {
    cursor: pointer;
  }
  &::before,
  &::after {
    position: absolute;
  }
  &::before {
    content: " ";
    border-color: ${applyTheme("Checkbox.borderColor")};
    border-radius: ${applyTheme("Checkbox.borderRadius")};
    border-style: solid;
    border-width: ${applyTheme("Checkbox.borderWidth")};
    box-sizing: border-box;
    display: inline-block;
    height: ${applyTheme("Checkbox.size")};
    left: ${applyTheme("Checkbox.leftSpacing")};
    top: ${applyTheme("Checkbox.topSpacing")};
    width: ${applyTheme("Checkbox.size")};
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
    value: PropTypes.bool // eslint-disable-line react/boolean-prop-naming
  };

  static defaultProps = {
    className: undefined,
    isReadOnly: false,
    name: undefined,
    onChange() { },
    onChanging() { },
    value: undefined
  };

  static isFormInput = true;

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
