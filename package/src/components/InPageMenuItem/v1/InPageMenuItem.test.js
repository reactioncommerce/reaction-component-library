import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import InPageMenuItem from "./InPageMenuItem";

test("basic snapshot", () => {
  const component = renderer.create(<InPageMenuItem />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
