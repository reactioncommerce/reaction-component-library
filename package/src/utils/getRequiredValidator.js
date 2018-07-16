import get from "lodash.get";

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
