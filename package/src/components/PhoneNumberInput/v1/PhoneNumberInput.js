import React, { Component } from "react";
import PropTypes from "prop-types";
import TextInput from "../../TextInput/v1";

class PhoneNumberInput extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    value: this.props.value || ""
  };

  handdleChanging = (value) => {
    if (!value) return;
    const trimedValue = value.replace(/\D/g, "");
    this.setState({ value: trimedValue });
  };

  render() {
    const { value } = this.state;
    return <TextInput onChanging={this.handdleChanging} value={value} />;
  }
}

export default PhoneNumberInput;
