import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "lodash.isempty";

const DEFAULT_LOCALES_PATH = "./utils/locales/locales.json";

export default function withLocales(ComponentWithLocales) {
  class WithLocales extends Component {
    static propTypes = {
      forwardRef: PropTypes.func,
      locales: PropTypes.object,
      localesPath: PropTypes.string
    };

    static defaultProps = {
      locales: {},
      localesPath: DEFAULT_LOCALES_PATH
    };

    state = {
      locales: this.props.locales
    };

    async componentDidMount() {
      const { locales } = this.state;
      if (isEmpty(locales)) {
        this.setLocales = await this.loadLocales();
      }
    }

    set setLocales(locales) {
      this.setState({ locales });
    }

    async loadLocales() {
      const { localesPath } = this.props;
      let locales;
      try {
        locales = await import(`${localesPath}`);
      } catch (error) {
        locales = await import(`${DEFAULT_LOCALES_PATH}`);
      }
      return locales;
    }

    render() {
      const { locales } = this.state;
      return <ComponentWithLocales ref={this.props.forwardRef} {...this.props} locales={locales} />;
    }
  }

  return React.forwardRef((props, ref) => <WithLocales {...props} forwardRef={ref} />);
}
