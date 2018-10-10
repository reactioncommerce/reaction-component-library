import React from "react";
import renderer from "react-test-renderer";
// import { shallow } from "enzyme";
import mockComponents from "../../../tests/mockComponents";
import Accordion from "./Accordion";

test("basic snapshot", () => {
  const component = renderer.create(<Accordion label="mock label" components={mockComponents} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
