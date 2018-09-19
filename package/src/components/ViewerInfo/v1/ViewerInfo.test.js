import React from "react";
import renderer from "react-test-renderer";
import ViewerInfo from "./ViewerInfo";

test("Render a viewerinfo without any props", () => {
  const component = renderer.create(<ViewerInfo />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render a viewer's initials and first name", () => {
  const viewer = {
    firstName: "Issac",
    lastName: "Newton"
  };

  const component = renderer.create(<ViewerInfo viewer={viewer} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
