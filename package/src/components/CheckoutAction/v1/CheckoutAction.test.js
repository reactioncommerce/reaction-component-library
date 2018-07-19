import React from "react";
import renderer from "react-test-renderer";
import Button from "../../Button/v1";
import CheckoutActionComplete from "../../CheckoutActionComplete/v1";
import CheckoutActionIncomplete from "../../CheckoutActionIncomplete/v1";
import CheckoutAction from "./CheckoutAction";

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
      ActiveStepComponent="Placeholder: active step isn't yet available"
      CompleteStepComponent={
        <CheckoutActionComplete
          components={{ ChangeButton: Button }}
          content={Address}
          onClickChangeButton={onClick}
        />
      }
      IncompleteStepComponent={
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
      ActiveStepComponent="Placeholder: active step isn't yet available"
      CompleteStepComponent={
        <CheckoutActionComplete
          components={{ ChangeButton: Button }}
          content={Address}
          onClickChangeButton={onClick}
        />
      }
      IncompleteStepComponent={
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
      ActiveStepComponent="Placeholder: active step isn't yet available"
      CompleteStepComponent={
        <CheckoutActionComplete
          components={{ ChangeButton: Button }}
          content={Address}
          onClickChangeButton={onClick}
        />
      }
      IncompleteStepComponent={
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
