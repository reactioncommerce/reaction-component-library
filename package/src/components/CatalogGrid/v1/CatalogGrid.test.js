import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import CatalogGrid from "./CatalogGrid";

test("CatalogGrid basic snapshot", () => {
  const component = renderer.create((
    <CatalogGrid
      components={mockComponents}
      products={[
        {
          title: "Product A",
          slug: "product-a",
          vendor: "Vendor A",
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
            compareAtPrice: null,
            price: 19.99,
            displayPrice: "$12.99 - $19.99"
          }],
          isSoldOut: false,
          isBackorder: false,
          isOnSale: false,
          isLowQuantity: false,
          isBestseller: true
        },
        {
          title: "Product B",
          slug: "product-b",
          vendor: "Vendor B",
          primaryImage: null,
          pricing: [{
            currency: {
              code: "USD"
            },
            compareAtPrice: null,
            price: 19.99,
            displayPrice: "$12.99 - $19.99"
          }],
          isSoldOut: false,
          isBackorder: false,
          isOnSale: false,
          isLowQuantity: true,
          isBestseller: false
        },
        {
          title: "Sticker",
          slug: "sticker",
          vendor: "Reaction",
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
            compareAtPrice: null,
            price: 19.99,
            displayPrice: "$12.99 - $19.99"
          }],
          isSoldOut: false,
          isBackorder: false,
          isOnSale: false,
          isLowQuantity: false,
          isBestseller: true
        },
        {
          title: "Product C",
          slug: "product-c",
          vendor: "Vendor C",
          primaryImage: null,
          pricing: [{
            currency: {
              code: "USD"
            },
            compareAtPrice: null,
            price: 19.99,
            displayPrice: "$12.99 - $19.99"
          }],
          isSoldOut: true,
          isBackorder: false,
          isOnSale: false,
          isLowQuantity: false,
          isBestseller: false
        }
      ]}
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("CatalogGrid custom placeholder image snapshot", () => {
  const component = renderer.create((
    <CatalogGrid
      components={mockComponents}
      placeholderImageURL="/images/placeholder.gif"
      products={[
        {
          title: "Product A",
          slug: "product-a",
          vendor: "Vendor A",
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
            compareAtPrice: null,
            price: 19.99,
            displayPrice: "$12.99 - $19.99"
          }],
          isSoldOut: false,
          isBackorder: false,
          isOnSale: false,
          isLowQuantity: false,
          isBestseller: true
        },
        {
          title: "Product B",
          slug: "product-b",
          vendor: "Vendor B",
          primaryImage: null,
          pricing: [{
            currency: {
              code: "USD"
            },
            compareAtPrice: null,
            price: 19.99,
            displayPrice: "$12.99 - $19.99"
          }],
          isSoldOut: false,
          isBackorder: false,
          isOnSale: false,
          isLowQuantity: false,
          isBestseller: true
        },
        {
          title: "Sticker",
          slug: "sticker",
          vendor: "Reaction",
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
            compareAtPrice: null,
            price: 19.99,
            displayPrice: "$12.99 - $19.99"
          }],
          isSoldOut: false,
          isBackorder: false,
          isOnSale: false,
          isLowQuantity: false,
          isBestseller: true
        },
        {
          title: "Product C",
          slug: "product-c",
          vendor: "Vendor C",
          primaryImage: null,
          pricing: [{
            currency: {
              code: "USD"
            },
            compareAtPrice: null,
            price: 19.99,
            displayPrice: "$12.99 - $19.99"
          }],
          isSoldOut: false,
          isBackorder: false,
          isOnSale: false,
          isLowQuantity: false,
          isBestseller: true
        }
      ]}
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("CatalogGrid custom min-width breakpoints snapshot", () => {
  const component = renderer.create((
    <CatalogGrid
      components={mockComponents}
      threePerRowWidth={960}
      fourPerRowWidth={1280}
      placeholderImageURL="/images/placeholder.gif"
      products={[
        {
          title: "Product A",
          slug: "product-a",
          vendor: "Vendor A",
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
            compareAtPrice: null,
            price: 19.99,
            displayPrice: "$12.99 - $19.99"
          }],
          isSoldOut: false,
          isBackorder: false,
          isOnSale: false,
          isLowQuantity: false,
          isBestseller: true
        },
        {
          title: "Product B",
          slug: "product-b",
          vendor: "Vendor B",
          primaryImage: null,
          pricing: [{
            currency: {
              code: "USD"
            },
            compareAtPrice: null,
            price: 19.99,
            displayPrice: "$12.99 - $19.99"
          }],
          isSoldOut: false,
          isBackorder: false,
          isOnSale: false,
          isLowQuantity: true,
          isBestseller: false
        },
        {
          title: "Sticker",
          slug: "sticker",
          vendor: "Reaction",
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
            compareAtPrice: null,
            price: 19.99,
            displayPrice: "$12.99 - $19.99"
          }],
          isSoldOut: true,
          isBackorder: false,
          isOnSale: false,
          isLowQuantity: false,
          isBestseller: false
        },
        {
          title: "Product C",
          slug: "product-c",
          vendor: "Vendor C",
          primaryImage: null,
          pricing: [{
            currency: {
              code: "USD"
            },
            compareAtPrice: null,
            price: 19.99,
            displayPrice: "$12.99 - $19.99"
          }],
          isSoldOut: false,
          isBackorder: false,
          isOnSale: false,
          isLowQuantity: false,
          isBestseller: false
        }
      ]}
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
