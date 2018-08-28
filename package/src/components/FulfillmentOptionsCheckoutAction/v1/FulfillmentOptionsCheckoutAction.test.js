import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import FulfillmentOptionsCheckoutAction from "./FulfillmentOptionsCheckoutAction";

test("basic snapshot", () => {
  const options = [{
    fulfillmentMethod: {
      _id: "111",
      name: "Standard",
      displayName: "Standard (5-9 Days)"
    },
    price: {
      displayAmount: "Free"
    }
  },
  {
    fulfillmentMethod: {
      _id: "222",
      name: "Priority",
      displayName: "Priority (3-5 Days)"
    },
    price: {
      displayAmount: "$5.99"
    }
  }];

  /* eslint-disable */
  const component = renderer.create(<FulfillmentOptionsCheckoutAction components={mockComponents} stepNumber={2} label="Choose a shipping method" availableFulfillmentOptions={options} />);
  /* eslint-enable */

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("basic snapshot - empty fullfillment options", () => {
  const options = [];

  /* eslint-disable */
  const component = renderer.create(<FulfillmentOptionsCheckoutAction components={mockComponents} stepNumber={2} label="Choose a shipping method" availableFulfillmentOptions={options} />);
  /* eslint-enable */

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
