import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { StripeProvider } from "react-stripe-elements";
import { ComponentsProvider } from "@reactioncommerce/components-context";
import mockComponents from "../../../tests/mockComponents";
import realComponents from "../../../tests/realComponents";
import StripePaymentInput from "./StripePaymentInput";

// Mock the Stripe instance
const elementMock = {
  mount: jest.fn(),
  destroy: jest.fn(),
  on: jest.fn(),
  update: jest.fn()
};
const elementsMock = {
  create: jest.fn().mockReturnValue(elementMock)
};
const stripeMock = {
  elements: jest.fn().mockReturnValue(elementsMock),
  createToken: jest.fn(),
  createSource: jest.fn()
};

test("basic snapshot", () => {
  const component = renderer.create(<StripePaymentInput components={mockComponents} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("calls onReadyForSaveChange on mount and change", () => {
  const onReadyForSaveChange = jest.fn();

  let formEl;
  mount((
    <StripeProvider stripe={stripeMock}>
      <ComponentsProvider value={realComponents}>
        <StripePaymentInput
          ref={(ref) => { formEl = ref; }}
          onReadyForSaveChange={onReadyForSaveChange}
        />
      </ComponentsProvider>
    </StripeProvider>
  ));

  expect(onReadyForSaveChange).toHaveBeenCalledTimes(1);
  expect(onReadyForSaveChange).toHaveBeenLastCalledWith(false);

  onReadyForSaveChange.mockClear();

  formEl.handleChangeReadyState(true);

  expect(onReadyForSaveChange).toHaveBeenCalledTimes(1);
  expect(onReadyForSaveChange).toHaveBeenLastCalledWith(true);
});

test("calls onSubmit when submit method is called", (done) => {
  const onSubmit = jest.fn();

  stripeMock.createToken.mockReturnValueOnce(Promise.resolve({
    token: {
      card: {
        brand: "Visa",
        last4: "1234"
      },
      id: "abc123"
    }
  }));

  let formEl;
  mount((
    <StripeProvider stripe={stripeMock}>
      <ComponentsProvider value={realComponents}>
        <StripePaymentInput ref={(ref) => { formEl = ref; }} onSubmit={onSubmit} />
      </ComponentsProvider>
    </StripeProvider>
  ));

  expect(onSubmit).not.toHaveBeenCalled();

  formEl.submit();

  setTimeout(() => {
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenLastCalledWith({
      data: {
        stripeTokenId: "abc123"
      },
      displayName: "Visa ending in 1234"
    });
    done();
  }, 0);
});
