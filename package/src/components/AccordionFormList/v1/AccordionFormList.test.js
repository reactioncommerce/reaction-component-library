import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import AccordionFormList from "./AccordionFormList";

test("basic snapshot", () => {
  const component = renderer.create(<AccordionFormList components={mockComponents} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
