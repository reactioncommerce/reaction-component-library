import React from "react";
import renderer from "react-test-renderer";
import CartItem from "./CartItem";

test("basic snapshot with empty props", () => {
  const component = renderer.create(<CartItem item={{ price: {} }} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("basic snapshot with props", () => {
  const mockItem = {
    attributes: [
      { label: "vendor", value: "Patagonia" },
      { label: "Color", value: "Red" },
      { label: "Size", value: "Medium" }
    ],
    currentQuantity: 3,
    imageUrl: "//placehold.it",
    price: {
      displayPrice: "$20.00",
      compareAtPrice: "$45.00"
    },
    productSlug: "/product-slug",
    title: "A Great Product",
    quantity: 2
  };
  const mockComponents = {
    CartItemDetailComponent: () => "Cart Item Detail",
    CartItemStockWarningComponent: () => "Cart Item Stock Warning",
    CartItemPriceComponent: () => " Cart Item Price",
    CartItemQuantityInputComponent: () => "Cart Item Quantity Input"
  };
  const component = renderer.create(<CartItem components={mockComponents} item={mockItem} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
