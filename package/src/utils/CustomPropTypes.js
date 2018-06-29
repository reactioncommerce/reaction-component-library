import PropTypes from "prop-types";
import { isValidElementType } from "react-is";

/**
 * We use an Error-like object for backward compatibility as people may call
 * PropTypes directly and inspect their output. However, we don't use real
 * Errors anymore. We don't inspect their stack anyway, and creating them
 * is prohibitively expensive if they are created too often, such as what
 * happens in oneOfType() for any type before the one that matched.
 */
function PropTypeError(message) {
  this.message = message;
  this.stack = "";
}
// Make `instanceof Error` still work for returned errors.
PropTypeError.prototype = Error.prototype;

// These follow the composable form specification
// http://forms.dairystatedesigns.com/user/input/#selection-inputs
const optionsSyntax = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]).isRequired
}));

// See https://github.com/facebook/prop-types/issues/200.
// If that gets added to prop-types package, we won't need this.
function getComponentValidator() {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    const val = props[propName];
    if (val == null) {
      if (isRequired) {
        if (props[propName] === null) {
          return new PropTypeError(`The ${location} '${propFullName}' is marked as required in '${componentName}', but its value is 'null'.`);
        }
        return new PropTypeError(`The ${location} '${propFullName}' is marked as required in '${componentName}', but its value is 'undefined'.`);
      }
    } else if (!isValidElementType(val)) {
      return new PropTypeError(`Invalid ${location} '${propFullName}' supplied to ${componentName}. Expected a string (for built-in components) or a class/function (for composite components).`);
    }
    return null;
  }

  const chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
}

export default {
  component: getComponentValidator(),
  options: PropTypes.oneOfType([
    optionsSyntax,
    PropTypes.arrayOf(PropTypes.shape({
      optgroup: PropTypes.string,
      options: optionsSyntax
    }))
  ])
};
