import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import isEmpty from "lodash.isempty";
import { addTypographyStyles, applyTheme } from "../../../utils";

/**
 * @summary A function for use in styled-components template string, which
 *   returns a props function that returns a validation color from the theme
 *   based on the current validation state reflected in `props`
 * @param {String} themeProp The name of the theme variable to get the value for
 * @returns {Function} A function that takes `props` argument and returns the
 *   value from a custom theme or the default theme.
 */
function applyValidationColor(themeProp) {
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
  };
}

const StyledField = styled.div`
  margin-bottom: ${applyTheme("Field.spacingBelow")};
  margin-left: 0;
  margin-right: 0;
  margin-top: ${applyTheme("Field.spacingAbove")};
`;

const StyledLabel = styled.label`
  ${addTypographyStyles("FieldLabel", "labelText")}
  color: ${applyValidationColor("FieldLabel.color")};
  display: block;
  margin-bottom: ${applyTheme("FieldLabel.spacingToInput")};
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
`;

const StyledHelpText = styled.span`
  ${addTypographyStyles("FieldHelp", "labelText")}
  display: block;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  margin-top: ${applyTheme("FieldHelp.spacingToInput")};
`;

class Field extends Component {
  static isFormField = true;

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    errors: PropTypes.array,
    helpText: PropTypes.string,
    isOptional: PropTypes.bool,
    isRequired: PropTypes.bool,
    label: PropTypes.node,
    labelClassName: PropTypes.string,
    labelFor: PropTypes.string,
    /**
     * The text for the "Optional" label text.
     */
    optionalLabelText: PropTypes.string
  };

  static defaultProps = {
    className: undefined,
    errors: undefined,
    label: undefined,
    labelClassName: undefined,
    labelFor: undefined,
    isOptional: false,
    isRequired: false,
    optionalLabelText: "Optional"
  };

  getClassName() {
    const { className, errors, isRequired } = this.props;
    const errorClass = Array.isArray(errors) && errors.length > 0 ? "has-error" : "";
    const requiredClass = isRequired ? "required" : "";
    return `${className || ""} ${errorClass} ${requiredClass}`.trim();
  }

  renderLabel() {
    const { errors, label, labelClassName, labelFor, isOptional, optionalLabelText } = this.props;

    return (
      <StyledLabel className={labelClassName} errors={errors} htmlFor={labelFor}>
        {label}
        {isOptional ? ` (${optionalLabelText})` : null}
      </StyledLabel>
    );
  }

  renderHelpText() {
    const { helpText } = this.props;
    return <StyledHelpText>{helpText}</StyledHelpText>;
  }

  render() {
    const { children, helpText, label } = this.props;
    return (
      <StyledField className={this.getClassName()}>
        {!isEmpty(label) && this.renderLabel()}
        {children}
        {!isEmpty(helpText) && this.renderHelpText()}
      </StyledField>
    );
  }
}

export default Field;
