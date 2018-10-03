import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Accordion from "./Accordion";

test("basic snapshot", () => {
  const component = renderer.create(<Accordion />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
