import React from "react";
import renderer from "react-test-renderer";
import Button from "../../Button/v1";
import CartEmptyMessage from "./CartEmptyMessage";

test("default cart empty button", () => {
  const onClick = () => {};
  const component = renderer.create(<CartEmptyMessage components={{ Button }} onClick={onClick} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("custom cart empty button", () => {
  const onClick = () => {};
  const component = renderer.create((
    <CartEmptyMessage
      buttonText={"Custom button text"}
      components={{ Button }}
      messageText={"Custom message text"}
      onClick={onClick}
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
