import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import InPageMenuItem from "./InPageMenuItem";

test("InPageMenuItem basic component", () => {
  const component = renderer.create(<InPageMenuItem href="/test/url/" label="Test label" components={mockComponents} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("InPageMenuItem with onClick instead of href", () => {
  const onClick = () => {};
  const component = renderer.create(<InPageMenuItem label="Test label" onClick={onClick} components={mockComponents} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("InPageMenuItem selected", () => {
  const component = renderer.create(<InPageMenuItem isSelected href="/test/url/" label="Test label" components={mockComponents} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
