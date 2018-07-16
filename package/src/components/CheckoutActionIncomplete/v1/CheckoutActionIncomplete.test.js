import React from "react";
import renderer from "react-test-renderer";
import CheckoutActionIncomplete from "./CheckoutActionIncomplete";

test("basic snapshot", () => {
  const component = renderer.create((
    <CheckoutActionIncomplete label="Shipping information" stepNumber={2} />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
