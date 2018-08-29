import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "lodash.isempty";

export default function withDefaultLocales(WrappedComponent) {
  class WithDefaultLocales extends Component {
    static propTypes = {
      forwardRef: PropTypes.func,
      locales: PropTypes.object
    };

    static defaultProps = {
      locales: {}
    };

    state = {
      locales: this.props.locales
    };

    async componentDidMount() {
      let { locales } = this.state;
      if (isEmpty(locales)) {
        locales = await this.loadLocales();
        this.setState({ locales });
      }
    }

    loadLocales = async () => {
      const locales = await import("./locales.json");
      return locales;
    };

    render() {
      const { locales } = this.state;
      return <WrappedComponent ref={this.props.forwardRef} {...this.props} locales={locales} />;
    }
  }

  return React.forwardRef((props, ref) => <WithDefaultLocales {...props} forwardRef={ref} />);
}
