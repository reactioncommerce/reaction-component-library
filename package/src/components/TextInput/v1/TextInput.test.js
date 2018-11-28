/* eslint-disable require-jsdoc  */
import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { testInput } from "composable-form-tests";
import mockComponents from "../../../tests/mockComponents";
import TextInput from "./TextInput";

testInput({
  component: TextInput,
  props: {
    components: mockComponents
  },
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
  const component = renderer.create(<TextInput components={mockComponents} name="test" />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders with props", () => {
  const component = renderer.create(<TextInput
    className="CLASSNAME"
    components={mockComponents}
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
  const component = renderer.create(<TextInput name="test" components={mockComponents} allowLineBreak />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders textarea with props", () => {
  const component = renderer.create(<TextInput
    className="CLASSNAME"
    components={mockComponents}
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

test("value default trimming and null", () => {
  let initialValue;

  function onChange(value) {
    initialValue = value;
  }

  mount(<TextInput components={mockComponents} name="test" onChange={onChange} value=" " />);
  expect(initialValue).toBeNull();
});

test("value with shouldConvertEmptyStringToNull false", () => {
  let initialValue;
  function onChange(value) {
    initialValue = value;
  }

  mount(<TextInput components={mockComponents} name="test" onChange={onChange} shouldConvertEmptyStringToNull={false} />);
  expect(initialValue).toBe("");
});

test("value with shouldTrimValue false", () => {
  let initialValue;
  function onChange(value) {
    initialValue = value;
  }

  mount((
    <TextInput
      components={mockComponents}
      name="test"
      onChange={onChange}
      shouldTrimValue={false}
      value=" "
    />
  ));
  expect(initialValue).toBe(" ");
});

test("value with null value", () => {
  let initialValue;
  function onChange(value) {
    initialValue = value;
  }

  mount((
    <TextInput
      components={mockComponents}
      name="test"
      onChange={onChange}
      shouldConvertEmptyStringToNull={false}
      value={null}
    />
  ));
  expect(initialValue).toBe("");
});

test("value with undefined value", () => {
  let initialValue;
  function onChange(value) {
    initialValue = value;
  }

  mount((
    <TextInput
      components={mockComponents}
      name="test"
      onChange={onChange}
      shouldConvertEmptyStringToNull={false}
      value={undefined}
    />
  ));
  expect(initialValue).toBe("");
});

test("value with null value after changed prop", () => {
  let currentValue;
  function onChange(value) {
    currentValue = value;
  }

  const wrapper = mount((
    <TextInput
      components={mockComponents}
      name="test"
      onChange={onChange}
      shouldConvertEmptyStringToNull={false}
      value="123"
    />
  ));
  wrapper.setProps({ value: null });
  expect(currentValue).toBe("");
});

test("value with undefined value after changed prop", () => {
  let currentValue;
  function onChange(value) {
    currentValue = value;
  }

  const wrapper = mount((
    <TextInput
      components={mockComponents}
      name="test"
      onChange={onChange}
      shouldConvertEmptyStringToNull={false}
      value="123"
    />
  ));
  wrapper.setProps({ value: undefined });
  expect(currentValue).toBe("");
});
