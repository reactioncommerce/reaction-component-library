import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import CheckoutEmailAddress from "./CheckoutEmailAddress";

test("basic snapshot", () => {
  const component = renderer.create(<CheckoutEmailAddress />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
