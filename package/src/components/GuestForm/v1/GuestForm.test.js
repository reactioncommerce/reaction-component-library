import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import GuestForm from "./GuestForm";

test("basic snapshot", () => {
  const component = renderer.create(<GuestForm />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
