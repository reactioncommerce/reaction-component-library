import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import CartEmptyMessage from "./CartEmptyMessage";
import Button from "../../Button/v1";

test("basic snapshot", () => {
  const onClick = () => {};
  const component = renderer.create(<CartEmptyMessage components={{ContinueShoppingButton: Button}} onClick={onClick} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
