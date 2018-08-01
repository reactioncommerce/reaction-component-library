import React, { Component } from "react";
import DefaultWrapper from "react-styleguidist/lib/rsg-components/Wrapper/Wrapper";
import { ComponentsProvider } from "@reactioncommerce/components-context";
import appComponents from "../appComponents";

class Wrapper extends Component {
  render() {
    return (
      <ComponentsProvider value={appComponents}>
        <DefaultWrapper {...this.props} />
      </ComponentsProvider>
    );
  }
}

export default Wrapper;
