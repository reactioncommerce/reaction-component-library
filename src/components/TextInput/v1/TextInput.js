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

function applyValidationColor(themeProp = "color") {
  return (props) => {
    let status;
    if (props.errors && props.errors.length) {
      status = "error";
    } else if (props.hasBeenValidated && props.value && props.value.length) {
      status = "success";
    } else if (props.inputFocused || props.buttonFocused) {
      status = "focus";
    } else {
      status = "default";
    }
    return applyTheme(`${themeProp}_${status}`);
  }
}

const StyledInput = styled.input`
  background-color: ${applyThemeVariant("inputBackgroundColor")};
  border: 1px solid ${applyValidationColor("inputBorderColor")};
  border-radius: ${applyTheme("inputBorderRadius")};
  color: ${applyValidationColor("inputColor")};
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
  color: ${applyValidationColor("inputIconColor")};
  fill: currentColor;
  font-size: ${applyTheme("inputIconFontSize")};
  position: ${({ isTextarea }) => isTextarea ? "relative" : "absolute"};
  right: ${({ isTextarea }) => isTextarea ? "0" : applyTheme("inputIconRight")};
  top: ${({ isTextarea }) => isTextarea ? "0" : applyTheme("inputIconTop")};

  & * {
    display: inline-block;
  }
`;

const ClearButton = styled.button`
  background-color: ${({ isTextarea }) => isTextarea ? applyTheme("color_white") : applyTheme("inputIconBackgroundColor")};
  border: none;
  border-radius: ${({ isTextarea }) => isTextarea ? applyTheme("inputBorderRadius") : "50%"};
  color: ${applyTheme("color_coolGrey")};
  cursor: pointer;
  line-height: 0;
  margin-top: ${({ isTextarea }) => isTextarea ? applyTheme("inputIconTop") : "0"};
  padding: ${applyTheme("inputIconVerticalPadding")} ${applyTheme("inputIconHorizontalPadding")};
  position: relative;
  top: ${({ isTextarea }) => isTextarea ?  "0" : "-0.1rem"};

  &:hover,
  &:focus {
    background-color: ${applyTheme("inputIconBackgroundColor")}
  }

  & i {
    line-height: 8px;
  }

  ${({ isTextarea }) => !isTextarea ? `
    & span {
      border: 0;
      clip: rect(1px, 1px, 1px, 1px);
      clip-path: inset(50%);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      position: absolute !important;
      width: 1px;
      word-wrap:normal !important;
    }
  ` : `
    & span {
      margin-left: .3125rem;
    }
  `}
`;

const stringDefaultEquals = (value1, value2) => ((value1 || '') === (value2 || ''));

class TextInput extends Component {
  static isFormInput = true;

  static propTypes = {
    /**
     * allowLineBreaks
     */
    allowLineBreaks: PropTypes.bool,
    className: PropTypes.string,
    convertEmptyStringToNull: PropTypes.bool,
    dark: PropTypes.bool,
    errors: PropTypes.array,
    hasBeenValidated: PropTypes.bool,
    icon: PropTypes.node,
    iconAccessibilityText: PropTypes.string,
    iconClear: PropTypes.node,
    iconClearAccessibilityText: PropTypes.string,
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
    hasBeenValidated: false,
    iconClear: (<i className="fa fa-close" />),
    iconClearAccessibilityText: "Clear",
    iconError: (<i className="fa fa-exclamation-triangle" />),
    iconErrorAccessibilityText: "Error",
    iconSuccess: (<i className="fa fa-check-circle" />),
    iconSuccessAccessibilityText: "Success",
    isReadOnly: false,
    onChange() {},
    onChanging() {},
    onSubmit() {},
    trimValue: true,
    type: "text"
  };

  constructor(props) {
    super(props);

    const value = props.value || '';

    this.state = {
      initialValue: value,
      value,
      inputFocused: false,
      buttonFocused: false
    };
  }

  componentWillMount() {
    const { value } = this.state;
    this.handleChanging(value);
    this.handleChanged(value);
  }

  componentWillReceiveProps(nextProps) {
    const { value } = this.props;
    const { value: stateValue } = this.state;
    const { value: nextValue } = nextProps;

    // Whenever a changed value prop comes in, and doesn't match our state,
    // and therefore was from outside this input, we reset state to that, thus becoming clean.
    if (!stringDefaultEquals(value, nextValue) && !stringDefaultEquals(stateValue, nextValue)) {
      this.setValue(nextValue, true);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { value } = this.state;
    const { value: prevValue } = prevState;

    if (!stringDefaultEquals(value, prevValue)) {
      this.handleChanging(value);
    }

    // We do not worry about whether value has changed when calling handleChanged
    // because it will do its own check against a different value. In fact, often
    // value will not differ from prevValue here because `value` tracks "changing"
    // rather than "changed".
    if (this.shouldCallChanged) {
      this.shouldCallChanged = false;
      this.handleChanged(value);
    }
  }

  onKeyPress = (event) => {
    const { onSubmit } = this.props;
    if (event.which === 13) onSubmit();
  };

  onInputBlur = (event) => {
    setTimeout(() => {
      this.setState({ inputFocused: false });
    }, 150);

    this.setValue(event.target.value, false);
  }

  onButtonBlur = () => {
    this.setState({ buttonFocused: false });
  }

  onChange = (event) => {
    let { value } = event.target;
    value = value || "";
    this.setState({ value });
    this.handleChanging(value);
  };

  onInputFocus = () => {
    this.setState({ inputFocused: true })
  }

  onButtonFocus = () => {
    this.setState({ buttonFocused: true})
  }

  getValue() {
    return this.cleanValue(this.state.value);
  }

  setValue(value = "", shouldSetInitialValue) {
    this.shouldCallChanged = true;

    this.setState({ value });

    if (shouldSetInitialValue) {
      this.setState({ initialValue: value });
    }
  }

  cleanValue(value) {
    const { convertEmptyStringToNull, trimValue } = this.props;
    let outputValue = trimValue ? value.trim() : value;
    if (convertEmptyStringToNull && outputValue === "") outputValue = null;
    return outputValue;
  }

  resetValue() {
    this.setValue(this.props.value, true);
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
    const { initialValue, value } = this.state;
    return !stringDefaultEquals(value, initialValue);
  }

  renderClearButton() {
    const { allowLineBreaks, errors, hasBeenValidated, iconClear, iconClearAccessibilityText } = this.props
    const { value } = this.state
    return (
      <IconWrapper isTextarea={allowLineBreaks} errors={errors} hasBeenValidated={hasBeenValidated} value={value}>
        <ClearButton
          isTextarea={allowLineBreaks}
          onClick={() => this.resetValue()}
          onFocus={this.onButtonFocus}
          onBlur={this.onButtonBlur}
        >
          {iconClear}
          <span>{iconClearAccessibilityText}</span>
        </ClearButton>
      </IconWrapper>
    );
  }

  renderIcon() {
    const { allowLineBreaks, errors, hasBeenValidated, icon, iconAccessibilityText, iconSuccess, iconError } = this.props;
    const { value } = this.state

    let inputIcon;
    if (errors && errors.length) {
      inputIcon = iconError;
    } else if (hasBeenValidated && value && value.length) {
      inputIcon = iconSuccess;
    } else {
      inputIcon = icon;
    }

    return (
      <IconWrapper isTextarea={allowLineBreaks} hasBeenValidated={hasBeenValidated} errors={errors} value={value}>
        {inputIcon}
        <span>{iconAccessibilityText}</span>
      </IconWrapper>
    );
  }

  render() {
    const { allowLineBreaks, className, dark, errors, hasBeenValidated, isReadOnly, maxLength, name, placeholder, type } = this.props;
    const { inputFocused, buttonFocused, value } = this.state;
    if (allowLineBreaks) {
      // Same as "input" but without `onKeyPress` and `type` props.
      // We don"t support rows; use style to set height instead
      return (
        <div style={{ position: "relative" }}>
          <StyledTextarea
            className={className}
            dark={dark}
            errors={errors}
            fieldIsDirty={this.isDirty()}
            readOnly={isReadOnly}
            maxLength={maxLength}
            name={name}
            onBlur={this.onInputBlur}
            onChange={this.onChange}
            onFocus={this.onInputFocus}
            placeholder={placeholder}
            value={value}
          />
          {(this.getValue() && inputFocused || this.getValue() && buttonFocused) ? this.renderClearButton() : this.renderIcon()}
        </div>
      );
    }

    return (
      <div style={{ position: "relative" }}>
        <StyledInput
          className={className}
          dark={dark}
          errors={errors}
          hasBeenValidated={hasBeenValidated}
          readOnly={isReadOnly}
          maxLength={maxLength}
          name={name}
          onKeyPress={this.onKeyPress}
          onBlur={this.onInputBlur}
          onChange={this.onChange}
          onFocus={this.onInputFocus}
          placeholder={placeholder}
          type={type}
          value={value}
        />
        {(this.getValue() && inputFocused || this.getValue() && buttonFocused) ? this.renderClearButton() : this.renderIcon()}
      </div>
    );
  }
}

export default TextInput;
