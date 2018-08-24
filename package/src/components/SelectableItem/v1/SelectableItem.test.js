import React from "react";
import renderer from "react-test-renderer";
import SelectableItem from "./SelectableItem";

test("basic snapshot with empty props", () => {
  const component = renderer.create(<SelectableItem item={{ id: "1", label: "Label", detail: "Detail", value: "detail" }} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
