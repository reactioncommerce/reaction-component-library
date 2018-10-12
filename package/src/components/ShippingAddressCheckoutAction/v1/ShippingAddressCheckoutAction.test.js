import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import ShippingAddressCheckoutAction from "./ShippingAddressCheckoutAction";

test("basic snapshot with empty address", () => {
  /* eslint-disable */
  const component = renderer.create(
    <ShippingAddressCheckoutAction
      label="Shipping Address"
      stepNumber={1}
      onReadyForSaveChange={() => true}
      onSubmit={() => true}
      components={mockComponents}
      fulfillmentGroup={{ data: { shippingAddress: null } }}
    />
  );
  /* eslint-enable */

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("basic snapshot with address", () => {
  const address = {
    address1: "7742 Hwy 23",
    address2: "",
    country: "US",
    city: "Belle Chasse",
    fullName: "Salvos Seafood",
    postal: "70037",
    region: "LA",
    phone: "(504) 393-7303"
  };
  /* eslint-disable */
  const component = renderer.create(
    <ShippingAddressCheckoutAction
      label="Shipping Address"
      stepNumber={1}
      onReadyForSaveChange={() => true}
      onSubmit={() => true}
      components={mockComponents}
      fulfillmentGroup={{ data: { shippingAddress: address } }}
    />
  );
  /* eslint-enable */

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
