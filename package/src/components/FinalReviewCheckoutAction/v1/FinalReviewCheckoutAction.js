import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withComponents } from "@reactioncommerce/components-context";
import styled from "styled-components";
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

const Summary = styled.div`
  border: 1px solid ${applyTheme("color_black10")};
  border-bottom: none;

  table td {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

class FinalReviewCheckoutAction extends Component {
  static propTypes = {
    /**
     * Cart data
     */
    checkoutSummary: PropTypes.shape({
      /**
       * Discount amount associated with promo code
       */
      displayDiscount: PropTypes.string,
      /**
       * Shipping cost
       */
      displayShipping: PropTypes.string,
      /**
       * Subtotal amount
       */
      displaySubtotal: PropTypes.string.isRequired,
      /**
       * Calculated tax amount
       */
      displayTax: PropTypes.string,
      /**
       * Total amount
       */
      displayTotal: PropTypes.string.isRequired,
      /**
       * If a product qualifies for free shipping, display "FREE" for shipping method
       */
      isFreeShipping: PropTypes.bool,
      /**
       * CartItem data. This is passed to CartItems, which may require some props.
       */
      items: PropTypes.arrayOf(PropTypes.object).isRequired
    }),
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
       * An element to show as the cart checkout button. If this isn't provided,
       * a button will be rendered using Button component.
       */
      cartCheckoutButton: PropTypes.node,
      /**
       * Pass either the Reaction CartItems component or your own component that
       * accepts compatible props.
       */
      CartItems: CustomPropTypes.component.isRequired,
      /**
       * Pass either the Reaction CartSummary component or your own component that
       * accepts compatible props.
       */
      CartSummary: CustomPropTypes.component.isRequired
    }),
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
     * this function.
     */
    onSubmit: PropTypes.func,
    /**
     * Checkout process step number
     */
    stepNumber: PropTypes.number.isRequired
  };

  static defaultProps = {
    onReadyForSaveChange() { }
  };

  componentDidMount() {
    const { onReadyForSaveChange } = this.props;
    onReadyForSaveChange(true);
  }

  render() {
    const {
      checkoutSummary: {
        displayDiscount,
        displayShipping,
        displaySubtotal,
        displayTax,
        displayTotal,
        items
      },
      components: {
        CartItems,
        CartSummary
      },
      label,
      stepNumber
    } = this.props;

    return (
      <Fragment>
        <Title>
          {stepNumber}. {label}
        </Title>
        <Summary>
          <CartItems
            isReadOnly
            items={items}
          />
          <CartSummary
            isDense
            displayDiscount={displayDiscount}
            displayShipping={displayShipping}
            displaySubtotal={displaySubtotal}
            displayTax={displayTax}
            displayTotal={displayTotal}
          />
        </Summary>
      </Fragment>
    );
  }
}

const WrappedFinalReviewCheckoutAction = withComponents(FinalReviewCheckoutAction);

// Checkout review is the final step so it has no complete state
// eslint-disable-next-line
WrappedFinalReviewCheckoutAction.renderComplete = () => null

export default WrappedFinalReviewCheckoutAction;
