import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import RegionInput from "./RegionInput";

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

  const component = renderer.create(<RegionInput name="region" components={mockComponents} options={options} value="BB"/>);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("basic snapshot with options should render a Select", () => {
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

  const component = renderer.create(<RegionInput name="region" components={mockComponents} options={options}/>);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
