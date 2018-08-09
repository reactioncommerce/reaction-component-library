import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { CustomPropTypes } from "../../../utils";

const FormActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

class CheckoutActions extends Component {
  static propTypes = {
    actions: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        component: CustomPropTypes.component.isRequired
      })
    ),
    /**
     * If you've set up a components context using @reactioncommerce/components-context
     * (recommended), then this prop will come from there automatically. If you have not
     * set up a components context or you want to override one of the components in a
     * single spot, you can pass in the components prop directly.
     */
    components: PropTypes.shape({
      /**
       * Pass either the Reaction AddressForm component or your own component that
       * accepts compatible props.
       */
      AddressForm: CustomPropTypes.component.isRequired,
      /**
       * Pass either the Reaction Button component or your own component that
       * accepts compatible props.
       */
      Button: CustomPropTypes.component.isRequired,
      /**
       * Pass either the Reaction CheckoutAction component or your own component that
       * accepts compatible props.
       */
      CheckoutAction: CustomPropTypes.component.isRequired,
      /**
       * Pass either the Reaction CheckoutActionComplete component or your own component that
       * accepts compatible props.
       */
      CheckoutActionComplete: CustomPropTypes.component.isRequired,
      /**
       * Pass either the Reaction CheckboxActionIncomplete component or your own component that
       * accepts compatible props.
       */
      CheckoutActionIncomplete: CustomPropTypes.component.isRequired
    }).isRequired
  };

  static defaultProps = {
    cart: {
      fullfillmentGroup: {
        data: {
          shippingAddress: null
        }
      }
    },
    something: "some string"
  };

  state = {
    currentActions: this.props.actions.map(({ label }, i) => ({
      label,
      status: i === 0 ? "active" : "incomplete",
      readyForSave: false,
      capturedData: {
        firstName: "Nat"
      }
    }))
  };

  getCurrentActionByLabel(label) {
    const { currentActions } = this.state;
    const actionIndex = currentActions.findIndex((action) => action.label === label);
    return currentActions[actionIndex];
  }

  getCurrentActionIndex(label) {
    const { currentActions } = this.state;
    return currentActions.findIndex((action) => action.label === label);
  }

  toggleActionStatus = (label, status) => {
    const { currentActions } = this.state;
    const actionIndex = currentActions.findIndex((action) => action.label === label);
    currentActions[actionIndex].status = status;
    this.setState({ currentActions });
  };

  actionReadyForSave = (label, ready) => {
    const { currentActions } = this.state;
    currentActions[this.getCurrentActionIndex(label)].readyForSave = ready;
    this.setState({
      currentActions
    });
  };

  captureActionData = ({ label }) => {
    this[label].getFullfillmentData();
  };

  renderCompleteAction = ({ label, component }) => {
    const { components: { CheckoutActionComplete } } = this.props;
    const { currentActions } = this.state;
    const { capturedData } = currentActions[this.getCurrentActionIndex(label)];
    return (
      <CheckoutActionComplete
        content={component.renderComplete(capturedData)}
        onClickChangeButton={(e) => {
          this.toggleActionStatus(label, "active");
        }}
      />
    );
  };

  renderActiveAction = ({ label, component: Comp }) => {
    const { cart, components: { Button } } = this.props;
    return (
      <Fragment>
        <Comp
          fullfillmentGroup={cart.fullfillmentGroup}
          readyForSave={(ready) => {
            this.setState({ currentActions: { readyForSave: ready } });
          }}
          ref={(el) => {
            this[label] = el;
          }}
        />
        <FormActions>
          <Button
            actionType="secondary"
            isTextOnly
            isShortHeight
            onClick={() => this.toggleActionStatus(label, "complete")}
          >
            Cancel
          </Button>
          <Button actionType="important" isShortHeight onClick={() => this.captureActionData({ label })}>
            Save and continue
          </Button>
        </FormActions>
      </Fragment>
    );
  };

  renderAction = ({ label, component: Comp }) => {
    const { cart, components: { CheckoutAction, CheckoutActionIncomplete } } = this.props;
    const { currentActions } = this.state;
    const { status } = currentActions[this.getCurrentActionIndex(label)];
    console.log(status, Comp);
    return (
      <CheckoutAction
        status={status}
        label={label}
        stepNumber={this.getCurrentActionIndex(label) + 1}
        activeStepElement={this.renderActiveAction({ label, component: Comp })}
        completeStepElement={this.renderCompleteAction({ label, component: Comp })}
        incompleteStepElement={<CheckoutActionIncomplete />}
      />
    );
  };

  render() {
    const { actions } = this.props;
    return actions.map(this.renderAction);
  }
}

export default withComponents(CheckoutActions);
