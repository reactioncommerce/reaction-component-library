import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Form } from "reacto-form";
import uniqueId from "lodash.uniqueid";
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
      data: PropTypes.shape({
        selectedFulfillmentOption: PropTypes.object,
        availableFulfillmentOptions: PropTypes.arrayOf(PropTypes.shape({
          fulfillmentMethod: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            displayName: PropTypes.string.isRequired
          }),
          price: PropTypes.shape({
            amount: PropTypes.number.isRequired,
            displayAmount: PropTypes.string.isRequired
          })
        })).isRequired
      })
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
    fulfillmentGroup: {
      data: {
        selectedFulfillmentOption: {}
      }
    }
  };

  state = {};

  componentDidMount() {
    const { onReadyForSaveChange } = this.props;
    onReadyForSaveChange(false);
  }

  _fulfillmentOptionForm = null;

  getValue = () => this._fulfillmentOptionForm.getValue();

  submit = () => {
    this._fulfillmentOptionForm.submit();
  };

  handleSubmit = async (value) => {
    const { onSubmit } = this.props;
    await onSubmit(value);
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

  selectedOptiononDefault = () => {
    const { fulfillmentGroup: { data: { selectedFulfillmentOption, availableFulfillmentOptions } } } = this.props;
    let selectedOption = "";
    if (selectedFulfillmentOption) {
      selectedOption = selectedFulfillmentOption.fulfillmentMethod.name;
    } else if (availableFulfillmentOptions) {
      // stubbed out sorting the cheapest
      // selecting the first option for now:
      selectedOption = availableFulfillmentOptions[0].fulfillmentMethod.name;
    } else {
      selectedOption = "";
    }
    return {
      selectedFulfillmentOption: selectedOption
    };
  };

  render() {
    const {
      components: { SelectableList },
      isSaving,
      label,
      fulfillmentGroup: {
        data: {
          availableFulfillmentOptions
        }
      },
      stepNumber
    } = this.props;
    const uniqueInstanceIdentifier = uniqueId("selectedFulfillmentMethod_");
    const name = `selectedFulfillmentMethod_${uniqueInstanceIdentifier}`;
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
            value={this.selectedOptiononDefault()}
          >
            <SelectableList
              isBordered
              isSaving={isSaving}
              // name="selectedFulfillmentMethod"
              name={name}
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
WrappedFullfillmentOptionsCheckoutAction.renderComplete = ({ fulfillmentGroup: { data: { selectedFulfillmentOption } } }) => {
  return (
    <FulfillmentOption>
      {selectedFulfillmentOption.fulfillmentMethod.displayName} • {selectedFulfillmentOption.price.displayAmount}
    </FulfillmentOption>
  );
};

export default WrappedFullfillmentOptionsCheckoutAction;
