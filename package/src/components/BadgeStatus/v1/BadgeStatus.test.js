import React from "react";
import renderer from "react-test-renderer";
import BadgeStatus from "./BadgeStatus";

test("BadgeStatus with sold out primary badge", () => {
  const component = renderer.create((
    <BadgeStatus
      product={{
        isSoldOut: true,
        isBackorder: false,
        isOnSale: false,
        isLowQuantity: false,
        isBestseller: false
      }}
    >
      <img src="/reaction-design-system-logo.svg" width="200" height="200" alt="Reaction Design System Logo" />
    </BadgeStatus>
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("BadgeStatus with backorder primary badge", () => {
  const component = renderer.create((
    <BadgeStatus
      product={{
        isSoldOut: true,
        isBackorder: true,
        isOnSale: false,
        isLowQuantity: false,
        isBestseller: false
      }}
    >
      <img src="/reaction-design-system-logo.svg" width="200" height="200" alt="Reaction Design System Logo" />
    </BadgeStatus>
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("BadgeStatus with on sale primary badge", () => {
  const component = renderer.create((
    <BadgeStatus
      product={{
        isSoldOut: false,
        isBackorder: false,
        isOnSale: true,
        isLowQuantity: false,
        isBestseller: false
      }}
    >
      <img src="/reaction-design-system-logo.svg" width="200" height="200" alt="Reaction Design System Logo" />
    </BadgeStatus>
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("BadgeStatus with on sale primary badge and low quantity secondary badge", () => {
  const component = renderer.create((
    <BadgeStatus
      product={{
        isSoldOut: false,
        isBackorder: false,
        isOnSale: true,
        isLowQuantity: true,
        isBestseller: false
      }}
    >
      <img src="/reaction-design-system-logo.svg" width="200" height="200" alt="Reaction Design System Logo" />
    </BadgeStatus>
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("BadgeStatus with on sale primary badge and best seller secondary badge", () => {
  const component = renderer.create((
    <BadgeStatus
      product={{
        isSoldOut: false,
        isBackorder: false,
        isOnSale: true,
        isLowQuantity: false,
        isBestseller: true
      }}
    >
      <img src="/reaction-design-system-logo.svg" width="200" height="200" alt="Reaction Design System Logo" />
    </BadgeStatus>
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("BadgeStatus with low quantity primary badge", () => {
  const component = renderer.create((
    <BadgeStatus
      product={{
        isSoldOut: false,
        isBackorder: false,
        isOnSale: false,
        isLowQuantity: true,
        isBestseller: false
      }}
    >
      <img src="/reaction-design-system-logo.svg" width="200" height="200" alt="Reaction Design System Logo" />
    </BadgeStatus>
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("BadgeStatus with low quantity primary badge and best seller secondary badge", () => {
  const component = renderer.create((
    <BadgeStatus
      product={{
        isSoldOut: false,
        isBackorder: false,
        isOnSale: false,
        isLowQuantity: true,
        isBestseller: true
      }}
    >
      <img src="/reaction-design-system-logo.svg" width="200" height="200" alt="Reaction Design System Logo" />
    </BadgeStatus>
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("BadgeStatus with best seller primary badge", () => {
  const component = renderer.create((
    <BadgeStatus
      product={{
        isSoldOut: false,
        isBackorder: false,
        isOnSale: false,
        isLowQuantity: false,
        isBestseller: true
      }}
    >
      <img src="/reaction-design-system-logo.svg" width="200" height="200" alt="Reaction Design System Logo" />
    </BadgeStatus>
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
