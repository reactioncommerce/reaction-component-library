import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import InlineAlert from "./InlineAlert";

test("basic snapshot", () => {
  const component = renderer.create(<InlineAlert />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
