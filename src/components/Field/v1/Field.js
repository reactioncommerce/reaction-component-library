import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import isEmpty from 'lodash.isempty';
import { applyTheme } from "./../../../helpers";

const StyledDiv = styled.div`
  color: #333333;
`;

class Field extends Component {
  static isFormField = true;

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    errors: PropTypes.array,
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
    isRequired: false
  };

  getClassName() {
    const { className, errors, isRequired } = this.props;
    const errorClass = Array.isArray(errors) && errors.length > 0 ? 'has-error' : '';
    const requiredClass = isRequired ? 'required' : '';
    return `${className || ''} ${errorClass} ${requiredClass}`.trim();
  }

  renderLabel() {
    const { label, labelClassName, labelFor } = this.props;

    return (
      <label className={labelClassName} htmlFor={labelFor}>{label}</label>
    );
  }

  render() {
    const { children, label } = this.props;

    return (
      <div className={this.getClassName()}>
        {!isEmpty(label) && this.renderLabel()}
        {children}
      </div>
    );
}
}

export default Field;
