import React from "react";
import renderer from "react-test-renderer";
// import { shallow } from "enzyme";
import Address from "./Address";

const mockAddress = {
  _id: "1",
  address1: "7742 Hwy 23",
  address2: "",
  country: "US",
  city: "Belle Chasse",
  fullName: "Salvos Seafood",
  postal: "70037",
  region: "LA",
  phone: "(504) 393-7303"
};

test("basic snapshot with required props", () => {
  const component = renderer.create(<Address address={mockAddress} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("basic snapshot with is flat prop", () => {
  const component = renderer.create(<Address address={mockAddress} isFlat />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("basic snapshot with address order prop", () => {
  const addressOrder = ["fullName", "phone"];
  const address = mockAddress;
  const component = renderer.create(<Address {...{ address, addressOrder }} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("basic snapshot with invalid address properties prop", () => {
  const invalidAddressProperties = ["country", "address1"];
  const address = mockAddress;
  const component = renderer.create(<Address {...{ address, invalidAddressProperties }} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
