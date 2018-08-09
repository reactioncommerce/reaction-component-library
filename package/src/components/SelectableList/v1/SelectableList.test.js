import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import SelectableList from "./SelectableList";

test("basic snapshot", () => {
  const component = renderer.create(<SelectableList />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
