import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import SelectableList from "./SelectableList";

test("basic snapshot", () => {
  const items = [{
    id: "1",
    label: "Priority shipping",
    detail: "$12.00",
    value: "123",
    checked: true
  },
  {
    id: "2",
    label: "Expedited shipping",
    detail: "$5.00",
    value: "333"
  },
  {
    id: "3",
    label: "Free shipping",
    detail: "$0.00",
    value: "2455"
  }];
  const component = renderer.create(<SelectableList options={items} components={mockComponents} name="Form" />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
