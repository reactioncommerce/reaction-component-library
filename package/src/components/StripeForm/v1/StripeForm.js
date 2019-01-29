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
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, withStripeElements } from "../../../utils";

/**
 * @summary A function for use in styled-components template string, which
 *   returns a props function that returns a value from the theme
 *   based on the current focused state reflected in `props`.
 *   If `isFocused` is `true`, uses theme prop with "focus" appended; otherwise
 *   uses theme prop with "default" appended.
 * @param {String} themeProp The name of the theme variable to get the value for
 * @returns {Function} A function that takes `props` argument and returns the
 *   value from a custom theme or the default theme.
 */
function fieldBorderColor(themeProp) {
  return (props) => {
    let status = "default";

    if (props.isFocused) {
      status = "focus";
    }

    return applyTheme(`${themeProp}_${status}`);
  };
}

const Field = styled.div`
  -webkit-font-smoothing: antialiased;
  background-color: ${applyTheme("Input.backgroundColor_default")};
  border-color: ${fieldBorderColor("Input.borderColor")};
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  color: ${applyTheme("Input.color_default")};
  line-height: ${applyTheme("Input.lineHeight")};
  border-radius: 2px;
  margin-bottom: 20px;
  outline: none;
  padding: ${applyTheme("Input.verticalPadding")} ${applyTheme("Input.horizontalPadding")};
`;

const AcceptedPaymentMethods = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
`;

const Span = styled.span`
  margin-left: 5px;
`;

const FlexContainer = styled.div`
  display: flex;
`;

class StripeForm extends Component {
  static propTypes = {
    /**
     * Card's CVV text placeholder
     */
    cardCvcPlaceholder: PropTypes.string,
    /**
     * Card's expiry date text placeholder
     */
    cardExpiryPlaceholder: PropTypes.string,
    /**
     * Card's Number text placeholder
     */
    cardNumberPlaceholder: PropTypes.string,
    /**
     * If you've set up a components context using
     * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
     * (recommended), then this prop will come from there automatically. If you have not
     * set up a components context or you want to override one of the components in a
     * single spot, you can pass in the components prop directly.
     */
    components: PropTypes.shape({
      /**
       * Visa icon as SVG
       */
      iconVisa: PropTypes.node,
      /**
       * American Express icon as SVG
       */
      iconAmericanExpress: PropTypes.node,
      /**
       * Discover icon as SVG
       */
      iconDiscover: PropTypes.node,
      /**
       * Mastercard icon as SVG
       */
      iconMastercard: PropTypes.node
    }).isRequired,
    /**
     *  Used to determined if all form fields have been completed
    */
    isComplete: PropTypes.func.isRequired,
    /**
     * Card's billing postal code text placeholder
     */
    postalCodePlaceholder: PropTypes.string,
    /**
     * The stripe object which provides methods for tokenizing data, it's
     * provided by the StripeProvider component.
     * See https://stripe.com/docs/stripe-js/reference#the-stripe-object for more details.
     */
    stripe: PropTypes.object,
    /**
     * Used to pass a reference of the stripe object to the containing component.
     * The containing component will handle tokenizing payment data and sending data to server.
     */
    stripeRef: PropTypes.func.isRequired
  };

  static defaultProps = {
    cardNumberPlaceholder: "Card Number",
    cardExpiryPlaceholder: "Expiry Date MM/YY",
    cardCvcPlaceholder: "CVV",
    postalCodePlaceholder: "Postal Code",
    stripeRef: () => true
  };

  state = {
    cardNumberComplete: false,
    cardNumberIsFocused: false,
    cardExpiryComplete: false,
    cardExpiryIsFocused: false,
    cardCvcComplete: false,
    cardCvcIsFocused: false,
    postalCodeComplete: false,
    postalCodeIsFocused: false
  }

  componentDidUpdate = () => {
    if (this.props.stripe) {
      this.props.stripeRef(this.props.stripe);
    }
  }

  handleOnFocus = (event) => {
    this.setState({ [`${event.elementType}IsFocused`]: true });
  }

  handleOnBlur = (event) => {
    this.setState({ [`${event.elementType}IsFocused`]: false });
  }

  handleOnChange = (event) => {
    const { complete, elementType } = event;
    this.setState({ [`${elementType}Complete`]: complete }, this.isComplete);
  }

  isComplete = () => {
    const { cardNumberComplete, cardExpiryComplete, cardCvcComplete, postalCodeComplete } = this.state;
    // console.log("isComplete", this.state);
    if (cardNumberComplete && cardExpiryComplete && cardCvcComplete && postalCodeComplete) {
      this.props.isComplete(true);
    } else {
      this.props.isComplete(false);
    }
  }

  renderIcons = (ccIcons) => (
    <div>
      {ccIcons.map((icon, index) => <Span key={index}>{icon}</Span>)}
    </div >
  );

  render() {
    const ccIcons = [
      this.props.components.iconVisa,
      this.props.components.iconAmericanExpress,
      this.props.components.iconMastercard,
      this.props.components.iconDiscover
    ];

    const {
      cardNumberPlaceholder,
      cardExpiryPlaceholder,
      cardCvcPlaceholder,
      postalCodePlaceholder
    } = this.props;

    const {
      cardNumberIsFocused,
      cardExpiryIsFocused,
      cardCvcIsFocused,
      postalCodeIsFocused
    } = this.state;

    const commonProps = {
      style: {
        base: {
          "fontSize": applyTheme("Input.fontSize")(this.props),
          "color": applyTheme("Input.color_default")(this.props),
          "fontFamily": applyTheme("Input.fontFamily")(this.props),
          "::placeholder": {
            color: applyTheme("Input.placeholderColor")(this.props)
          }
        }
      },
      onFocus: this.handleOnFocus,
      onBlur: this.handleOnBlur
    };

    return (
      <Fragment>
        <AcceptedPaymentMethods>
          {this.renderIcons(ccIcons)}
        </AcceptedPaymentMethods>
        <Field isFocused={cardNumberIsFocused}>
          <CardNumberElement
            onChange={this.handleOnChange}
            placeholder={cardNumberPlaceholder}
            {...commonProps}
          />
        </Field>
        <FlexContainer>
          <Field isFocused={cardExpiryIsFocused} style={{ flexGrow: 1, marginRight: "1rem" }}>
            <CardExpiryElement
              onChange={this.handleOnChange}
              placeholder={cardExpiryPlaceholder}
              {...commonProps}
            />
          </Field>
          <Field isFocused={cardCvcIsFocused} style={{ flexGrow: 1 }}>
            <CardCVCElement
              onChange={this.handleOnChange}
              placeholder={cardCvcPlaceholder}
              {...commonProps}
            />
          </Field>
        </FlexContainer>
        <Field isFocused={postalCodeIsFocused}>
          <PostalCodeElement
            onChange={this.handleOnChange}
            placeholder={postalCodePlaceholder}
            {...commonProps}
          />
        </Field>
      </Fragment>
    );
  }
}

// We should be using `withTheme` here, but it seems to cause serious errors in the
// deployed app, and does not work anyway. Need to investigate why `withComponents`
// works and does not cause errors but `withTheme` does not work. It is surely
// something related to the iframes that Stripe uses.
export default withComponents(withStripeElements(injectStripe(StripeForm)));
