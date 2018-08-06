import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import ShippingAddressCheckoutAction from "./ShippingAddressCheckoutAction";

test("basic snapshot with empty address", () => {
  const component = renderer.create(
    <ShippingAddressCheckoutAction
      components={mockComponents}
      fullfillmentGroup={{ data: { shippingAddress: null } }}
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// test("basic snapshot with address", () => {
//   const address = {
//     address1: "7742 Hwy 23",
//     address2: "",
//     country: "US",
//     city: "Belle Chasse",
//     firstName: "Salvos",
//     lastName: "Seafood",
//     postal: "70037",
//     region: "LA",
//     phone: "(504) 393-7303"
//   };
//   const component = renderer.create(
//     <ShippingAddressCheckoutAction
//       components={mockComponents}
//       fullfillmentGroup={{ data: { shippingAddress: address } }}
//     />
//   );

//   const tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
