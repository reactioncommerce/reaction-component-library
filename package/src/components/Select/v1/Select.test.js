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

function simulateChanged(wrapper, value) {
  const labelToSelect = value.toString().toUpperCase();
  const selectOption = wrapper
    .find("div.react-select__option")
    .findWhere((n) => (n.props().children || "").trim() === labelToSelect);
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
  props: {
    menuIsOpen: true
  },
  simulateChanged
});

test("basic snapshot", () => {
  const component = renderer.create(<Select />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
