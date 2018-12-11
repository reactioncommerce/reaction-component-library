import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withComponents } from "@reactioncommerce/components-context";
import { CustomPropTypes } from "../../../utils";

class RegionInput extends Component {
  static isFormInput = true;

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
      /**
       * Pass either the Reaction TextInput component or your own component that is
       * compatible with ReactoForm.
       */
      TextInput: CustomPropTypes.component.isRequired,
      /**
       * Pass either the Reaction Select component or your own component that is
       * compatible with ReactoForm.
       */
      Select: CustomPropTypes.component.isRequired
    }).isRequired,
    /**
     * Name of input
     */
    name: PropTypes.string.isRequired,
    /**
     * Region options to populate the form's region fields
     */
    options: PropTypes.array,
    /**
     * Prepopulate the input's value
     */
    value: PropTypes.string
  };

  render() {
    const {
      className,
      components: { Select, TextInput },
      options,
      value,
      ...props
    } = this.props;

    return (
      <Fragment>
        {
          options && options.length > 1 ? (
            <Select
              className={className}
              alphabetize
              isSearchable
              options={options}
              value={value}
              {...props}
            />
          ) : (
            <TextInput
              className={className}
              value={value}
              {...props}
            />
          )
        }
      </Fragment>
    );
  }
}

export default withComponents(RegionInput);
