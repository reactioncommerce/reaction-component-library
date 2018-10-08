import React from "react";
import renderer from "react-test-renderer";
// import { shallow } from "enzyme";
import mockComponents from "../../../tests/mockComponents";
import AddressSelect from "./AddressSelect";

test("basic snapshot", () => {
  const mockAddressBook = [];
  const component = renderer.create(<AddressSelect addressBook={mockAddressBook} components={mockComponents} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
