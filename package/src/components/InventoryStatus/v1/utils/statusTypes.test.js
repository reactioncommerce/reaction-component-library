import STATUS_TYPES from "./statusTypes";

const STATUS_TYPES_VALUES = {
  BACKORDER: "BACKORDER",
  LOW_QUANTITY: "LOW_QUANTITY",
  SOLD_OUT: "SOLD_OUT"
};

test("badge types values", () => {
  expect(typeof STATUS_TYPES).toBe("object");
  expect(STATUS_TYPES).toEqual(STATUS_TYPES_VALUES);
});
