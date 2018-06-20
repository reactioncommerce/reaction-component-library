import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import CartEmptyMessage from "./CartEmptyMessage";

test("basic snapshot", () => {
  const component = renderer.create(<CartEmptyMessage />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
