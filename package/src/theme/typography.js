import colors from "./colors";

export const fontFamily = "'Source Sans Pro', 'Helvetica Neue', Helvetica, sans-serif";
const fontWeightRegular = 400;
const fontWeightBold = 700;
const fontWeightSemiBold = 600;

const bodyTextColor = colors.coolGrey500;
const captionTextColor = colors.black30;
const titleTextColor = "#505558";

export default {
  titleText: {
    color: titleTextColor,
    fontFamily,
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: fontWeightRegular,
    letterSpacing: ".03em",
    lineHeight: "1.25"
  },
  titleTextBold: {
    color: titleTextColor,
    fontFamily,
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: fontWeightBold,
    letterSpacing: ".03em",
    lineHeight: "1.25"
  },
  headingText: {
    color: titleTextColor,
    fontFamily,
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: fontWeightRegular,
    letterSpacing: ".03em",
    lineHeight: "1.25"
  },
  headingTextBold: {
    color: titleTextColor,
    fontFamily,
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: fontWeightBold,
    letterSpacing: ".03em",
    lineHeight: "1.25"
  },
  subheadingText: {
    color: titleTextColor,
    fontFamily,
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: fontWeightRegular,
    letterSpacing: ".03em",
    lineHeight: "1.25"
  },
  subheadingTextBold: {
    color: titleTextColor,
    fontFamily,
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: fontWeightBold,
    letterSpacing: ".03em",
    lineHeight: "1.25"
  },
  bodyText: {
    color: bodyTextColor,
    fontFamily,
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: fontWeightRegular,
    letterSpacing: ".03em",
    lineHeight: "1.5"
  },
  bodyTextBold: {
    color: bodyTextColor,
    fontFamily,
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: fontWeightBold,
    letterSpacing: ".03em",
    lineHeight: "1.5"
  },
  bodyTextSemiBold: {
    color: bodyTextColor,
    fontFamily,
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: fontWeightSemiBold,
    letterSpacing: ".03em",
    lineHeight: "1.5"
  },
  labelText: {
    color: titleTextColor,
    fontFamily,
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: fontWeightRegular,
    letterSpacing: ".02em",
    lineHeight: "1.25"
  },
  labelTextBold: {
    color: titleTextColor,
    fontFamily,
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: fontWeightBold,
    letterSpacing: ".02em",
    lineHeight: "1.25"
  },
  captionText: {
    color: captionTextColor,
    fontFamily,
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: fontWeightRegular,
    letterSpacing: ".02em",
    lineHeight: "1.25"
  },
  captionTextBold: {
    color: captionTextColor,
    fontFamily,
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: fontWeightBold,
    letterSpacing: ".02em",
    lineHeight: "1.25"
  }
};
