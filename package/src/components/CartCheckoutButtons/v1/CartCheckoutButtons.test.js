import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Button from "../../Button/v1";
import CartCheckoutButtons from "./CartCheckoutButtons";

test("default cart checkout button", () => {
  const onClick = () => {};
  const isDisabled = false;

  const component = renderer.create((
    <CartCheckoutButtons
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
    <CartCheckoutButtons
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
    <CartCheckoutButtons
      buttonText="Custom button text"
      components={{ Button }}
      isDisabled={isDisabled}
      onClick={testClick}
    />
  ));

  component.simulate("click");
  expect(testClick).toHaveBeenCalled();
});
