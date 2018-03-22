import { getFromTheme } from "./../../../../helpers";

export default function applyThemeWithActionType(themeProp) {
  return (props) => {
    const { actionType, disabled } = props;
    let suffix;
    if (disabled) {
      suffix = "disabled";
    } else {
      suffix = actionType;
    }
    return getFromTheme(props, `rui_${themeProp}_${suffix}`);
  };
}
