import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Button from "./Button";

const fakeEvent = { preventDefault() {} };

test("basic snapshot", () => {
  const component = renderer.create(<Button title="title" className="a b">Submit</Button>);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("calls onClick when clicked", () => {
  const clickSpy = jest.fn();
  const item = shallow(<Button onClick={clickSpy} />);

  item.simulate("click", fakeEvent);

  expect(clickSpy).toHaveBeenCalled();
});

it("calls onClick only once when double-clicked before timeout", () => {
  const clickSpy = jest.fn();
  const item = shallow(<Button onClick={clickSpy} />);

  item.simulate("click", fakeEvent);
  item.simulate("click", fakeEvent);

  expect(clickSpy.mock.calls.length).toBe(1);
});

it("calls onClick twice when double-clicked after timeout", (done) => {
  const clickSpy = jest.fn();
  const item = shallow(<Button onClick={clickSpy} />);

  item.simulate("click", fakeEvent);
  // The debounce timeout for double clicking the button is 600ms
  // so we must wait until that is over before clicking it again.
  setTimeout(() => {
    item.simulate("click", fakeEvent);
    expect(clickSpy.mock.calls.length).toBe(2);
    done();
  }, 750);
});
