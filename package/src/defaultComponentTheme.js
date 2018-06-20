/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

/**
 * Default Theme Colors
 */

// grey scale
const black = "#000000";
const black95 = "#0d0d0d";
const black90 = "#1a1a1a";
const black85 = "#262626";
const black80 = "#333333";
const black75 = "#404040";
const black70 = "#4d4d4d";
const black65 = "#595959";
const black60 = "#666666";
const black55 = "#737373";
const black50 = "#808080";
const black45 = "#8c8c8c";
const black40 = "#999999";
const black35 = "#a6a6a6";
const black30 = "#b3b3b3";
const black25 = "#bfbfbf";
const black20 = "#cccccc";
const black15 = "#d9d9d9";
const black10 = "#e6e6e6";
const black05 = "#f5f5f5";
const black02 = "#fafafa";
const white = "#ffffff";

// medium colors
const reactionBlue = "#1999dd";
const reactionBlue100 = "#ecf8fe";
const reactionBlue200 = "#d6e5ed";
const reactionBlue300 = "#26b0f9";
const reactionBlue400 = "#067ebe";
const reactionBlue500 = "#285268";
const reactionBlue600 = "#172f3c";

const coolGrey = "#5e7480";
const coolGrey100 = "#e3ebf0";
const coolGrey200 = "#d5d5d5";
const coolGrey300 = "#5d8ea9";
const coolGrey400 = "#3c5d6f";
const coolGrey500 = "#3c3c3c";
const coolGrey600 = "#1d1d1d";

// dark colors
const forestGreen = "#158562";
const forestGreen100 = "#dcfaf1";
const forestGreen200 = "#b4ddc1";
const forestGreen300 = "#0db781";
const forestGreen400 = "#066144";
const forestGreen500 = "#285749";
const forestGreen600 = "#1e4035";

const darkBlue = "#23566d";
const darkBlue100 = "#d9ebf3";
const darkBlue200 = "#c4d3da";
const darkBlue300 = "#135471";
const darkBlue400 = "#103a4d";
const darkBlue500 = "#333f45";
const darkBlue600 = "#242c30";

// support colors
const yellow = "#3fc95f";
const yellow100 = "#fcf3dc";
const yellow200 = "#e9e1cb";
const yellow300 = "#fdda79";
const yellow400 = "#fbc120";
const yellow500 = "#a2832d";
const yellow600 = "#7a6322";

const red = "#cd3f4c";
const red100 = "#ffeeef";
const red200 = "#f0e8e9";
const red300 = "#e54f5d";
const red400 = "#bc1d2b";
const red500 = "#5e3033";
const red600 = "#3c1f21";

const teal = "#8ce0c9";
const teal100 = "#edfdf8";
const teal200 = "#d9ece6";
const teal300 = "#a3f2dc";
const teal400 = "#55e4be";
const teal500 = "#447467";
const teal600 = "#34584f";

/**
 * Default Theme Typography
 */

// font scale
const baseFontSize = 16; // pixels
const fontSize12 = `${baseFontSize * 0.75}px`;
const fontSize14 = `${baseFontSize * 0.875}px`;
const fontSize16 = `${baseFontSize * 1}px`;
const fontSize18 = `${baseFontSize * 1.125}px`;
const fontSize20 = `${baseFontSize * 1.25}px`;
const fontSize24 = `${baseFontSize * 1.5}px`;
const fontSize28 = `${baseFontSize * 1.75}px`;
const fontSize32 = `${baseFontSize * 2}px`;
const fontSize36 = `${baseFontSize * 2.25}px`;
const fontSize42 = `${baseFontSize * 2.625}px`;

// font weights
const fontWeightLight = "200";
const fontWeightRegular = "400";
const fontWeightBold = "700";

// leading
const bodyLeading = "1.5";
const headerLeading = "1.25";
const flatLeading = "1";

/**
 * Default Theme Buttons
 */
const redActive = "#bc1d2b";
const coolGreyActive = "#3b5c70";
const coolGreyActiveLight = "#c9d9e1";
const reactionBlueActive = "#057dbe";

const redHover = "#e4505e";
const coolGreyHover = "#5d8fa9";
const coolGreyHoverLight = "#eaeff3";
const reactionBlueHover = "#25b0f9";

const paleGrey = "#e9f0f4";
const lightBlueGrey = "#c8d9e3";

/**
 * Default Theme Spacing
 */

// old button sizing helper
const paddingBasePixels = 10;

const spacingBase = 0.625;
const baseUnit = (size) => `${spacingBase * size}rem`;

/**
 * Default Theme Borders
 */
const borderRadius = baseUnit(0.2);

/**
 * Default Theme Elements
 */

const defaultStyles = {
  rui_color_default: black55,
  rui_color_disabled: black25,
  rui_color_error: red,
  rui_color_stockWarning: red,
  rui_color_success: teal,
  rui_color_coolGrey: coolGrey,
  rui_color_coolGrey500: coolGrey500,
  rui_color_white: white,
  rui_leading_body: bodyLeading,
  rui_leading_header: headerLeading,
  rui_leading_flat: flatLeading
};

// buttons
const buttonStyles = {
  rui_buttonBackgroundColor_danger_active: redActive,
  rui_buttonBackgroundColor_danger_disabled: coolGrey200,
  rui_buttonBackgroundColor_danger_hover: redHover,
  rui_buttonBackgroundColor_danger: red,
  rui_buttonBackgroundColor_default_active: coolGreyActive,
  rui_buttonBackgroundColor_default_disabled: coolGrey200,
  rui_buttonBackgroundColor_default_hover: coolGreyHover,
  rui_buttonBackgroundColor_default: coolGrey,
  rui_buttonBackgroundColor_important_active: reactionBlueActive,
  rui_buttonBackgroundColor_important_disabled: coolGrey200,
  rui_buttonBackgroundColor_important_hover: reactionBlueHover,
  rui_buttonBackgroundColor_important: reactionBlue,
  rui_buttonBackgroundColor_secondary_active: coolGreyActiveLight,
  rui_buttonBackgroundColor_secondary_disabled: coolGrey200,
  rui_buttonBackgroundColor_secondary_hover: coolGreyHoverLight,
  rui_buttonBackgroundColor_secondary: "transparent",
  rui_buttonBackgroundColor_secondaryDanger_active: redActive,
  rui_buttonBackgroundColor_secondaryDanger_disabled: coolGrey200,
  rui_buttonBackgroundColor_secondaryDanger_hover: redHover,
  rui_buttonBackgroundColor_secondaryDanger: "transparent",
  rui_buttonBackgroundColor_textOnly_active: lightBlueGrey,
  rui_buttonBackgroundColor_textOnly_disabled: "transparent",
  rui_buttonBackgroundColor_textOnly_hover: paleGrey,
  rui_buttonBackgroundColor_textOnly: "transparent",
  rui_buttonBorderColor_danger_active: redActive,
  rui_buttonBorderColor_danger_disabled: coolGrey200,
  rui_buttonBorderColor_danger_hover: redHover,
  rui_buttonBorderColor_danger: red,
  rui_buttonBorderColor_default_active: coolGreyActive,
  rui_buttonBorderColor_default_disabled: coolGrey200,
  rui_buttonBorderColor_default_hover: coolGreyHover,
  rui_buttonBorderColor_default: coolGrey,
  rui_buttonBorderColor_important_active: reactionBlueActive,
  rui_buttonBorderColor_important_disabled: coolGrey200,
  rui_buttonBorderColor_important_hover: reactionBlueHover,
  rui_buttonBorderColor_important: reactionBlue,
  rui_buttonBorderColor_secondary_active: coolGrey,
  rui_buttonBorderColor_secondary_disabled: coolGrey200,
  rui_buttonBorderColor_secondary_hover: coolGrey,
  rui_buttonBorderColor_secondary: coolGrey,
  rui_buttonBorderColor_secondaryDanger_active: redActive,
  rui_buttonBorderColor_secondaryDanger_disabled: coolGrey200,
  rui_buttonBorderColor_secondaryDanger_hover: redHover,
  rui_buttonBorderColor_secondaryDanger: red,
  rui_buttonBorderColor_textOnly_active: lightBlueGrey,
  rui_buttonBorderColor_textOnly_disabled: "transparent",
  rui_buttonBorderColor_textOnly_hover: paleGrey,
  rui_buttonBorderColor_textOnly: "transparent",
  rui_buttonBorderRadius: "2px",
  rui_buttonForegroundColor_danger_active: white,
  rui_buttonForegroundColor_danger_disabled: white,
  rui_buttonForegroundColor_danger_hover: white,
  rui_buttonForegroundColor_danger: white,
  rui_buttonForegroundColor_default_active: white,
  rui_buttonForegroundColor_default_disabled: white,
  rui_buttonForegroundColor_default_hover: white,
  rui_buttonForegroundColor_default: white,
  rui_buttonForegroundColor_important_active: white,
  rui_buttonForegroundColor_important_disabled: white,
  rui_buttonForegroundColor_important_hover: white,
  rui_buttonForegroundColor_important: white,
  rui_buttonForegroundColor_secondary_active: coolGrey500,
  rui_buttonForegroundColor_secondary_disabled: white,
  rui_buttonForegroundColor_secondary_hover: coolGrey500,
  rui_buttonForegroundColor_secondary: coolGrey500,
  rui_buttonForegroundColor_secondaryDanger_active: white,
  rui_buttonForegroundColor_secondaryDanger_disabled: white,
  rui_buttonForegroundColor_secondaryDanger_hover: white,
  rui_buttonForegroundColor_secondaryDanger: red,
  rui_buttonForegroundColor_textOnly_active: coolGrey400,
  rui_buttonForegroundColor_textOnly_disabled: coolGrey200,
  rui_buttonForegroundColor_textOnly_hover: coolGrey400,
  rui_buttonForegroundColor_textOnly: coolGrey400,
  rui_buttonHorizontalPadding: `${paddingBasePixels * 2}px`,
  rui_buttonMinimumWidth: "100px",
  rui_buttonVerticalPadding: `${paddingBasePixels}px`,
  rui_buttonVerticalPaddingShort: `${paddingBasePixels / 2}px`
};

// input
const inputStyles = {
  rui_inputBackgroundColor_default: black02,
  rui_inputBackgroundColor_dark: white,
  rui_inputBorderColor_default: black20,
  rui_inputBorderColor_focus: teal,
  rui_inputBorderColor_error: red,
  rui_inputBorderColor_success: teal,
  rui_inputBorderRadius: borderRadius,
  rui_inputColor_default: coolGrey500,
  rui_inputColor_disabled: black25,
  rui_inputColor_error: red,
  rui_inputColor_focus: coolGrey500,
  rui_inputColor_success: black55,
  rui_inputPlaceholderColor: black20,
  rui_inputFontFamily: "inherit",
  rui_inputFontSize: fontSize14,
  rui_inputLineHeight: flatLeading,
  rui_inputVerticalPadding: baseUnit(1.2),
  rui_inputHorizontalPadding: baseUnit(1),
  rui_iconTop: baseUnit(1),
  rui_iconRight: baseUnit(1)
};

const inputIcon = {
  rui_inputIconColor_default: black55,
  rui_inputIconColor_disabled: black25,
  rui_inputIconColor_error: red,
  rui_inputIconColor_success: forestGreen,
  rui_inputIconTextPadding: baseUnit(20)
};

// textarea
const textareaStyles = {
  rui_textareaClearButtonFontSize: fontSize12,
  rui_textareaHeight: baseUnit(6),
  rui_textareaLineHeight: bodyLeading,
  rui_textareaIconPadding: `${baseUnit(0.5)} ${baseUnit(0.5)}`,
  rui_textareaIconRight: 0,
  rui_textareaIconTop: baseUnit(1)
};

// field
const fieldStyles = {
  rui_fieldMargin: `${baseUnit(1.5)} 0`
};

// label
const labelStyles = {
  rui_labelColor_default: black55,
  rui_labelColor_error: red,
  rui_labelColor_success: black55,
  rui_labelFontSize: fontSize14,
  rui_labelMargin: `0 0 ${baseUnit(1)}`
};

// help text
const helpTextStyles = {
  rui_helpTextColor: black55,
  rui_helpTextFontSize: fontSize14,
  rui_helpTextMargin: `${baseUnit(1)} 0 0`
};

// errors block
const errorsBlockStyles = {
  rui_errorsBlockColor: red,
  rui_errorsBlockFontSize: fontSize14,
  rui_errorsBlockMargin: `${baseUnit(1)} 0`,
  rui_errorsBlockIconMargin: `0 ${baseUnit(0.5)} 0 0`
};

// cartEmptyMessage
const cartEmptyMessage = {
  rui_cartEmptyMessageFontSize: baseFontSize,
  rui_cartEmptyMessageLetterSpacing: `${baseUnit(0.03)}`,
  rui_cartEmptyMessageMarginBottom: `${baseUnit(5.4)}`
};

export default {
  ...defaultStyles,
  ...buttonStyles,
  ...inputStyles,
  ...inputIcon,
  ...textareaStyles,
  ...fieldStyles,
  ...labelStyles,
  ...helpTextStyles,
  ...errorsBlockStyles,
  ...cartEmptyMessage
};
