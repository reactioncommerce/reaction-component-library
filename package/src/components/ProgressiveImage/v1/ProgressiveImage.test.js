import React from "react";
import renderer from "react-test-renderer";
import ProgressiveImage from "./ProgressiveImage";

test("Basic ProgressiveImage snapshot", () => {
  const component = renderer.create((
    <ProgressiveImage src="/reaction-design-system-logo.svg" alt="Reaction Design System Logo" />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("ProgressiveImage with progressive loading snapshot", () => {
  const component = renderer.create((
    <ProgressiveImage
      src="/images/responsive-sticker/medium.jpg"
      presrc="/images/responsive-sticker/small.png"
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Responsive ProgressiveImage with progressive loading snapshot", () => {
  const component = renderer.create((
    <ProgressiveImage
      presrc="/images/responsive-sticker/small.png"
      srcs={{
        large: "/images/responsive-sticker/large.jpg",
        medium: "/images/responsive-sticker/medium.jpg",
        small: "/images/responsive-sticker/small.png"
      }}
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
