import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Field from "./Field";
import TextInput from "./../../TextInput/v1/TextInput";

test('has isFormField property set to true', () => {
  expect(Field.isFormField).toBe(true);
});

test('renders with no label', () => {
  const component = renderer.create(
    <Field>
      <p>Text above</p>
      <TextInput name="test" />
      <p>Text below</p>
    </Field>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders with label', () => {
  const component = renderer.create(
    <Field label="Foo">
      <p>Text above</p>
      <TextInput name="test" />
      <p>Text below</p>
    </Field>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders with other props', () => {
  const component = renderer.create(
    <Field label="Foo" className="className" labelClassName="labelClassName" labelFor="labelFor" labelStyle={{ color: '#000' }} style={{ color: '#fff' }}>
      <p>Blah</p>
    </Field>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('adds "has-error" class when there are errors', () => {
  const errors = [
    { name: 'a', message: 'Message One' },
    { name: 'b', message: 'Message Two' },
  ];

  const component = shallow(
    <Field label="Foo" errors={errors}>
      <p>Blah</p>
    </Field>,
  );

  expect(component.prop('className')).toBe('has-error');
});

test('adds "required" class when it is required', () => {
  const component = shallow(
    <Field label="Foo" isRequired>
      <p>Blah</p>
    </Field>,
  );

  expect(component.prop('className')).toBe('required');
});

test('adds "required" and "has-error" classes when there should be both', () => {
  const errors = [
    { name: 'a', message: 'Message One' },
    { name: 'b', message: 'Message Two' },
  ];

  const component = shallow(
    <Field label="Foo" isRequired errors={errors}>
      <p>Blah</p>
    </Field>,
  );

  expect(component.prop('className')).toBe('has-error required');
});

test('adds "required" and "has-error" classes and keeps additional', () => {
  const errors = [
    { name: 'a', message: 'Message One' },
    { name: 'b', message: 'Message Two' },
  ];

  const component = shallow(
    <Field label="Foo" isRequired errors={errors} className="customClass">
      <p>Blah</p>
    </Field>,
  );

  expect(component.prop('className')).toBe('customClass has-error required');
});
