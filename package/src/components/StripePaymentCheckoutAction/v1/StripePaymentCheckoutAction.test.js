import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import StripePaymentCheckoutAction from "./StripePaymentCheckoutAction";

test("basic snapshot", () => {
  const component = renderer.create(<StripePaymentCheckoutAction />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
