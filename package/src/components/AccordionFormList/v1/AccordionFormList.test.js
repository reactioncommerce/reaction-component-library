import React from "react";
import renderer from "react-test-renderer";
import AccordionFormList from "./AccordionFormList";

test("basic snapshot", () => {
  const component = renderer.create(<AccordionFormList />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
