import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const CompleteActionWrapper = styled.div`
  padding-bottom: ${applyTheme("CheckoutActionComplete.paddingBottom")};
  padding-left: ${applyTheme("CheckoutActionComplete.paddingLeft")};
  padding-right: ${applyTheme("CheckoutActionComplete.paddingRight")};
  padding-top: ${applyTheme("CheckoutActionComplete.paddingTop")};
`;

class CheckoutAction extends Component {
  static propTypes = {
    /**
     * Action label when active
     */
    activeLabel: PropTypes.string,
    /**
     * The component to display if workflow status is `active`
     */
    activeStepElement: PropTypes.node.isRequired,
    /**
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
     */
    className: PropTypes.string,
    /**
     * Action label when completed
     */
    completeLabel: PropTypes.string,
    /**
     * The component to display if workflow status is `complete`
     */
    completeStepElement: PropTypes.node.isRequired,
    /**
     * Action label when incomplete
     */
    incompleteLabel: PropTypes.string,
    /**
     * The component to display if workflow status is `incomplete`
     */
    incompleteStepElement: PropTypes.node.isRequired,
    /**
     * Status of current checkout step
     */
    status: PropTypes.oneOf(["active", "complete", "incomplete"]).isRequired,
    /**
     * Checkout process step number
     */
    stepNumber: PropTypes.number.isRequired
  };

  static defaultProps = {
    activeLabel: "Active Step",
    completeLabel: "Completed Step",
    incompleteLabel: "Incomplete Step"
  };

  renderActiveAction() {
    const { activeStepElement, activeLabel, status, stepNumber } = this.props;

    if (status !== "active") return null;

    return React.cloneElement(activeStepElement, {
      label: (activeStepElement.props && activeStepElement.props.label) || activeLabel,
      stepNumber: (activeStepElement.props && activeStepElement.props.stepNumber) || stepNumber
    });
  }

  renderCompleteAction() {
    const { completeStepElement, completeLabel, status, stepNumber } = this.props;

    if (status !== "complete") return null;

    const component = React.cloneElement(completeStepElement, {
      label: (completeStepElement.props && completeStepElement.props.label) || completeLabel,
      stepNumber: (completeStepElement.props && completeStepElement.props.stepNumber) || stepNumber
    });

    return <CompleteActionWrapper>{component}</CompleteActionWrapper>;
  }

  renderIncompleteAction() {
    const { incompleteStepElement, incompleteLabel, status, stepNumber } = this.props;

    if (status !== "incomplete") return null;

    return React.cloneElement(incompleteStepElement, {
      label: (incompleteStepElement.props && incompleteStepElement.props.label) || incompleteLabel,
      stepNumber: (incompleteStepElement.props && incompleteStepElement.props.stepNumber) || stepNumber
    });
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.renderActiveAction()}
        {this.renderCompleteAction()}
        {this.renderIncompleteAction()}
      </div>
    );
  }
}

export default CheckoutAction;
