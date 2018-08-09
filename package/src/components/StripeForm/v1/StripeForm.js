import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  injectStripe
} from "react-stripe-elements";
import styled from "styled-components";
import { applyTheme, withStripeElements } from "../../../utils";

const Field = styled.div`
  background-color: ${applyTheme("color_black02")};
  padding: 10px 12px 10px 12px;
  border-radius: 2px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.12);
  margin-bottom: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
`;

const createOptions = () => ({
  style: {
    base: {
      fontSize: applyTheme("font_size_default")(),
      color: applyTheme("color_black55")(),
      fontFamily: applyTheme("font_family")()
    }
  }
});

class StripeForm extends Component {
  static propTypes = {
    /**
     * Card's CVV text placeholder
     */
    cardCVCPlaceholder: PropTypes.string,
    /**
     * Card's expiry date text placeholder
     */
    cardExpiryPlaceholder: PropTypes.string,
    /**
     * Card's Number text placeholder
     */
    cardNumberPlaceholder: PropTypes.string,
    /**
     * Card's billing postal code text placeholder
     */
    postalCodePlaceholder: PropTypes.string,
    /**
     * The stripe object which provides methods for tokenizing data, it's
     * provided by the StripeProvider component.
     * See https://stripe.com/docs/stripe-js/reference#the-stripe-object for more details.
     */
    stripe: PropTypes.object.isRequired,
    /**
     * Used to pass a reference of the stripe object to the containing component.
     * The containing component will handle tokenizing payment data and sending data to server.
     */
    stripeRef: PropTypes.func.isRequired
  };

  static defaultProps = {
    cardNumberPlaceholder: "Card Number",
    cardExpiryPlaceholder: "Expiry Date MM/YY",
    cardCVCPlaceholder: "CVV",
    postalCodePlaceholder: "Postal Code",
    stripeRef: () => true
  };

  componentDidUpdate = () => {
    if (this.props.stripe) {
      this.props.stripeRef(this.props.stripe);
    }
  }

  render() {
    const {
      cardNumberPlaceholder,
      cardExpiryPlaceholder,
      cardCVCPlaceholder,
      postalCodePlaceholder
    } = this.props;

    const commonStyles = createOptions();

    return (
      <Fragment>
        <Field>
          <CardNumberElement
            placeholder={cardNumberPlaceholder}
            {...commonStyles}
          />
        </Field>
        <FlexContainer>
          <Field style={{ flexGrow: 1, marginRight: "1rem" }}>
            <CardExpiryElement
              placeholder={cardExpiryPlaceholder}
              {...commonStyles}
            />
          </Field>
          <Field style={{ flexGrow: 1 }}>
            <CardCVCElement
              placeholder={cardCVCPlaceholder}
              {...commonStyles}
            />
          </Field>
        </FlexContainer>
        <Field>
          <PostalCodeElement
            placeholder={postalCodePlaceholder}
            {...commonStyles}
          />
        </Field>
      </Fragment>
    );
  }
}

export default withStripeElements(injectStripe(StripeForm));
