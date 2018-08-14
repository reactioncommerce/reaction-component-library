import React from "react";
import renderer from "react-test-renderer";
import Image from "./Image";

test("Basic Image snapshot", () => {
  const component = renderer.create((
    <Image src="/reaction-design-system-logo.svg" alt="Reaction Design System Logo" />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Image with progressive loading snapshot", () => {
  const component = renderer.create((
    <Image
      src="/images/responsive-sticker/medium.jpg"
      presrc="/images/responsive-sticker/small.png"
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Responsive Image with progressive loading snapshot", () => {
  const component = renderer.create((
    <Image
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
