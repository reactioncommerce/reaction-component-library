import isProductBestseller from "./isProductBestseller";

const isBestseller = { isBestseller: true };
const isNotBestseller = { isBestseller: false };

test("isProductBestseller should return false", () => {
  const callFunction = isProductBestseller(isNotBestseller);

  expect(typeof isProductBestseller).toBe("function");
  expect(callFunction).toEqual(false);
});

test("isProductBestseller should return true", () => {
  const callFunction = isProductBestseller(isBestseller);

  expect(typeof isProductBestseller).toBe("function");
  expect(callFunction).toEqual(true);
});
