import React from "react";
import renderer from "react-test-renderer";
// import { shallow } from "enzyme";
import AddressSelect from "./AddressSelect";

test("basic snapshot", () => {
  const component = renderer.create(<AddressSelect />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
