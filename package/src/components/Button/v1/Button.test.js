import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import mockComponents from "../../../tests/mockComponents";
import Button from "./Button";

const fakeEvent = { preventDefault() {} };

test("basic snapshot", () => {
  const component = renderer.create(<Button components={mockComponents} title="title" className="a b">Submit</Button>);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("calls onClick when clicked", () => {
  const clickSpy = jest.fn();
  const item = mount(<Button components={mockComponents} onClick={clickSpy} />);

  item.simulate("click", fakeEvent);

  expect(clickSpy).toHaveBeenCalled();
});

test("calls onClick only once when double-clicked before timeout", () => {
  const clickSpy = jest.fn();
  const item = mount(<Button components={mockComponents} onClick={clickSpy} />);

  item.simulate("click", fakeEvent);
  item.simulate("click", fakeEvent);

  expect(clickSpy.mock.calls.length).toBe(1);
});

test("calls onClick twice when double-clicked after timeout", (done) => {
  const clickSpy = jest.fn();
  const item = mount(<Button components={mockComponents} onClick={clickSpy} />);

  item.simulate("click", fakeEvent);
  // The debounce timeout for double clicking the button is 600ms
  // so we must wait until that is over before clicking it again.
  setTimeout(() => {
    item.simulate("click", fakeEvent);
    expect(clickSpy.mock.calls.length).toBe(2);
    done();
  }, 750);
});
