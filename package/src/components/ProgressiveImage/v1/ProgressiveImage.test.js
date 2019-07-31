import React from "react";
import renderer from "react-test-renderer";
import ProgressiveImage from "./ProgressiveImage";

test("Basic ProgressiveImage snapshot", () => {
  const component = renderer.create((
    <ProgressiveImage src="/storefront-component-library-logo.svg" alt="Reaction Storefront Component Library Logo" />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("ProgressiveImage with progressive loading snapshot", () => {
  const component = renderer.create((
    <ProgressiveImage
      src="/images/sticker/medium.jpg"
      presrc="/images/sticker/small.png"
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Responsive ProgressiveImage with progressive loading snapshot", () => {
  const component = renderer.create((
    <ProgressiveImage
      presrc="/images/sticker/small.png"
      srcs={{
        large: "/images/sticker/large.jpg",
        medium: "/images/sticker/medium.jpg",
        small: "/images/sticker/small.png"
      }}
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Responsive ProgressiveImage with 'cover' fit and progressive loading snapshot", () => {
  const component = renderer.create((
    <ProgressiveImage
      fit="cover"
      presrc="/images/sticker/small.png"
      srcs={{
        large: "/images/sticker/large.jpg",
        medium: "/images/sticker/medium.jpg",
        small: "/images/sticker/small.png"
      }}
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
