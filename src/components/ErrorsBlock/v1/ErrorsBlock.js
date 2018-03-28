import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import isEmpty from "lodash.isempty";
import { applyTheme } from "./../../../helpers";

const StyledError = styled.div`
  color: ${applyTheme("errorsBlockColor")};
  font-size: ${applyTheme("errorsBlockFontSize")};
  margin: ${applyTheme("errorsBlockMargin")};
`;

class ErrorsBlock extends Component {
  static isFormErrors = true;

  static propTypes = {
    className: PropTypes.string,
    errorClassName: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    errors: PropTypes.array,
    names: PropTypes.arrayOf(PropTypes.string)
  };

  static defaultProps = {
    className: undefined,
    errorClassName: undefined,
    errors: undefined,
    names: undefined
  };

  render() {
    const { errorClassName, errors, className } = this.props;

    if (isEmpty(errors)) return null;

    // https://reactjs.org/docs/lists-and-keys.html
    // "When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort.
    // We don’t recommend using indexes for keys if the items can reorder, as that would be slow."
    //
    // There will rarely be more than a few errors for a field, and forcing unique ID
    // generation for them would be arbitrary and unnecessary. So we'll use the index.
    return (
      <div className={className}>
        {errors.map((error, index) => (<StyledError key={index} className={errorClassName} data-name={error.name}>{error.message}</StyledError>))}
      </div>
    );
  }
}

export default ErrorsBlock;
