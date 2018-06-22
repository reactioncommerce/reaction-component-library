import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
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


test("cart checkout button onClick", () => {
  const isDisabled = false;
  const testClick = jest.fn();

  const component = shallow((
    <CartCheckoutButton
      buttonText="Custom button text"
      components={{ Button }}
      isDisabled={isDisabled}
      onClick={testClick}
    />
  ));

  component.simulate("click");
  expect(testClick).toHaveBeenCalled();
});
