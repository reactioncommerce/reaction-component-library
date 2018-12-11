import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withComponents } from "@reactioncommerce/components-context";
import styled from "styled-components";
import { addTypographyStyles, applyTheme, CustomPropTypes } from "../../../utils";

const Title = styled.h3`
  ${addTypographyStyles("FinalReviewCheckoutActionTitle", "subheadingTextBold")}
`;

// NOTE: We intentionally break from our convention of using separate border
// theme variables for each side here. Because various borders intersect, it
// could lead to strangeness to separate them.
const Summary = styled.div`
  border-color: ${applyTheme("FinalReviewCheckoutAction.borderColor")};
  border-style: solid;
  border-width: ${applyTheme("FinalReviewCheckoutAction.borderWidth")};
`;

const CartSummaryWrapper = styled.div`
  padding-bottom: ${applyTheme("FinalReviewCheckoutAction.summaryWrapperPaddingBottom")};
  padding-left: ${applyTheme("FinalReviewCheckoutAction.summaryWrapperPaddingLeft")};
  padding-right: ${applyTheme("FinalReviewCheckoutAction.summaryWrapperPaddingRight")};
  padding-top: ${applyTheme("FinalReviewCheckoutAction.summaryWrapperPaddingTop")};
`;

const Items = styled.div`
  border-bottom-color: ${applyTheme("FinalReviewCheckoutAction.borderColor")};
  border-bottom-style: solid;
  border-bottom-width: ${applyTheme("FinalReviewCheckoutAction.borderWidth")};
  padding-bottom: ${applyTheme("FinalReviewCheckoutAction.itemsWrapperPaddingBottom")};
  padding-left: ${applyTheme("FinalReviewCheckoutAction.itemsWrapperPaddingLeft")};
  padding-right: ${applyTheme("FinalReviewCheckoutAction.itemsWrapperPaddingRight")};
  padding-top: ${applyTheme("FinalReviewCheckoutAction.itemsWrapperPaddingTop")};
`;

class FinalReviewCheckoutAction extends Component {
  // Checkout review is the final step so it has no complete state
  static renderComplete = () => null;

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
       * Surcharges added to this cart
       */
      displaySurcharge: PropTypes.string,
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
     * If you've set up a components context using
     * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
     * (recommended), then this prop will come from there automatically. If you have not
     * set up a components context or you want to override one of the components in a
     * single spot, you can pass in the components prop directly.
     */
    components: PropTypes.shape({
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
     * Product URL path to be prepended before the slug
    */
    productURLPath: PropTypes.string,
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

  submit = () => {
    const { onSubmit } = this.props;

    onSubmit();
  }

  render() {
    const {
      checkoutSummary: {
        displayDiscount,
        displayShipping,
        displaySubtotal,
        displaySurcharge,
        displayTax,
        displayTotal,
        items
      },
      components: {
        CartItems,
        CartSummary
      },
      label,
      stepNumber,
      ...props
    } = this.props;

    return (
      <Fragment>
        <Title>
          {stepNumber}. {label}
        </Title>
        <Summary>
          <Items>
            <CartItems
              isReadOnly
              items={items}
              {...props}
            />
          </Items>
          <CartSummaryWrapper>
            <CartSummary
              isDense
              displayDiscount={displayDiscount}
              displayShipping={displayShipping}
              displaySubtotal={displaySubtotal}
              displaySurcharge={displaySurcharge}
              displayTax={displayTax}
              displayTotal={displayTotal}
            />
          </CartSummaryWrapper>
        </Summary>
      </Fragment>
    );
  }
}

export default withComponents(FinalReviewCheckoutAction);
