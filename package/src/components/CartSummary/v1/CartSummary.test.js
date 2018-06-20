import React from "react";
import renderer from "react-test-renderer";
import CartSummary from "./CartSummary";

test("Displays a summary of the current items in the cart", () => {
  const component = renderer.create((
    <CartSummary
      displayShipping="3-5 Days"
      displaySubtotal="$246.22"
      displayTotal="$300.424"
      itemsQuantity={3}
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Displays a summary with FREE shipping", () => {
  const component = renderer.create((
    <CartSummary
      displayShipping="3-5 Days"
      displaySubtotal="$246.22"
      displayTotal="$300.424"
      isFreeShipping
      itemsQuantity={3}
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Displays a summary with calculated taxes", () => {
  const component = renderer.create((
    <CartSummary
      displayShipping="3-5 Days"
      displaySubtotal="$246.22"
      displayTotal="$300.424"
      displayTax="$24.88"
      itemsQuantity={3}
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Displays a summary with applied discount", () => {
  const component = renderer.create((
    <CartSummary
      displayDiscount="-$80.42"
      displayShipping="3-5 Days"
      displaySubtotal="$246.22"
      displayTotal="$300.424"
      itemsQuantity={3}
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
