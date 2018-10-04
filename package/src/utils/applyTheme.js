import getFromTheme from "./getFromTheme";

export default function applyTheme(themePath, group = "components") {
  return (props) => getFromTheme(props, `rui_${group}.${themePath}`);
}
