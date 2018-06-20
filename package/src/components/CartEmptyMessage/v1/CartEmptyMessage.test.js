import React from "react";
import renderer from "react-test-renderer";
import Button from "../../Button/v1";
import CartEmptyMessage from "./CartEmptyMessage";

test("basic snapshot", () => {
  const onClick = () => {};
  const component = renderer.create(<CartEmptyMessage components={{ ContinueShoppingButton: Button }} onClick={onClick} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
