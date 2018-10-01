import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme } from "../../../utils";

function applyThemeVariant(themeProp) {
  return (props) => {
    const inputType = props.isOnDarkBackground ? "dark" : "default";
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

const InputWrapper = styled.div`
  -webkit-font-smoothing: antialiased;
  background-color: ${applyThemeVariant("inputBackgroundColor")};
  border: 1px solid ${applyValidationColor("inputBorderColor")};
  border-radius: ${applyTheme("inputBorderRadius")};
  box-sizing: border-box;
  color: ${applyValidationColor("inputColor")};
  display: flex;
  flex-direction: row;
  font-family: ${applyTheme("inputFontFamily")};
  font-size: ${applyTheme("inputFontSize")};
  line-height: ${applyTheme("inputLineHeight")};
  outline: none;
  padding: ${applyTheme("inputVerticalPadding")} ${applyTheme("inputHorizontalPadding")};
  position: relative;
`;

const StyledInput = styled.input`
  background-color: inherit;
  border: none;
  box-sizing: border-box;
  color: inherit;
  flex-grow: 2;
  font-family: ${applyTheme("inputFontFamily")};
  font-size: ${applyTheme("inputFontSize")};
  outline: none;

  &::placeholder {
    color: ${applyTheme("inputPlaceholderColor")};
  }

  &:read-only {
    color: ${applyTheme("inputColor_disabled")};
  }
`;

const Textarea = StyledInput.withComponent("textarea");

const StyledTextarea = Textarea.extend`
  -webkit-font-smoothing: antialiased;
  background-color: ${applyThemeVariant("inputBackgroundColor")};
  border-radius: ${applyTheme("inputBorderRadius")};
  border: 1px solid ${applyValidationColor("inputBorderColor")};
  color: ${applyValidationColor("inputColor")};
  font-family: ${applyTheme("inputFontFamily")};
  font-size: ${applyTheme("inputFontSize")};
  line-height: ${applyTheme("textareaLineHeight")};
  min-height: ${applyTheme("textareaHeight")};
  outline: none;
  padding: ${applyTheme("inputVerticalPadding")} ${applyTheme("inputHorizontalPadding")};
  resize: vertical;
  width: 100%;

  &:read-only {
    color: ${applyTheme("inputColor_disabled")};
  }
`;

const IconWrapper = styled.div`
  box-sizing: border-box;
  margin-left: ${applyTheme("inputHorizontalPadding")};
  height: ${applyTheme("inputIconWrapperSize")};
  width: ${applyTheme("inputIconWrapperSize")};
  position: relative;
  right: ${applyTextareaVariant(applyTheme("textareaIconRight"), 0)};
  top: ${applyTextareaVariant(applyTheme("textareaIconTop"), 0)};

  & * {
    display: inline-block;
  }
`;

const ClearButton = styled.div`
  background-color: transparent;
  border: none;
  border-radius: ${applyTheme("inputBorderRadius")};
  box-sizing: border-box;
  color: ${applyTheme("inputClearButtonColor")};
  cursor: pointer;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;

  &:hover,
  &:focus {
    background-color: "transparent";
    outline: none;
  }

  & span {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    position: absolute !important;
    width: 1px;
    word-wrap: normal !important;
  }
}`;

const TextareaClearButton = styled.div`
  background-color: ${applyTheme("inputClearButtonLargeBackgroundColor")};
  border-radius: ${applyTheme("inputBorderRadius")};
  border: 1px solid ${applyTheme("inputClearButtonLargeBorderColor")};
  box-sizing: content-box;
  color: ${applyTheme("inputClearButtonColor")};
  cursor: pointer;
  display: inline-block;
  font-size: ${applyTheme("textareaClearButtonFontSize")};
  height: ${applyTheme("textareaClearButtonFontSize")};
  margin: 0;
  padding: ${applyTheme("textareaIconPadding")};
  line-height: 0;

  &:hover,
  &:focus {
    background-color: "transparent";
    outline: none;
  }

  & span {
    margin-left: 0.3125rem;
    vertical-align: middle;
  }
`;

const stringDefaultEquals = (value1, value2) => ((value1 || "") === (value2 || ""));

class TextInput extends Component {
  static isFormInput = true;

  static propTypes = {
    /**
     * Custom class name
     */
    className: PropTypes.string,
    /**
     * If you've set up a components context using
     * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
     * (recommended), then this prop will come from there automatically. If you have not
     * set up a components context or you want to override one of the components in a
     * single spot, you can pass in the components prop directly.
     */
    components: PropTypes.shape({
      /**
       * Pass an element (e.g., rendered SVG) to use as the clear button icon
       */
      iconClear: PropTypes.node,
      /**
       * Pass an element (e.g., rendered SVG) to use as the error icon
       */
      iconError: PropTypes.node,
      /**
       * Pass an element (e.g., rendered SVG) to use as the valid icon
       */
      iconValid: PropTypes.node
    }),
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
     * Overwrite the default clear input icon accessibility text
     */
    iconClearAccessibilityText: PropTypes.string,
    /**
     * This should be used only for connecting the input with a label. Generate a
     * globally unique ID string and pass it to this prop and the `labelFor` prop
     * of `Field`.
     */
    id: PropTypes.string,
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
     * On change handler for input
     */
    onChange: PropTypes.func,
    /**
     * On changing handler for input
     */
    onChanging: PropTypes.func,
    /**
     * Custom click handler for added icon
     */
    onIconClick: PropTypes.func,
    /**
     * On submit handler for input
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
    type: PropTypes.oneOf(["email", "password", "text", "url"]),
    /**
     * Prepopulate the input's value
     */
    value: PropTypes.string
  };

  static defaultProps = {
    hasBeenValidated: false,
    iconClearAccessibilityText: "Clear",
    isOnDarkBackground: false,
    isReadOnly: false,
    onChange() { },
    onChanging() { },
    onIconClick() { },
    onSubmit() { },
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

    this._isMounted = true;
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

  componentWillUnmount() {
    this._isMounted = false;
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
      if (this._isMounted) {
        this.setState({ isInputFocused: false });
      }
    }, 150);

    this.setValue(event.target.value, false);
  };

  onButtonBlur = () => {
    this.setState({ isButtonFocused: false });
  };

  onChange = (event) => {
    let { value } = event.target;
    value = value || "";
    this.setState({ value });
    this.handleChanging(value);
  };

  onInputFocus = () => {
    this.setState({ isInputFocused: true });
  };

  onButtonFocus = () => {
    this.setState({ isButtonFocused: true });
  };

  onClearValue = () => {
    this.setValue();
    this.onButtonBlur();
  };

  getValue() {
    return this.cleanValue(this.state.value);
  }

  setValue(value, shouldSetInitialValue) {
    this.shouldCallChanged = true;

    this.setState({ value: value || "" });

    if (shouldSetInitialValue) {
      this.setState({ initialValue: value || "" });
    }
  }

  cleanValue(value) {
    const { shouldConvertEmptyStringToNull, shouldTrimValue } = this.props;
    let outputValue = shouldTrimValue ? (value || "").trim() : value || "";
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

  // Input is dirty if value prop doesn't match value state. Whenever a changed
  // value prop comes in, we reset state to that, thus becoming clean.
  isDirty() {
    const { initialValue, value } = this.state;
    return !stringDefaultEquals(value, initialValue);
  }

  showClearButton() {
    const { isReadOnly } = this.props;
    const { isInputFocused, isButtonFocused } = this.state;
    return ((this.getValue() && isInputFocused) || (this.getValue() && isButtonFocused)) && !isReadOnly;
  }

  renderClearButton() {
    const { components, shouldAllowLineBreaks, errors, hasBeenValidated, iconClearAccessibilityText } = this.props;
    const { iconClear } = components || {};
    const { value } = this.state;

    if (!iconClear) return null;

    if (shouldAllowLineBreaks) {
      return (
        <TextareaClearButton
          onClick={this.onClearValue}
          onFocus={this.onButtonFocus}
          onBlur={this.onButtonBlur}
          tabIndex={-1}
        >
          {iconClear}
          <span>{iconClearAccessibilityText}</span>
        </TextareaClearButton>
      );
    }

    return (
      <IconWrapper errors={errors} hasBeenValidated={hasBeenValidated} isTextarea={shouldAllowLineBreaks} value={value}>
        <ClearButton onClick={this.onClearValue} onFocus={this.onButtonFocus} onBlur={this.onButtonBlur} tabIndex={-1}>
          {iconClear}
          <span>{iconClearAccessibilityText}</span>
        </ClearButton>
      </IconWrapper>
    );
  }

  renderIcon() {
    const {
      components,
      errors,
      hasBeenValidated,
      icon,
      onIconClick,
      shouldAllowLineBreaks
    } = this.props;
    const {
      iconValid,
      iconError
    } = components || {};
    const { value } = this.state;

    let inputIcon;
    if (errors && errors.length) {
      inputIcon = iconError;
    } else if (hasBeenValidated && value && value.length) {
      inputIcon = iconValid;
    } else {
      inputIcon = icon;
    }

    if (!inputIcon) return null;

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
    const {
      className,
      errors,
      hasBeenValidated,
      id,
      isOnDarkBackground,
      isReadOnly,
      maxLength,
      name,
      placeholder,
      shouldAllowLineBreaks,
      type
    } = this.props;
    const { isButtonFocused, isInputFocused, value } = this.state;

    if (shouldAllowLineBreaks) {
      // Same as "input" but without `onKeyPress` and `type` props.
      // We don"t support rows; use style to set height instead
      return (
        <div style={{ position: "relative" }}>
          <StyledTextarea
            className={className}
            errors={errors}
            fieldIsDirty={this.isDirty()}
            hasBeenValidated={hasBeenValidated}
            id={id}
            isOnDarkBackground={isOnDarkBackground}
            maxLength={maxLength}
            name={name}
            onBlur={this.onInputBlur}
            onChange={this.onChange}
            onFocus={this.onInputFocus}
            placeholder={placeholder}
            readOnly={isReadOnly}
            value={value}
          />
          {this.showClearButton() ? this.renderClearButton() : null}
        </div>
      );
    }

    return (
      <InputWrapper
        errors={errors}
        hasBeenValidated={hasBeenValidated}
        isButtonFocused={isButtonFocused}
        isInputFocused={isInputFocused}
        isOnDarkBackground={isOnDarkBackground}
        value={value}
      >
        <StyledInput
          className={className}
          errors={errors}
          hasBeenValidated={hasBeenValidated}
          id={id}
          isOnDarkBackground={isOnDarkBackground}
          maxLength={maxLength}
          name={name}
          onBlur={this.onInputBlur}
          onChange={this.onChange}
          onFocus={this.onInputFocus}
          onKeyPress={this.onKeyPress}
          placeholder={placeholder}
          readOnly={isReadOnly}
          type={type}
          value={value}
        />
        {this.showClearButton() ? this.renderClearButton() : this.renderIcon()}
      </InputWrapper>
    );
  }
}

const WrappedTextInput = withComponents(TextInput);

WrappedTextInput.isFormInput = true;

export default WrappedTextInput;
