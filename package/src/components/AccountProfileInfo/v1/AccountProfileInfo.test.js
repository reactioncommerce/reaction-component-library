import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import AccountProfileInfo from "./AccountProfileInfo";

test("Render default display, with profile image and no edit link", () => {
  const mockViewer = {
    firstName: "John",
    lastName: "Doe",
    name: "John Doe",
    primaryEmailAddress: "john@doe.com",
    profileImage: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y"
  };

  const component = renderer.create(<AccountProfileInfo components={mockComponents} viewer={mockViewer} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render with first name only", () => {
  const mockViewer = {
    firstName: "John",
    primaryEmailAddress: "john@doe.com",
    profileImage: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y"
  };

  const component = renderer.create(<AccountProfileInfo components={mockComponents} viewer={mockViewer} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render with initials instead of profile image", () => {
  const mockViewer = {
    firstName: "John",
    lastName: "Doe",
    name: "John Doe",
    primaryEmailAddress: "john@doe.com"
  };

  const component = renderer.create(<AccountProfileInfo components={mockComponents} viewer={mockViewer} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render with edit link", () => {
  const mockViewer = {
    firstName: "John",
    lastName: "Doe",
    name: "John Doe",
    primaryEmailAddress: "john@doe.com",
    profileImage: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y"
  };

  const clickSpy = jest.fn();

  const component = renderer.create(<AccountProfileInfo components={mockComponents} onClickEdit={clickSpy} shouldShowEditButton={true} viewer={mockViewer} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
