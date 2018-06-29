import getFromTheme from "./getFromTheme";

export default function applyTheme(themeProp, suffix) {
  return (props) => {
    let finalSuffix = "";
    if (typeof suffix === "string" && suffix.length) {
      finalSuffix = `_${suffix}`;
    }
    return getFromTheme(props, `rui_${themeProp}${finalSuffix}`);
  };
}
