import React from "react";
import renderer from "react-test-renderer";
import MultiSelect from "./MultiSelect";

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

test("basic snapshot", () => {
  const component = renderer.create(<MultiSelect {...PROPS} options={OPTIONS} />);
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
  const component = renderer.create(<MultiSelect {...PROPS} alphabetize options={UNORDERED_OPTIONS} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
