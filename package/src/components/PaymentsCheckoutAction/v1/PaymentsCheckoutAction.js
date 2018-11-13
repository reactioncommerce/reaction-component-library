import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { CustomPropTypes, addTypographyStyles, applyTheme } from "../../../utils";

const SubTitle = styled.div`
  ${addTypographyStyles("PaymentCheckoutAction", "labelTextSemiBold")};
`;

const Title = styled.div`
  ${addTypographyStyles("PaymentCheckoutAction", "subheadingTextSemiBold")};
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

const options = [{
  id: "5",
  label: "American Express",
  detail: "ending in 4040",
  value: "amex"
},
{
  id: "6",
  label: "Cash",
  value: "cash"
}];

const otherOptions = [{
  id: "7",
  label: "PayPal",
  value: "paypal"
}];

class PaymentsCheckoutAction extends Component {
  static propTypes = {
    /**
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
     */
    className: PropTypes.string,
    /**
     * If you've set up a components context using
     * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
     * (recommended), then this prop will come from there automatically. If you have not
     * set up a components context or you want to override one of the components in a
     * single spot, you can pass in the components prop directly.
     */
    components: PropTypes.shape({
      Button: CustomPropTypes.component.isRequired,
      SelectableList: CustomPropTypes.component.isRequired
    }).isRequired
  };

  static defaultProps = {

  };

  render() {
    const { components: { Button, SelectableList } } = this.props;
    const readMore = (
      <Button title="Default" className="myBtn" isTextOnly isShortHeight>Add a new card</Button>
    );
    return (
      <Fragment>
        <SubTitle>Credit cards</SubTitle>
        <SelectableList
          isBordered
          isLeftAligned
          options={options}
          name="PaymentForm"
          listAction={readMore}
        />
        <SubTitle>Other payment methods</SubTitle>
        <SelectableList
          isBordered
          isLeftAligned
          options={otherOptions}
          name="PaymentForm"
        />
        <Title>Billing address</Title>
        <SelectableList
          options={billingAddressOptions}
          name="billingAddressForm"
          value={""}
        />
      </Fragment>
    );
  }
}

export default withComponents(PaymentsCheckoutAction);
