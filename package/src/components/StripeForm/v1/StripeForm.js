import React, { Component } from "react";
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
  padding: 10px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.12);
  margin-bottom: 2rem;
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
    postalCodePlaceholder: PropTypes.string
  };

  static defaultProps = {
    cardNumberPlaceholder: "Card Number",
    cardExpiryPlaceholder: "Expiry Date MM/YY",
    cardCVCPlaceholder: "CVV",
    postalCodePlaceholder: "Postal Code"
  };

  handleOnChange = (change) => {
    console.log("change", change);
  }

  render() {
    const {
      cardNumberPlaceholder,
      cardExpiryPlaceholder,
      cardCVCPlaceholder,
      postalCodePlaceholder
    } = this.props;

    return (
      <form onSubmit={() => true}>
        <Field>
          <CardNumberElement
            placeholder={cardNumberPlaceholder}
            onChange={this.handleOnChange}
            {...createOptions()}
          />
        </Field>
        <FlexContainer>
          <Field style={{ flexGrow: 1, marginRight: "1rem" }}>
            <CardExpiryElement
              placeholder={cardExpiryPlaceholder}
              onChange={this.handleOnChange}
              {...createOptions()}
            />
          </Field>
          <Field style={{ flexGrow: 1 }}>
            <CardCVCElement
              placeholder={cardCVCPlaceholder}
              onChange={this.handleOnChange}
              {...createOptions()}
            />
          </Field>
        </FlexContainer>
        <Field>
          <PostalCodeElement
            placeholder={postalCodePlaceholder}
            onChange={this.onChange}
            {...createOptions()}
          />
        </Field>
      </form>
    );
  }
}

export default withStripeElements(injectStripe(StripeForm));
