import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import AddressBookForm from "./AddressBookForm";

test("basic snapshot", () => {
  const component = renderer.create(<AddressBookForm />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
