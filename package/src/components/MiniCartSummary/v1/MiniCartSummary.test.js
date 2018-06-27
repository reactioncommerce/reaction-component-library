import React from "react";
import renderer from "react-test-renderer";
import MiniCartSummary from "./MiniCartSummary";

test("Renders only subtotal", () => {
  const component = renderer.create((
    <MiniCartSummary displaySubtotal="$24.42"/>
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Renders only subtotal + computed taxes", () => {
  const component = renderer.create((
    <MiniCartSummary displaySubtotal="$24.42" displayTax="$4.44"/>
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
