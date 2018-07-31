import React from "react";
import renderer from "react-test-renderer";
import AddressForm from "./AddressForm";

test("basic snapshot", () => {
  const component = renderer.create(<AddressForm />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
