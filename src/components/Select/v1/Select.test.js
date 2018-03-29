import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Select from "./Select";

test("basic snapshot", () => {
  const component = renderer.create(<Select />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
