import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import MiniCart from "./MiniCart";

test("basic snapshot", () => {
  const component = renderer.create(<MiniCart />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
