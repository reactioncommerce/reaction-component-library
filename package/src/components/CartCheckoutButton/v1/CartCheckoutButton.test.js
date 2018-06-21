import React from "react";
import renderer from "react-test-renderer";
import Button from "../../Button/v1";
import CartCheckoutButton from "./CartCheckoutButton";

test("default cart checkout button", () => {
  const onClick = () => {};
  const isDisabled = false;

  const component = renderer.create((
    <CartCheckoutButton
      components={{ Button }}
      isDisabled={isDisabled}
      onClick={onClick}
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("cart checkout button with custom text", () => {
  const onClick = () => {};
  const isDisabled = false;

  const component = renderer.create((
    <CartCheckoutButton
      buttonText="Custom button text"
      components={{ Button }}
      isDisabled={isDisabled}
      onClick={onClick}
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
