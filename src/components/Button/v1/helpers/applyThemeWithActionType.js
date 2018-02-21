import { darken, lighten, getLuminance } from "polished";
import { getFromTheme } from "../../../../helpers";

export default function applyThemeWithActionType(themeProp, isColor) {
  return (props) => {
    const { actionType, disabled } = props;
    let value = getFromTheme(props, `rui_${themeProp}_${actionType}`);
    if (typeof value === "string" && isColor && disabled) {
      if (value === "transparent") value = "#ffffff";
      if (getLuminance(value) > getLuminance("#999999")) {
        value = darken(0.12, value);
      } else {
        value = lighten(0.25, value);
      }
    }
    return value;
  };
}
