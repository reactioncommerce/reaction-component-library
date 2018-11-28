import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import CartItem from "./CartItem";

const mockItem = {
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
  price: {
    displayAmount: "$20.00"
  },
  productSlug: "product-slug",
  productVendor: "Patagonia",
  subtotal: {
    displayAmount: "$40.00"
  },
  title: "A Great Product",
  quantity: 2
};

test("basic snapshot with empty props", () => {
  const component = renderer.create(<CartItem components={mockComponents} item={{ price: { displayAmount: "$9.99" } }} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("basic snapshot with props", () => {
  const component = renderer.create(<CartItem components={mockComponents} item={mockItem} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("basic snapshot with isReadOnly prop", () => {
  const component = renderer.create(<CartItem components={mockComponents} item={mockItem} isReadOnly />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("basic snapshot with productURLPath prop", () => {
  const component = renderer.create(<CartItem components={mockComponents} item={mockItem} productURLPath="product/" isReadOnly />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
