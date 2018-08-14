import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, CustomPropTypes } from "../../../utils";

const Action = styled.div`
  border-bottom: solid 1px ${applyTheme("color_black10")};
  padding: 1rem 0;

  &:first-of-type {
    border-top: solid 1px ${applyTheme("color_black10")};
  }
`;

const FormActions = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`;

class CheckoutActions extends Component {
  static propTypes = {
    actions: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      component: CustomPropTypes.component.isRequired
    })),
    /**
     * Cart object from GQL
     */
    cart: PropTypes.object,
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
      fulfillmentGroup: {
        data: {
          shippingAddress: null
        }
      }
    }
  };

  static initActionStatus(i) {
    if (i === 0) {
      if (this.props.cart.fulfillmentGroup.data.shippingAddress) {
        return "complete";
      }
      return "active";
    }
    return "incomplete";
  }

  state = {
    currentActions: this.props.actions.map(({ label }, i) => ({
      label,
      status: this.initActionStatus(i),
      readyForSave: false,
      capturedData: null
    }))
  };

  getCurrentActionIndex(label) {
    const { currentActions } = this.state;
    return currentActions.findIndex((action) => action.label === label);
  }

  getCurrentActionByLabel(label) {
    const { currentActions } = this.state;
    return currentActions[this.getCurrentActionIndex(label)];
  }

  getActionData(label) {
    // TODO: this actionData var is tightly scoped to the shipping address action,
    // we'll need to figure out how to handle this a little better as we add more action types
    const { cart } = this.props;
    const { capturedData } = this.getCurrentActionByLabel(label);
    return cart.fulfillmentGroup.data.shippingAddress
      ? cart.fulfillmentGroup
      : { data: { shippingAddress: capturedData } };
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

  captureActionData = async ({ label }) => {
    const actionData = await this[label].getFullfillmentData();
    const { currentActions } = this.state;
    currentActions[this.getCurrentActionIndex(label)].capturedData = actionData;
    currentActions[this.getCurrentActionIndex(label)].status = "complete";
    this.setState({
      currentActions
    });
  };

  renderCompleteAction = ({ label, component }) => {
    const { components: { CheckoutActionComplete } } = this.props;
    const { data } = this.getActionData(label);
    return data ? (
      <CheckoutActionComplete
        content={component.renderComplete(data)}
        onClickChangeButton={() => {
          this.toggleActionStatus(label, "active");
        }}
      />
    ) : (
      ""
    );
  };

  renderActiveAction = ({ label, component: Comp }) => {
    const { components: { Button } } = this.props;
    const { readyForSave } = this.getCurrentActionByLabel(label);
    const actionData = this.getActionData(label);
    return (
      <Fragment>
        <Comp
          fulfillmentGroup={actionData}
          onReadyForSaveChange={(ready) => {
            this.actionReadyForSave(label, ready);
          }}
          ref={(el) => {
            this[label] = el;
          }}
        />
        <FormActions>
          {actionData.data.shippingAddress ? (
            <Button
              actionType="secondary"
              isTextOnly
              isShortHeight
              onClick={() => this.toggleActionStatus(label, "complete")}
            >
              Cancel
            </Button>
          ) : (
            ""
          )}
          <Button
            actionType="important"
            isShortHeight
            onClick={() => this.captureActionData({ label })}
            isDisabled={!readyForSave}
          >
            Save and continue
          </Button>
        </FormActions>
      </Fragment>
    );
  };

  renderAction = ({ label, component: Comp }) => {
    const { components: { CheckoutAction, CheckoutActionIncomplete } } = this.props;
    const { currentActions } = this.state;
    const { status } = currentActions[this.getCurrentActionIndex(label)];
    return (
      <Action>
        <CheckoutAction
          key={label}
          status={status}
          label={label}
          stepNumber={this.getCurrentActionIndex(label) + 1}
          activeStepElement={this.renderActiveAction({ label, component: Comp })}
          completeStepElement={this.renderCompleteAction({ label, component: Comp })}
          incompleteStepElement={<CheckoutActionIncomplete />}
        />
      </Action>
    );
  };

  render() {
    const { actions } = this.props;
    return actions.map(this.renderAction);
  }
}

export default withComponents(CheckoutActions);
