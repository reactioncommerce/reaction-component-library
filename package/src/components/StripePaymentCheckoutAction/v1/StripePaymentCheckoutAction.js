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
  id: "1",
  label: "Same as shipping address",
  value: "same_as_shipping"
},
{
  id: "2",
  label: "Use a different billing address",
  value: "use_different_billing_address"
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
    billingAddress: "same_as_shipping",
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
    const { billingAddress } = this.state;

    // If user chooses to use billing address to be the same as shipping, then
    // don't submit the billing address form
    if (billingAddress === "same_as_shipping") {
      return this.handleSubmit();
    }

    this._addressForm.submit();
  }

  handleSubmit = async (value) => {
    const { onSubmit } = this.props;
    const { token } = await this._stripe.createToken();

    await onSubmit({
      billingAddress: value,
      token
    });
  }

  handleChange = (values) => {
    const { onReadyForSaveChange } = this.props;
    const isFilled = Object.keys(values).every((key) => (key === "address2" ? true : values[key] !== null));

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

  handleUseNewBillingAddress = (billingAddress) => {
    // Only react to value changes
    if (typeof billingAddress === "string") {
      this.setState({ billingAddress });
    }
  }

  handleStripeFormIsComplete = (isComplete) => {
    const { onReadyForSaveChange } = this.props;

    onReadyForSaveChange(isComplete);
  }

  renderBillingAddressForm = () => {
    const { components: { AddressForm } } = this.props;
    const { billingAddress } = this.state;

    // Only render billing address when user chooses to use
    // a different billing address
    if (billingAddress === "same_as_shipping") {
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
        // eslint-disable-next-line
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

    const { billingAddress } = this.state;

    return (
      <Fragment>
        <Title>
          {stepNumber}. {label}
        </Title>
        <StripeForm
          isComplete={this.handleStripeFormIsComplete}
          stripeRef={(stripe) => { this._stripe = stripe; }}
        />
        <SecureCaption>
          {this.renderLockIcon()} <Span>Your Information is private and secure.</Span>
        </SecureCaption>
        <Title>Billing Address</Title>
        <SelectableList
          onChanging={this.handleUseNewBillingAddress}
          options={billingAddressOptions}
          name="billingAddressForm"
          value={billingAddress}
        />
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
