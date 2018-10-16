import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Address from "./Address";

test("basic snapshot", () => {
  const component = renderer.create(<Address />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
