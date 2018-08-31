import React from "react";
import renderer from "react-test-renderer";
// import { shallow } from "enzyme";
import mockComponents from "../../../tests/mockComponents";
import AddressBook from "./AddressBook";

test("basic snapshot", () => {
  const component = renderer.create(<AddressBook components={mockComponents} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
