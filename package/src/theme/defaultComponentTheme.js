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

/**
 * Default Theme Elements
 */

// input
const inputStyles = {
  rui_inputBackgroundColor_default: colors.black02,
  rui_inputBackgroundColor_dark: colors.white,
  rui_inputBorderColor_default: colors.black20,
  rui_inputBorderColor_focus: colors.teal,
  rui_inputBorderColor_error: colors.red,
  rui_inputBorderColor_success: colors.teal,
  rui_inputBorderRadius: standardBorderRadius,
  rui_inputClearButtonColor: colors.coolGrey,
  rui_inputClearButtonLargeBackgroundColor: colors.white,
  rui_inputClearButtonLargeBorderColor: colors.coolGrey,
  rui_inputColor_default: colors.coolGrey500,
  rui_inputColor_disabled: colors.black25,
  rui_inputColor_error: colors.red,
  rui_inputColor_focus: colors.coolGrey500,
  rui_inputColor_success: colors.black55,
  rui_inputPlaceholderColor: colors.black20,
  rui_inputFontFamily: fontFamily,
  rui_inputFontSize: "14px",
  rui_inputLineHeight: 1,
  rui_inputVerticalPadding: padding.eight,
  rui_inputHorizontalPadding: padding.ten,
  rui_iconTop: padding.ten,
  rui_iconRight: padding.ten
};

const inputIcon = {
  rui_inputIconColor_default: colors.black55,
  rui_inputIconColor_disabled: colors.black25,
  rui_inputIconColor_error: colors.red,
  rui_inputIconColor_success: colors.forestGreen,
  rui_inputIconTextPadding: "200px",
  rui_inputIconWrapperSize: "1.429em"
};

// textarea
const textareaStyles = {
  rui_textareaClearButtonFontSize: "12px",
  rui_textareaClearButtonPadding: "10px",
  rui_textareaHeight: "60px",
  rui_textareaIconRight: 0,
  rui_textareaIconTop: padding.ten,
  rui_textareaLineHeight: "1.5"
};

// select
const selectStyles = {
  rui_selectBorderBottomLeftRadius: standardBorderRadius,
  rui_selectBorderBottomRightRadius: 0,
  rui_selectBorderTopLeftRadius: 0,
  rui_selectBorderTopRightRadius: standardBorderRadius,
  rui_selectIndicatorColor: colors.coolGrey500,
  rui_selectLetterSpacing: "0.3px",
  rui_selectMenuBorderBottomColor: colors.black20,
  rui_selectMenuBorderBottomLeftRadius: standardBorderRadius,
  rui_selectMenuBorderBottomRightRadius: 0,
  rui_selectMenuBorderBottomWidth: "1px",
  rui_selectMenuBorderLeftColor: colors.black20,
  rui_selectMenuBorderLeftWidth: "1px",
  rui_selectMenuBorderRightColor: colors.black20,
  rui_selectMenuBorderRightWidth: "1px",
  rui_selectMenuBorderTopLeftRadius: 0,
  rui_selectMenuBorderTopRightRadius: standardBorderRadius,
  rui_selectOptionHoverColor: colors.reactionBlue100,
  rui_selectSelectedOptionBackgroundColor: colors.reactionBlue200,
  rui_selectTextColor: colors.coolGrey500
};

// field
const fieldStyles = {
  rui_fieldSpacingAbove: padding.fifteen,
  rui_fieldSpacingBelow: padding.fifteen,
  rui_helpTextSpacingToInput: padding.ten,
  rui_labelColor_default: colors.black55,
  rui_labelColor_error: colors.red,
  rui_labelColor_success: colors.black55,
  rui_labelSpacingToInput: padding.ten
};

// selectableItem
const selectableItem = {
  rui_selectableItemRadioButtonCheckSize: "10px",
  rui_selectableItemRadioButtonColor: colors.coolGrey500,
  rui_selectableItemRadioButtonBorderColor: colors.coolGrey500,
  rui_selectableItemRadioButtonBorderWidth: "2px",
  rui_selectableItemRadioButtonSize: "20px",
  rui_selectableItemRadioButtonSpacingToLabel: "10px",
  rui_selectableItemRadioButtonBackgroundColor: colors.white,
  rui_selectableItemRadioFocus: `0 0 0 2px ${colors.teal}`,
  rui_selectableItemRadioFocusOutline: "1px solid transparent",
  rui_selectableItemRadioDisabledOpacity: ".5",
  rui_selectableItemRadioDisabledFillColor: colors.black10,
  rui_selectableItemRadioDisabledCursor: "not-allowed"
};

// selectableList
const selectableList = {
  rui_selectableListBorderColor: colors.black10,
  rui_selectableListBorderRadius: standardBorderRadius,
  rui_selectableListBorderStyle: "solid",
  rui_selectableListBorderWidth: "1px",
  rui_selectableListHeight: "50px",
  rui_selectableListHeightMobile: "60px",
  rui_selectableListIconHeight: "24px",
  rui_selectableListIconLeft: "30px",
  rui_selectableListIconSpacingToLabel: "10px",
  rui_selectableListIconWidth: "38px",
  rui_selectableListItemPaddingBottom: "0",
  rui_selectableListItemPaddingLeft: "10px",
  rui_selectableListItemPaddingRight: "10px",
  rui_selectableListItemPaddingTop: "0",
  rui_selectableListLeftAlignedLabelFontWeight: 700,
  rui_selectableListLeftAlignedDetailSpacingToLabel: "2px",
  rui_selectableListPadding: "0"
};

// viewerinfo
const viewerInfo = {
  rui_viewerInfoInitialsBackgroundColor: colors.teal,
  rui_viewerInfoInitialsColor: colors.white,
  rui_viewerInfoInitialsSize: "30px"
};

const miniCart = {
  rui_miniCartBorderBottomColor: colors.black10,
  rui_miniCartBorderBottomWidth: "1px",
  rui_miniCartBorderLeftColor: colors.black10,
  rui_miniCartBorderLeftWidth: "1px",
  rui_miniCartBorderRightColor: colors.black10,
  rui_miniCartBorderRightWidth: "1px",
  rui_miniCartBorderTopColor: colors.black10,
  rui_miniCartBorderTopWidth: "1px",
  rui_miniCartFooterBorderTopColor: colors.black10,
  rui_miniCartFooterBorderTopWidth: "1px",
  rui_miniCartFooterBoxShadow_overflow: depth1,
  rui_miniCartFooterBoxShadow: depth0,
  rui_miniCartFooterMessagePaddingBottom: 0,
  rui_miniCartFooterMessagePaddingLeft: 0,
  rui_miniCartFooterMessagePaddingRight: 0,
  rui_miniCartFooterMessagePaddingTop: padding.eight,
  rui_miniCartFooterPaddingBottom: padding.sixteen,
  rui_miniCartFooterPaddingLeft: padding.sixteen,
  rui_miniCartFooterPaddingRight: padding.sixteen,
  rui_miniCartFooterPaddingTop: 0,
  rui_miniCartListHeightToBeginScrolling: "420px",
  rui_miniCartListPaddingBottom: 0,
  rui_miniCartListPaddingLeft: padding.ten,
  rui_miniCartListPaddingRight: padding.ten,
  rui_miniCartListPaddingTop: 0,
  rui_miniCartMaxWidth: "360px"
};

const miniCartSummary = {
  rui_miniCartSummaryLeftCellPaddingBottom: padding.eight,
  rui_miniCartSummaryLeftCellPaddingLeft: padding.eight,
  rui_miniCartSummaryLeftCellPaddingRight: padding.five,
  rui_miniCartSummaryLeftCellPaddingTop: padding.eight,
  rui_miniCartSummaryPaddingBottom: padding.eight,
  rui_miniCartSummaryPaddingLeft: padding.eight,
  rui_miniCartSummaryPaddingRight: padding.eight,
  rui_miniCartSummaryPaddingTop: padding.eight,
  rui_miniCartSummaryRightCellPaddingBottom: padding.eight,
  rui_miniCartSummaryRightCellPaddingLeft: padding.five,
  rui_miniCartSummaryRightCellPaddingRight: padding.eight,
  rui_miniCartSummaryRightCellPaddingTop: padding.eight
};

const finalReviewCheckoutAction = {
  rui_finalReviewCheckoutActionBorderColor: colors.black10,
  rui_finalReviewCheckoutActionBorderWidth: "1px",
  rui_finalReviewCheckoutActionItemsWrapperPaddingBottom: 0,
  rui_finalReviewCheckoutActionItemsWrapperPaddingLeft: padding.sixteen,
  rui_finalReviewCheckoutActionItemsWrapperPaddingRight: padding.sixteen,
  rui_finalReviewCheckoutActionItemsWrapperPaddingTop: 0,
  rui_finalReviewCheckoutActionSummaryWrapperPaddingBottom: 0,
  rui_finalReviewCheckoutActionSummaryWrapperPaddingLeft: padding.sixteen,
  rui_finalReviewCheckoutActionSummaryWrapperPaddingRight: padding.sixteen,
  rui_finalReviewCheckoutActionSummaryWrapperPaddingTop: 0
};

const rui_components = {
  AccountProfileInfo: {
    spacingAfterEmail: "4px",
    spacingAfterName: "4px",
    spacingBetweenImageAndContent: "16px"
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
  StockWarning: {
    typography: {
      color: colors.red
    }
  }
};

export default {
  rui_components,
  rui_typography: typography,
  rui_breakpoints: {
    xs: breakpoint_xs,
    sm: breakpoint_sm,
    md: breakpoint_md,
    lg: breakpoint_lg,
    xl: breakpoint_xl
  },
  ...inputStyles,
  ...inputIcon,
  ...textareaStyles,
  ...selectStyles,
  ...fieldStyles,
  ...selectableItem,
  ...selectableList,
  ...viewerInfo,
  ...miniCart,
  ...finalReviewCheckoutAction,
  ...miniCartSummary
};
