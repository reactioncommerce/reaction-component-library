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

function fieldBorderColor(themeProp = "color") {
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
  background-color: ${applyTheme("inputBackgroundColor_default")};
  border: 1px solid ${fieldBorderColor("inputBorderColor")};
  box-sizing: border-box;
  color: ${applyTheme("inputColor_default")};
  line-height: ${applyTheme("inputLineHeight")};
  border-radius: 2px;
  margin-bottom: 20px;
  outline: none;
  padding: ${applyTheme("inputVerticalPadding")} ${applyTheme("inputHorizontalPadding")};
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

const createOptions = () => ({
  style: {
    base: {
      "fontSize": applyTheme("inputFontSize")(),
      "color": applyTheme("color_black55")(),
      "fontFamily": applyTheme("inputFontFamily")(),
      "::placeholder": {
        color: applyTheme("inputPlaceholderColor")()
      }
    }
  }
});

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
     * Card's billing postal code text placeholder
     */
    /**
    * If you've set up a components context using @reactioncommerce/components-context
    * (recommended), then this prop will come from there automatically. If you have not
    * set up a components context or you want to override one of the components in a
    * single spot, you can pass in the components prop directly.
    */
    components: PropTypes.shape({
      /**
       * Pass either the Reaction `SelectableItem` component or your own component
       * that takes `items` props and uses them to render a single item.
       */
      iconVisa: PropTypes.node,
      iconAmericanExpress: PropTypes.node,
      iconDiscover: PropTypes.node,
      iconMastercard: PropTypes.node
    }).isRequired,
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
    cardCvcPlaceholder: "CVV",
    postalCodePlaceholder: "Postal Code",
    stripeRef: () => true
  };

  state = {
    cardNumberIsFocused: false,
    cardExpiryIsFocused: false,
    cardCvcIsFocused: false,
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
      ...createOptions(),
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
            placeholder={cardNumberPlaceholder}
            {...commonProps}
          />
        </Field>
        <FlexContainer>
          <Field isFocused={cardExpiryIsFocused} style={{ flexGrow: 1, marginRight: "1rem" }}>
            <CardExpiryElement
              placeholder={cardExpiryPlaceholder}
              {...commonProps}
            />
          </Field>
          <Field isFocused={cardCvcIsFocused} style={{ flexGrow: 1 }}>
            <CardCVCElement
              placeholder={cardCvcPlaceholder}
              {...commonProps}
            />
          </Field>
        </FlexContainer>
        <Field isFocused={postalCodeIsFocused}>
          <PostalCodeElement
            placeholder={postalCodePlaceholder}
            {...commonProps}
          />
        </Field>
      </Fragment>
    );
  }
}

export default withComponents(withStripeElements(injectStripe(StripeForm)));
