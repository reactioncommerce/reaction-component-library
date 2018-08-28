import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
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

class FulfillmentOptionsCheckoutAction extends Component {
  static propTypes = {
    /**
     * All available fulfillment option data
     */
    availableFulfillmentOptions: PropTypes.arrayOf(PropTypes.shape({
      fulfillmentMethod: {
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        displayName: PropTypes.string.isRequired
      },
      price: {
        amount: PropTypes.float,
        displayAmount: PropTypes.string.isRequired
      }
    })).isRequired,
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

  componentDidMount() {
    const { onReadyForSaveChange } = this.props;
    onReadyForSaveChange(false);
  }

  _fulfillmentForm = null;

  submit = () => {
    this._fulfillmentForm.submit();
  };

  handleSubmit = async (value) => {
    const { onSubmit } = this.props;
    const fulfillmentGroup = { fulfillmentGroup: { selectedFulfillmentOption: value } };
    await onSubmit(fulfillmentGroup);
  };

  handleChange = () => {
    const { onReadyForSaveChange } = this.props;
    onReadyForSaveChange(true);
  };

  mapFulfillmentOptions = (availableFulfillmentOptions) => availableFulfillmentOptions.map((option) => ({
    id: option.fulfillmentMethod._id,
    label: option.fulfillmentMethod.displayName,
    detail: option.price.displayAmount,
    value: option.fulfillmentMethod.name
  }));

  selectCheapest = () =>
    // stubbed for now
    "Standard"
    ;

  render() {
    const {
      components: { SelectableList },
      availableFulfillmentOptions,
      isSaving,
      label,
      stepNumber
    } = this.props;
    return (
      <Fragment>
        <Title>
          {stepNumber}. {label}
        </Title>
        {availableFulfillmentOptions.length ?
          <SelectableList
            options={this.mapFulfillmentOptions(this.props.availableFulfillmentOptions)}
            name="DefaultForm"
            value={this.selectCheapest()}
            isSaving={isSaving}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            isBordered
          />
          :
          <EmptyMessage>No fulfillment methods</EmptyMessage>
        }
      </Fragment>
    );
  }
}

const WrappedFullfillmentOptionsCheckoutAction = withComponents(FulfillmentOptionsCheckoutAction);

// eslint-disable-next-line
WrappedFullfillmentOptionsCheckoutAction.renderComplete = (value) => (
  <FulfillmentOption>
    {value.fulfillmentMethod.displayName} • {value.price.displayAmount}
  </FulfillmentOption>
);

export default WrappedFullfillmentOptionsCheckoutAction;
