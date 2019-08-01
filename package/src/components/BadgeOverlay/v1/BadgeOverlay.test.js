import React from "react";
import renderer from "react-test-renderer";
import BadgeOverlay from "./BadgeOverlay";

test("BadgeOverlay with sold out primary badge", () => {
  const component = renderer.create((
    <BadgeOverlay
      product={{
        isSoldOut: true,
        isBackorder: false,
        isOnSale: false,
        isLowQuantity: false,
        isBestseller: false
      }}
    >
      <img src="/storefront-component-library-logo.svg" width="200" height="200" alt="Reaction Storefront Component Library logo" />
    </BadgeOverlay>
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("BadgeOverlay with backorder primary badge", () => {
  const component = renderer.create((
    <BadgeOverlay
      product={{
        isSoldOut: true,
        isBackorder: true,
        isOnSale: false,
        isLowQuantity: false,
        isBestseller: false
      }}
    >
      <img src="/storefront-component-library-logo.svg" width="200" height="200" alt="Reaction Storefront Component Library logo" />
    </BadgeOverlay>
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("BadgeOverlay with on sale primary badge", () => {
  const component = renderer.create((
    <BadgeOverlay
      product={{
        isSoldOut: false,
        isBackorder: false,
        isOnSale: true,
        isLowQuantity: false,
        isBestseller: false
      }}
    >
      <img src="/storefront-component-library-logo.svg" width="200" height="200" alt="Reaction Storefront Component Library logo" />
    </BadgeOverlay>
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("BadgeOverlay with on sale primary badge and low quantity secondary badge", () => {
  const component = renderer.create((
    <BadgeOverlay
      product={{
        isSoldOut: false,
        isBackorder: false,
        isOnSale: true,
        isLowQuantity: true,
        isBestseller: false
      }}
    >
      <img src="/storefront-component-library-logo.svg" width="200" height="200" alt="Reaction Storefront Component Library logo" />
    </BadgeOverlay>
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("BadgeOverlay with on sale primary badge and best seller secondary badge", () => {
  const component = renderer.create((
    <BadgeOverlay
      product={{
        isSoldOut: false,
        isBackorder: false,
        isOnSale: true,
        isLowQuantity: false,
        isBestseller: true
      }}
    >
      <img src="/storefront-component-library-logo.svg" width="200" height="200" alt="Reaction Storefront Component Library logo" />
    </BadgeOverlay>
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("BadgeOverlay with low quantity primary badge", () => {
  const component = renderer.create((
    <BadgeOverlay
      product={{
        isSoldOut: false,
        isBackorder: false,
        isOnSale: false,
        isLowQuantity: true,
        isBestseller: false
      }}
    >
      <img src="/storefront-component-library-logo.svg" width="200" height="200" alt="Reaction Storefront Component Library logo" />
    </BadgeOverlay>
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("BadgeOverlay with low quantity primary badge and best seller secondary badge", () => {
  const component = renderer.create((
    <BadgeOverlay
      product={{
        isSoldOut: false,
        isBackorder: false,
        isOnSale: false,
        isLowQuantity: true,
        isBestseller: true
      }}
    >
      <img src="/storefront-component-library-logo.svg" width="200" height="200" alt="Reaction Storefront Component Library logo" />
    </BadgeOverlay>
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("BadgeOverlay with best seller primary badge", () => {
  const component = renderer.create((
    <BadgeOverlay
      product={{
        isSoldOut: false,
        isBackorder: false,
        isOnSale: false,
        isLowQuantity: false,
        isBestseller: true
      }}
    >
      <img src="/storefront-component-library-logo.svg" width="200" height="200" alt="Reaction Storefront Component Library logo" />
    </BadgeOverlay>
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
