import React from "react";
import renderer from "react-test-renderer";
import RegionInput from "./RegionInput";

test("basic snapshot", () => {
  const component = renderer.create(<RegionInput />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("basic snapshot", () => {
  const component = renderer.create(<RegionInput />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
