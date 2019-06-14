/* eslint-disable require-jsdoc  */
import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import { testInput } from "composable-form-tests";
import Select from "./Select";

const OPTIONS = [
  { label: "A", value: "a" },
  { label: "B", value: "b" },
  { label: "C", value: "c" }
];

const PROPS = {
  className: "react-select",
  classNamePrefix: "react-select",
  menuIsOpen: true
};

function simulateChanged(wrapper, value) {
  const labelToSelect = value.toString().toUpperCase();
  const selectOption = wrapper
    .find('[id*="-option-"]')
    .findWhere((option) => (option.props().children || "").trim() === labelToSelect);
  wrapper.setState({ focusedOption: undefined });

  selectOption.simulate("click");
  wrapper.update();
}

testInput({
  component: Select,
  defaultValue: null,
  exampleValueOne: "a",
  exampleValueTwo: "b",
  mount,
  options: OPTIONS,
  props: PROPS,
  simulateChanged
});

test("basic snapshot", () => {
  const component = renderer.create(<Select {...PROPS} options={OPTIONS} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("alphabetize option snapshot", () => {
  const UNORDERED_OPTIONS = [
    { label: "C", value: "c" },
    { label: "A", value: "a" },
    { label: "Z", value: "z" },
    { label: "E", value: "e" }
  ];
  const component = renderer.create(<Select {...PROPS} alphabetize options={UNORDERED_OPTIONS} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("when value prop changes to `null`, selection is cleared", () => {
  const wrapper = mount(<Select options={OPTIONS} value="c" />);
  expect(wrapper.html().indexOf(">C</div>")).not.toBe(-1);

  wrapper.setProps({ value: null });
  expect(wrapper.html().indexOf(">Select...</div>")).not.toBe(-1);
});
