import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import AccountProfileInfo from "./AccountProfileInfo";

test("basic snapshot", () => {
  const component = renderer.create(<AccountProfileInfo />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
