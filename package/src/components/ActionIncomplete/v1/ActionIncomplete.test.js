import React from "react";
import renderer from "react-test-renderer";
import ActionIncomplete from "./ActionIncomplete";

test("basic snapshot", () => {
  const component = renderer.create((
    <ActionIncomplete label="Shipping information" stepNumber={2} />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
