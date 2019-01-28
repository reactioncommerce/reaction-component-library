import PropTypes from "prop-types";
import { isValidElementType } from "react-is";

/**
 * @class PropTypeError
 * @summary We use an Error-like object for backward compatibility as people may call
 *   PropTypes directly and inspect their output. However, we don't use real
 *   Errors anymore. We don't inspect their stack anyway, and creating them
 *   is prohibitively expensive if they are created too often, such as what
 *   happens in oneOfType() for any type before the one that matched.
 * @param {String} message The error message
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired
}));

/**
 * @summary Get a prop type validator for all valid "components" (element types)
 *   See https://github.com/facebook/prop-types/issues/200.
 *   If that gets added to prop-types package, we won't need this.
 * @returns {Function} Validator
 */
function getComponentValidator() {
  /**
   * @summary Prop type validator
   * @param {Boolean} isRequired Is the prop required?
   * @param {Object} props The full props object
   * @param {String} propName The name of the prop to validate
   * @param {String} componentName The name of the component
   * @param {String} location The location of the component
   * @param {String} propFullName The full name of the prop being validated
   * @returns {PropTypeError|null} PropTypeError instance if invalid
   */
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    const val = props[propName];
    if (val === null || val === undefined) {
      if (isRequired) {
        if (val === null) {
          return new PropTypeError(`The ${location} '${propFullName}' is marked as required in '${componentName}', but its value is 'null'.`);
        }
        return new PropTypeError(`The ${location} '${propFullName}' is marked as required in '${componentName}', but its value is 'undefined'.`);
      }
    } else if (!isValidElementType(val)) {
      return new PropTypeError(`Invalid ${location} '${propFullName}' supplied to ${componentName}. ` +
          "Expected a string (for built-in components) or a class/function (for composite components).");
    }
    return null;
  }

  const chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
}

// address prop type
const addressSyntax = PropTypes.shape({
  /**
   * Address ID (not all addresses will have an ID)
   */
  _id: PropTypes.string,
  /**
   * Name identifier for address (example: "Mom's House", "Work")
   */
  addressName: PropTypes.string,
  /**
   * Street information for address
   */
  address1: PropTypes.string,
  /**
   * Additional street information for address
   */
  address2: PropTypes.string,
  /**
   * Country code for address
   */
  country: PropTypes.string,
  /**
   * City information for address
   */
  city: PropTypes.string,
  /**
   * User's name
   */
  fullName: PropTypes.string,
  /**
   * Is this address a commercial property
   */
  isCommercial: PropTypes.bool,
  /**
   * Postal code information for address
   */
  postal: PropTypes.string,
  /**
   * Region information for address
   */
  region: PropTypes.string,
  /**
   * User's associated phone number
   */
  phone: PropTypes.string
});

// address book prop type
const addressBookSyntax = PropTypes.arrayOf(addressSyntax);

// alert prop type
const alertSyntax = PropTypes.shape({
  /**
   * The type of alert: Error, Information, Success or Warning
   */
  alertType: PropTypes.oneOf(["error", "information", "success", "warning"]),
  /**
   * isAutoClosing: Closes automatically in 10 seconds
   */
  isAutoClosing: PropTypes.bool,
  /**
   * isClosed: Whether the alert is closed or open
   */
  isClosed: PropTypes.bool,
  /**
   * isDismissable: Display a Close/Dismiss button
   */
  isDismissable: PropTypes.bool,
  /**
   * Alert message
   */
  message: PropTypes.string,
  /**
   * Alert title, optional
   */
  title: PropTypes.string
});

export default {
  address: addressSyntax,
  addressBook: addressBookSyntax,
  alert: alertSyntax,
  component: getComponentValidator(),
  options: PropTypes.oneOfType([
    optionsSyntax,
    PropTypes.arrayOf(PropTypes.shape({
      optgroup: PropTypes.string,
      options: optionsSyntax
    }))
  ])
};
