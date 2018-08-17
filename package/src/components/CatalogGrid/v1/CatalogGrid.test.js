import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import CatalogGrid from "./CatalogGrid";
import mockProducts from "./__mocks__/products";

test("CatalogGrid default responsive snapshot", () => {
  const component = renderer.create((
    <CatalogGrid
      components={mockComponents}
      products={mockProducts}
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("CatalogGrid 325px fixed-width snapshot", () => {
  const component = renderer.create((
    <div style={{ width: 325, borderWidth: 1, borderColor: "black", borderStyle: "solid", margin: "0 auto" }}>
      <CatalogGrid
        components={mockComponents}
        products={mockProducts}
      />
    </div>
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("CatalogGrid 450px fixed-width snapshot", () => {
  const component = renderer.create((
    <div style={{ width: 450, borderWidth: 1, borderColor: "black", borderStyle: "solid", margin: "0 auto" }}>
      <CatalogGrid
        components={mockComponents}
        products={mockProducts}
      />
    </div>
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("CatalogGrid 650px fixed-width snapshot", () => {
  const component = renderer.create((
    <div style={{ width: 650, borderWidth: 1, borderColor: "black", borderStyle: "solid", margin: "0 auto" }}>
      <CatalogGrid
        components={mockComponents}
        products={mockProducts}
      />
    </div>
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("CatalogGrid 960px fixed-width snapshot", () => {
  const component = renderer.create((
    <div style={{ width: 960, borderWidth: 1, borderColor: "black", borderStyle: "solid", margin: "0 auto" }}>
      <CatalogGrid
        components={mockComponents}
        products={mockProducts}
      />
    </div>
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("CatalogGrid custom placeholder image snapshot", () => {
  const component = renderer.create((
    <CatalogGrid
      components={mockComponents}
      products={mockProducts}
      placeholderImageURL={"/path/to/custom/placeholder.png"}
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
