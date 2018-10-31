import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import MiniCart from "./MiniCart";

const mockCheckout = {
  summary: {
    itemTotal: {
      displayAmount: "$25.00"
    },
    taxTotal: {
      displayAmount: "$2.50"
    }
  }
};

const mockItems = [
  {
    _id: "123",
    attributes: [
      { label: "Color", value: "Red" },
      { label: "Size", value: "Medium" }
    ],
    compareAtPrice: {
      displayAmount: "$45.00"
    },
    currentQuantity: 3,
    imageURLs: {
      small: "//placehold.it/150",
      thumbnail: "//placehold.it/100"
    },
    isLowQuantity: true,
    price: {
      displayAmount: "$20.00"
    },
    productSlug: "product-slug",
    productVendor: "Patagonia",
    title: "A Great Product",
    quantity: 2
  },
  {
    _id: "456",
    attributes: [
      { label: "Color", value: "Black" },
      { label: "Size", value: "10" }
    ],
    currentQuantity: 500,
    imageURLs: {
      small: "//placehold.it/150",
      thumbnail: "//placehold.it/100"
    },
    isLowQuantity: false,
    price: {
      displayAmount: "$78.00"
    },
    productSlug: "product-slug",
    productVendor: "Nike",
    title: "Another Great Product",
    quantity: 1
  }
];

test("basic snapshot with props", () => {
  const component = renderer.create(<MiniCart cart={{ checkout: mockCheckout, items: mockItems }} components={mockComponents} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
