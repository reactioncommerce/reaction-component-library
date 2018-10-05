import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import ViewerInfo from "./ViewerInfo";

test("Render with profile image", () => {
  const mockViewer = {
    primaryEmailAddress: "email@domain.com",
    profileImage: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y"
  };
  const component = renderer.create(<ViewerInfo components={mockComponents} viewer={mockViewer} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


test("Render with only required props", () => {
  const mockViewer = {
    primaryEmailAddress: "email@domain.com"
  };
  const component = renderer.create(<ViewerInfo components={mockComponents} viewer={mockViewer} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render with only email & first name props", () => {
  const mockViewer = {
    firstName: "Issac",
    primaryEmailAddress: "email@domain.com"
  };
  const component = renderer.create(<ViewerInfo components={mockComponents} viewer={mockViewer} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render with full name and email props", () => {
  const mockViewer = {
    firstName: "Issac",
    lastName: "Newton",
    primaryEmailAddress: "email@domain.com"
  };
  const component = renderer.create(<ViewerInfo components={mockComponents} viewer={mockViewer} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render with full prop", () => {
  const mockViewer = {
    primaryEmailAddress: "email@domain.com"
  };
  const component = renderer.create(<ViewerInfo components={mockComponents} viewer={mockViewer} full />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render with compact prop", () => {
  const mockViewer = {
    primaryEmailAddress: "email@domain.com"
  };
  const component = renderer.create(<ViewerInfo components={mockComponents} viewer={mockViewer} compact />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
