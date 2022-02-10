import React from "react";
import renderer from "react-test-renderer";
import StockWarning from "./StockWarning";

test("Renders stock warning when inventory is low", () => {
  const component = renderer.create((
    <StockWarning inventoryQuantity={10} isLowInventoryQuantity={true} />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Renders nothing when stock level is normal", () => {
  const component = renderer.create((
    <StockWarning inventoryQuantity={10} isLowInventoryQuantity={false} />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
