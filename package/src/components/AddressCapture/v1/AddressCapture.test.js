import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import AddressCapture from "./AddressCapture";

test("basic snapshot", () => {
  const component = renderer.create(<AddressCapture components={mockComponents} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
