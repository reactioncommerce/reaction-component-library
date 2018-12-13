import STATUS_LABELS from "./statusLabels";

const STATUS_LABELS_VALUES = {
  BACKORDER: "Backordered - ships when available",
  LOW_QUANTITY: "Low Inventory",
  SOLD_OUT: "Out of stock"
};


test("badge label values", () => {
  expect(typeof STATUS_LABELS).toBe("object");
  expect(STATUS_LABELS).toEqual(STATUS_LABELS_VALUES);
});
