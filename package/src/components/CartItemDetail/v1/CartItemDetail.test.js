import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import CartItemDetail from "./CartItemDetail";

test("basic snapshot", () => {
  const component = renderer.create(<CartItemDetail />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});