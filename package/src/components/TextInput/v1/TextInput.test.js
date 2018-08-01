import React from "react";
import renderer from "react-test-renderer";
import styled from "styled-components";
import { mount } from "enzyme";
import { testInput } from "composable-form-tests";
import mockComponents from "../../../tests/mockComponents";
import TextInput from "./TextInput";

/**
 * NOTE: Some tests in here are commented out because wrapper.instance() is
 * not working in our fork of enzyme packages. After we switch back to using
 * the real enzyme packages, re-enable these tests.
 */

// testInput({
//   component: TextInput,
//   props: {
//     components: mockComponents
//   },
//   defaultValue: null,
//   exampleValueOne: "ONE",
//   exampleValueTwo: "TWO",
//   mount,
//   simulateChanging(wrapper, value) {
//     wrapper.find("input").simulate("change", { target: { value } });
//   },
//   simulateChanged(wrapper, value) {
//     wrapper.find("input").simulate("blur", { target: { value } });
//   },
//   simulateSubmit(wrapper) {
//     wrapper.find("input").simulate("keypress", { which: 13 });
//   }
// });

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

// test("getValue default trimming and null", () => {
//   const wrapper = mount(<TextInput components={mockComponents} name="test" value=" " />);
//   expect(wrapper.instance().getValue()).toBeNull();
// });

// test("getValue with shouldConvertEmptyStringToNull false", () => {
//   const wrapper = mount(<TextInput components={mockComponents} name="test" shouldConvertEmptyStringToNull={false} />);
//   expect(wrapper.instance().getValue()).toBe("");
// });

// test("getValue with shouldTrimValue false", () => {
//   const wrapper = mount(<TextInput components={mockComponents} name="test" shouldTrimValue={false} value=" " />);
//   expect(wrapper.instance().getValue()).toBe(" ");
// });

// test("getValue with null value", () => {
//   const wrapper = mount(<TextInput components={mockComponents} name="test" shouldConvertEmptyStringToNull={false} value={null} />);
//   expect(wrapper.instance().getValue()).toBe("");
// });

// test("getValue with undefined value", () => {
//   const wrapper = mount(<TextInput components={mockComponents} name="test" shouldConvertEmptyStringToNull={false} value={undefined} />);
//   expect(wrapper.instance().getValue()).toBe("");
// });

// test("getValue with null value after changed prop", () => {
//   const wrapper = mount(<TextInput components={mockComponents} name="test" shouldConvertEmptyStringToNull={false} value="123" />);
//   wrapper.setProps({ value: null });
//   expect(wrapper.instance().getValue()).toBe("");
// });

// test("getValue with undefined value after changed prop", () => {
//   const wrapper = mount(<TextInput components={mockComponents} name="test" shouldConvertEmptyStringToNull={false} value="123" />);
//   wrapper.setProps({ value: undefined });
//   expect(wrapper.instance().getValue()).toBe("");
// });
