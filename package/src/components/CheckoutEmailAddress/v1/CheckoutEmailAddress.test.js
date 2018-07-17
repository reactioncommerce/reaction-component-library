import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import CheckoutEmailAddress from "./CheckoutEmailAddress";

test("render email address of a user with an account", () => {
  const component = shallow(<CheckoutEmailAddress emailAddress="account.email@example.com" isAccountEmail={true} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("render email address of a guest", () => {
  const component = shallow(<CheckoutEmailAddress emailAddress="guest.email@example.com" isAccountEmail={false} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
