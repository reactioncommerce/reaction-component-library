import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import isEqual from "lodash.isequal";
import { applyTheme, CustomPropTypes } from "../../../utils";

const Action = styled.div`
  border-bottom-color: ${applyTheme("CheckoutActions.borderBetweenColor")};
  border-bottom-style: solid;
  border-bottom-width: ${applyTheme("CheckoutActions.borderBetweenWidth")};
  border-left-color: ${applyTheme("CheckoutActions.borderLeftColor")};
  border-left-style: solid;
  border-left-width: ${applyTheme("CheckoutActions.borderLeftWidth")};
  border-right-color: ${applyTheme("CheckoutActions.borderRightColor")};
  border-right-style: solid;
  border-right-width: ${applyTheme("CheckoutActions.borderRightWidth")};
  border-top-color: ${applyTheme("CheckoutActions.borderBetweenColor")};
  border-top-style: solid;
  border-top-width: 0;
  padding-bottom: ${applyTheme("CheckoutActions.itemPaddingBottom")};
  padding-left: ${applyTheme("CheckoutActions.itemPaddingLeft")};
  padding-right: ${applyTheme("CheckoutActions.itemPaddingRight")};
  padding-top: ${applyTheme("CheckoutActions.itemPaddingTop")};

  &:first-of-type {
    border-top-width: ${applyTheme("CheckoutActions.borderBetweenWidth")};
  }
  &:last-of-type {
    border-bottom-width: 0;
  }
`;

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: ${applyTheme("CheckoutActions.itemPaddingBottom")};
  padding-left: ${applyTheme("CheckoutActions.itemPaddingLeft")};
  padding-right: ${applyTheme("CheckoutActions.itemPaddingRight")};
  padding-top: ${applyTheme("CheckoutActions.itemPaddingTop")};

  > div:last-of-type {
    margin-left: ${applyTheme("CheckoutActions.spaceBetweenActiveActionButtons")};
  }
`;

const PlaceOrderButtonContainer = styled.div`
  margin: 0 auto !important;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: ${applyTheme("CheckoutActions.spaceAbovePlaceOrderButton")};
  width: ${applyTheme("CheckoutActions.placeOrderButtonWidth")};
`;

class CheckoutActions extends Component {
  static propTypes = {
    /**
     * Checkout actions is an array of action objects, the order of this array
     * will be the render order.
     */
    actions: PropTypes.arrayOf(PropTypes.shape({
      /**
         * Action id
         */
      id: PropTypes.string.isRequired,
      /**
         * Action label when active
         */
      activeLabel: PropTypes.string.isRequired,
      /**
         * The checkout action's active  component
         */
      component: CustomPropTypes.component.isRequired,
      /**
         * Action label when completed
         */
      completeLabel: PropTypes.string.isRequired,
      /**
         * Action label when incomplete
         */
      incompleteLabel: PropTypes.string.isRequired,
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
     * The text for the "Cancel" button text.
     */
    cancelButtonText: PropTypes.string,
    /**
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
     */
    className: PropTypes.string,
    /**
     * If you've set up a components context using
     * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
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
       * Pass either the Reaction CheckoutActionIncomplete component or your own component that
       * accepts compatible props.
       */
      CheckoutActionIncomplete: CustomPropTypes.component.isRequired
    }).isRequired,
    /**
     * The text for the "Place your order" button text when `isSaving` equals `false`.
     */
    isNotSavingButtonText: PropTypes.string,
    /**
     * The text for the "Placing your order..." button text when `isSaving` equals `true`.
     */
    isSavingButtonText: PropTypes.string,
    /**
     * The text for the "Save and continue" button text.
     */
    saveButtonText: PropTypes.string
  };

  static defaultProps = {
    cancelButtonText: "Cancel",
    isNotSavingButtonText: "Place your order",
    isSavingButtonText: "Placing your order...",
    saveButtonText: "Save and continue"
  };

  static getDerivedStateFromProps(props, state) {
    if (!isEqual(props.actions, state.previousActionsProp)) {
      const { currentActions = [] } = state;
      const actions = props.actions.map(({ id }) => {
        const currentAction = currentActions.find((action) => action.id === id);
        const { isActive = false, readyForSave = false, isSaving = false } = currentAction || {};
        return {
          id,
          readyForSave,
          isSaving,
          isActive
        };
      });
      return {
        currentActions: actions,
        previousActionsProp: props.actions
      };
    }

    return null;
  }

  state = {};

  _refs = {};

  getCurrentActionIndex(id) {
    const { currentActions } = this.state;
    return currentActions.findIndex((action) => action.id === id);
  }

  getCurrentActionByID(id) {
    const { currentActions } = this.state;
    return currentActions[this.getCurrentActionIndex(id)];
  }

  setStateForAction(id, stateChanges) {
    const { currentActions } = this.state;

    // We are being careful to create a new array with new objects here to prevent
    // strange errors due to unintentional mutation of current state.
    const newCurrentActions = currentActions.map((currentAction) => {
      const updates = currentAction.id === id ? stateChanges : {};
      return {
        ...currentAction,
        ...updates
      };
    });

    this.setState({
      currentActions: newCurrentActions
    });
  }

  handleActionSubmit = async (id, onSubmit, actionValue) => {
    this.setStateForAction(id, { isActive: false, isSaving: true });

    await onSubmit(actionValue);

    this.setStateForAction(id, { isSaving: false });
  };

  actionSubmit = (label) => {
    this._refs[label].submit();
  };

  determineActiveActions = () => {
    const { actions } = this.props;
    const { currentActions } = this.state;

    const currentActiveActions = actions.reduce((activeList, { id, status }) => {
      const currentAction = currentActions.find((action) => action.id === id);
      let { isActive } = currentAction;

      if (!activeList.length && status === "incomplete") {
        isActive = true;
      }

      if (isActive) {
        activeList.push(id);
      }

      return activeList;
    }, []);

    return currentActiveActions;
  };

  renderCompleteAction = ({ id, status, completeLabel, component, props }) => {
    const { components: { CheckoutActionComplete } } = this.props;
    return status === "complete" ? (
      <CheckoutActionComplete
        key={id}
        label={completeLabel}
        content={component.renderComplete(props)}
        onClickChangeButton={() => {
          this.setStateForAction(id, { isActive: true });
        }}
      />
    ) : (
      <span />
    );
  };

  renderFormActions = (action) => {
    const { actions, components: { Button }, cancelButtonText, saveButtonText, isSavingButtonText, isNotSavingButtonText } = this.props;
    const { readyForSave, isSaving } = this.getCurrentActionByID(action.id);
    const lastStep = actions.length - 1 === this.getCurrentActionIndex(action.id);

    const saveAndContinueButtons = (
      <React.Fragment>
        {(action.props.fulfillmentGroup && action.props.fulfillmentGroup.data.shippingAddress) || action.id !== "1" ? (
          <Button
            actionType="secondary"
            onClick={() => {
              this.setStateForAction(action.id, { isActive: false });
            }}
          >
            {cancelButtonText}
          </Button>
        ) : (
          ""
        )}
        <Button onClick={() => this.actionSubmit(action.id)} isDisabled={!readyForSave} isWaiting={isSaving}>
          {saveButtonText}
        </Button>
      </React.Fragment>
    );

    const placeOrderButton = (
      <PlaceOrderButtonContainer>
        <Button onClick={() => this.actionSubmit(action.id)} actionType="important" isWaiting={isSaving} isFullWidth>
          {isSaving ? isSavingButtonText : isNotSavingButtonText}
        </Button>
      </PlaceOrderButtonContainer>
    );

    return <FormActions>{lastStep ? placeOrderButton : saveAndContinueButtons}</FormActions>;
  };

  renderActiveAction = ({ component: Comp, ...action }) => {
    const { isSaving } = this.getCurrentActionByID(action.id);
    return (
      <Fragment>
        <Comp
          {...action.props}
          onReadyForSaveChange={(ready) => {
            this.setStateForAction(action.id, { readyForSave: ready });
          }}
          isSaving={isSaving}
          ref={(el) => {
            this._refs[action.id] = el;
          }}
          label={action.activeLabel}
          stepNumber={this.getCurrentActionIndex(action.id) + 1}
          onSubmit={(value) => this.handleActionSubmit(action.id, action.onSubmit, value)}
        />
        {this.renderFormActions(action)}
      </Fragment>
    );
  };

  renderAction = (action, currentActiveActions) => {
    const { components: { CheckoutAction, CheckoutActionIncomplete } } = this.props;
    const isActive = currentActiveActions.find((_id) => _id === action.id);
    const actionStatus = isActive ? "active" : action.status;
    const { activeLabel, completeLabel, incompleteLabel } = action;

    return (
      <Action key={action.id}>
        <CheckoutAction
          activeLabel={activeLabel}
          activeStepElement={this.renderActiveAction(action)}
          completeLabel={completeLabel}
          completeStepElement={this.renderCompleteAction(action)}
          incompleteLabel={incompleteLabel}
          incompleteStepElement={<CheckoutActionIncomplete />}
          status={actionStatus}
          stepNumber={this.getCurrentActionIndex(action.id) + 1}
        />
      </Action>
    );
  };

  render() {
    const { className, actions } = this.props;
    const activeActions = this.determineActiveActions();

    return <div className={className}>{actions.map((action) => this.renderAction(action, activeActions))}</div>;
  }
}

export default withComponents(CheckoutActions);
