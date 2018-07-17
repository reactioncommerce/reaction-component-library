import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Button from "../../Button/v1";
import CheckoutActionComplete from "./CheckoutActionComplete";

const fakeEvent = { preventDefault() {} };

test("basic snapshot", () => {
  const onClick = () => {};

  const Address = "<div><p>123 Main Street</p><p>Anytown, USA 01776</p></div>";

  const component = renderer.create(<CheckoutActionComplete
    components={{ ChangeButton: Button }}
    label="Shipping address"
    content={Address}
    onClickChangeButton={onClick}
    stepNumber={2}
  />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("calls onClick when clicked", () => {
  const clickSpy = jest.fn();

  const item = shallow(<Button onClick={clickSpy} />);

  item.simulate("click", fakeEvent);

  expect(clickSpy).toHaveBeenCalled();
});
