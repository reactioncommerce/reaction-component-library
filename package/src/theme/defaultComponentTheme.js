/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import colors from "./colors";
import padding from "./padding";
import typography, { fontFamily } from "./typography";

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
 * Default Theme
 */
const standardBorderRadius = "2px";
const duration = "250ms";
const ease = "cubic-bezier(0.785, 0.135, 0.15, 0.86)";

/**
 * Default Theme Elements
 */
const rui_components = {
  Accordion: {
    borderColor: colors.black10,
    borderRadius: standardBorderRadius,
    borderStyle: "solid",
    borderWidth: "1px",
    padding: "10px 15px",
    paddingBottom: padding.fourteen,
    paddingLeft: padding.sixteen,
    paddingRight: padding.sixteen,
    paddingTop: padding.fourteen,
    iconHeight: "24px",
    iconLeft: "30px",
    iconSpacingToLabel: "10px",
    iconWidth: "38px",
    headerHeight: "50px",
    headerHeightMobile: "60px",
    contentBackgroundColor: colors.black02,
    openTransition: `max-height ${duration} ${ease}, padding 0ms ${ease}`,
    closeTransition: `max-height ${duration} ${ease}, padding 0ms ${ease} ${duration}, border 0ms ${ease} ${duration}`,
    iconTransition: `transform ${duration} ${ease}`
  },
  AccordionFormList: {
    actionButtonColor: colors.coolGreyActive,
    actionButtonHoverColor: colors.coolGreyHover,
    actionButtonIconColor: colors.coolGrey500,
    actionButtonIconHeight: "20px",
    actionButtonIconMarginRight: "10px",
    actionButtonIconWidth: "20px",
    actionPaddingBottom: padding.sixteen,
    actionPaddingLeft: "0px",
    actionPaddingRight: "0px",
    actionPaddingTop: padding.sixteen,
    addActionPaddingBottom: padding.sixteen,
    addActionPaddingLeft: padding.sixteen,
    addActionPaddingRight: padding.sixteen,
    addActionPaddingTop: padding.sixteen,
    actionDeleteButtonHoverColor: colors.redHover,
    spaceBetweenActiveActionButtons: padding.sixteen
  },
  AccountProfileInfo: {
    spacingAfterEmail: "4px",
    spacingAfterName: "4px",
    spacingBetweenImageAndContent: "16px"
  },
  Address: {
    addressPropertyErrorBackgroundColor: colors.red100,
    addressPropertyErrorBorderColor: colors.red400,
    addressPropertyErrorBorderRadius: standardBorderRadius,
    addressPropertyErrorBorderStyle: "solid",
    addressPropertyErrorBorderWidth: "1px",
    addressPropertyErrorColor: colors.red400,
    addressPropertyErrorPaddingBottom: "0",
    addressPropertyErrorPaddingLeft: padding.four,
    addressPropertyErrorPaddingRight: padding.four,
    addressPropertyErrorPaddingTop: "0"
  },
  AddressReview: {
    formSpacingTop: "40px"
  },
  BadgeOverlay: {
    fadedOpacity: "0.5"
  },
  BadgeOverlayBadgeLabel: {
    typography: {
      color: "inherit",
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "0.5px"
    }
  },
  BadgeOverlayPrimaryBadge: {
    backgroundColor_backorder: colors.coolGrey,
    backgroundColor_bestseller: colors.teal,
    backgroundColor_lowQuantity: colors.coolGrey,
    backgroundColor_sale: colors.red300,
    backgroundColor_soldOut: colors.coolGrey,
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
    color_backorder: colors.white,
    color_bestseller: colors.white,
    color_lowQuantity: colors.white,
    color_sale: colors.white,
    color_soldOut: colors.white,
    offsetBottom: "auto",
    offsetLeft: "8px",
    offsetRight: "auto",
    offsetTop: "8px",
    paddingBottom: padding.four,
    paddingLeft: padding.eight,
    paddingRight: padding.eight,
    paddingTop: padding.four
  },
  BadgeOverlaySecondaryBadge: {
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    color: colors.coolGrey,
    offsetBottom: "auto",
    offsetLeft: "auto",
    offsetRight: padding.eight,
    offsetTop: "8px",
    paddingBottom: padding.four,
    paddingLeft: padding.eight,
    paddingRight: padding.eight,
    paddingTop: padding.four
  },
  Button: {
    backgroundColor_danger_active: colors.red400,
    backgroundColor_danger_disabled: colors.coolGrey200,
    backgroundColor_danger_hover: colors.redHover,
    backgroundColor_danger: colors.red,
    backgroundColor_default_active: colors.coolGreyActive,
    backgroundColor_default_disabled: colors.coolGrey200,
    backgroundColor_default_hover: colors.coolGreyHover,
    backgroundColor_default: colors.coolGrey,
    backgroundColor_important_active: colors.reactionBlueActive,
    backgroundColor_important_disabled: colors.coolGrey200,
    backgroundColor_important_hover: colors.reactionBlueHover,
    backgroundColor_important: colors.reactionBlue,
    backgroundColor_secondary_active: colors.coolGreyActiveLight,
    backgroundColor_secondary_disabled: colors.coolGrey200,
    backgroundColor_secondary_hover: colors.coolGreyHoverLight,
    backgroundColor_secondary: "transparent",
    backgroundColor_secondaryDanger_active: colors.red400,
    backgroundColor_secondaryDanger_disabled: colors.coolGrey200,
    backgroundColor_secondaryDanger_hover: colors.redHover,
    backgroundColor_secondaryDanger: "transparent",
    backgroundColor_textOnly_active: colors.lightBlueGrey,
    backgroundColor_textOnly_disabled: "transparent",
    backgroundColor_textOnly_hover: colors.paleGrey,
    backgroundColor_textOnly: "transparent",
    borderColor_danger_active: colors.red400,
    borderColor_danger_disabled: colors.coolGrey200,
    borderColor_danger_hover: colors.redHover,
    borderColor_danger: colors.red,
    borderColor_default_active: colors.coolGreyActive,
    borderColor_default_disabled: colors.coolGrey200,
    borderColor_default_hover: colors.coolGreyHover,
    borderColor_default: colors.coolGrey,
    borderColor_important_active: colors.reactionBlueActive,
    borderColor_important_disabled: colors.coolGrey200,
    borderColor_important_hover: colors.reactionBlueHover,
    borderColor_important: colors.reactionBlue,
    borderColor_secondary_active: colors.coolGrey,
    borderColor_secondary_disabled: colors.coolGrey200,
    borderColor_secondary_hover: colors.coolGrey,
    borderColor_secondary: colors.coolGrey,
    borderColor_secondaryDanger_active: colors.red400,
    borderColor_secondaryDanger_disabled: colors.coolGrey200,
    borderColor_secondaryDanger_hover: colors.redHover,
    borderColor_secondaryDanger: colors.red,
    borderColor_textOnly_active: colors.lightBlueGrey,
    borderColor_textOnly_disabled: "transparent",
    borderColor_textOnly_hover: colors.paleGrey,
    borderColor_textOnly: "transparent",
    borderRadius: standardBorderRadius,
    foregroundColor_danger_active: colors.white,
    foregroundColor_danger_disabled: colors.white,
    foregroundColor_danger_hover: colors.white,
    foregroundColor_danger: colors.white,
    foregroundColor_default_active: colors.white,
    foregroundColor_default_disabled: colors.white,
    foregroundColor_default_hover: colors.white,
    foregroundColor_default: colors.white,
    foregroundColor_important_active: colors.white,
    foregroundColor_important_disabled: colors.white,
    foregroundColor_important_hover: colors.white,
    foregroundColor_important: colors.white,
    foregroundColor_secondary_active: colors.coolGrey500,
    foregroundColor_secondary_disabled: colors.white,
    foregroundColor_secondary_hover: colors.coolGrey500,
    foregroundColor_secondary: colors.coolGrey500,
    foregroundColor_secondaryDanger_active: colors.white,
    foregroundColor_secondaryDanger_disabled: colors.white,
    foregroundColor_secondaryDanger_hover: colors.white,
    foregroundColor_secondaryDanger: colors.red,
    foregroundColor_textOnly_active: colors.coolGrey400,
    foregroundColor_textOnly_disabled: colors.coolGrey200,
    foregroundColor_textOnly_hover: colors.coolGrey400,
    foregroundColor_textOnly: colors.coolGrey400,
    horizontalPadding: padding.twenty,
    minimumWidth: "100px",
    verticalPadding: padding.ten,
    verticalPaddingShort: padding.five
  },
  CartEmptyMessage: {
    textToButtonSpacing: "54px"
  },
  CartItem: {
    borderBottomColor: colors.black05,
    borderBottomWidth: "1px",
    borderLeftColor: colors.black05,
    borderLeftWidth: 0,
    borderRightColor: colors.black05,
    borderRightWidth: 0,
    borderTopColor: colors.black05,
    borderTopWidth: 0,
    imageContentSpacing: padding.sixteen,
    paddingBottom: padding.sixteen,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: padding.sixteen,
    subtotalDisplaySpacingAbove: padding.ten,
    quantityInputSpacingAbove: padding.twelve,
    quantityInputSpacingBelow: padding.eight,
    removeButtonColor_focus: colors.coolGrey,
    removeButtonColor: colors.coolGrey400,
    removeButtonSpacingAbove: padding.eight,
    removeButtonSpacingBelow: 0
  },
  CartSummaryLeftColumnHeader: {
    typography: {
      color: colors.coolGrey500,
      lineHeight: 1
    }
  },
  CartSummaryRightColumnHeader: {
    typography: {
      color: colors.black30,
      lineHeight: 1
    }
  },
  CartSummaryLeftColumn: {
    typography: {
      color: colors.coolGrey500,
      lineHeight: 1
    }
  },
  CartSummaryRightColumn: {
    typography: {
      color: colors.coolGrey500,
      lineHeight: 1
    }
  },
  CartSummaryTitle: {
    typography: {
      color: colors.coolGrey500,
      lineHeight: 1
    }
  },
  CartSummaryDiscount: {
    typography: {
      color: colors.forestGreen300,
      lineHeight: 1
    }
  },
  CartSummarySurcharge: {
    typography: {
      color: colors.coolGrey500,
      lineHeight: 1
    }
  },
  CartSummaryTotal: {
    typography: {
      color: colors.coolGrey500,
      lineHeight: 1
    }
  },
  CartItemDetailAttributes: {
    typography: {
      color: colors.black65
    }
  },
  CartItemDetailTitle: {
    color_focus: colors.coolGrey300,
    marginTop: 0,
    marginBottom: padding.ten,
    marginLeft: 0,
    marginRight: 0,
    typography: {
      lineHeight: 1
    }
  },
  CartSummary: {
    backgroundColor: colors.black02,
    borderColor: colors.black10,
    borderWidth: "1px",
    denseBackgroundColor: "transparent",
    paddingBottom: 0,
    paddingLeft: padding.sixteen,
    paddingRight: padding.sixteen,
    paddingTop: padding.sixteen,
    rowDensePaddingBottom: padding.eight,
    rowDensePaddingTop: padding.eight,
    rowPaddingBottom: padding.sixteen,
    rowPaddingTop: padding.sixteen
  },
  CatalogGrid: {
    fourPerRowMinWidth: breakpoint_md,
    threePerRowMinWidth: breakpoint_sm
  },
  CatalogGridItem: {
    mediaBackgroundColor: colors.white,
    verticalSpacingBetweenImageAndInfo: padding.ten
  },
  Checkbox: {
    borderColor: colors.coolGrey500,
    borderRadius: standardBorderRadius,
    borderWidth: "2px",
    disabledColor: colors.black10,
    disabledOpacity: ".5",
    focusStyle: "rgb(59, 153, 252) auto 5px",
    iconColor: colors.coolGrey500,
    iconLeftOffset: "0.3em",
    iconSize: "0.875em",
    iconTopOffset: "0.25em",
    labelSpacing: "2.2em",
    leftSpacing: "0",
    size: "1.4em",
    topSpacing: "0",
    verticalSpacing: "17px"
  },
  CheckoutActionComplete: {
    mobileMargin: padding.ten,
    paddingBottom: padding.sixteen,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: padding.sixteen
  },
  CheckoutActions: {
    borderBetweenColor: colors.black10,
    borderBetweenWidth: "1px",
    borderLeftColor: colors.black10,
    borderLeftWidth: 0,
    borderRightColor: colors.black10,
    borderRightWidth: 0,
    itemPaddingBottom: padding.sixteen,
    itemPaddingLeft: 0,
    itemPaddingRight: 0,
    itemPaddingTop: padding.sixteen,
    placeOrderButtonWidth: "252px",
    spaceAbovePlaceOrderButton: padding.sixteen,
    spaceBetweenActiveActionButtons: padding.sixteen
  },
  CheckoutEmailAddress: {
    borderBottomColor: colors.black10,
    borderBottomWidth: "2px",
    borderLeftColor: colors.black10,
    borderLeftWidth: 0,
    borderRightColor: colors.black10,
    borderRightWidth: 0,
    borderTopColor: colors.black10,
    borderTopWidth: 0,
    paddingBottom: padding.sixteen,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: padding.sixteen,
    typography: {
      color: colors.coolGrey500
    }
  },
  CheckoutTopHat: {
    backgroundColor: colors.black05,
    height: "35px"
  },
  CheckoutTopHatMessage: {
    typography: {
      color: colors.coolGrey500
    }
  },
  ErrorsBlock: {
    iconColor: colors.red,
    iconSpacingToLabel: padding.five,
    spacingAbove: padding.ten,
    spacingBelow: padding.ten,
    typography: {
      color: colors.red
    }
  },
  Field: {
    spacingAbove: padding.fifteen,
    spacingBelow: padding.fifteen
  },
  FieldHelp: {
    spacingToInput: padding.ten
  },
  FieldLabel: {
    color_default: colors.black55,
    color_error: colors.red,
    color_focus: colors.teal,
    color_success: colors.black55,
    spacingToInput: padding.ten
  },
  FinalReviewCheckoutAction: {
    borderColor: colors.black10,
    borderWidth: "1px",
    itemsWrapperPaddingBottom: 0,
    itemsWrapperPaddingLeft: padding.sixteen,
    itemsWrapperPaddingRight: padding.sixteen,
    itemsWrapperPaddingTop: 0,
    summaryWrapperPaddingBottom: 0,
    summaryWrapperPaddingLeft: padding.sixteen,
    summaryWrapperPaddingRight: padding.sixteen,
    summaryWrapperPaddingTop: 0
  },
  InlineAlert: {
    backgroundColor_error: colors.redBackground,
    backgroundColor_information: colors.reactionBlueBackground,
    backgroundColor_success: colors.forestGreenBackground,
    backgroundColor_warning: colors.yellowBackground,
    borderColor_error: colors.redBorder,
    borderColor_information: colors.reactionBlueBorder,
    borderColor_success: colors.forestGreenBorder,
    borderColor_warning: colors.yellowBorder,
    borderWidth: "2px",
    borderStyle: "solid",
    borderRadius: standardBorderRadius,
    buttonHeight: "15px",
    buttonPositionRight: "15px",
    buttonPositionTop: "15px",
    buttonWidth: "15px",
    color_error: colors.red600,
    color_information: colors.reactionBlue500,
    color_success: colors.forestGreen600,
    color_warning: colors.yellow600,
    paddingBottom: padding.fifteen,
    paddingLeft: padding.fifteen,
    paddingRight: padding.fifteen,
    paddingTop: padding.fifteen,
    transition: `border 0s ${ease} ${duration}, max-height 0s ${ease} ${duration}, padding 0s ${ease} ${duration}, opacity ${duration} ${ease}`,
    titlePaddingBottom: "10px"
  },
  InPageMenuItemContainer: {
    backgroundColor_default: colors.black05,
    backgroundColor_selected: colors.reactionBlue100,
    marginBottom: "4px",
    marginLeft: "0px",
    marginRight: "0px",
    marginTop: "0px",
    paddingBottom: "13px",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "13px",
    typography: {
      lineHeight: 1
    }
  },
  InPageMenuItemIcon: {
    height: "24px",
    marginBottom: "0px",
    marginLeft: "0px",
    marginRight: "0px",
    marginTop: "0px",
    typography: {
      lineHeight: 1
    },
    width: "24px"
  },
  InPageMenuItemText: {
    typography: {
      lineHeight: 1
    }
  },
  Input: {
    backgroundColor_dark: colors.white,
    backgroundColor_default: colors.black02,
    borderColor_default: colors.black20,
    borderColor_error: colors.red,
    borderColor_focus: colors.teal,
    borderColor_success: colors.teal,
    borderRadius: standardBorderRadius,
    clearButtonColor: colors.coolGrey,
    clearButtonLargeBackgroundColor: colors.white,
    clearButtonLargeBorderColor: colors.coolGrey,
    color_default: colors.coolGrey500,
    color_disabled: colors.black25,
    color_error: colors.red,
    color_focus: colors.coolGrey500,
    color_success: colors.black55,
    fontFamily,
    fontSize: "14px",
    horizontalPadding: padding.ten,
    iconColor_default: colors.black55,
    iconColor_disabled: colors.black25,
    iconColor_error: colors.red,
    iconColor_success: colors.forestGreen,
    iconWrapperSize: "1.429em",
    lineHeight: 1,
    placeholderColor: colors.black20,
    verticalPadding: padding.eight
  },
  MiniCart: {
    borderBottomColor: colors.black10,
    borderBottomWidth: "1px",
    borderLeftColor: colors.black10,
    borderLeftWidth: "1px",
    borderRightColor: colors.black10,
    borderRightWidth: "1px",
    borderTopColor: colors.black10,
    borderTopWidth: "1px",
    listHeightToBeginScrolling: "420px",
    listPaddingBottom: 0,
    listPaddingLeft: padding.ten,
    listPaddingRight: padding.ten,
    listPaddingTop: 0,
    maxWidth: "360px"
  },
  MiniCartFooter: {
    borderTopColor: colors.black10,
    borderTopWidth: "1px",
    boxShadow_overflow: depth1,
    boxShadow: depth0,
    paddingBottom: padding.sixteen,
    paddingLeft: padding.sixteen,
    paddingRight: padding.sixteen,
    paddingTop: 0
  },
  MiniCartFooterMessage: {
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: padding.eight
  },
  MiniCartSummary: {
    paddingBottom: padding.eight,
    paddingLeft: padding.eight,
    paddingRight: padding.eight,
    paddingTop: padding.eight
  },
  MiniCartSummaryLeft: {
    cellPaddingBottom: padding.eight,
    cellPaddingLeft: padding.eight,
    cellPaddingRight: padding.five,
    cellPaddingTop: padding.eight
  },
  MiniCartSummaryRight: {
    cellPaddingBottom: padding.eight,
    cellPaddingLeft: padding.five,
    cellPaddingRight: padding.eight,
    cellPaddingTop: padding.eight
  },
  MultiSelect: {
    borderBottomLeftRadius: standardBorderRadius,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: standardBorderRadius,
    indicatorColor: colors.coolGrey500,
    letterSpacing: "0.3px",
    optionHoverColor: colors.reactionBlue100,
    paddingLeft: padding.two,
    paddingRight: padding.two,
    selectedOptionBackgroundColor: colors.reactionBlue200,
    textColor: colors.coolGrey500,
    multiValueBackgroundColor: colors.reactionBlue100,
    multiValueBorderColor: colors.coolGrey300,
    multiValueBorderStyle: "solid",
    multiValueBorderWidth: "1px",
    multiValueBorderRadius: standardBorderRadius,
    multiValueLabelColor: colors.black65,
    multiValueRemoveHoverBackgroundColor: colors.coolGrey300,
    multiValueRemoveHoverColor: colors.reactionBlue100,
    multiValueRemoveLeftSpacing: "5px"
  },
  PriceCompare: {
    typography: {
      color: colors.black25
    }
  },
  ProfileImage: {
    backgroundColor: colors.teal
  },
  ProfileImageInitials: {
    typography: {
      color: colors.white
    }
  },
  ProgressiveImage: {
    backgroundColor: colors.white
  },
  Select: {
    borderBottomLeftRadius: standardBorderRadius,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: standardBorderRadius,
    indicatorColor: colors.coolGrey500,
    letterSpacing: "0.3px",
    optionHoverColor: colors.reactionBlue100,
    selectedOptionBackgroundColor: colors.reactionBlue200,
    textColor: colors.coolGrey500,
    multiValueBackgroundColor: colors.reactionBlue100,
    multiValueBorderColor: colors.coolGrey300,
    multiValueBorderStyle: "solid",
    multiValueBorderWidth: "1px",
    multiValueBorderRadius: standardBorderRadius,
    multiValueLabelColor: colors.black65,
    multiValueRemoveHoverBackgroundColor: colors.coolGrey300,
    multiValueRemoveHoverColor: colors.reactionBlue100,
    multiValueRemoveLeftSpacing: "5px"
  },
  SelectableItemRadioButton: {
    backgroundColor: colors.white,
    borderColor: colors.coolGrey500,
    borderWidth: "2px",
    checkSize: "10px",
    color: colors.coolGrey500,
    disabledCursor: "not-allowed",
    disabledFillColor: colors.black10,
    disabledOpacity: ".5",
    focus: `0 0 0 2px ${colors.teal}`,
    focusOutline: "1px solid transparent",
    size: "20px",
    spacingToLabel: "10px"
  },
  SelectableList: {
    borderColor: colors.black10,
    borderRadius: standardBorderRadius,
    borderStyle: "solid",
    borderWidth: "1px",
    height: "50px",
    heightMobile: "60px",
    iconHeight: "24px",
    iconLeft: "30px",
    iconSpacingToLabel: "10px",
    iconWidth: "38px",
    itemPaddingBottom: "0",
    itemPaddingLeft: "10px",
    itemPaddingRight: "10px",
    itemPaddingTop: "0",
    leftAlignedLabelFontWeight: 700,
    leftAlignedDetailSpacingToLabel: "2px",
    horizontalItemPaddingBottom: padding.twenty,
    horizontalItemPaddingLeft: padding.twenty,
    horizontalItemPaddingRight: padding.twenty,
    horizontalItemPaddingTop: padding.twenty,
    horizontalFirstItemPaddingRight: "40px",
    horizontalLastItemPaddingLeft: "40px",
    stackedSpacingToLabel: "30px",
    stackedSpacingBelowLabel: "10px"
  },
  SelectMenu: {
    borderBottomColor: colors.black20,
    borderBottomLeftRadius: standardBorderRadius,
    borderBottomRightRadius: 0,
    borderBottomWidth: "1px",
    borderLeftColor: colors.black20,
    borderLeftWidth: "1px",
    borderRightColor: colors.black20,
    borderRightWidth: "1px",
    borderTopLeftRadius: 0,
    borderTopRightRadius: standardBorderRadius
  },
  ShopLogo: {
    height: "auto"
  },
  StockWarning: {
    typography: {
      color: colors.red
    }
  },
  Textarea: {
    clearButtonFontSize: "12px",
    clearButtonPadding: "10px",
    height: "60px",
    iconRight: 0,
    iconTop: padding.ten,
    lineHeight: "1.5"
  }
};

export default {
  rui_breakpoints: {
    xs: breakpoint_xs,
    sm: breakpoint_sm,
    md: breakpoint_md,
    lg: breakpoint_lg,
    xl: breakpoint_xl
  },
  rui_components,
  rui_typography: typography
};
