import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import ErrorsBlock from "./ErrorsBlock";

test("basic snapshot", () => {
  const component = renderer.create(<ErrorsBlock />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
