import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import SelectableItem from "./SelectableItem";

test("basic snapshot", () => {
  const component = renderer.create(<SelectableItem />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
