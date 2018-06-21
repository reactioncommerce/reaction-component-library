import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import CartItem from "./CartItem";

test("basic snapshot", () => {
  const component = renderer.create(<CartItem />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
