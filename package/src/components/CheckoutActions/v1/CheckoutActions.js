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
      component: CustomPropTypes.component.isRequired,
      props: PropTypes.shape({
        cartData: PropTypes.object,
        cartMutation: PropTypes.func
      })
    })),
    /**
     * If you've set up a components context using @reactioncommerce/components-context
     * (recommended), then this prop will come from there automatically. If you have not
     * set up a components context or you want to override one of the components in a
     * single spot, you can pass in the components prop directly.
     */
    components: PropTypes.shape({
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

  static defaultProps = {};

  state = {
    currentActions: this.props.actions.map(({ label, props }, i) => ({
      label,
      // eslint-disable-next-line
      status: props.cartData.data ? "complete" : i === 0 ? "active" : "incomplete",
      readyForSave: false,
      isSaving: false,
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

  captureActionData = async ({ label, props: { cartMutation } }) => {
    const actionData = await this[label].getFullfillmentData();
    const { currentActions } = this.state;
    currentActions[this.getCurrentActionIndex(label)].isSaving = true;
    this.setState({
      currentActions
    });

    cartMutation(actionData).then(() => {
      currentActions[this.getCurrentActionIndex(label)].isSaving = false;
      currentActions[this.getCurrentActionIndex(label)].status = "complete";
      this.setState({
        currentActions
      });
    });
  };

  renderCompleteAction = ({ label, component, props: { cartData } }) => {
    const { components: { CheckoutActionComplete } } = this.props;
    return cartData.data ? (
      <CheckoutActionComplete
        key={label}
        content={component.renderComplete(cartData.data)}
        onClickChangeButton={() => {
          this.toggleActionStatus(label, "active");
        }}
      />
    ) : (
      <span />
    );
  };

  renderActiveAction = ({ component: Comp, ...action }) => {
    const { components: { Button } } = this.props;
    const { readyForSave, isSaving } = this.getCurrentActionByLabel(action.label);

    return (
      <Fragment>
        <Comp
          value={action.props.cartData.data}
          onReadyForSaveChange={(ready) => {
            this.actionReadyForSave(action.label, ready);
          }}
          isSaving={isSaving}
          ref={(el) => {
            this[action.label] = el;
          }}
        />
        <FormActions>
          {action.props.cartData.data ? (
            <Button
              actionType="secondary"
              isTextOnly
              isShortHeight
              onClick={() => this.toggleActionStatus(action.label, "complete")}
            >
              Cancel
            </Button>
          ) : (
            ""
          )}
          <Button
            actionType="important"
            isShortHeight
            onClick={() => this.captureActionData(action)}
            isDisabled={!readyForSave}
          >
            Save and continue
          </Button>
        </FormActions>
      </Fragment>
    );
  };

  renderAction = (action) => {
    const { components: { CheckoutAction, CheckoutActionIncomplete } } = this.props;
    const { status } = this.getCurrentActionByLabel(action.label);

    return (
      <Action key={action.label}>
        <CheckoutAction
          status={status}
          label={action.label}
          stepNumber={this.getCurrentActionIndex(action.label) + 1}
          activeStepElement={this.renderActiveAction(action)}
          completeStepElement={this.renderCompleteAction(action)}
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
