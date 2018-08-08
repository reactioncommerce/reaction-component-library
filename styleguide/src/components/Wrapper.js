import React, { Component } from "react";
import DefaultWrapper from "react-styleguidist/lib/rsg-components/Wrapper/Wrapper";
import { ComponentsProvider } from "@reactioncommerce/components-context";
import appComponents from "../appComponents";
import { StripeProvider } from "react-stripe-elements";

class Wrapper extends Component {
  render() {
    return (
      <StripeProvider apiKey="api_key_122">
        <ComponentsProvider value={appComponents}>
          <DefaultWrapper {...this.props} />
        </ComponentsProvider>
      </StripeProvider>
    );
  }
}

export default Wrapper;
