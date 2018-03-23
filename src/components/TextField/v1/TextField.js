import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "./../../../helpers";

function applyThemeVariant(themeProp) {
  return (props) => {
    const inputType = (props.dark) ? "dark" : "default";
    return  applyTheme(`${themeProp}_${inputType}`);
  }
}

function applyThemeValidation(themeProp) {
  return (props) => {
    let color;
    if (props.fieldIsDirty && !props.errors.length) {
      color = "success";
    } else if (props.errors.length) {
      color = "invalid";
    } else {
      color = "default";
    }
    return applyTheme(`${themeProp}_${color}`);
  }
}

const StyledInput = styled.input`
  background-color: ${applyThemeVariant("inputBackgroundColor")};
  border: 1px solid ${applyThemeValidation("inputBorderColor")};
  border-radius: ${applyTheme("inputBoarderRadius")};
  color: ${applyTheme("inputColor")};
  crsor: pointer;
  font-family: ${applyTheme("inputFontFamily")};
  font-size: ${applyTheme("inputFontSize")};
  line-height: ${applyTheme("inputLineHeight")};
  padding: ${applyTheme("inputVerticalPadding")} ${applyTheme("inputHorizontalPadding")};
  width: 100%;

  &::placeholder {
    color: ${applyTheme("inputPlaceholderColor")};
  }

  &:focus {
    border-color: ${applyTheme("inputBorderColor_focus")};
  }

  &:invalid {
    border-color: ${applyTheme("inputBorderColor_invalid")};
    color: ${applyTheme("inputColor_invalid")};
  }

  &:read-only {
    color: ${applyTheme("inputColor_disabled")};
    cursor: not-allowed;
  }
`;

const Textarea = StyledInput.withComponent("textarea");

const StyledTextarea = Textarea.extend`
  line-height: ${applyTheme("textareaLineHeight")};
  min-height: ${applyTheme("textareaHeight")};
  resize: vertical;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: ${applyTheme("iconTop")};
  right: ${applyTheme("iconRight")};
  height: 1em;
  width: 1em;
`;

class TextField extends Component {
  static isFormInput = true;

  static propTypes = {
    allowLineBreaks: PropTypes.bool,
    className: PropTypes.string,
    convertEmptyStringToNull: PropTypes.bool,
    dark: PropTypes.bool,
    errors: PropTypes.array,
    icon: PropTypes.node,
    iconAccessibilityText: PropTypes.string,
    iconError: PropTypes.node,
    iconErrorAccessibilityText: PropTypes.string,
    iconSuccess: PropTypes.node,
    iconSuccessAccessibilityText: PropTypes.string,
    isReadOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    maxLength: PropTypes.number,
    name: PropTypes.string,
    onChange: PropTypes.func,
    onChanging: PropTypes.func,
    onIconClick: PropTypes.func,
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
    dark: false,
    errors: [],
    iconError: (<i className="fa fa-exclamation-triangle" />),
    iconSuccess: (<i className="fa fa-check-circle" />),
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
    return this.state.value !== (this.props.value || "");
  }

  renderIcon() {
    const { errors, icon, iconSuccess, iconError } = this.props;

    let inputIcon;
    if (this.isDirty() && !errors.length) {
      inputIcon = iconSuccess;
    } else if (errors.length) {
      inputIcon = iconError;
    } else {
      inputIcon = icon;
    }

    return (
      <IconWrapper>
        {inputIcon}
      </IconWrapper>
    );
  }

  render() {
    const { allowLineBreaks, className, dark, errors, isReadOnly, maxLength, name, placeholder, type } = this.props;
    const { value } = this.state;

    if (allowLineBreaks) {
      // Same as "input" but without `onKeyPress` and `type` props.
      // We don"t support rows; use style to set height instead
      return (
          <StyledTextarea
            className={className}
            dark={dark}
            errors={errors}
            fieldIsDirty={this.isDirty()}
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
      <div style={{ position: "relative" }}>
        <StyledInput
          className={className}
          dark={dark}
          errors={errors}
          fieldIsDirty={this.isDirty()}
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
        {this.renderIcon()}
      </div>
    );
  }
}

export default TextField;
