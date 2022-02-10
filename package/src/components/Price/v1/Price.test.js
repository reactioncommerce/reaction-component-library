import React from "react";
import renderer from "react-test-renderer";
import Price from "./Price";


test("Renders price without a compare at price", () => {
  const component = renderer.create(<Price displayPrice="$300.00" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


test("Renders price with a compare at price", () => {
  const component = renderer.create(<Price displayPrice="$300.00" displayCompareAtPrice="$400.00" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Renders price without a compare at price, due to the fact that the prices are equal.", () => {
  const component = renderer.create(<Price displayPrice="$300.00" displayCompareAtPrice="$300.00" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
