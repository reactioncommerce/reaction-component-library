import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import isEqual from "lodash.isequal";
import { applyTheme, CustomPropTypes } from "../../../utils";

const Action = styled.div`
  border-bottom: solid 1px ${applyTheme("color_black10")};
  padding: 1rem 0;

  &:first-of-type {
    border-top: solid 1px ${applyTheme("color_black10")};
  }
`;

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 0;

  > div:last-of-type {
    margin-left: 1rem;
  }
`;

class CheckoutActions extends Component {
  static propTypes = {
    /**
     * Checkout actions is an array of action objects, the order of this array
     * will be the render order.
     */
    actions: PropTypes.arrayOf(PropTypes.shape({
      /**
         * Checkout action label
         */
      label: PropTypes.string.isRequired,
      /**
         * The checkout action's active  component
         */
      component: CustomPropTypes.component.isRequired,
      /**
         * Callback function called after the active action submits.
         */
      onSubmit: PropTypes.func.isRequired,
      /**
         * Cart checkout data that the action needs to display.
         */
      props: PropTypes.object
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

  static getDerivedStateFromProps(props, state) {
    if (!isEqual(props.actions, state.previousActionsProp)) {
      const { currentActions = [] } = state;
      const actions = props.actions.map(({ label }) => {
        const currentAction = currentActions.find((action) => action.label === label) || {};
        if (currentAction.readyForSave === undefined) {
          const readyForSave = undefined;
        } else {
          debugger;
        }
        const { isActive = false, readyForSave = false, isSaving = false } = currentAction;
        return {
          label,
          readyForSave,
          isSaving,
          isActive
        };
      });
      console.log(actions);
      return {
        currentActions: actions,
        previousActionsProp: props.actions
      };
    }

    return null;
  }

  state = {};

  getCurrentActionIndex(label) {
    const { currentActions } = this.state;
    return currentActions.findIndex((action) => action.label === label);
  }

  getCurrentActionByLabel(label) {
    const { currentActions } = this.state;
    return currentActions[this.getCurrentActionIndex(label)];
  }

  setActionActive = (label, isActive = true) => {
    const { currentActions } = this.state;

    const actionIndex = currentActions.findIndex((action) => action.label === label);
    currentActions[actionIndex].isActive = isActive;
    this.setState({ currentActions });
  };

  actionReadyForSave = (label, ready) => {
    const { currentActions } = this.state;
    currentActions[this.getCurrentActionIndex(label)].readyForSave = ready;
    this.setState({
      currentActions
    });
  };

  handleActionSubmit = async (label, onSubmit, actionValue) => {
    const { currentActions } = this.state;

    currentActions[this.getCurrentActionIndex(label)].isSaving = true;
    currentActions[this.getCurrentActionIndex(label)].isActive = false;
    this.setState({
      currentActions
    });

    await onSubmit(actionValue);
    currentActions[this.getCurrentActionIndex(label)].isSaving = false;

    this.setState({
      currentActions
    });
  };

  actionSubmit = (label) => {
    this[label].submit();
  };

  determineActiveActions = () => {
    const { actions } = this.props;
    const { currentActions } = this.state;

    const currentActiveActions = actions.reduce((activeList, { label, status }) => {
      const currentAction = currentActions.find((action) => action.label === label);
      let { isActive } = currentAction;

      if (!activeList.length && status === "incomplete") {
        isActive = true;
      }

      if (isActive) {
        activeList.push(label);
      }

      return activeList;
    }, []);

    return currentActiveActions;
  }

  renderCompleteAction = ({ label, status, component, props }) => {
    const { components: { CheckoutActionComplete } } = this.props;
    return status === "complete" ? (
      <CheckoutActionComplete
        key={label}
        content={component.renderComplete(props)}
        onClickChangeButton={() => {
          this.setActionActive(label);
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
          {...action.props}
          onReadyForSaveChange={(ready) => {
            this.actionReadyForSave(action.label, ready);
          }}
          isSaving={isSaving}
          ref={(el) => {
            this[action.label] = el;
          }}
          label={action.label}
          stepNumber={this.getCurrentActionIndex(action.label) + 1}
          onSubmit={(value) => this.handleActionSubmit(action.label, action.onSubmit, value)}
        />
        <FormActions>
          {action.props ? (
            <Button actionType="secondary" onClick={() => this.setActionActive(action.label, false)}>
              Cancel
            </Button>
          ) : (
              ""
            )}
          <Button onClick={() => this.actionSubmit(action.label)} isDisabled={!readyForSave} isWaiting={isSaving}>
            Save and continue
          </Button>
        </FormActions>
      </Fragment>
    );
  };

  renderAction = (action, currentActiveActions) => {
    const { components: { CheckoutAction, CheckoutActionIncomplete } } = this.props;

    const isActive = currentActiveActions.find((label) => label === action.label);
    const actionStatus = isActive ? "active" : action.status;

    return (
      <Action key={action.label}>
        <CheckoutAction
          status={actionStatus}
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
    const activeActions = this.determineActiveActions();

    return actions.map((action) => (this.renderAction(action, activeActions)));
  }
}

export default withComponents(CheckoutActions);
