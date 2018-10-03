import React from "react";
import renderer from "react-test-renderer";
import ViewerInfo from "./ViewerInfo";

test("Render with only required props", () => {
  const mockViewer = {
    primaryEmailAddress: "email@domain.com"
  };
  const component = renderer.create(<ViewerInfo viewer={mockViewer} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render with only email & first name props", () => {
  const mockViewer = {
    firstName: "Issac",
    primaryEmailAddress: "email@domain.com"
  };
  const component = renderer.create(<ViewerInfo viewer={mockViewer} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render with full name and email props", () => {
  const mockViewer = {
    firstName: "Issac",
    lastName: "Newton",
    primaryEmailAddress: "email@domain.com"
  };
  const component = renderer.create(<ViewerInfo viewer={mockViewer} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render with full prop", () => {
  const mockViewer = {
    primaryEmailAddress: "email@domain.com"
  };
  const component = renderer.create(<ViewerInfo viewer={mockViewer} full />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render with compact prop", () => {
  const mockViewer = {
    primaryEmailAddress: "email@domain.com"
  };
  const component = renderer.create(<ViewerInfo viewer={mockViewer} compact />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
