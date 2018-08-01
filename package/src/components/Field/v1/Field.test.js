import React from "react";
import renderer from "react-test-renderer";
import styled from "styled-components";
import { shallow } from "enzyme";
import Field from "./Field";
import TextInput from "./../../TextInput/v1";

const FontIcon = styled.i`
  font-size: 1em;
  vertical-align: middle;
`;

const iconClear = <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" style={{ height: "100%", maxHeight: "100%", verticalAlign: "middle" }}><path d="M9.926 9.105l-2.105-2.105 2.105-2.105-0.82-0.82-2.105 2.105-2.105-2.105-0.82 0.82 2.105 2.105-2.105 2.105 0.82 0.82 2.105-2.105 2.105 2.105zM7 1.176c3.227 0 5.824 2.598 5.824 5.824s-2.598 5.824-5.824 5.824-5.824-2.598-5.824-5.824 2.598-5.824 5.824-5.824z" /></svg>;

const iconComponents = {
  iconClear,
  iconError: <FontIcon className="fas fa-exclamation-triangle" />,
  iconValid: (<FontIcon className="far fa-check-circle" />)
};

test("has isFormField property set to true", () => {
  expect(Field.isFormField).toBe(true);
});

test("renders with no label", () => {
  const component = renderer.create( // eslint-disable-line function-paren-newline
    <Field>
      <p>Text above</p>
      <TextInput components={iconComponents} name="test" />
      <p>Text below</p>
    </Field>,
  ); // eslint-disable-line function-paren-newline

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders with label", () => {
  const component = renderer.create( // eslint-disable-line function-paren-newline
    <Field label="Foo">
      <p>Text above</p>
      <TextInput components={iconComponents} name="test" />
      <p>Text below</p>
    </Field>,
  ); // eslint-disable-line function-paren-newline

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders with no help text", () => {
  const component = renderer.create( // eslint-disable-line function-paren-newline
    <Field>
      <p>Text above</p>
      <TextInput components={iconComponents} name="test" />
      <p>Text below</p>
    </Field>,
  ); // eslint-disable-line function-paren-newline

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders with help text", () => {
  const component = renderer.create( // eslint-disable-line function-paren-newline
    <Field helpText="Foo">
      <p>Text above</p>
      <TextInput components={iconComponents} name="test" />
      <p>Text below</p>
    </Field>,
  ); // eslint-disable-line function-paren-newline

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders with other props", () => {
  const component = renderer.create( // eslint-disable-line function-paren-newline
    <Field label="Foo" className="className" labelClassName="labelClassName" labelFor="labelFor">
      <p>Blah</p>
    </Field>,
  ); // eslint-disable-line function-paren-newline

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("adds 'has-error' class when there are errors", () => {
  const errors = [
    { name: "a", message: "Message One" },
    { name: "b", message: "Message Two" }
  ];

  const component = shallow( // eslint-disable-line function-paren-newline
    <Field label="Foo" errors={errors}>
      <p>Blah</p>
    </Field>,
  ); // eslint-disable-line function-paren-newline

  expect(component.prop("className")).toBe("has-error");
});

test("adds 'required' class when it is required", () => {
  const component = shallow( // eslint-disable-line function-paren-newline
    <Field label="Foo" isRequired>
      <p>Blah</p>
    </Field>,
  ); // eslint-disable-line function-paren-newline

  expect(component.prop("className")).toBe("required");
});

test("adds 'required' and 'has-error' classes when there should be both", () => {
  const errors = [
    { name: "a", message: "Message One" },
    { name: "b", message: "Message Two" }
  ];

  const component = shallow( // eslint-disable-line function-paren-newline
    <Field label="Foo" isRequired errors={errors}>
      <p>Blah</p>
    </Field>,
  ); // eslint-disable-line function-paren-newline

  expect(component.prop("className")).toBe("has-error required");
});

test("adds 'required' and 'has-error' classes and keeps additional", () => {
  const errors = [
    { name: "a", message: "Message One" },
    { name: "b", message: "Message Two" }
  ];

  const component = shallow( // eslint-disable-line function-paren-newline
    <Field label="Foo" isRequired errors={errors} className="customClass">
      <p>Blah</p>
    </Field>,
  ); // eslint-disable-line function-paren-newline

  expect(component.prop("className")).toBe("customClass has-error required");
});
