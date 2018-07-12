import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import AddressForm from "./AddressForm";

test("basic snapshot", () => {
  const component = renderer.create(<AddressForm />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
