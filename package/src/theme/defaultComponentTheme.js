/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import colors from "./colors";

/**
 * Default Theme Typography
 */

// font family
const fontFamily = "'Source Sans Pro', 'Helvetica Neue', Helvetica, sans-serif";

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
 * Default Theme Shadows
 */
const depth0 = "none";
const depth1 = `0 0 1rem -0.5rem ${colors.black50}`;
const depth2 = `0 0 1rem ${colors.black50}`;

/**
 * Default Theme Breakpoints
 */
const breakpoint_xs = 320;
const breakpoint_sm = 600;
const breakpoint_md = 960;
const breakpoint_lg = 1280;
const breakpoint_xl = 1920;

/**
 * Default Theme Elements
 */

const defaultStyles = {
  rui_breakpoint_xs: breakpoint_xs,
  rui_breakpoint_sm: breakpoint_sm,
  rui_breakpoint_md: breakpoint_md,
  rui_breakpoint_lg: breakpoint_lg,
  rui_breakpoint_xl: breakpoint_xl,
  rui_color_default: colors.black55,
  rui_color_disabled: colors.black25,
  rui_color_black02: colors.black02,
  rui_color_black05: colors.black05,
  rui_color_black10: colors.black10,
  rui_color_black15: colors.black15,
  rui_color_black30: colors.black30,
  rui_color_black35: colors.black35,
  rui_color_black55: colors.black55,
  rui_color_black50: colors.black50,
  rui_color_black65: colors.black65,
  rui_color_error: colors.red,
  rui_color_stockWarning: colors.red,
  rui_color_red300: colors.red300,
  rui_color_teal: colors.teal,
  rui_color_success: colors.teal,
  rui_color_coolGrey: colors.coolGrey,
  rui_color_coolGrey100: colors.coolGrey100,
  rui_color_coolGrey200: colors.coolGrey200,
  rui_color_coolGrey300: colors.coolGrey300,
  rui_color_coolGrey400: colors.coolGrey400,
  rui_color_coolGrey500: colors.coolGrey500,
  rui_color_coolGrey600: colors.coolGrey600,
  rui_color_forestGreen300: colors.forestGreen300,
  rui_color_white: colors.white,
  rui_font_family: fontFamily,
  rui_font_size_small: fontSize14,
  rui_font_size_default: fontSize16,
  rui_font_size_h2: fontSize24,
  rui_font_size_h3: fontSize18,
  rui_font_weight_light: fontWeightLight,
  rui_font_weight_normal: fontWeightRegular,
  rui_font_weight_bold: fontWeightBold,
  rui_leading_body: bodyLeading,
  rui_leading_header: headerLeading,
  rui_leading_flat: flatLeading,
  rui_shadow_depth1: depth1,
  rui_standardPadding: `${paddingBasePixels}px`
};

// buttons
const buttonStyles = {
  rui_buttonBackgroundColor_danger_active: redActive,
  rui_buttonBackgroundColor_danger_disabled: colors.coolGrey200,
  rui_buttonBackgroundColor_danger_hover: redHover,
  rui_buttonBackgroundColor_danger: colors.red,
  rui_buttonBackgroundColor_default_active: coolGreyActive,
  rui_buttonBackgroundColor_default_disabled: colors.coolGrey200,
  rui_buttonBackgroundColor_default_hover: coolGreyHover,
  rui_buttonBackgroundColor_default: colors.coolGrey,
  rui_buttonBackgroundColor_important_active: reactionBlueActive,
  rui_buttonBackgroundColor_important_disabled: colors.coolGrey200,
  rui_buttonBackgroundColor_important_hover: reactionBlueHover,
  rui_buttonBackgroundColor_important: colors.reactionBlue,
  rui_buttonBackgroundColor_secondary_active: coolGreyActiveLight,
  rui_buttonBackgroundColor_secondary_disabled: colors.coolGrey200,
  rui_buttonBackgroundColor_secondary_hover: coolGreyHoverLight,
  rui_buttonBackgroundColor_secondary: "transparent",
  rui_buttonBackgroundColor_secondaryDanger_active: redActive,
  rui_buttonBackgroundColor_secondaryDanger_disabled: colors.coolGrey200,
  rui_buttonBackgroundColor_secondaryDanger_hover: redHover,
  rui_buttonBackgroundColor_secondaryDanger: "transparent",
  rui_buttonBackgroundColor_textOnly_active: lightBlueGrey,
  rui_buttonBackgroundColor_textOnly_disabled: "transparent",
  rui_buttonBackgroundColor_textOnly_hover: paleGrey,
  rui_buttonBackgroundColor_textOnly: "transparent",
  rui_buttonBorderColor_danger_active: redActive,
  rui_buttonBorderColor_danger_disabled: colors.coolGrey200,
  rui_buttonBorderColor_danger_hover: redHover,
  rui_buttonBorderColor_danger: colors.red,
  rui_buttonBorderColor_default_active: coolGreyActive,
  rui_buttonBorderColor_default_disabled: colors.coolGrey200,
  rui_buttonBorderColor_default_hover: coolGreyHover,
  rui_buttonBorderColor_default: colors.coolGrey,
  rui_buttonBorderColor_important_active: reactionBlueActive,
  rui_buttonBorderColor_important_disabled: colors.coolGrey200,
  rui_buttonBorderColor_important_hover: reactionBlueHover,
  rui_buttonBorderColor_important: colors.reactionBlue,
  rui_buttonBorderColor_secondary_active: colors.coolGrey,
  rui_buttonBorderColor_secondary_disabled: colors.coolGrey200,
  rui_buttonBorderColor_secondary_hover: colors.coolGrey,
  rui_buttonBorderColor_secondary: colors.coolGrey,
  rui_buttonBorderColor_secondaryDanger_active: redActive,
  rui_buttonBorderColor_secondaryDanger_disabled: colors.coolGrey200,
  rui_buttonBorderColor_secondaryDanger_hover: redHover,
  rui_buttonBorderColor_secondaryDanger: colors.red,
  rui_buttonBorderColor_textOnly_active: lightBlueGrey,
  rui_buttonBorderColor_textOnly_disabled: "transparent",
  rui_buttonBorderColor_textOnly_hover: paleGrey,
  rui_buttonBorderColor_textOnly: "transparent",
  rui_buttonBorderRadius: "2px",
  rui_buttonForegroundColor_danger_active: colors.white,
  rui_buttonForegroundColor_danger_disabled: colors.white,
  rui_buttonForegroundColor_danger_hover: colors.white,
  rui_buttonForegroundColor_danger: colors.white,
  rui_buttonForegroundColor_default_active: colors.white,
  rui_buttonForegroundColor_default_disabled: colors.white,
  rui_buttonForegroundColor_default_hover: colors.white,
  rui_buttonForegroundColor_default: colors.white,
  rui_buttonForegroundColor_important_active: colors.white,
  rui_buttonForegroundColor_important_disabled: colors.white,
  rui_buttonForegroundColor_important_hover: colors.white,
  rui_buttonForegroundColor_important: colors.white,
  rui_buttonForegroundColor_secondary_active: colors.coolGrey500,
  rui_buttonForegroundColor_secondary_disabled: colors.white,
  rui_buttonForegroundColor_secondary_hover: colors.coolGrey500,
  rui_buttonForegroundColor_secondary: colors.coolGrey500,
  rui_buttonForegroundColor_secondaryDanger_active: colors.white,
  rui_buttonForegroundColor_secondaryDanger_disabled: colors.white,
  rui_buttonForegroundColor_secondaryDanger_hover: colors.white,
  rui_buttonForegroundColor_secondaryDanger: colors.red,
  rui_buttonForegroundColor_textOnly_active: colors.coolGrey400,
  rui_buttonForegroundColor_textOnly_disabled: colors.coolGrey200,
  rui_buttonForegroundColor_textOnly_hover: colors.coolGrey400,
  rui_buttonForegroundColor_textOnly: colors.coolGrey400,
  rui_buttonHorizontalPadding: `${paddingBasePixels * 2}px`,
  rui_buttonMinimumWidth: "100px",
  rui_buttonVerticalPadding: `${paddingBasePixels}px`,
  rui_buttonVerticalPaddingShort: `${paddingBasePixels / 2}px`
};

// input
const inputStyles = {
  rui_inputBackgroundColor_default: colors.black02,
  rui_inputBackgroundColor_dark: colors.white,
  rui_inputBorderColor_default: colors.black20,
  rui_inputBorderColor_focus: colors.teal,
  rui_inputBorderColor_error: colors.red,
  rui_inputBorderColor_success: colors.teal,
  rui_inputBorderRadius: borderRadius,
  rui_inputColor_default: colors.coolGrey500,
  rui_inputColor_disabled: colors.black25,
  rui_inputColor_error: colors.red,
  rui_inputColor_focus: colors.coolGrey500,
  rui_inputColor_success: colors.black55,
  rui_inputPlaceholderColor: colors.black20,
  rui_inputFontFamily: fontFamily,
  rui_inputFontSize: fontSize14,
  rui_inputLineHeight: flatLeading,
  rui_inputVerticalPadding: baseUnit(0.8),
  rui_inputHorizontalPadding: baseUnit(1),
  rui_iconTop: baseUnit(1),
  rui_iconRight: baseUnit(1)
};

const inputIcon = {
  rui_inputIconColor_default: colors.black55,
  rui_inputIconColor_disabled: colors.black25,
  rui_inputIconColor_error: colors.red,
  rui_inputIconColor_success: colors.forestGreen,
  rui_inputIconTextPadding: baseUnit(20),
  rui_inputIconWrapperSize: "1.429em"
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

// select

const selectStyles = {
  rui_selectHoverColor: colors.reactionBlue100,
  rui_selectedBackgroundColor: colors.reactionBlue200,
  rui_selectFocusBorderColor: colors.teal,
  rui_selectBorderRadius: baseUnit(0.2),
  rui_selectMenuBorderRadius: `0 ${baseUnit(0.2)}`,
  rui_selectIndicatorColor: colors.coolGrey500,
  rui_selectBorderColor: colors.black20,
  rui_selectMenuBorder: `${baseUnit(0.1)} solid ${colors.black20}`,
  rui_selectLetterSpacing: `${baseUnit(0.03)}`,
  rui_selectTextColor: colors.coolGrey500
};

// field
const fieldStyles = {
  rui_fieldMargin: `${baseUnit(1.5)} 0`
};

// label
const labelStyles = {
  rui_labelColor_default: colors.black55,
  rui_labelColor_error: colors.red,
  rui_labelColor_success: colors.black55,
  rui_labelFontSize: fontSize14,
  rui_labelMargin: `0 0 ${baseUnit(1)}`
};

// help text
const helpTextStyles = {
  rui_helpTextColor: colors.black55,
  rui_helpTextFontSize: fontSize14,
  rui_helpTextMargin: `${baseUnit(1)} 0 0`
};

// errors block
const errorsBlockStyles = {
  rui_errorsBlockColor: colors.red,
  rui_errorsBlockFontSize: fontSize14,
  rui_errorsBlockMargin: `${baseUnit(1)} 0`,
  rui_errorsBlockIconColor: colors.red,
  rui_errorsBlockIconMargin: `0 ${baseUnit(0.5)} 0 0`
};

// checkoutActionComplete
const checkoutActions = {
  rui_checkoutActionCompleteMobileMargin: `${baseUnit(1)}`
};

// checkbox
const checkbox = {
  rui_checkboxHeightAndWidth: "1.4em",
  rui_checkboxLeftSpacing: "0",
  rui_checkboxTopSpacing: "0",
  rui_checkboxBorderColor: colors.coolGrey500,
  rui_checkboxBorderRadius: "2px",
  rui_checkboxBorderWidth: "2px",
  rui_checkboxFocusStyle: "rgb(59, 153, 252) auto 5px",
  rui_checkboxDisabledColor: colors.black10,
  rui_checkboxDisabledOpacity: ".5",
  rui_checkboxLabelSpacing: "2.2em",
  rui_checkboxLabelFontSize: fontSize14,
  rui_checkboxIconColor: colors.coolGrey500,
  rui_checkboxIconSize: "0.875em",
  rui_checkboxIconLeftSpacing: "0.3em",
  rui_checkboxIconTopSpacing: "0.25em",
  rui_checkboxVerticalSpacing: "17px"
};

// selectableItem
const selectableItem = {
  rui_selectableItemRadioButtonCheckSize: "10px",
  rui_selectableItemRadioButtonColor: colors.coolGrey500,
  rui_selectableItemLabelColor: colors.coolGrey500,
  rui_selectableItemLabelLetterSpacing: "0.3px",
  rui_selectableItemLabelFontSize: fontSize14,
  rui_selectableItemRadioButtonBorder: `2px solid ${colors.coolGrey500}`,
  rui_selectableItemRadioButtonSize: "20px",
  rui_selectableItemRadioButtonMargin: "0 10px 0 0",
  rui_selectableItemRadioButtonBackgroundColor: colors.white,
  rui_selectableItemLabelFontFamily: fontFamily,
  rui_selectableItemDetailFontSize: fontSize16,
  rui_selectableItemRadioFocus: `0 0 0 2px ${colors.teal}`,
  rui_selectableItemRadioFocusOutline: "1px solid transparent",
  rui_selectableItemRadioDisabledOpacity: ".5",
  rui_selectableItemRadioDisabledFillColor: colors.black10,
  rui_selectableItemRadioDisabledCursor: "not-allowed"
};

// selectableList
const selectableList = {
  rui_selectableListBorderColor: colors.black10,
  rui_selectableListBorderStyle: "1px solid",
  rui_selectableListBorderRadius: "2px",
  rui_selectableListPadding: "0",
  rui_selectableListMargin: "0",
  rui_selectableListHeight: "50px",
  rui_selectableListHeightMobile: "60px",
  rui_selectableListItemPadding: "0 10px",
  rui_selectableListFontFamily: fontFamily,
  rui_selectableListDetailFontSize: fontSize14,
  rui_selectableListLabelFontWeight: fontWeightBold,
  rui_selectableListIconMargin: "0 10px 0 0",
  rui_selectableListIconLeft: "30px",
  rui_selectableListIconWidth: "38px",
  rui_selectableListIconHeight: "24px"
};

// viewerinfo
const viewerInfo = {
  rui_viewerInfo_initials_size: "30px"
};

const catalogGrid = {
  rui_catalogGrid3PerRowMinWidth: 650,
  rui_catalogGrid4PerRowMinWidth: 960
};

export default {
  ...defaultStyles,
  ...buttonStyles,
  ...inputStyles,
  ...inputIcon,
  ...textareaStyles,
  ...selectStyles,
  ...fieldStyles,
  ...labelStyles,
  ...helpTextStyles,
  ...errorsBlockStyles,
  ...checkoutActions,
  ...checkbox,
  ...selectableItem,
  ...selectableList,
  ...viewerInfo,
  ...catalogGrid
};
