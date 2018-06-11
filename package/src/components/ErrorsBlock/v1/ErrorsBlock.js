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
`;

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
    iconError: (<i className="fas fa-exclamation-triangle" />),
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
