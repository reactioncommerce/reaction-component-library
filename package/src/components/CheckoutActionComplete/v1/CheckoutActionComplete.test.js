import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import CheckoutActionComplete from "./CheckoutActionComplete";

test("basic snapshot", () => {
  const component = renderer.create(<CheckoutActionComplete />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
