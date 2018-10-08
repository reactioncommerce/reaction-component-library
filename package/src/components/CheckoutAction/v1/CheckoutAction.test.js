import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import CheckoutActionComplete from "../../CheckoutActionComplete/v1";
import CheckoutActionIncomplete from "../../CheckoutActionIncomplete/v1";
import CheckoutAction from "./CheckoutAction";

const MockActiveCheckoutAction = ({ activeLabel }) => (<span>{activeLabel}</span>); // eslint-disable-line react/prop-types

test("CheckoutAction with `active` status & label", () => {
  const cart = {};
  const isLoading = false;
  const onClick = () => {};
  const Address = (
    <div>
      Ms. Jane Doe<br />
      123 Main Street<br />
      Anytown, USA 01776
    </div>
  );

  const component = renderer.create((
    <CheckoutAction
      activeLabel="Mock active label"
      activeStepElement={<MockActiveCheckoutAction />}
      completeStepElement={
        <CheckoutActionComplete
          components={mockComponents}
          content={Address}
          onClickChangeButton={onClick}
        />
      }
      incompleteStepElement={
        <CheckoutActionIncomplete />
      }
      cart={cart}
      isLoading={isLoading}
      status="active"
      stepNumber={2}
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("CheckoutAction with `complete` status & label", () => {
  const cart = {};
  const isLoading = false;
  const onClick = () => {};
  const Address = (
    <div>
      Ms. Jane Doe<br />
      123 Main Street<br />
      Anytown, USA 01776
    </div>
  );

  const component = renderer.create((
    <CheckoutAction
      activeStepElement="Placeholder: active step isn't yet available"
      completeStepElement={
        <CheckoutActionComplete
          components={mockComponents}
          content={Address}
          onClickChangeButton={onClick}
        />
      }
      incompleteStepElement={
        <CheckoutActionIncomplete />
      }
      cart={cart}
      completeLabel="Mock complete label"
      isLoading={isLoading}
      status="complete"
      stepNumber={2}
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("CheckoutAction with `incomplete` status & label", () => {
  const cart = {};
  const isLoading = false;
  const onClick = () => {};
  const Address = (
    <div>
      Ms. Jane Doe<br />
      123 Main Street<br />
      Anytown, USA 01776
    </div>
  );

  const component = renderer.create((
    <CheckoutAction
      activeStepElement="Placeholder: active step isn't yet available"
      completeStepElement={
        <CheckoutActionComplete
          components={mockComponents}
          content={Address}
          onClickChangeButton={onClick}
        />
      }
      incompleteLabel="Mock incomplete label"
      incompleteStepElement={
        <CheckoutActionIncomplete />
      }
      cart={cart}
      isLoading={isLoading}
      status="incomplete"
      stepNumber={2}
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("CheckoutAction with `complete` status and label override via props", () => {
  const cart = {};
  const isLoading = false;
  const onClick = () => {};
  const Address = (
    <div>
      Ms. Jane Doe<br />
      123 Main Street<br />
      Anytown, USA 01776
    </div>
  );

  const component = renderer.create((
    <CheckoutAction
      activeStepElement="Placeholder: active step isn't yet available"
      completeStepElement={
        <CheckoutActionComplete
          components={mockComponents}
          content={Address}
          label="Label override"
          onClickChangeButton={onClick}
        />
      }
      incompleteStepElement={
        <CheckoutActionIncomplete />
      }
      cart={cart}
      isLoading={isLoading}
      status="complete"
      stepNumber={2}
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("CheckoutAction with `complete` status and stepNumber override via props", () => {
  const cart = {};
  const isLoading = false;
  const onClick = () => {};
  const Address = (
    <div>
      Ms. Jane Doe<br />
      123 Main Street<br />
      Anytown, USA 01776
    </div>
  );

  const component = renderer.create((
    <CheckoutAction
      activeStepElement="Placeholder: active step isn't yet available"
      completeStepElement={
        <CheckoutActionComplete
          components={mockComponents}
          content={Address}
          onClickChangeButton={onClick}
          stepNumber={500}
        />
      }
      incompleteStepElement={
        <CheckoutActionIncomplete />
      }
      cart={cart}
      isLoading={isLoading}
      status="complete"
      stepNumber={2}
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
