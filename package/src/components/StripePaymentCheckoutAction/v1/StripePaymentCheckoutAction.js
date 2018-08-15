import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withComponents } from "@reactioncommerce/components-context";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import styled from "styled-components";
import { applyTheme, CustomPropTypes } from "../../../utils";

const H3 = styled.h3`
  font-family: ${applyTheme("font_family")};
  font-size: ${applyTheme("font_size_h3")};
`;

const SecureCaption = styled.div`
  font-family: ${applyTheme("font_family")};
  font-size: ${applyTheme("font_size_small")};
  color: ${applyTheme("color_black30")};
`;

const Span = styled.span`
  vertical-align: super;
`;

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
       * Pass either the Reaction StripeForm component or your own component that
       * accepts compatible props.
       */
      StripeForm: CustomPropTypes.component.isRequired
    }),
    isSaving: PropTypes.bool,
    /**
     * This callback will fired when the collected information is ready to by saved,
     * and move to the next step
     */
    onReadyForSaveChange: PropTypes.func,
    /**
     * Status of the action component, the rendered UI will match the current status of the component.
     */
    status: PropTypes.oneOf(["active", "complete", "incomplete"])
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
    onReadyForSaveChange(true);
  }

  handleSubmit = (address) => {
    this.setState({
      activeAddress: address
    });
  };

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

  handleUseNewBillingAddress = () => {
    this.setState({ useNewBillingAddress: !this.state.useNewBillingAddress });
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
    const { components: { StripeForm } } = this.props;

    return (
      <Fragment>
        <StripeForm />
        <SecureCaption>
          {this.renderLockIcon()} <Span>Your Information is private and secure.</Span>
        </SecureCaption>
        <H3>Billing Address</H3>
        <Button variant="outlined" onClick={this.handleUseNewBillingAddress}>
          Use a different billing address
        </Button>
        {this.renderBillingAddressForm()}
      </Fragment>
    );
  }
}

const WrappedStripePaymentCheckoutAction = withComponents(StripePaymentCheckoutAction);

// eslint-disable-next-line
WrappedStripePaymentCheckoutAction.renderComplete = ({ stripePayment }) => (
  <div>
    Visa ending in 7777
  </div>
);

export default WrappedStripePaymentCheckoutAction;
