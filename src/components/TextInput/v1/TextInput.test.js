import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { testInput } from "composable-form-tests";
import TextInput from "./TextInput";

testInput({
  component: TextInput,
  defaultValue: null,
  exampleValueOne: "ONE",
  exampleValueTwo: "TWO",
  mount,
  simulateChanging(wrapper, value) {
    wrapper.find("input").simulate("change", { target: { value } });
  },
  simulateChanged(wrapper, value) {
    wrapper.find("input").simulate("blur", { target: { value } });
  },
  simulateSubmit(wrapper) {
    wrapper.find("input").simulate("keypress", { which: 13 });
  }
});

test("renders", () => {
  const component = renderer.create(<TextInput name="test" />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders with props", () => {
  const component = renderer.create(<TextInput
    name="test"
    value="VALUE"
    placeholder="PLACEHOLDER"
    className="CLASSNAME"
    maxLength={20}
    isReadOnly
  />); // eslint-disable-line react/jsx-closing-bracket-location

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders textarea", () => {
  const component = renderer.create(<TextInput name="test" allowLineBreak />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders textarea with props", () => {
  const component = renderer.create(<TextInput
    name="test"
    shouldAllowLineBreak
    value="VALUE"
    placeholder="PLACEHOLDER"
    className="CLASSNAME"
    maxLength={20}
    isReadOnly
  />); // eslint-disable-line react/jsx-closing-bracket-location

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("getValue default trimming and null", () => {
  const wrapper = mount(<TextInput name="test" value=" " />);
  expect(wrapper.instance().getValue()).toBeNull();
});

test("getValue with shouldConvertEmptyStringToNull false", () => {
  const wrapper = mount(<TextInput name="test" shouldConvertEmptyStringToNull={false} />);
  expect(wrapper.instance().getValue()).toBe("");
});

test("getValue with shouldTrimValue false", () => {
  const wrapper = mount(<TextInput name="test" shouldTrimValue={false} value=" " />);
  expect(wrapper.instance().getValue()).toBe(" ");
});
