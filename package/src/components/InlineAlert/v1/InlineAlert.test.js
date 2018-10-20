import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import InlineAlert from "./InlineAlert";

test("basic snapshot without title", () => {
  const component = renderer.create(<InlineAlert alertType="warning" message="Card ending in 0000 is expiring soon." />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("basic warning snapshot", () => {
  const component = renderer.create(<InlineAlert alertType="warning" title="Warning" message="Card ending in 0000 is expiring soon." />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("basic information snapshot", () => {
  const component = renderer.create(<InlineAlert alertType="information" title="Information" message="Card ending in 0000 is expiring soon." />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


test("basic error snapshot", () => {
  const component = renderer.create(<InlineAlert alertType="error" title="Error" message="Card ending in 0000 is expiring soon." />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


test("basic success snapshot", () => {
  const component = renderer.create(<InlineAlert alertType="success" title="Success" message="Card ending in 0000 is expiring soon." />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});