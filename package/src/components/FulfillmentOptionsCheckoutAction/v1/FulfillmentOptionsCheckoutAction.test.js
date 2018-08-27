import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import FulfillmentOptionsCheckoutAction from "./FulfillmentOptionsCheckoutAction";

test("basic snapshot", () => {
  const options = [{
    id: "111",
    label: "Standard (5-9 days)",
    detail: "Free",
    value: "Standard"
  },
  {
    id: "222",
    label: "Priority (3-5 days)",
    detail: "$5.99",
    value: "Priority"
  }];
  const component = renderer.create(<FulfillmentOptionsCheckoutAction components={mockComponents} stepNumber={2} label="Choose a shipping method" fulfillmentOptions={options} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
