import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withComponents } from "@reactioncommerce/components-context";
import Fade from "@material-ui/core/Fade";
import styled from "styled-components";
import { addTypographyStyles, CustomPropTypes } from "../../../utils";

const Title = styled.h3`
  ${addTypographyStyles("StripePaymentCheckoutAction", "subheadingTextBold")}
`;

const SecureCaption = styled.div`
  ${addTypographyStyles("StripePaymentCheckoutAction", "captionText")}
`;

const IconLockSpan = styled.span`
  display: inline-block;
  height: 20px;
  width: 20px;
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
  static renderComplete({ payment: { data: { displayName } } }) {
    return (
      <div>
        {displayName}
      </div>
    );
  }

  static propTypes = {
    /**
     * Alert object provides alert into to InlineAlert.
     */
    alert: CustomPropTypes.alert,
    /**
     * The text for the "Billing Address" label text.
     */
    billingAddressTitleText: PropTypes.string,
    /**
     * If you've set up a components context using
     * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
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
       * Secured lock icon
       */
      iconLock: PropTypes.node,
      /**
       * A reaction SelectableList component or compatible component.
       */
      SelectableList: CustomPropTypes.component.isRequired,
      /**
       * Pass either the Reaction StripeForm component or your own component that
       * accepts compatible props.
       */
      StripeForm: CustomPropTypes.component.isRequired,
      /**
       * Pass either the Reaction InlineAlert component or your own component that
       * accepts compatible props.
       */
      InlineAlert: CustomPropTypes.component.isRequired
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
     * The text for the "Your Information is private and secure." caption text.
     */
    secureCaptionText: PropTypes.string,
    /**
     * Checkout process step number
     */
    stepNumber: PropTypes.number.isRequired
  };

  static defaultProps = {
    billingAddressTitleText: "Billing Address",
    onReadyForSaveChange() { },
    secureCaptionText: "Your Information is private and secure."
  };

  state = {
    activeCountry: "US",
    status: "active",
    billingAddress: "same_as_shipping",
    isStripeFormComplete: false,
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
    return null;
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
    const { isStripeFormComplete } = this.state;
    if (billingAddress === "use_different_billing_address") {
      this.setState({ billingAddress });
    } else if (billingAddress === "same_as_shipping") {
      // If a user decides to use the same address
      this.setState({ billingAddress });
      // Confirm if Stripe Form is filled out
      if (isStripeFormComplete) {
        // Trigger onReadyForSaveChange()
        this.handleStripeFormIsComplete(true);
      }
    }
  }

  handleStripeFormIsComplete = (isComplete) => {
    const { onReadyForSaveChange } = this.props;
    onReadyForSaveChange(isComplete);
    this.setState({
      isStripeFormComplete: true
    });
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

  render() {
    const {
      alert,
      billingAddressTitleText,
      components: { iconLock, InlineAlert, SelectableList, StripeForm },
      label,
      stepNumber,
      secureCaptionText
    } = this.props;

    const { billingAddress } = this.state;

    return (
      <Fragment>
        <Title>
          {stepNumber}. {label}
        </Title>
        {alert ? <InlineAlert {...alert} /> : ""}
        <StripeForm
          isComplete={this.handleStripeFormIsComplete}
          stripeRef={(stripe) => { this._stripe = stripe; }}
        />
        <SecureCaption>
          <IconLockSpan>{iconLock}</IconLockSpan> <Span>{secureCaptionText}</Span>
        </SecureCaption>
        <Title>{billingAddressTitleText}</Title>
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

export default withComponents(StripePaymentCheckoutAction);
