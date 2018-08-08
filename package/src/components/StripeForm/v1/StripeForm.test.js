import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import StripeForm from "./StripeForm";

test("basic snapshot", () => {
  const component = renderer.create(<StripeForm />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
