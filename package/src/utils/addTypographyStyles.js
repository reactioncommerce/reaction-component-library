import get from "lodash.get";
import { css } from "styled-components";
import defaultComponentTheme from "../theme/defaultComponentTheme";

const validTextTypes = [
  "bodyText",
  "bodyTextBold",
  "bodyTextSemiBold",
  "captionText",
  "captionTextBold",
  "headingText",
  "headingTextBold",
  "labelText",
  "labelTextBold",
  "subheadingText",
  "subheadingTextBold",
  "titleText",
  "titleTextBold"
];

/**
 * @summary A function for use in styled-components template string, which
 *   returns a props function that returns CSS for proper typography styling
 * @param {String} componentName The component name, for finding component-specific
 *   typography style overrides in the theme
 * @param {String} textType One of `validTextTypes`, such as "bodyText"
 * @returns {Function} A function that takes `props` argument and returns
 *   CSS for proper typography styling.
 */
export default function addTypographyStyles(componentName, textType) {
  if (validTextTypes.indexOf(textType) === -1) {
    throw new Error(`Error in addTypographyStyles. Expected textType argument to be one of ${validTextTypes}. Got ${textType}`);
  }

  return (props) => {
    const typographyStylesFromTheme = get(props, `theme.rui_typography.${textType}`) || {};
    const typographyStylesPerComponentFromTheme = get(props, `theme.rui_components.${componentName}.typography`) || {};
    const defaultTypographyStyles = get(defaultComponentTheme, `rui_typography.${textType}`) || {};
    const defaultTypographyStylesPerComponent = get(defaultComponentTheme, `rui_components.${componentName}.typography`) || {};

    // Combine from all theme levels into a single set of style variables
    const typographyStyles = {
      ...defaultTypographyStyles,
      ...defaultTypographyStylesPerComponent,
      ...typographyStylesFromTheme,
      ...typographyStylesPerComponentFromTheme
    };

    const { color, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight } = typographyStyles;

    // Warn if the default theme is missing any. We must always have some value.
    if (!color && color !== 0) throw new Error(`Error in addTypographyStyles. Add rui_typography.${textType}.color to defaultComponentTheme`);
    if (!fontFamily && fontFamily !== 0) throw new Error(`Error in addTypographyStyles. Add rui_typography.${textType}.fontFamily to defaultComponentTheme`);
    if (!fontSize && fontSize !== 0) throw new Error(`Error in addTypographyStyles. Add rui_typography.${textType}.fontSize to defaultComponentTheme`);
    if (!fontStyle && fontStyle !== 0) throw new Error(`Error in addTypographyStyles. Add rui_typography.${textType}.fontStyle to defaultComponentTheme`);
    if (!fontWeight && fontWeight !== 0) throw new Error(`Error in addTypographyStyles. Add rui_typography.${textType}.fontWeight to defaultComponentTheme`);
    if (!letterSpacing && letterSpacing !== 0) {
      throw new Error(`Error in addTypographyStyles. Add rui_typography.${textType}.letterSpacing to defaultComponentTheme`);
    }
    if (!lineHeight && lineHeight !== 0) throw new Error(`Error in addTypographyStyles. Add rui_typography.${textType}.lineHeight to defaultComponentTheme`);

    return css`
      -webkit-font-smoothing: antialiased;
      color: ${color};
      font-family: ${fontFamily};
      font-size: ${fontSize};
      font-style: ${fontStyle};
      font-stretch: normal;
      font-weight: ${fontWeight};
      letter-spacing: ${letterSpacing};
      line-height: ${lineHeight};
    `;
  };
}
