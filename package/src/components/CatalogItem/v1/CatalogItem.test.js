import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import CatalogItem from "./CatalogItem";

test("CatalogItem basic snapshot", () => {
  const component = renderer.create((
    <CatalogItem
      components={mockComponents}
      placeholderImageURL="/resources/placeholder.gif"
      product={{
        title: "Basic Reaction Product",
        slug: "basic-reaction-product",
        vendor: "Example Manufacturer",
        primaryImage: {
          URLs: {
            large: "/images/responsive-sticker/large.jpg",
            medium: "/images/responsive-sticker/medium.jpg",
            small: "/images/responsive-sticker/small.png",
            thumbnail: "/images/responsive-sticker/thumbnail.png"
          }
        },
        pricing: [{
          currency: {
            code: "USD"
          },
          displayPrice: "$12.99 - $19.99"
        }],
        isSoldOut: false,
        isBackorder: false,
        isOnSale: false,
        isLowQuantity: false,
        isBestseller: true
      }}
      currencyCode="USD"
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("CatalogItem with placeholder image", () => {
  const component = renderer.create((
    <CatalogItem
      components={mockComponents}
      placeholderImageURL="/resources/placeholder.gif"
      product={{
        title: "Basic Reaction Product",
        slug: "basic-reaction-product",
        vendor: "Example Manufacturer",
        primaryImage: null,
        pricing: [{
          currency: {
            code: "USD"
          },
          displayPrice: "$12.99 - $19.99"
        }],
        isSoldOut: false,
        isBackorder: false,
        isOnSale: false,
        isLowQuantity: false,
        isBestseller: true
      }}
      currencyCode="USD"
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
