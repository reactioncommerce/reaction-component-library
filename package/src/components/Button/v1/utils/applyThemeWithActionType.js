import { getFromTheme } from "../../../../utils";

/**
 * @summary A function for use in styled-components template string, which
 *   returns a props function that applies variable values from the theme,
 *   with button action type and state variants applied.
 * @param {String} themeProp The name of the theme variable to get the value for
 * @param {String} [stateSuffix] An optional suffix describing the button state
 * @returns {Function} A function that takes `props` argument and returns the
 *   value from a custom theme or the default theme.
 */
export default function applyThemeWithActionType(themeProp, stateSuffix) {
  return (props) => {
    const { actionType, isDisabled, isTextOnly } = props;

    const finalSuffix = isTextOnly ? "textOnly" : actionType;
    const finalStateSuffix = isDisabled ? "disabled" : stateSuffix;

    let key = `rui_components.${themeProp}_${finalSuffix}`;
    if (typeof finalStateSuffix === "string") key += `_${finalStateSuffix}`;

    return getFromTheme(props, key);
  };
}
