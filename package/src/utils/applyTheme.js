import getFromTheme from "./getFromTheme";

/**
 * @summary A function for use in styled-components template string, which
 *   returns a props function that returns CSS for proper typography styling
 * @param {String} themePath An object path describing where to look
 *   in this group object in the theme to find the value that is needed.
 * @param {String} [group] Custom theme object group. `rui_` will be prepended.
 *   Default is "components", i.e. `rui_components`.
 * @returns {Function} A function that takes `props` argument and returns
 *   the value from a custom or default theme
 */
export default function applyTheme(themePath, group = "components") {
  return (props) => getFromTheme(props, `rui_${group}.${themePath}`);
}
