import React from "react";
import renderer from "react-test-renderer";
import MiniCart from "./MiniCart";

const mockCheckout = {
  summary: {
    subtotal: {
      displayAmount: "$25.00"
    },
    tax: {
      displayAmount: "$2.50"
    }
  }
};

const mockItems = [
  {
    _id: "123",
    attributes: [
      { label: "vendor", value: "Patagonia" },
      { label: "Color", value: "Red" },
      { label: "Size", value: "Medium" }
    ],
    currentQuantity: 3,
    imageUrl: "//placehold.it",
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
    imageUrl: "//placehold.it",
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
  ButtonComponent: () => "Button",
  CartCheckoutButtonComponent: () => "Cart Checkout Button",
  CartSummaryComponent: () => "Cart Summary",
  CartItemsComponent: () => "Cart Items",
  CartItemComponent: () => "Cart Item",
  CartItemDetailComponent: () => "Cart Item Detail",
  CartItemStockWarningComponent: () => "Cart Item Stock Warning",
  CartItemPriceComponent: () => " Cart Item Price",
  CartItemQuantityInputComponent: () => "Cart Item Quantity Input"
};

test("basic snapshot with props", () => {
  const component = renderer.create(<MiniCart cart={{ checkout: mockCheckout, items: mockItems }} components={mockComponents} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
