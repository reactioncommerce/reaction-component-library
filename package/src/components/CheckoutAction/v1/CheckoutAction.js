import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const StyledDiv = styled.div`
  color: #333333;
`;

class CheckoutAction extends Component {
  static propTypes = {
    /**
     * The component to display if workflow status is `active`
     */
    ActiveStepComponent: PropTypes.node.isRequired,
    /**
     * The component to display if workflow status is `complete`
     */
    CompleteStepComponent: PropTypes.node.isRequired,
    /**
     * The component to display if workflow status is `incomplete`
     */
    IncompleteStepComponent: PropTypes.node.isRequired,
    /**
     * Label of workflow step
     */
    label: PropTypes.string.isRequired,
    /**
     * Status of current checkout step
     */
    status: PropTypes.string.isRequired,
    /**
     * Checkout process step number
     */
    stepNumber: PropTypes.number.isRequired
  };

  renderActiveAction = () => {
    const { ActiveStepComponent, status } = this.props;
    // When component is ready, remove the previous line and uncomment following line
    // const { ActiveStepComponent, label, status, stepNumber } = this.props;

    // When component is ready,  uncomment following lines
    // const component = React.cloneElement(ActiveStepComponent, {
    //   label,
    //   stepNumber
    // });

    if (status === "active") {
      return ActiveStepComponent;
      // When component is ready, remove the previous line and uncomment following line
      // return component;
    }

    return null;
  }

  renderCompleteAction = () => {
    const { CompleteStepComponent, label, status, stepNumber } = this.props;

    const component = React.cloneElement(CompleteStepComponent, {
      label,
      stepNumber
    });

    if (status === "complete") {
      return component;
    }

    return null;
  }

  renderIncompleteAction = () => {
    const { IncompleteStepComponent, label, status, stepNumber } = this.props;

    const component = React.cloneElement(IncompleteStepComponent, {
      label,
      stepNumber
    });

    if (status === "incomplete") {
      return component;
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
