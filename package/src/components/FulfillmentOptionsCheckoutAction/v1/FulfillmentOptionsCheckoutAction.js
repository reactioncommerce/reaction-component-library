import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Form } from "reacto-form";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, CustomPropTypes } from "../../../utils";

const Title = styled.h3`
  font-family: ${applyTheme("font_family")};
  font-size: ${applyTheme("font_size_h3")};
  font-weight: ${applyTheme("font_weight_bold")};
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: 0.4px;
`;

const FulfillmentOption = styled.span`
  font-family: ${applyTheme("font_family")};
  font-style: normal;
`;

const EmptyMessage = styled.span`
  font-family: ${applyTheme("font_family")};
  font-style: normal;
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
  static propTypes = {
    /**
     * If you've set up a components context using [`@reactioncommerce/components-context`](https://github.com/reactioncommerce/components-context)
     * (recommended), then this prop will come from there automatically. If you have not
     * set up a components context or you want to override one of the components in a
     * single spot, you can pass in the components prop directly.
     */
    components: PropTypes.shape({
      /**
       * Pass either the Reaction [`SelectableList`](#!/SelectableList) component or your own component that
       * accepts compatible props.
       */
      SelectableList: CustomPropTypes.component.isRequired
    }).isRequired,
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
    onReadyForSaveChange() { }
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
    if (availableFulfillmentOptions && availableFulfillmentOptions.length > 0) {
      return availableFulfillmentOptions.sort((itemA, itemB) => itemA.price.amount - itemB.price.amount)[0].fulfillmentMethod._id;
    }

    return null;
  }

  render() {
    const {
      components: { SelectableList },
      isSaving,
      label,
      fulfillmentGroup: {
        availableFulfillmentOptions
      },
      stepNumber
    } = this.props;

    return (
      <Fragment>
        <Title>
          {stepNumber}. {label}
        </Title>
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
          <EmptyMessage>No fulfillment methods</EmptyMessage>
        }
      </Fragment>
    );
  }
}

const WrappedFullfillmentOptionsCheckoutAction = withComponents(FulfillmentOptionsCheckoutAction);

// eslint-disable-next-line
WrappedFullfillmentOptionsCheckoutAction.renderComplete = ({ fulfillmentGroup: { selectedFulfillmentOption } }) => {
  return (
    <FulfillmentOption>
      {selectedFulfillmentOption.fulfillmentMethod.displayName} • {selectedFulfillmentOption.price.displayAmount}
    </FulfillmentOption>
  )
};

export default WrappedFullfillmentOptionsCheckoutAction;
