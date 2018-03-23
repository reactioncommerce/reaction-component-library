/* eslint-disable camelcase */
import { darken, lighten, saturate } from 'polished';

const reactionBlue = "#1999dd";
const coolGrey = "#5e7480";
const coolGrey200 = "#d5d5d5";
const coolGrey400 = "#3c5d6f";
const coolGrey500 = "#3c3c3c";
const red = "#cd3f4c";
const white = "#ffffff";

"#4E8FA7"

const darkActive = (val) => saturate(0.15, darken(0.1, val));
const lightActive = (val) => saturate(0.15, lighten(0.4, val));
const lightHover1 = (val) => saturate(0.15, lighten(0.08, val));
const lightHover2 = (val) => saturate(0.15, lighten(0.5, val));

const paddingBasePixels = 10;

export default {
  rui_buttonBorderRadius: "2px",
  rui_buttonBorderColor_danger: red,
  rui_buttonBorderColor_default: coolGrey,
  rui_buttonBorderColor_disabled: coolGrey200,
  rui_buttonBorderColor_important: reactionBlue,
  rui_buttonBorderColor_secondary: coolGrey,
  rui_buttonBorderColor_danger_active: darkActive(red),
  rui_buttonBorderColor_default_active: darkActive(coolGrey),
  rui_buttonBorderColor_important_active: darkActive(reactionBlue),
  rui_buttonBorderColor_secondary_active: coolGrey,
  rui_buttonBorderColor_danger_hover: lightHover1(red),
  rui_buttonBorderColor_default_hover: lightHover1(coolGrey),
  rui_buttonBorderColor_important_hover: lightHover1(reactionBlue),
  rui_buttonBorderColor_secondary_hover: coolGrey,
  rui_buttonBackgroundColor_danger: red,
  rui_buttonBackgroundColor_default: coolGrey,
  rui_buttonBackgroundColor_disabled: coolGrey200,
  rui_buttonBackgroundColor_important: reactionBlue,
  rui_buttonBackgroundColor_secondary: "transparent",
  rui_buttonBackgroundColor_danger_active: darkActive(red),
  rui_buttonBackgroundColor_default_active: darkActive(coolGrey),
  rui_buttonBackgroundColor_important_active: darkActive(reactionBlue),
  rui_buttonBackgroundColor_secondary_active: lightActive(coolGrey),
  rui_buttonBackgroundColor_danger_hover: lightHover1(red),
  rui_buttonBackgroundColor_default_hover: lightHover1(coolGrey),
  rui_buttonBackgroundColor_important_hover: lightHover1(reactionBlue),
  rui_buttonBackgroundColor_secondary_hover: lightHover2(coolGrey),
  rui_buttonForegroundColor_danger: white,
  rui_buttonForegroundColor_default: white,
  rui_buttonForegroundColor_disabled: white,
  rui_buttonForegroundColor_important: white,
  rui_buttonForegroundColor_secondary: coolGrey500,
  rui_buttonForegroundColor_danger_active: white,
  rui_buttonForegroundColor_default_active: white,
  rui_buttonForegroundColor_important_active: white,
  rui_buttonForegroundColor_secondary_active: coolGrey500,
  rui_buttonForegroundColor_danger_hover: white,
  rui_buttonForegroundColor_default_hover: white,
  rui_buttonForegroundColor_important_hover: white,
  rui_buttonForegroundColor_secondary_hover: coolGrey500,
  rui_buttonHorizontalPadding: `${paddingBasePixels*2}px`,
  rui_buttonMinimumWidth: "100px",
  rui_buttonTextOnlyColor_default: coolGrey400,
  rui_buttonTextOnlyColor_default_active: darkActive(coolGrey400),
  rui_buttonTextOnlyColor_default_hover: lightHover1(coolGrey400),
  rui_buttonTextOnlyColor_disabled: coolGrey200,
  rui_buttonVerticalPadding: `${paddingBasePixels}px`,
  rui_buttonVerticalPaddingShort: `${paddingBasePixels/2}px`
};
