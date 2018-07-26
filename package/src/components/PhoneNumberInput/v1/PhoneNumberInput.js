import React, { Component } from "react";
import PropTypes from "prop-types";
import TextInput from "../../TextInput/v1";

class PhoneNumberInput extends Component {
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
     * Prepopulate the input's value
     */
    value: PropTypes.string
  };

  state = {
    value: this.props.value || ""
  };

  handleChanging = (value) => {
    if (!value) return;
    const trimedValue = value.replace(/\D/g, "");
    this.setState({ value: trimedValue });
  };

  render() {
    const { value } = this.state;
    return <TextInput {...this.props} onChanging={this.handleChanging} value={value} />;
  }
}

export default PhoneNumberInput;
