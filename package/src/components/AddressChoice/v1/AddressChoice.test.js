import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { ComponentsProvider } from "@reactioncommerce/components-context";
import mockComponents from "../../../tests/mockComponents";
import realComponents from "../../../tests/realComponents";
import AddressChoice from "./AddressChoice";

const addresses = [
  {
    _id: "20",
    address1: "7742 Hwy 23",
    address2: "",
    country: "US",
    city: "Belle Chasse",
    fullName: "Salvos Seafood",
    postal: "70037",
    region: "LA",
    phone: "(504) 393-7303"
  },
  {
    _id: "21",
    address1: "35 Akin Adesola St",
    address2: "",
    country: "NG",
    city: "Lagos",
    fullName: "Ocean Basket Victoria Island",
    postal: "101241",
    region: "Victoria Island",
    phone: "234 816 059 1821"
  }
];

test("simple snapshot", () => {
  const component = renderer.create(<AddressChoice components={mockComponents} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("simple snapshot read only", () => {
  const component = renderer.create(<AddressChoice components={mockComponents} isReadOnly />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("calls onChange when a field changes", () => {
  const onChange = jest.fn();

  const wrapper = mount((
    <ComponentsProvider value={realComponents}>
      <AddressChoice onChange={onChange} />
    </ComponentsProvider>
  ));

  onChange.mockClear();

  wrapper.find('input[name="address1"]').simulate("blur", { target: { value: "FOO" } });

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenLastCalledWith({
    address1: "FOO",
    address2: null,
    addressName: "",
    city: null,
    country: null,
    fullName: null,
    isCommercial: false,
    phone: null,
    postal: null,
    region: null
  });
});

test("snapshot with addresses", () => {
  const component = renderer.create(<AddressChoice components={mockComponents} addresses={addresses} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("calls onChange on mount and when a different provided address is selected", () => {
  const onChange = jest.fn();

  const wrapper = mount((
    <ComponentsProvider value={realComponents}>
      <AddressChoice addresses={addresses} onChange={onChange} />
    </ComponentsProvider>
  ));

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenLastCalledWith(addresses[0]);

  onChange.mockClear();

  wrapper.find('input[value="1"]').simulate("change", { target: { checked: true } });

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenLastCalledWith(addresses[1]);
});
