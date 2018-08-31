import React from "react";
import renderer from "react-test-renderer";
import SelectableItem from "./SelectableItem";

test("basic snapshot with empty props", () => {
  const component = renderer.create(<SelectableItem label="Label" detail="Detail" value="detail" />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
