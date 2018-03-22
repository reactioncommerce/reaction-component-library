import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import TextField from "./TextField";

test("basic snapshot", () => {
  const component = renderer.create(<TextField />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
