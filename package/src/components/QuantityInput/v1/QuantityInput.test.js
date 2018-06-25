import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import QuantityInput from "./QuantityInput";

test("basic snapshot", () => {
  const component = renderer.create(<QuantityInput />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
