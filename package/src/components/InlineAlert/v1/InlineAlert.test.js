import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import InlineAlert from "./InlineAlert";

test("basic snapshot no props", () => {
  const component = renderer.create(<InlineAlert/>);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("basic snapshot with some props", () => {
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

test("basic autoclosing snapshot", () => {
  const component = renderer.create(<InlineAlert isAutoClosing alertType="success" title="Success" message="Card ending in 0000 is expiring soon." />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("basic dismissable snapshot", () => {
  const component = renderer.create(<InlineAlert isDismissable components={mockComponents} alertType="success" message="Card." />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
