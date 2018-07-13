import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import CheckoutTopHat from "./CheckoutTopHat";

test("basic snapshot", () => {
  const component = renderer.create(<CheckoutTopHat />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
