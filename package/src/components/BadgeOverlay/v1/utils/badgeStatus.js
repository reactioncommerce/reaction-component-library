import { BADGE_TYPES } from "./";

/**
 * Determines a product's badge status
 *
 * @param {Object} product - The product
 * @param {Object} badgeLabels - Labels to use for badges
 * @returns {Object} - The computed product status
 */
export default function badgeStatus(product, badgeLabels) {
  let status;

  if (product.isSoldOut && product.isBackorder) {
    status = { type: BADGE_TYPES.BACKORDER, label: badgeLabels.BACKORDER };
  } else if (product.isSoldOut && !product.isBackorder) {
    status = { type: BADGE_TYPES.SOLD_OUT, label: badgeLabels.SOLD_OUT };
  } else if (product.isOnSale) {
    status = { type: BADGE_TYPES.SALE, label: badgeLabels.SALE };
  } else if (product.isLowQuantity && !product.isSoldOut) {
    status = { type: BADGE_TYPES.LOW_QUANTITY, label: badgeLabels.LOW_QUANTITY };
  } else if (product.isBestseller) {
    status = { type: BADGE_TYPES.BESTSELLER, label: badgeLabels.BESTSELLER };
  }

  return status;
}
