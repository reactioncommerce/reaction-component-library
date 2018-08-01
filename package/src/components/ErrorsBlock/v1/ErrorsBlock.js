import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import isEmpty from "lodash.isempty";
import { applyTheme } from "../../../utils";

const ErrorWrapper = styled.div`
  margin: ${applyTheme("errorsBlockMargin")};
`;

const Error = styled.div`
  -webkit-font-smoothing: antialiased;
  color: ${applyTheme("errorsBlockColor")};
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, sans-serif;
  font-size: ${applyTheme("errorsBlockFontSize")};
`;

const IconWrapper = styled.div`
  color: ${applyTheme("errorsBlockColor")};
  display: inline-block;
  fill: currentColor;
  margin: ${applyTheme("errorsBlockIconMargin")};

  & * {
   color: inherit;
   fill: inherit;
  }

  svg {
    height: 0.875em;
  }
`;

/* eslint-disable max-len */
const defaultInvalidIcon = (
  // credit: https://fontawesome.com/icons/exclamation-triangle?style=solid
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
  >
    <path
      fill="currentColor"
      d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
    />
  </svg>
);
/* eslint-enable max-len */


class ErrorsBlock extends Component {
  static isFormErrors = true;

  static propTypes = {
    className: PropTypes.string,
    errorClassName: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    errors: PropTypes.array,
    iconError: PropTypes.node,
    names: PropTypes.arrayOf(PropTypes.string),
    shouldShowIcon: PropTypes.bool
  };

  static defaultProps = {
    className: undefined,
    errorClassName: undefined,
    errors: undefined,
    iconError: defaultInvalidIcon,
    names: undefined,
    shouldShowIcon: false
  };

  renderIcon() {
    const { iconError } = this.props;
    return <IconWrapper>{iconError}</IconWrapper>;
  }

  render() {
    const { errorClassName, errors, className, shouldShowIcon } = this.props;

    if (isEmpty(errors)) return null;

    // https://reactjs.org/docs/lists-and-keys.html
    // "When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort.
    // We don’t recommend using indexes for keys if the items can reorder, as that would be slow."
    //
    // There will rarely be more than a few errors for a field, and forcing unique ID
    // generation for them would be arbitrary and unnecessary. So we'll use the index.
    return (
      <ErrorWrapper className={className}>
        {errors.map((error, index) => (
          <Error key={index} className={errorClassName} data-name={error.name}>
            {shouldShowIcon ? this.renderIcon() : ""}
            {error.message}
          </Error>
        ))}
      </ErrorWrapper>
    );
  }
}

export default ErrorsBlock;
