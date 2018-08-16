import badgeStatus from "./badgeStatus";
import BADGE_TYPES from "./badgeTypes";

const backorderProduct = { isSoldOut: true, isBackorder: true };
const soldOutProduct = { isSoldOut: true, isBackorder: false };
const isLowQuantity = { isLowQuantity: true };
const isOnSale = { isOnSale: true };
const isBestseller = { isBestseller: true };


test("badgeStatus util should return `backorder` status", () => {
  const callFunction = badgeStatus(backorderProduct);

  expect(typeof badgeStatus).toBe("function");
  expect(callFunction).toEqual({ type: BADGE_TYPES.BACKORDER, label: "Backorder" });
});

test("badgeStatus util should return `sold out` status", () => {
  const callFunction = badgeStatus(soldOutProduct);

  expect(typeof badgeStatus).toBe("function");
  expect(callFunction).toEqual({ type: BADGE_TYPES.SOLD_OUT, label: "Sold Out" });
});

test("badgeStatus util should return `low inventory` status", () => {
  const callFunction = badgeStatus(isLowQuantity);

  expect(typeof badgeStatus).toBe("function");
  expect(callFunction).toEqual({ type: BADGE_TYPES.LOW_QUANTITY, label: "Low Inventory" });
});

test("badgeStatus util should return `on sale` status", () => {
  const callFunction = badgeStatus(isOnSale);

  expect(typeof badgeStatus).toBe("function");
  expect(callFunction).toEqual({ type: BADGE_TYPES.SALE, label: "Sale" });
});

test("badgeStatus util should return `bestseller` status", () => {
  const callFunction = badgeStatus(isBestseller);

  expect(typeof badgeStatus).toBe("function");
  expect(callFunction).toEqual({ type: BADGE_TYPES.BESTSELLER, label: "Best Seller" });
});
