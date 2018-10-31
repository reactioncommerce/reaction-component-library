import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import MultiSelect from "./MultiSelect";

test("basic snapshot", () => {
  const component = renderer.create(<MultiSelect />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
