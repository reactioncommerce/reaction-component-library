import React from "react";
import renderer from "react-test-renderer";
import Checkbox from "./Checkbox";

test("basic snapshot", () => {
  const component = renderer.create(<Checkbox />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
