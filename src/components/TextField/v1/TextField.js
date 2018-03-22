import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "./../../../helpers";

const StyledInput = styled.input`
  background-color: ${(props) => {
    let inputType;
    if (props.dark) {
      inputType = "dark"
    } else {
      inputType = "default"
    }
    return  applyTheme(`inputBackgroundColor_${inputType}`)(props);
}};
  &:focus {
    background-color: ${applyTheme("inputBackgroundColor_default_focus")};
  }
`;

const StyledTextarea = styled.textarea`
  background-color: #ff00ff;
`;

class TextField extends Component {
  static isFormInput = true;

  static propTypes = {
    allowLineBreaks: PropTypes.bool,
    className: PropTypes.string,
    convertEmptyStringToNull: PropTypes.bool,
    isReadOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    maxLength: PropTypes.number,
    name: PropTypes.string,
    onChange: PropTypes.func,
    onChanging: PropTypes.func,
    onSubmit: PropTypes.func,
    placeholder: PropTypes.string,
    trimValue: PropTypes.bool,
    type: PropTypes.oneOf([
      "email",
      "password",
      "text",
      "url",
    ]),
    value: PropTypes.string
  };

  static defaultProps = {
    allowLineBreaks: false,
    convertEmptyStringToNull: true,
    isReadOnly: false,
    onChange() {},
    onChanging() {},
    onSubmit() {},
    trimValue: true,
    type: "text"
  };

  constructor(props) {
    super(props);

    this.state = {
      value: props.value || ""
    };
  }

  componentWillMount() {
    const { value } = this.state;
    this.handleChanging(value);
    this.handleChanged(value);
  }

  componentWillReceiveProps(nextProps) {
    const { value } = this.props;
    const { value: nextValue } = nextProps;

    // Whenever a changed value prop comes in, we reset state to that, thus becoming clean.
    if (value !== nextValue) {
      this.setValue(nextValue);
    }
  }

  onKeyPress = (event) => {
    const { onSubmit } = this.props;
    if (event.which === 13) onSubmit();
  };

  onBlur = (event) => {
    this.setValue(event.target.value);
  };

  onChange = (event) => {
    let { value } = event.target;
    value = value || "";
    this.setState({ value });
    this.handleChanging(value);
  };

  getValue() {
    return this.cleanValue(this.state.value);
  }

  setValue(value = "") {
    this.setState({ value });
    this.handleChanging(value);
    this.handleChanged(value);
  }

  cleanValue(value) {
    const { convertEmptyStringToNull, trimValue } = this.props;
    let outputValue = trimValue ? value.trim() : value;
    if (convertEmptyStringToNull && outputValue === "") outputValue = null;
    return outputValue;
  }

  resetValue() {
    this.setValue(this.props.value);
  }

  handleChanged(value) {
    const { onChange } = this.props;
    const outputValue = this.cleanValue(value);
    if (outputValue !== this.lastChangedValue) {
      this.lastChangedValue = outputValue;
      onChange(outputValue);
    }
  }

  handleChanging(value) {
    const { onChanging } = this.props;
    const outputValue = this.cleanValue(value);
    if (outputValue !== this.lastChangingValue) {
      this.lastChangingValue = outputValue;
      onChanging(outputValue);
    }
  }

  // Input is dirty if value prop doesn"t match value state. Whenever a changed
  // value prop comes in, we reset state to that, thus becoming clean.
  isDirty() {
    return this.state.value !== this.props.value;
  }

  render() {
    const { allowLineBreaks, className, isReadOnly, maxLength, name, placeholder, type } = this.props;
    const { value } = this.state;

    if (allowLineBreaks) {
      // Same as "input" but without `onKeyPress` and `type` props.
      // We don"t support rows; use style to set height instead
      return (
          <StyledTextarea
            className={className}
            readOnly={isReadOnly}
            maxLength={maxLength}
            name={name}
            onBlur={this.onBlur}
            onChange={this.onChange}
            placeholder={placeholder}
            value={value}
          />
      );
    }

    return (
        <StyledInput
          className={className}
          readOnly={isReadOnly}
          maxLength={maxLength}
          name={name}
          onKeyPress={this.onKeyPress}
          onBlur={this.onBlur}
          onChange={this.onChange}
          placeholder={placeholder}
          type={type}
          value={value}
        />
    );
  }
}

export default TextField;
