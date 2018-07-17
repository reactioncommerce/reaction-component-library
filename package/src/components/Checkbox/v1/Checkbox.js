import React, { Component } from "react";
import PropTypes from "prop-types";
import uniqueId from "lodash.uniqueid";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const StyledDiv = styled.div`
  margin-bottom: ${applyTheme("checkboxVerticalSpacing")};
`;

const StyledInput = styled.input`
  opacity: 0;
`;

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  font-size: ${applyTheme("checkboxLabelFontSize")};
  padding-left: ${applyTheme("checkboxLabelSpacing")};
  &::before,
  &::after {
    position: absolute;
  }
  &::before {
    content: " ";
    display: inline-block;
    height: ${applyTheme("checkboxHeightAndWidth")};
    width: ${applyTheme("checkboxHeightAndWidth")};
    border: ${applyTheme("checkboxBorderWidth")} solid ${applyTheme("checkboxBorderColor")};
    border-radius: ${applyTheme("checkboxBorderRadius")};
    left: 0;
    top: -3px;
  }
  &::after {
    content: "\f00c";
    display: inline-block;
    font-family: FontAwesome;
    font-size: ${applyTheme("checkboxIconSize")};
    color: ${applyTheme("checkboxIconColor")};
    left: 5px;
    top: 2px;
  }
`;

class Checkbox extends Component {
  static propTypes = {
    className: PropTypes.string,
    isReadOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    onChange: PropTypes.func,
    onChanging: PropTypes.func,
    value: PropTypes.bool
  };

  static defaultProps = {
    className: undefined,
    isReadOnly: false,
    name: undefined,
    onChange() { },
    onChanging() { },
    value: undefined
  };

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
