/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import colors from "./colors";
import padding from "./padding";
import typography from "./typography";

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

const spacingBase = 0.625;
const baseUnit = (size) => `${spacingBase * size}rem`;
const standardBorderRadius = "2px";

/**
 * Default Theme Elements
 */

const defaultStyles = {
  rui_breakpoint_xs: breakpoint_xs,
  rui_breakpoint_sm: breakpoint_sm,
  rui_breakpoint_md: breakpoint_md,
  rui_breakpoint_lg: breakpoint_lg,
  rui_breakpoint_xl: breakpoint_xl
};

// buttons
const buttonStyles = {
  rui_buttonBackgroundColor_danger_active: colors.red400,
  rui_buttonBackgroundColor_danger_disabled: colors.coolGrey200,
  rui_buttonBackgroundColor_danger_hover: colors.redHover,
  rui_buttonBackgroundColor_danger: colors.red,
  rui_buttonBackgroundColor_default_active: colors.coolGreyActive,
  rui_buttonBackgroundColor_default_disabled: colors.coolGrey200,
  rui_buttonBackgroundColor_default_hover: colors.coolGreyHover,
  rui_buttonBackgroundColor_default: colors.coolGrey,
  rui_buttonBackgroundColor_important_active: colors.reactionBlueActive,
  rui_buttonBackgroundColor_important_disabled: colors.coolGrey200,
  rui_buttonBackgroundColor_important_hover: colors.reactionBlueHover,
  rui_buttonBackgroundColor_important: colors.reactionBlue,
  rui_buttonBackgroundColor_secondary_active: colors.coolGreyActiveLight,
  rui_buttonBackgroundColor_secondary_disabled: colors.coolGrey200,
  rui_buttonBackgroundColor_secondary_hover: colors.coolGreyHoverLight,
  rui_buttonBackgroundColor_secondary: "transparent",
  rui_buttonBackgroundColor_secondaryDanger_active: colors.red400,
  rui_buttonBackgroundColor_secondaryDanger_disabled: colors.coolGrey200,
  rui_buttonBackgroundColor_secondaryDanger_hover: colors.redHover,
  rui_buttonBackgroundColor_secondaryDanger: "transparent",
  rui_buttonBackgroundColor_textOnly_active: colors.lightBlueGrey,
  rui_buttonBackgroundColor_textOnly_disabled: "transparent",
  rui_buttonBackgroundColor_textOnly_hover: colors.paleGrey,
  rui_buttonBackgroundColor_textOnly: "transparent",
  rui_buttonBorderColor_danger_active: colors.red400,
  rui_buttonBorderColor_danger_disabled: colors.coolGrey200,
  rui_buttonBorderColor_danger_hover: colors.redHover,
  rui_buttonBorderColor_danger: colors.red,
  rui_buttonBorderColor_default_active: colors.coolGreyActive,
  rui_buttonBorderColor_default_disabled: colors.coolGrey200,
  rui_buttonBorderColor_default_hover: colors.coolGreyHover,
  rui_buttonBorderColor_default: colors.coolGrey,
  rui_buttonBorderColor_important_active: colors.reactionBlueActive,
  rui_buttonBorderColor_important_disabled: colors.coolGrey200,
  rui_buttonBorderColor_important_hover: colors.reactionBlueHover,
  rui_buttonBorderColor_important: colors.reactionBlue,
  rui_buttonBorderColor_secondary_active: colors.coolGrey,
  rui_buttonBorderColor_secondary_disabled: colors.coolGrey200,
  rui_buttonBorderColor_secondary_hover: colors.coolGrey,
  rui_buttonBorderColor_secondary: colors.coolGrey,
  rui_buttonBorderColor_secondaryDanger_active: colors.red400,
  rui_buttonBorderColor_secondaryDanger_disabled: colors.coolGrey200,
  rui_buttonBorderColor_secondaryDanger_hover: colors.redHover,
  rui_buttonBorderColor_secondaryDanger: colors.red,
  rui_buttonBorderColor_textOnly_active: colors.lightBlueGrey,
  rui_buttonBorderColor_textOnly_disabled: "transparent",
  rui_buttonBorderColor_textOnly_hover: colors.paleGrey,
  rui_buttonBorderColor_textOnly: "transparent",
  rui_buttonBorderRadius: standardBorderRadius,
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
  rui_buttonHorizontalPadding: padding.twenty,
  rui_buttonMinimumWidth: "100px",
  rui_buttonVerticalPadding: padding.ten,
  rui_buttonVerticalPaddingShort: padding.five
};

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
  rui_inputFontSize: fontSize14,
  rui_inputLineHeight: 1,
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
  rui_textareaLineHeight: "1.5",
  rui_textareaIconPadding: `${baseUnit(0.5)} ${baseUnit(0.5)}`,
  rui_textareaIconRight: 0,
  rui_textareaIconTop: baseUnit(1)
};

// select
const selectStyles = {
  rui_selectOptionHoverColor: colors.reactionBlue100,
  rui_selectSelectedOptionBackgroundColor: colors.reactionBlue200,
  rui_selectBorderTopLeftRadius: 0,
  rui_selectBorderTopRightRadius: standardBorderRadius,
  rui_selectBorderBottomLeftRadius: standardBorderRadius,
  rui_selectBorderBottomRightRadius: 0,
  rui_selectIndicatorColor: colors.coolGrey500,
  rui_selectMenuBorderTopLeftRadius: 0,
  rui_selectMenuBorderTopRightRadius: standardBorderRadius,
  rui_selectMenuBorderBottomLeftRadius: standardBorderRadius,
  rui_selectMenuBorderBottomRightRadius: 0,
  rui_selectMenuBorderLeftWidth: baseUnit(0.1),
  rui_selectMenuBorderRightWidth: baseUnit(0.1),
  rui_selectMenuBorderBottomWidth: baseUnit(0.1),
  rui_selectMenuBorderLeftColor: colors.black20,
  rui_selectMenuBorderRightColor: colors.black20,
  rui_selectMenuBorderBottomColor: colors.black20,
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
  rui_checkoutActionCompleteMobileMargin: `${baseUnit(1)}`,
  rui_checkoutActionCompletePaddingBottom: padding.sixteen,
  rui_checkoutActionCompletePaddingLeft: 0,
  rui_checkoutActionCompletePaddingRight: 0,
  rui_checkoutActionCompletePaddingTop: padding.sixteen,
  rui_checkoutActionsBorderBetweenColor: colors.black10,
  rui_checkoutActionsBorderBetweenWidth: "1px",
  rui_checkoutActionsBorderLeftColor: colors.black10,
  rui_checkoutActionsBorderLeftWidth: 0,
  rui_checkoutActionsBorderRightColor: colors.black10,
  rui_checkoutActionsBorderRightWidth: 0,
  rui_checkoutActionsItemPaddingBottom: padding.sixteen,
  rui_checkoutActionsItemPaddingLeft: 0,
  rui_checkoutActionsItemPaddingRight: 0,
  rui_checkoutActionsItemPaddingTop: padding.sixteen,
  rui_checkoutActionsPlaceOrderButtonSpacingBottom: 0,
  rui_checkoutActionsPlaceOrderButtonSpacingLeft: 0,
  rui_checkoutActionsPlaceOrderButtonSpacingRight: 0,
  rui_checkoutActionsPlaceOrderButtonSpacingTop: padding.sixteen,
  rui_checkoutActionsPlaceOrderButtonWidth: "252px",
  rui_checkoutActionsSpaceBetweenActiveActionButtons: padding.sixteen
};

// checkbox
const checkbox = {
  rui_checkboxHeightAndWidth: "1.4em",
  rui_checkboxLeftSpacing: "0",
  rui_checkboxTopSpacing: "0",
  rui_checkboxBorderColor: colors.coolGrey500,
  rui_checkboxBorderRadius: standardBorderRadius,
  rui_checkboxBorderWidth: "2px",
  rui_checkboxFocusStyle: "rgb(59, 153, 252) auto 5px",
  rui_checkboxDisabledColor: colors.black10,
  rui_checkboxDisabledOpacity: ".5",
  rui_checkboxLabelSpacing: "2.2em",
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
  rui_selectableListBorderRadius: standardBorderRadius,
  rui_selectableListPadding: "0",
  rui_selectableListMargin: "0",
  rui_selectableListHeight: "50px",
  rui_selectableListHeightMobile: "60px",
  rui_selectableListItemPadding: "0 10px",
  rui_selectableListFontFamily: fontFamily,
  rui_selectableListDetailFontSize: fontSize14,
  rui_selectableListLabelFontWeight: 700,
  rui_selectableListIconMargin: "0 10px 0 0",
  rui_selectableListIconLeft: "30px",
  rui_selectableListIconWidth: "38px",
  rui_selectableListIconHeight: "24px"
};

// viewerinfo
const viewerInfo = {
  rui_viewerInfoInitialsBackgroundColor: colors.teal,
  rui_viewerInfoInitialsColor: colors.white,
  rui_viewerInfoInitialsSize: "30px"
};

const cartSummary = {
  rui_cartSummaryBackgroundColor: colors.black02,
  rui_cartSummaryBorderColor: colors.black10,
  rui_cartSummaryBorderWidth: "1px",
  rui_cartSummaryDenseBackgroundColor: "transparent",
  rui_cartSummaryPaddingLeft: "16px",
  rui_cartSummaryPaddingRight: "16px",
  rui_cartSummaryPaddingTop: "16px",
  rui_cartSummaryPaddingBottom: 0,
  rui_cartSummaryLeftColumnColor: colors.coolGrey500,
  rui_cartSummaryLeftColumnHeaderColor: colors.coolGrey500,
  rui_cartSummaryRightColumnColor: colors.coolGrey500,
  rui_cartSummaryRightColumnHeaderColor: colors.black30,
  rui_cartSummaryRowDensePaddingBottom: "0.5rem",
  rui_cartSummaryRowDensePaddingTop: "0.5rem",
  rui_cartSummaryRowPaddingBottom: "16px",
  rui_cartSummaryRowPaddingTop: "16px",
  rui_cartSummaryTitleColor: colors.coolGrey500,
  rui_cartSummaryDiscountColor: colors.forestGreen300,
  rui_cartSummaryTotalColor: colors.coolGrey500
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

const cartItem = {
  rui_cartItemBorderBottomColor: colors.black05,
  rui_cartItemBorderBottomWidth: "1px",
  rui_cartItemBorderLeftColor: colors.black05,
  rui_cartItemBorderLeftWidth: 0,
  rui_cartItemBorderRightColor: colors.black05,
  rui_cartItemBorderRightWidth: 0,
  rui_cartItemBorderTopColor: colors.black05,
  rui_cartItemBorderTopWidth: 0,
  rui_cartItemImageContentSpacing: padding.sixteen,
  rui_cartItemPaddingBottom: padding.sixteen,
  rui_cartItemPaddingLeft: 0,
  rui_cartItemPaddingRight: 0,
  rui_cartItemPaddingTop: padding.sixteen,
  rui_cartItemQuantityInputSpacingAbove: padding.twelve,
  rui_cartItemQuantityInputSpacingBelow: padding.eight,
  rui_cartItemRemoveButtonColor_focus: colors.coolGrey,
  rui_cartItemRemoveButtonColor: colors.coolGrey400,
  rui_cartItemRemoveButtonSpacingAbove: padding.eight,
  rui_cartItemRemoveButtonSpacingBelow: 0
};

const catalogGrid = {
  rui_catalogGrid3PerRowMinWidth: 650,
  rui_catalogGrid4PerRowMinWidth: 960
};

const catalogGridItem = {
  rui_catalogGridItemMediaBackgroundColor: colors.white,
  rui_catalogGridItemProductInfoPaddingBottom: 0,
  rui_catalogGridItemProductInfoPaddingLeft: 0,
  rui_catalogGridItemProductInfoPaddingRight: 0,
  rui_catalogGridItemProductInfoPaddingTop: padding.ten
};

const checkoutTopHat = {
  rui_checkoutTopHatBackgroundColor: colors.black05,
  rui_checkoutTopHatHeight: "35px"
};

const checkoutEmailAddress = {
  rui_checkoutEmailAddressBorderBottomColor: colors.black10,
  rui_checkoutEmailAddressBorderBottomWidth: "2px",
  rui_checkoutEmailAddressBorderLeftColor: colors.black10,
  rui_checkoutEmailAddressBorderLeftWidth: 0,
  rui_checkoutEmailAddressBorderRightColor: colors.black10,
  rui_checkoutEmailAddressBorderRightWidth: 0,
  rui_checkoutEmailAddressBorderTopColor: colors.black10,
  rui_checkoutEmailAddressBorderTopWidth: 0,
  rui_checkoutEmailAddressColor: colors.coolGrey500,
  rui_checkoutEmailAddressPaddingBottom: padding.sixteen,
  rui_checkoutEmailAddressPaddingLeft: 0,
  rui_checkoutEmailAddressPaddingRight: 0,
  rui_checkoutEmailAddressPaddingTop: padding.sixteen
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

const badgeOverlay = {
  rui_badgeOverlayPrimaryBadgeBackgroundColor_backorder: colors.coolGrey,
  rui_badgeOverlayPrimaryBadgeBackgroundColor_bestseller: colors.teal,
  rui_badgeOverlayPrimaryBadgeBackgroundColor_lowQuantity: colors.coolGrey,
  rui_badgeOverlayPrimaryBadgeBackgroundColor_soldOut: colors.coolGrey,
  rui_badgeOverlayPrimaryBadgeBackgroundColor_sale: colors.red300,
  rui_badgeOverlayPrimaryBadgeColor_backorder: colors.white,
  rui_badgeOverlayPrimaryBadgeColor_bestseller: colors.white,
  rui_badgeOverlayPrimaryBadgeColor_lowQuantity: colors.white,
  rui_badgeOverlayPrimaryBadgeColor_soldOut: colors.white,
  rui_badgeOverlayPrimaryBadgeColor_sale: colors.white,
  rui_badgeOverlayPrimaryBadgeOffsetTop: "8px",
  rui_badgeOverlayPrimaryBadgeOffsetBottom: "auto",
  rui_badgeOverlayPrimaryBadgeOffsetLeft: "8px",
  rui_badgeOverlayPrimaryBadgeOffsetRight: "auto",
  rui_badgeOverlaySecondaryBadgeOffsetTop: "8px",
  rui_badgeOverlaySecondaryBadgeOffsetBottom: "auto",
  rui_badgeOverlaySecondaryBadgeOffsetLeft: "auto",
  rui_badgeOverlaySecondaryBadgeOffsetRight: padding.eight,
  rui_badgeOverlaySecondaryBadgeColor: colors.coolGrey,
  rui_badgeOverlayPrimaryBadgePaddingBottom: padding.four,
  rui_badgeOverlayPrimaryBadgePaddingLeft: padding.eight,
  rui_badgeOverlayPrimaryBadgePaddingRight: padding.eight,
  rui_badgeOverlayPrimaryBadgePaddingTop: padding.four,
  rui_badgeOverlaySecondaryBadgePaddingBottom: padding.four,
  rui_badgeOverlaySecondaryBadgePaddingLeft: padding.eight,
  rui_badgeOverlaySecondaryBadgePaddingRight: padding.eight,
  rui_badgeOverlaySecondaryBadgePaddingTop: padding.four,
  rui_badgeOverlayPrimaryBadgeBorderTopLeftRadius: "4px",
  rui_badgeOverlayPrimaryBadgeBorderTopRightRadius: "4px",
  rui_badgeOverlayPrimaryBadgeBorderBottomLeftRadius: "4px",
  rui_badgeOverlayPrimaryBadgeBorderBottomRightRadius: "4px",
  rui_badgeOverlaySecondaryBadgeBorderTopLeftRadius: "4px",
  rui_badgeOverlaySecondaryBadgeBorderTopRightRadius: "4px",
  rui_badgeOverlaySecondaryBadgeBorderBottomLeftRadius: "4px",
  rui_badgeOverlaySecondaryBadgeBorderBottomRightRadius: "4px",
  rui_badgeOverlayFadedOpacity: "0.5"
};

const cartEmptyMessage = {
  rui_cartEmptyMessageTextToButtonSpacing: "54px"
};

const cartItemDetail = {
  rui_cartItemDetailTitleColor_focus: colors.coolGrey300,
  rui_cartItemDetailTitleMarginTop: 0,
  rui_cartItemDetailTitleMarginBottom: padding.ten,
  rui_cartItemDetailTitleMarginLeft: 0,
  rui_cartItemDetailTitleMarginRight: 0
};

const progressiveImage = {
  rui_progressiveImageBackgroundColor: colors.white
};

const rui_components = {
  BadgeOverlayBadgeLabel: {
    typography: {
      labelText: {
        color: "inherit",
        fontSize: "11px",
        fontWeight: 700,
        letterSpacing: "0.5px"
      }
    }
  },
  CartSummaryLeftColumnHeader: {
    typography: {
      bodyText: {
        lineHeight: 1
      }
    }
  },
  CartSummaryRightColumnHeader: {
    typography: {
      bodyText: {
        lineHeight: 1
      }
    }
  },
  CartSummaryLeftColumn: {
    typography: {
      bodyText: {
        lineHeight: 1
      }
    }
  },
  CartSummaryRightColumn: {
    typography: {
      bodyText: {
        lineHeight: 1
      }
    }
  },
  CartSummaryTitle: {
    typography: {
      bodyText: {
        lineHeight: 1
      }
    }
  },
  CartSummaryDiscount: {
    typography: {
      bodyText: {
        lineHeight: 1
      }
    }
  },
  CartSummaryTotal: {
    typography: {
      bodyText: {
        lineHeight: 1
      }
    }
  },
  CartItemDetailAttributes: {
    typography: {
      labelText: {
        color: colors.black65
      }
    }
  },
  CartItemDetailTitle: {
    typography: {
      headingTextBold: {
        lineHeight: 1
      }
    }
  },
  PriceCompare: {
    typography: {
      labelText: {
        color: colors.black25
      }
    }
  },
  StockWarning: {
    typography: {
      labelText: {
        color: colors.red
      }
    }
  },
  CheckoutTopHatMessage: {
    typography: {
      labelTextBold: {
        color: colors.coolGrey500
      }
    }
  }
};

export default {
  rui_components,
  rui_typography: typography,
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
  ...catalogGrid,
  ...miniCart,
  ...cartItem,
  ...checkoutTopHat,
  ...checkoutEmailAddress,
  ...cartSummary,
  ...finalReviewCheckoutAction,
  ...badgeOverlay,
  ...cartEmptyMessage,
  ...cartItemDetail,
  ...miniCartSummary,
  ...catalogGridItem,
  ...progressiveImage
};
