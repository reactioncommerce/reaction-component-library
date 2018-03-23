import { getFromTheme } from "helpers";

export default function applyThemeWithActionType(themeProp, transparentWhenTextOnly, stateSuffix) {
  return (props) => {
    const { actionType, isDisabled, isTextOnly } = props;

    if (isTextOnly && transparentWhenTextOnly) return "transparent";

    let suffix;
    if (isDisabled) {
      suffix = "disabled";
    } else {
      // Currently we force "default" styling for text-only buttons
      suffix = isTextOnly ? "default" : actionType;
    }

    const actualThemeProp = isTextOnly ? "buttonTextOnlyColor" : themeProp;
    let key = `rui_${actualThemeProp}_${suffix}`;
    if (typeof stateSuffix === "string" && suffix !== "disabled") key += `_${stateSuffix}`;
    return getFromTheme(props, key);
  };
}
