import React, { Component } from "react";

export default function withStripeElements(WrappedComponent) {
  return class extends Component {
    loadLocales = async () => {
      const locales = await import("./locales.json");
      return locales;
    };

    render() {
      return <WrappedComponent getDefaultLocales={this.loadLocales} {...this.props} />;
    }
  };
}
