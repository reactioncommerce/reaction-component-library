import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import AddressForm from "./AddressForm";

test("basic snapshot", () => {
  const component = renderer.create(<AddressForm components={mockComponents} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
