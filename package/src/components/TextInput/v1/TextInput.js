import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../utils";

function applyThemeVariant(themeProp) {
  return (props) => {
    const inputType = (props.isOnDarkBackground) ? "dark" : "default";
    return applyTheme(`${themeProp}_${inputType}`);
  };
}

function applyValidationColor(themeProp = "color") {
  return (props) => {
    let status;
    if (props.errors && props.errors.length) {
      status = "error";
    } else if (props.hasBeenValidated && props.value && props.value.length) {
      status = "success";
    } else if (props.isInputFocused || props.isButtonFocused) {
      status = "focus";
    } else {
      status = "default";
    }
    return applyTheme(`${themeProp}_${status}`);
  };
}

function applyTextareaVariant(textareaProp, inputProp) {
  return ({ isTextarea }) => {
    if (isTextarea) {
      return textareaProp;
    }
    return inputProp;
  };
}

const StyledInput = styled.input`
  -webkit-font-smoothing: antialiased;
  background-color: ${applyThemeVariant("inputBackgroundColor")};
  border: 1px solid ${applyValidationColor("inputBorderColor")};
  border-radius: ${applyTheme("inputBorderRadius")};
  box-sizing: border-box;
  color: ${applyValidationColor("inputColor")};
  crsor: pointer;
  font-family: ${applyTheme("inputFontFamily")};
  font-size: ${applyTheme("inputFontSize")};
  line-height: ${applyTheme("inputLineHeight")};
  outline: none;
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
  }
`;

const Textarea = StyledInput.withComponent("textarea");

const StyledTextarea = Textarea.extend`
  box-sizing: border-box;
  line-height: ${applyTheme("textareaLineHeight")};
  min-height: ${applyTheme("textareaHeight")};
  resize: vertical;
`;

const IconWrapper = styled.div`
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: ${applyValidationColor("inputIconColor")};
  fill: currentColor;
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, sans-serif;
  font-size: ${applyTheme("inputIconFontSize")};
  height: ${applyTextareaVariant("auto", "1rem")};
  position: ${applyTextareaVariant("relative", "absolute")};
  right: ${applyTextareaVariant(applyTheme("textareaIconRight"), applyTheme("inputIconRight"))};
  top: ${applyTextareaVariant(applyTheme("textareaIconTop"), applyTheme("inputIconTop"))};
  width: ${applyTextareaVariant("auto", "1rem")};

  & * {
    display: inline-block;
  }
`;

const ClearButton = styled.div`
  -webkit-font-smoothing: antialiased;
  background-color: ${applyTextareaVariant(applyTheme("color_white"), applyTheme("inputIconBackgroundColor"))};
  border: none;
  border-radius: ${applyTextareaVariant(applyTheme("inputBorderRadius"), "50%")};
  box-sizing: border-box;
  color: ${applyTheme("color_coolGrey")};
  cursor: pointer;
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, sans-serif;
  line-height: 0;
  padding: ${applyTextareaVariant(applyTheme("textareaIconPadding"), applyTheme("inputIconPadding"))};
  position: relative;
  top: ${applyTextareaVariant("0", "-0.1rem")};

  &:hover,
  &:focus {
    background-color: ${applyTheme("inputIconBackgroundColor")}
  }

  & i {
    line-height: 8px;
  }

  ${({ isTextarea }) => {
    if (!isTextarea) {
      return `& span {
        border: 0;
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        position: absolute !important;
        width: 1px;
        word-wrap:normal !important;
      }`;
    }
    return `& span {
      margin-left: .3125rem;
    }`;
  }
}`;

const stringDefaultEquals = (value1, value2) => ((value1 || "") === (value2 || ""));

class TextInput extends Component {
  static isFormInput = true;

  static propTypes = {
    /**
     * Custom class name
     */
    className: PropTypes.string,
    /**
     * An array of validation errors
     */
    errors: PropTypes.array,
    /**
     * Enable when a input's value has been validated
     */
    hasBeenValidated: PropTypes.bool,
    /**
     * Add an icon to the input by passing an icon node,
     */
    icon: PropTypes.node,
    /**
     * Add extra context to your icon for assistive technologies
     */
    iconAccessibilityText: PropTypes.string,
    /**
     * Overwrite the default clear input icon by passing an icon node
     */
    iconClear: PropTypes.node,
    /**
     * Overwrite the default clear input icon accessibilty text
     */
    iconClearAccessibilityText: PropTypes.string,
    /**
     * Overwrite the default error input icon by passing an icon node
     */
    iconError: PropTypes.node,
    /**
     * Overwrite the default valid input icon by passing an icon node
     */
    iconValid: PropTypes.node,
    /**
     * Enable when using the input on a dark background, disabled by default
     */
    isOnDarkBackground: PropTypes.bool,
    /**
     * Enable to make the input read only / disabled, disabled by default
     */
    isReadOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    /**
     * Max amount of characters allowed in input
     */
    maxLength: PropTypes.number,
    /**
     * Input name
     */
    name: PropTypes.string,
    /**
     * On change hanlder for input
     */
    onChange: PropTypes.func,
    /**
     * On changing hanlder for input
     */
    onChanging: PropTypes.func,
    /**
     * Custome click hanlder for added icon
     */
    onIconClick: PropTypes.func,
    /**
     * On submit hanlder for input
     */
    onSubmit: PropTypes.func,
    /**
     * Input placeholder text
     */
    placeholder: PropTypes.string,
    /**
     * Enable this when you need a textarea for multi line values, disabled by default
     */
    shouldAllowLineBreaks: PropTypes.bool,
    /**
     * If the input returns an empty string value convert it to a null value, enabled by default
     */
    shouldConvertEmptyStringToNull: PropTypes.bool,
    /**
     * Enable this when you want to trim empty spaces from the begining and end of the input's returned value, enabled by default
     */
    shouldTrimValue: PropTypes.bool,
    /**
     * The HTML input type for the text input, the input only supports "email", "password", "text", "url" defaults to "text"
     */
    type: PropTypes.oneOf([
      "email",
      "password",
      "text",
      "url"
    ]),
    /**
     * Prepopulate the input's value
     */
    value: PropTypes.string
  };

  static defaultProps = {
    hasBeenValidated: false,
    iconClear: (<i className="fas fa-times" />),
    iconClearAccessibilityText: "Clear",
    iconError: (<i className="fas fa-exclamation-triangle" />),
    iconValid: (<i className="far fa-check-circle" />),
    isOnDarkBackground: false,
    isReadOnly: false,
    onChange() {},
    onChanging() {},
    onIconClick() {},
    onSubmit() {},
    shouldAllowLineBreaks: false,
    shouldConvertEmptyStringToNull: true,
    shouldTrimValue: true,
    type: "text"
  };

  constructor(props) {
    super(props);

    const value = props.value || "";

    this.state = {
      initialValue: value,
      value,
      isInputFocused: false,
      isButtonFocused: false
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
    // when a user clicks the input's clear button the input will blur
    // and remove the button before the onClick event fires. This timeout will
    // keep the button rendered long enough for the onClick event to fire.
    setTimeout(() => {
      this.setState({ isInputFocused: false });
    }, 150);

    this.setValue(event.target.value, false);
  }

  onButtonBlur = () => {
    this.setState({ isButtonFocused: false });
  }

  onChange = (event) => {
    let { value } = event.target;
    value = value || "";
    this.setState({ value });
    this.handleChanging(value);
  };

  onInputFocus = () => {
    this.setState({ isInputFocused: true });
  }

  onButtonFocus = () => {
    this.setState({ isButtonFocused: true });
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
    const { shouldConvertEmptyStringToNull, shouldTrimValue } = this.props;
    let outputValue = shouldTrimValue ? value.trim() : value;
    if (shouldConvertEmptyStringToNull && outputValue === "") outputValue = null;
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

  showClearButton() {
    const { isReadOnly } = this.props;
    const { isInputFocused, isButtonFocused } = this.state;
    return (((this.getValue() && isInputFocused) || (this.getValue() && isButtonFocused)) && !isReadOnly);
  }

  renderClearButton() {
    const { shouldAllowLineBreaks, errors, hasBeenValidated, iconClear, iconClearAccessibilityText } = this.props;
    const { value } = this.state;
    return (
      <IconWrapper isTextarea={shouldAllowLineBreaks} errors={errors} hasBeenValidated={hasBeenValidated} value={value}>
        <ClearButton
          isTextarea={shouldAllowLineBreaks}
          onClick={() => this.setValue()}
          onFocus={this.onButtonFocus}
          onBlur={this.onButtonBlur}
          tabIndex={-1}
        >
          {iconClear}
          <span>{iconClearAccessibilityText}</span>
        </ClearButton>
      </IconWrapper>
    );
  }

  renderIcon() {
    const {
      shouldAllowLineBreaks,
      errors,
      hasBeenValidated,
      icon, onIconClick,
      iconValid,
      iconError
    } = this.props;
    const { value } = this.state;

    let inputIcon;
    if (errors && errors.length) {
      inputIcon = iconError;
    } else if (hasBeenValidated && value && value.length) {
      inputIcon = iconValid;
    } else {
      inputIcon = icon;
    }

    return (
      <IconWrapper
        errors={errors}
        hasBeenValidated={hasBeenValidated}
        onClick={onIconClick}
        isTextarea={shouldAllowLineBreaks}
        value={value}
      >
        {inputIcon}
      </IconWrapper>
    );
  }

  render() {
    const { shouldAllowLineBreaks, className, isOnDarkBackground, errors, hasBeenValidated, isReadOnly, maxLength, name, placeholder, type } = this.props;
    const { value } = this.state;
    if (shouldAllowLineBreaks) {
      // Same as "input" but without `onKeyPress` and `type` props.
      // We don"t support rows; use style to set height instead
      return (
        <div style={{ position: "relative" }}>
          <StyledTextarea
            className={className}
            isOnDarkBackground={isOnDarkBackground}
            errors={errors}
            hasBeenValidated={hasBeenValidated}
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
          {this.showClearButton() ? this.renderClearButton() : "" }
        </div>
      );
    }

    return (
      <div style={{ position: "relative" }}>
        <StyledInput
          className={className}
          isOnDarkBackground={isOnDarkBackground}
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
        {this.showClearButton() ? this.renderClearButton() : this.renderIcon()}
      </div>
    );
  }
}

export default TextInput;
