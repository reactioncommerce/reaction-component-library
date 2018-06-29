import React from "react";
import renderer from "react-test-renderer";
import styled from "styled-components";
import { mount } from "enzyme";
import { testInput } from "composable-form-tests";
import TextInput from "./TextInput";

const FontIcon = styled.i`
  font-size: 1em;
  vertical-align: middle;
`;

const iconClear = <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" style={{ height: "100%", maxHeight: "100%", verticalAlign: "middle" }}><path d="M9.926 9.105l-2.105-2.105 2.105-2.105-0.82-0.82-2.105 2.105-2.105-2.105-0.82 0.82 2.105 2.105-2.105 2.105 0.82 0.82 2.105-2.105 2.105 2.105zM7 1.176c3.227 0 5.824 2.598 5.824 5.824s-2.598 5.824-5.824 5.824-5.824-2.598-5.824-5.824 2.598-5.824 5.824-5.824z" /></svg>;

const iconComponents = {
  iconClear,
  iconError: (<FontIcon className="fas fa-exclamation-triangle" />),
  iconValid: (<FontIcon className="far fa-check-circle" />)
};

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
  const component = renderer.create(<TextInput components={iconComponents} name="test" />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders with props", () => {
  const component = renderer.create(<TextInput
    className="CLASSNAME"
    components={iconComponents}
    isReadOnly
    maxLength={20}
    name="test"
    placeholder="PLACEHOLDER"
    value="VALUE"
  />); // eslint-disable-line react/jsx-closing-bracket-location

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders textarea", () => {
  const component = renderer.create(<TextInput name="test" components={iconComponents} allowLineBreak />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders textarea with props", () => {
  const component = renderer.create(<TextInput
    className="CLASSNAME"
    components={iconComponents}
    isReadOnly
    maxLength={20}
    name="test"
    placeholder="PLACEHOLDER"
    shouldAllowLineBreak
    value="VALUE"
  />); // eslint-disable-line react/jsx-closing-bracket-location

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("getValue default trimming and null", () => {
  const wrapper = mount(<TextInput components={iconComponents} name="test" value=" " />);
  expect(wrapper.instance().getValue()).toBeNull();
});

test("getValue with shouldConvertEmptyStringToNull false", () => {
  const wrapper = mount(<TextInput components={iconComponents} name="test" shouldConvertEmptyStringToNull={false} />);
  expect(wrapper.instance().getValue()).toBe("");
});

test("getValue with shouldTrimValue false", () => {
  const wrapper = mount(<TextInput components={iconComponents} name="test" shouldTrimValue={false} value=" " />);
  expect(wrapper.instance().getValue()).toBe(" ");
});

test("getValue with null value", () => {
  const wrapper = mount(<TextInput components={iconComponents} name="test" shouldConvertEmptyStringToNull={false} value={null} />);
  expect(wrapper.instance().getValue()).toBe("");
});

test("getValue with undefined value", () => {
  const wrapper = mount(<TextInput components={iconComponents} name="test" shouldConvertEmptyStringToNull={false} value={undefined} />);
  expect(wrapper.instance().getValue()).toBe("");
});

test("getValue with null value after changed prop", () => {
  const wrapper = mount(<TextInput components={iconComponents} name="test" shouldConvertEmptyStringToNull={false} value="123" />);
  wrapper.setProps({ value: null });
  expect(wrapper.instance().getValue()).toBe("");
});

test("getValue with undefined value after changed prop", () => {
  const wrapper = mount(<TextInput components={iconComponents} name="test" shouldConvertEmptyStringToNull={false} value="123" />);
  wrapper.setProps({ value: undefined });
  expect(wrapper.instance().getValue()).toBe("");
});
