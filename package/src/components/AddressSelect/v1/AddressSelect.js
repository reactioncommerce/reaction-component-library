import React, { Component } from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
// import { applyTheme } from "../../../utils";

const StyledDiv = styled.div`
  color: #333333;
`;

class AddressSelect extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return <StyledDiv>Address Select</StyledDiv>;
  }
}

export default AddressSelect;