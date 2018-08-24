import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import StripePaymentCheckoutAction from "./StripePaymentCheckoutAction";

test("basic snapshot", () => {
  const component = renderer.create((
    <StripePaymentCheckoutAction
      label="Payment Information"
      stepNumber={2}
      onReadyForSaveChange={() => true}
      onSubmit={() => true}
      components={mockComponents}
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
