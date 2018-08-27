import React, { Component } from "react";
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

class FulfillmentOptionsCheckoutAction extends Component {
  static propTypes = {
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
      SelectableList: CustomPropTypes.component.isRequired
    }).isRequired,
    /**
     * Checkout data needed for form
     */
    fulfillmentOptions: PropTypes.arrayOf(PropTypes.shape({
      /**
       * The item ID
       */
      id: PropTypes.string.isRequired,
      /**
       * Label: Name of method
       */
      label: PropTypes.string.isRequired,
      /**
       * Detail: displayAmount
       */
      detail: PropTypes.string.isRequired,
      /**
       * Value of the input that is submitted from the form
       */
      value: PropTypes.any.isRequired
    })).isRequired,
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

  render() {
    const {
      components: { SelectableList },
      fulfillmentOptions,
      label,
      stepNumber
    } = this.props;
    return (
      <div>
        <Title>
          {stepNumber}. {label}
        </Title>
        <SelectableList
          options={fulfillmentOptions}
          name="DefaultForm"
          value="Standard"
          isBordered
        />
      </div>
    );
  }
}

export default withComponents(FulfillmentOptionsCheckoutAction);
