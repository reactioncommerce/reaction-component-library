import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withComponents } from "@reactioncommerce/components-context";
import Fade from "@material-ui/core/Fade";
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

const SecureCaption = styled.div`
  font-family: ${applyTheme("font_family")};
  font-size: ${applyTheme("font_size_small")};
  color: ${applyTheme("color_black30")};
`;

const Span = styled.span`
  vertical-align: super;
`;

const billingAddressOptions = [{
  _id: "1",
  label: "Same as shipping address"
},
{
  _id: "2",
  label: "Use a different billing address"
}];


class StripePaymentCheckoutAction extends Component {
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
      AddressForm: CustomPropTypes.component.isRequired,
      /**
       * A reaction SelectableList component or compatible component.
       */
      SelectableList: CustomPropTypes.component.isRequired,
      /**
       * Pass either the Reaction StripeForm component or your own component that
       * accepts compatible props.
       */
      StripeForm: CustomPropTypes.component.isRequired
    }),
    /**
     * Is the payment method being saved?
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

  state = {
    activeCountry: "US",
    status: "active",
    useNewBillingAddress: false,
    countries: [
      { value: "US", label: "United States" },
      { value: "DE", label: "Germany" },
      { value: "NU", label: "Nigeria" }
    ],
    regions: [
      { value: "LA", label: "Louisiana" },
      { value: "CA", label: "California" }
    ]
  };

  componentDidMount() {
    const { onReadyForSaveChange } = this.props;
    onReadyForSaveChange(false);
  }

  _addressForm = null;

  submit = async () => {
    // TODO: submit billing address form
    // For now, only the stripe form will be submitted.
    // this._addressForm.submit();
    this.handleSubmit();
  }

  handleSubmit = async (value) => {
    const { onSubmit } = this.props;
    const { token } = await this._stripe.createToken();

    await onSubmit({
      // billingAddress: value,
      token
    });
  }

  handleChange = (values) => {
    const { onReadyForSaveChange } = this.props;
    const isFilled = Object.keys(values).every((key) => (key === "address2" ? true : values[key] !== null));

    // Setting the "readyForSave" flag should take into account, both, the Stripe for and billing address form
    onReadyForSaveChange(isFilled);
  };


  handleCountryChange(country) {
    const activeCountry = this.state.countries.find((_country) => _country.value === country);
    if (activeCountry) {
      this.setState({
        activeCountry: activeCountry.value
      });
    }
  }

  handleUseNewBillingAddress = () => {
    this.setState({ useNewBillingAddress: !this.state.useNewBillingAddress });
  }

  handleStripeFormIsComplete = (isComplete) => {
    const { onReadyForSaveChange } = this.props;

    onReadyForSaveChange(isComplete);
  }

  renderBillingAddressForm = () => {
    const { components: { AddressForm } } = this.props;

    if (!this.state.useNewBillingAddress) {
      return null;
    }

    return (
      <Fade in={true}>
        <AddressForm
          ref={(formEl) => {
            this._addressForm = formEl;
          }}
          countries={this.state.countries}
          regions={this.state.regions[this.state.activeCountry]}
          onCountryChange={(value) => this.handleCountryChange(value)}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
      </Fade>
    );
  }

  renderLockIcon = () => (
    <svg style={{ width: "20px", height: "20px" }} viewBox="0 0 24 24">
      <path
        fill={applyTheme("color_black30")()}
        d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"
      />
    </svg >
  )

  render() {
    const {
      components: { SelectableList, StripeForm },
      label,
      stepNumber
    } = this.props;

    return (
      <Fragment>
        <Title>
          {stepNumber}. {label}
        </Title>
        <StripeForm isComplete={this.handleStripeFormIsComplete} stripeRef={(stripe) => { this._stripe = stripe; }} />
        <SecureCaption>
          {this.renderLockIcon()} <Span>Your Information is private and secure.</Span>
        </SecureCaption>
        <Title>Billing Address</Title>
        <SelectableList onClick={this.handleUseNewBillingAddress} items={billingAddressOptions} name="billingAddressForm" />
        {this.renderBillingAddressForm()}
      </Fragment>
    );
  }
}

const WrappedStripePaymentCheckoutAction = withComponents(StripePaymentCheckoutAction);

// eslint-disable-next-line
WrappedStripePaymentCheckoutAction.renderComplete = ({ payment: { data: { billingAddress, displayName } }}) => (
  <div>
    {displayName}
  </div>
);

export default WrappedStripePaymentCheckoutAction;
