import React from "react";
import renderer from "react-test-renderer";
import CheckoutTopHat from "./CheckoutTopHat";

test("render Top Hat with message", () => {
  const component = renderer.create(<CheckoutTopHat checkoutMessage="Free Shipping + Free Returns" />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("render nothing when no message is present", () => {
  const component = renderer.create(<CheckoutTopHat />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
