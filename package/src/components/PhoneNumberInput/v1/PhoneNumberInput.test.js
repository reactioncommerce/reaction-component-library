import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import PhoneNumberInput from "./PhoneNumberInput";

test("basic snapshot", () => {
  const component = renderer.create(<PhoneNumberInput />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
