import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import CheckoutActions from "./CheckoutActions";

test("basic snapshot", () => {
  const component = renderer.create(<CheckoutActions />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
