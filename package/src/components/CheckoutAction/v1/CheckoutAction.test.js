import React from "react";
import renderer from "react-test-renderer";
import CheckoutActionComplete from "../../CheckoutActionComplete/v1";
import CheckoutActionIncomplete from "../../CheckoutActionIncomplete/v1";
import CheckoutAction from "./CheckoutAction";

const mockComponents = {
  Button: (props) => `Button${JSON.stringify(props)}`
};

test("CheckoutAction with `active` status", () => {
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
      isLoading={isLoading}
      label="Shipping address"
      status="active"
      stepNumber={2}
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("CheckoutAction with `complete` status", () => {
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
      isLoading={isLoading}
      label="Shipping address"
      status="complete"
      stepNumber={2}
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("CheckoutAction with `incomplete` status", () => {
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
      isLoading={isLoading}
      label="Shipping address"
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
      label="Shipping address"
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
      label="Shipping address"
      status="complete"
      stepNumber={2}
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
