import React from "react";
import renderer from "react-test-renderer";
// import { shallow } from "enzyme";
import AddressReview from "./AddressReview";

test("basic snapshot", () => {
  const component = renderer.create(<AddressReview />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
