import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import ShippingAddressCheckoutAction from "./ShippingAddressCheckoutAction";

test("basic snapshot", () => {
  const component = renderer.create(<ShippingAddressCheckoutAction />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});