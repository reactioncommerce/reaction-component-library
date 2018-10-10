import get from "lodash.get";
import defaultComponentTheme from "../theme/defaultComponentTheme";

export default function getFromTheme(props, key) {
  if (!props) throw new Error("Error in getFromTheme. props argument is required");
  if (typeof key !== "string" || key.length === 0) {
    throw new Error("Error in getFromTheme. key argument must be a non-empty string");
  }

  const value = get(props, `theme.${key}`) || get(defaultComponentTheme, key, null);
  if (!value && value !== 0) throw new Error(`Error in getFromTheme. Add ${key} to defaultComponentTheme`);
  return value;
}
