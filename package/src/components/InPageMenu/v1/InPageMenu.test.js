import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import InPageMenu from "./InPageMenu";

test("basic snapshot", () => {
  const component = renderer.create(<InPageMenu />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
