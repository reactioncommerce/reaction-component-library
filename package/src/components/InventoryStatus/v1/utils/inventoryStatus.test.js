import inventoryStatus from "./inventoryStatus";
import STATUS_TYPES from "./statusTypes";
import STATUS_LABELS from "./statusLabels";

const backorderProduct = { isSoldOut: true, isBackorder: true };
const soldOutProduct = { isSoldOut: true, isBackorder: false };
const isLowQuantity = { isLowQuantity: true };


test("inventoryStatus util should return `backorder` status", () => {
  const callFunction = inventoryStatus(backorderProduct, STATUS_LABELS);

  expect(typeof inventoryStatus).toBe("function");
  expect(callFunction).toEqual({ type: STATUS_TYPES.BACKORDER, label: "Backordered - ships when available" });
});

test("inventoryStatus util should return `sold out` status", () => {
  const callFunction = inventoryStatus(soldOutProduct, STATUS_LABELS);

  expect(typeof inventoryStatus).toBe("function");
  expect(callFunction).toEqual({ type: STATUS_TYPES.SOLD_OUT, label: "Out of stock" });
});

test("inventoryStatus util should return `low inventory` status", () => {
  const callFunction = inventoryStatus(isLowQuantity, STATUS_LABELS);

  expect(typeof inventoryStatus).toBe("function");
  expect(callFunction).toEqual({ type: STATUS_TYPES.LOW_QUANTITY, label: "Low Inventory" });
});
