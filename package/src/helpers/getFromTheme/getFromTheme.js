import get from "lodash.get";
import defaultComponentTheme from "../../defaultComponentTheme";

export default function getFromTheme(props, key) {
  const value = get(props, `theme.${key}`) || get(defaultComponentTheme, key, null);
  if (!value) throw new Error(`Error in getFromTheme. Add ${key} to defaultComponentTheme`);
  return value;
}
