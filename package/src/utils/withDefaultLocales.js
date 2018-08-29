import React, { Component } from "react";

export default function withDefaultLocales(WrappedComponent) {
  class WithDefaultLocales extends Component {
    loadLocales = async () => {
      const locales = await import("./locales.json");
      return locales;
    };

    render() {
      return <WrappedComponent ref={this.props.forwardRef} getDefaultLocales={this.loadLocales} {...this.props} />;
    }
  }

  return React.forwardRef((props, ref) => <WithDefaultLocales {...props} forwardRef={ref} />);
}
