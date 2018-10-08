import React from "react";
import renderer from "react-test-renderer";
import ProfileImage from "./ProfileImage";

const viewer = {
  firstName: "John",
  lastName: "Doe",
  name: "John Doe",
  primaryEmailAddress: "john@doe.com",
  profileImage: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y"
};

const viewerInitials = {
  firstName: "John",
  lastName: "Doe",
  name: "John Doe",
  primaryEmailAddress: "john@doe.com"
};


test("ProfileImage component with image snapshot", () => {
  const component = renderer.create(<ProfileImage viewer={viewer} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("ProfileImage component with custom size", () => {
  const component = renderer.create(<ProfileImage size={30} viewer={viewer} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("ProfileImage component with initials snapshot", () => {
  const component = renderer.create(<ProfileImage viewer={viewerInitials} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
