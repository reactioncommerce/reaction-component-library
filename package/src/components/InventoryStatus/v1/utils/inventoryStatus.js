import { STATUS_TYPES } from "./";

/**
 * Determines a product's badge status
 *
 * @param {Object} product - The product
 * @param {Object} statusLabels - Labels to use for badges
 * @returns {Object} - The computed product status
 */
export default function inventoryStatus(product, statusLabels) {
  let status;

  if (product.isSoldOut && product.isBackorder) {
    status = { type: STATUS_TYPES.BACKORDER, label: statusLabels.BACKORDER };
  } else if (product.isSoldOut && !product.isBackorder) {
    status = { type: STATUS_TYPES.SOLD_OUT, label: statusLabels.SOLD_OUT };
  } else if (product.isLowQuantity && !product.isSoldOut) {
    status = { type: STATUS_TYPES.LOW_QUANTITY, label: statusLabels.LOW_QUANTITY };
  }

  return status;
}
