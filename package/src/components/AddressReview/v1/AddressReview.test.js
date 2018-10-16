import React from "react";
import renderer from "react-test-renderer";
// import { shallow } from "enzyme";
import mockComponents from "../../../tests/mockComponents";
import AddressReview from "./AddressReview";

const mockAddressEntered = {
  address1: "7742 Hwy 25",
  address2: "",
  country: "US",
  city: "Belle Chasse",
  fullName: "Salvos Seafood",
  postal: "70047",
  region: "LA",
  phone: "(504) 393-7303"
};

const mockAddressSuggestion = {
  address1: "7742 Hwy 23",
  address2: "",
  country: "US",
  city: "Belle Chasse",
  fullName: "Salvos Seafood",
  postal: "70037",
  region: "LA",
  phone: "(504) 393-7303"
};

test("basic snapshot", () => {
  const component = renderer.create(<AddressReview
    addressEntered={mockAddressEntered}
    addressSugestion={mockAddressSuggestion}
    components={mockComponents}
  />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
