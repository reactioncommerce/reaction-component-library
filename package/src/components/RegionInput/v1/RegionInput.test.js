import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { testInput } from "composable-form-tests";
import mockComponents from "../../../tests/mockComponents";
import Select from "../../Select/v1";
import TextInput from "../../TextInput/v1";
import RegionInput from "./RegionInput";

// Must have the real Select and TextInput components passed in for all tests to pass
const components = {
  ...mockComponents,
  Select,
  TextInput
};

const options = [
  {
    value: "AA",
    label: "A State"
  },
  {
    value: "BB",
    label: "B State"
  }
];

// Test when Input is rendered
testInput({
  component: RegionInput,
  props: {
    components
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

// Test when Select is rendered
testInput({
  component: RegionInput,
  props: {
    className: "react-select",
    classNamePrefix: "react-select",
    components,
    menuIsOpen: true, // This is necessary so that we can click an option to simulate changing
    options // This is what triggers it to be a Select
  },
  defaultValue: null,
  exampleValueOne: "AA",
  exampleValueTwo: "BB",
  mount,
  simulateChanged(wrapper, value) {
    const optToSelect = options.find((option) => option.value === value);
    const labelToSelect = optToSelect ? optToSelect.label : null;
    const selectOption = wrapper
      .find('[id*="-option-"]')
      .findWhere((opt) => (opt.props().children || "").trim() === labelToSelect);

    selectOption.simulate("click");
    wrapper.update();
  }
});

test("basic snapshot with only the components and required props should render a TextInput", () => {
  const component = renderer.create(<RegionInput name="region" components={mockComponents} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("basic snapshot with other form props", () => {
  const component = renderer.create(<RegionInput components={mockComponents} value="California" name="region" isReadOnly />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("basic snapshot with pre-filled value in TextInput", () => {
  const component = renderer.create(<RegionInput name="region" components={mockComponents} value="California"/>);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("basic snapshot with pre-filled value in Select", () => {
  const component = renderer.create(<RegionInput name="region" components={mockComponents} options={options} value="BB"/>);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("basic snapshot with options should render a Select", () => {
  const component = renderer.create(<RegionInput name="region" components={mockComponents} options={options}/>);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
