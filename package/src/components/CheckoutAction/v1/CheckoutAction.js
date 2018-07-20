import React, { Component } from "react";
import PropTypes from "prop-types";

class CheckoutAction extends Component {
  static propTypes = {
    /**
     * The component to display if workflow status is `active`
     */
    activeStepElement: PropTypes.node.isRequired,
    /**
     * The component to display if workflow status is `complete`
     */
    completeStepElement: PropTypes.node.isRequired,
    /**
     * The component to display if workflow status is `incomplete`
     */
    incompleteStepElement: PropTypes.node.isRequired,
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
    const { activeStepElement, status } = this.props;
    // When component is ready, remove the previous line and uncomment following line
    // const { activeStepElement, label, status, stepNumber } = this.props;

    // When component is ready,  uncomment following lines
    // const component = React.cloneElement(activeStepElement, {
    //   label,
    //   stepNumber
    // });

    if (status === "active") {
      return activeStepElement;
      // When component is ready, remove the previous line and uncomment following line
      // return component;
    }

    return null;
  }

  renderCompleteAction = () => {
    const { completeStepElement, label, status, stepNumber } = this.props;

    const component = React.cloneElement(completeStepElement, {
      label,
      stepNumber
    });

    if (status === "complete") {
      return component;
    }

    return null;
  }

  renderIncompleteAction = () => {
    const { incompleteStepElement, label, status, stepNumber } = this.props;

    const component = React.cloneElement(incompleteStepElement, {
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
      <div>
        {this.renderActiveAction()}
        {this.renderCompleteAction()}
        {this.renderIncompleteAction()}
      </div>
    );
  }
}

export default CheckoutAction;
