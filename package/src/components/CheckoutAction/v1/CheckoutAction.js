import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const StyledDiv = styled.div`
  color: #333333;
`;

class CheckoutAction extends Component {
  static propTypes = {

  };

  static defaultProps = {

  };

  renderActiveAction = () => {
    const { status } = this.props;

    if (status === "active") {
      return this.props.ActiveStepComponent;
    }

    return null;
  }

  renderCompleteAction = () => {
    const { status } = this.props;

    if (status === "complete") {
      return this.props.CompleteStepComponent;
    }

    return null;
  }

  renderIncompleteAction = () => {
    const { status } = this.props;

    if (status === "incomplete") {
      return this.props.IncompleteStepComponent;
    }

    return null;
  }

  render() {

    return (
      <StyledDiv>
        {this.renderActiveAction()}
        {this.renderCompleteAction()}
        {this.renderIncompleteAction()}
      </StyledDiv>
    );
  }
}

export default CheckoutAction;
