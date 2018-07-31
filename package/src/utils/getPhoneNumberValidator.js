import get from "lodash.get";

/**
 *
 * @method getPhoneNumberValidator
 * @summary
 * @param {String} phoneFields - name of phone number field you want to validate
 * @return {Object[]} errors - array of field error objects
 */
export default function getPhoneNumberValidator(...phoneFields) {
  // eslint-disable-next-line
  const phoneRegx = /^[\s()+-]*([0-9][\s()+-]*){6,20}(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
  return async (obj) => {
    const errors = [];
    phoneFields.forEach((phoneField) => {
      const value = get(obj, phoneField);
      if (!phoneRegx.test(String(value).toLowerCase())) {
        errors.push({ name: phoneField, message: `${phoneField} is invalid` });
      }
    });
    return errors;
  };
}
