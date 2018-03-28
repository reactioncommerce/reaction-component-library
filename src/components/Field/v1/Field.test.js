import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Field from "./Field";

test("basic snapshot", () => {
  const component = renderer.create(<Field />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
