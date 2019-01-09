import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import PaymentsCheckoutAction from "./PaymentsCheckoutAction";

test("basic snapshot", () => {
  const component = renderer.create(<PaymentsCheckoutAction />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
