import get from "lodash.get";
import defaultComponentTheme from "../theme/defaultComponentTheme";

/**
 * @summary Get a value from the theme, falling back to the default theme,
 *   given the `props` and the object path.
 * @param {Object} props The props object, with `theme` prop present if
 *   there is a custom styled-components theme provided by context.
 * @param {String} objectPath The path within the theme object from which to get a value
 * @returns {any} The value. If a value was not found in a custom theme or
 *   the default theme, an error is thrown.
 */
export default function getFromTheme(props, objectPath) {
  if (!props) throw new Error("Error in getFromTheme. props argument is required");
  if (typeof objectPath !== "string" || objectPath.length === 0) {
    throw new Error("Error in getFromTheme. objectPath argument must be a non-empty string");
  }

  const value = get(props, `theme.${objectPath}`) || get(defaultComponentTheme, objectPath, null);
  if (!value && value !== 0 && value !== false) {
    throw new Error(`Error in getFromTheme. Add ${objectPath} to defaultComponentTheme`);
  }
  return value;
}
