import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Form } from "reacto-form";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { addTypographyStyles, CustomPropTypes } from "../../../utils";

const Title = styled.h3`
  ${addTypographyStyles("FulfillmentOptionsCheckoutActionTitle", "subheadingTextBold")}
`;

const FulfillmentOption = styled.span`
  ${addTypographyStyles("FulfillmentOptionsCheckoutActionSelectedOption", "bodyText")}
`;

const EmptyMessage = styled.span`
  ${addTypographyStyles("FulfillmentOptionsCheckoutActionEmptyMessage", "bodyText")}
`;

const FulfillmentOptionShape = PropTypes.shape({
  fulfillmentMethod: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired
  }),
  price: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    displayAmount: PropTypes.string.isRequired
  })
});

class FulfillmentOptionsCheckoutAction extends Component {
  static renderComplete({ fulfillmentGroup: { selectedFulfillmentOption } }) {
    return (
      <FulfillmentOption>
        {selectedFulfillmentOption.fulfillmentMethod.displayName} • {selectedFulfillmentOption.price.displayAmount}
      </FulfillmentOption>
    );
  }

  static propTypes = {
    /**
     * Alert object provides alert into to InlineAlert.
     */
    alert: CustomPropTypes.alert,
    /**
     * If you've set up a components context using
     * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
     * (recommended), then this prop will come from there automatically. If you have not
     * set up a components context or you want to override one of the components in a
     * single spot, you can pass in the components prop directly.
     */
    components: PropTypes.shape({
      /**
       * Pass either the Reaction [`SelectableList`](#!/SelectableList) component or your own component that
       * accepts compatible props.
       */
      SelectableList: CustomPropTypes.component.isRequired,
      /**
       * Pass either the Reaction InlineAlert component or your own component that
       * accepts compatible props.
       */
      InlineAlert: CustomPropTypes.component.isRequired
    }).isRequired,
    /**
     * The text for the "No fulfillment methods" label text.
     */
    emptyMessageLabelText: PropTypes.string,
    /**
     * Checkout data needed for form
     */
    fulfillmentGroup: PropTypes.shape({
      availableFulfillmentOptions: PropTypes.arrayOf(FulfillmentOptionShape).isRequired,
      selectedFulfillmentOption: FulfillmentOptionShape
    }).isRequired,
    /**
     * Is the fulfillment option being saved
     */
    isSaving: PropTypes.bool,
    /**
     * Label of workflow step
     */
    label: PropTypes.string.isRequired,
    /**
     * When action is ready for save call this prop method to
     * enable the save button with in the `CheckoutActions`
     */
    onReadyForSaveChange: PropTypes.func,
    /**
     * When an action form passes validation and submits
     * the value will be passed to this callback
     * this function needs to return a Promise
     * if being used with reacto-form
     */
    onSubmit: PropTypes.func,
    /**
     * Checkout process step number
     */
    stepNumber: PropTypes.number.isRequired
  };

  static defaultProps = {
    isSaving: false,
    onReadyForSaveChange() { },
    emptyMessageLabelText: "No fulfillment methods"
  };

  state = {};

  _fulfillmentOptionForm = null;

  getValue = () => this._fulfillmentOptionForm.getValue();

  submit = () => {
    this._fulfillmentOptionForm.submit();
  };

  handleSubmit = async ({ selectedFulfillmentOptionId }) => {
    const { fulfillmentGroup: { availableFulfillmentOptions } } = this.props;
    // We get the ID, but we want to pass the whole fulfillment option to onSubmit
    const selectedFulfillmentOption = availableFulfillmentOptions.find((option) => option.fulfillmentMethod._id === selectedFulfillmentOptionId);

    const { onSubmit } = this.props;
    await onSubmit({ selectedFulfillmentOption });
  };

  handleChange = (selectedValue) => {
    const { onReadyForSaveChange } = this.props;
    onReadyForSaveChange(!!selectedValue);
  };

  mapFulfillmentOptions = (availableFulfillmentOptions) => availableFulfillmentOptions.map((option) => ({
    id: option.fulfillmentMethod._id,
    label: option.fulfillmentMethod.displayName,
    detail: option.price.displayAmount,
    value: option.fulfillmentMethod._id
  }));

  get selectedOptionId() {
    const { fulfillmentGroup: { selectedFulfillmentOption, availableFulfillmentOptions } } = this.props;

    if (selectedFulfillmentOption) {
      return selectedFulfillmentOption.fulfillmentMethod._id;
    }

    // If a selection has not been made yet, default to cheapest
    const cheapestOption = availableFulfillmentOptions.reduce((cheapest, option) => {
      if (!cheapest || option.price.amount < cheapest.price.amount) {
        return option;
      }
      return cheapest;
    }, null);

    return cheapestOption.fulfillmentMethod._id;
  }

  render() {
    const {
      alert,
      components: { InlineAlert, SelectableList },
      isSaving,
      label,
      fulfillmentGroup: {
        availableFulfillmentOptions
      },
      stepNumber,
      emptyMessageLabelText
    } = this.props;

    return (
      <Fragment>
        <Title>
          {stepNumber}. {label}
        </Title>
        {alert ? <InlineAlert {...alert} /> : ""}
        {availableFulfillmentOptions && availableFulfillmentOptions.length ?
          <Form
            ref={(formEl) => {
              this._fulfillmentOptionForm = formEl;
            }}
            onSubmit={this.handleSubmit}
            value={{ selectedFulfillmentOptionId: this.selectedOptionId }}
          >
            <SelectableList
              isBordered
              isSaving={isSaving}
              name="selectedFulfillmentOptionId"
              onChange={this.handleChange}
              options={this.mapFulfillmentOptions(availableFulfillmentOptions)}
            />
          </Form>
          :
          <EmptyMessage>{emptyMessageLabelText}</EmptyMessage>
        }
      </Fragment>
    );
  }
}

export default withComponents(FulfillmentOptionsCheckoutAction);
