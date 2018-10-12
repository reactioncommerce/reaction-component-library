import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import AddressForm from "./AddressForm";

test("Render with only the components on props", () => {
  const component = renderer.create(<AddressForm components={mockComponents} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render with a US address value", () => {
  const mockAddress = {
    address1: "7742 Hwy 23",
    address2: "",
    country: "US",
    city: "Belle Chasse",
    fullName: "Salvos Seafood",
    postal: "70037",
    region: "LA",
    phone: "(504) 393-7303"
  };
  const component = renderer.create(<AddressForm components={mockComponents} value={mockAddress} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render with a NG address value", () => {
  const mockAddress = {
    address1: "35 Akin Adesola St",
    address2: "",
    country: "NG",
    city: "Lagos",
    fullName: "Ocean Basket Victoria Island",
    postal: "101241",
    region: "Victoria Island",
    phone: "234 816 059 1821"
  };
  const component = renderer.create(<AddressForm components={mockComponents} value={mockAddress} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render with a partial address value", () => {
  const mockAddress = {
    country: "US",
    city: "Belle Chasse",
    postal: "70037",
    region: "LA"
  };
  const component = renderer.create(<AddressForm components={mockComponents} value={mockAddress} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render with locales", () => {
  const mockLocales = {
    ES: {
      name: "Essos",
      states: {
        BV: {
          name: "Brovos"
        },
        MN: {
          name: "Mareen"
        },
        PT: {
          name: "Pentos"
        },
        VD: {
          name: "Vaes Dothrak"
        },
        VO: {
          name: "Volantis"
        },
        QA: {
          name: "Qarth"
        }
      }
    },
    SY: {
      name: "Sothoryos"
    },
    UT: {
      name: "Ulthos"
    },
    WS: {
      name: "Westeros",
      capital: "Kings Landing",
      states: {
        DN: {
          name: "Dorne"
        },
        II: {
          name: "Iron Islands"
        },
        KL: {
          name: "The King's Lands"
        },
        SL: {
          name: "The Stormlands"
        },
        TN: {
          name: "The North"
        },
        TV: {
          name: "The Vale"
        }
      }
    }
  };
  const component = renderer.create(<AddressForm components={mockComponents} locales={mockLocales} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
