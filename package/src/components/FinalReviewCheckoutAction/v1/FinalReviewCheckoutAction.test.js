import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import FinalReviewCheckoutAction from "./FinalReviewCheckoutAction";

const checkoutSummary = {
  displayShipping: "$5.25",
  displaySubtotal: "$275.77",
  displayTotal: "$288.64",
  displayTax: "$7.62",
  items: [{
    _id: "123",
    attributes: [{ label: "Color", value: "Red" }, { label: "Size", value: "Medium" }],
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
    attributes: [{ label: "Color", value: "Black" }, { label: "Size", value: "10" }],
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
    productVendor: "Patagonia",
    title: "Another Great Product",
    quantity: 1
  }]
};

test("basic snapshot", () => {
  const component = renderer.create((
    <FinalReviewCheckoutAction
      checkoutSummary={checkoutSummary}
      label="Payment Information"
      stepNumber={4}
      onReadyForSaveChange={() => true}
      onSubmit={() => true}
      components={mockComponents}
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
