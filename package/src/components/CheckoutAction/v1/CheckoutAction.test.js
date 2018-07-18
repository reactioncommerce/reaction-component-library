import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import CheckoutAction from "./CheckoutAction";

test("basic snapshot", () => {
  const component = renderer.create(<CheckoutAction />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
