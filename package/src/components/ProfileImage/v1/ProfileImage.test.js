import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import ProfileImage from "./ProfileImage";

test("basic snapshot", () => {
  const component = renderer.create(<ProfileImage />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
