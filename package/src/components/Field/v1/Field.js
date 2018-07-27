import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import isEmpty from "lodash.isempty";
import { applyTheme } from "../../../utils";

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
  };
}

const StyledField = styled.div`
  margin: ${applyTheme("fieldMargin")};
`;

const StyledLabel = styled.label`
  -webkit-font-smoothing: antialiased;
  color: ${applyValidationColor("labelColor")};
  display: block;
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, sans-serif;
  font-size: ${applyTheme("labelFontSize")};
  line-height: ${applyTheme("leading_header")};
  margin: ${applyTheme("labelMargin")};
`;

const StyledHelpText = styled.span`
  -webkit-font-smoothing: antialiased;
  color: ${applyTheme("helpTextColor")};
  display: block;
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, sans-serif;
  font-size: ${applyTheme("helpTextFontSize")};
  margin: ${applyTheme("helpTextMargin")};
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
    labelFor: PropTypes.string
  };

  static defaultProps = {
    className: undefined,
    errors: undefined,
    label: undefined,
    labelClassName: undefined,
    labelFor: undefined,
    isOptional: false,
    isRequired: false
  };

  getClassName() {
    const { className, errors, isRequired } = this.props;
    const errorClass = Array.isArray(errors) && errors.length > 0 ? "has-error" : "";
    const requiredClass = isRequired ? "required" : "";
    return `${className || ""} ${errorClass} ${requiredClass}`.trim();
  }

  renderLabel() {
    const { errors, label, labelClassName, labelFor, isOptional } = this.props;

    return (
      <StyledLabel className={labelClassName} errors={errors} htmlFor={labelFor}>
        {label}
        {isOptional ? " (Optional)" : null}
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
