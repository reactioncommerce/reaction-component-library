import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import AddressBook from "./AddressBook";

test("basic snapshot", () => {
  const component = renderer.create(<AddressBook />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
