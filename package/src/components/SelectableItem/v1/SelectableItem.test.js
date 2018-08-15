import React from "react";
import renderer from "react-test-renderer";
import SelectableItem from "./SelectableItem";

test("basic snapshot with empty props", () => {
  const component = renderer.create(<SelectableItem item={{ _id: "1", label: "Label", detail: "Detail" }} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
