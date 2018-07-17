import get from "lodash.get";

/**
 *
 * @method getRequiredValidator
 * @summary
 * @param {String} requiredFields - name of required field you want to validate
 * @return {Object[]} errors - array of field error objects
 */
export default function getRequiredValidator(...requiredFields) {
  return async (obj) => {
    const errors = [];
    requiredFields.forEach((requiredField) => {
      const value = get(obj, requiredField);
      if (value === null || value === undefined) {
        errors.push({ name: requiredField, message: `${requiredField} is required` });
      }
    });
    return errors;
  };
}
