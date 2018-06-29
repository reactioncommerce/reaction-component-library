import React from "react";
import renderer from "react-test-renderer";
import CartItems from "./CartItems";

test("basic snapshot with empty props", () => {
  const component = renderer.create(<CartItems items={[]} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("basic snapshot with props", () => {
  const mockItems = [
    {
      _id: "123",
      attributes: [
        { label: "vendor", value: "Patagonia" },
        { label: "Color", value: "Red" },
        { label: "Size", value: "Medium" }
      ],
      currentQuantity: 3,
      imageUrl: "http://placehold.it",
      isLowInventoryQuantity: true,
      price: {
        displayPrice: "$20.00",
        compareAtPrice: "$45.00"
      },
      productSlug: "/product-slug",
      title: "A Great Product",
      quantity: 2
    },
    {
      _id: "456",
      attributes: [
        { label: "vendor", value: "Nike" },
        { label: "Color", value: "Black" },
        { label: "Size", value: "10" }
      ],
      currentQuantity: 500,
      imageUrl: "http://placehold.it",
      isLowInventoryQuantity: false,
      price: {
        displayPrice: "$78.00"
      },
      productSlug: "/product-slug",
      title: "Another Great Product",
      quantity: 1
    }
  ];
  const mockComponents = {
    CartItemComponent: () => "Cart Item",
    CartItemDetailComponent: () => "Cart Item Detail",
    CartItemStockWarningComponent: () => "Cart Item Stock Warning",
    CartItemPriceComponent: () => " Cart Item Price",
    CartItemQuantityInputComponent: () => "Cart Item Quantity Input"
  };

  const component = renderer.create(<CartItems items={mockItems} components={mockComponents} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
