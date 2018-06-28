import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import CartItems from "./CartItems";

test("basic snapshot", () => {
  const component = renderer.create(<CartItems />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
