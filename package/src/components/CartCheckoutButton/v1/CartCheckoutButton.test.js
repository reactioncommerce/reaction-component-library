import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import CartCheckoutButton from "./CartCheckoutButton";

test("basic snapshot", () => {
  const component = renderer.create(<CartCheckoutButton />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
