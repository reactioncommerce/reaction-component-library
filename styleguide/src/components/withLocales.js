import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "lodash/isEmpty";

const DEFAULT_LOCALES_PATH = "./utils/locales/locales.json";

/**
 * @summary Creates a HOC that provides `locales` prop
 * @param {React.Component|Function} ComponentWithLocales The component class or function to wrap
 * @returns {React.Component} Higher order component
 */
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
      const { locales: currentLocales } = this.state;
      if (isEmpty(currentLocales)) {
        await this.loadLocales().then((locales) => {
          this.setState({ locales });
          return null;
        });
      }
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

  /* eslint-disable react/display-name,react/no-multi-comp */
  return React.forwardRef((props, ref) => <WithLocales {...props} forwardRef={ref} />);
  /* eslint-enable react/display-name,react/no-multi-comp */
}
