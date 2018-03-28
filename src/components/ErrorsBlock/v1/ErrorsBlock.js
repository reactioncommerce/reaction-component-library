import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "./../../../helpers";

const StyledDiv = styled.div`
  color: #333333;
`;

class ErrorsBlock extends Component {
  static propTypes = {

  };

  static defaultProps = {

  };

  render() {
    return (
      <StyledDiv>TEST</StyledDiv>
    );
  }
}

export default ErrorsBlock;
