import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { ComponentsProvider } from "@reactioncommerce/components-context";
import mockComponents from "../../../tests/mockComponents";
import realComponents from "../../../tests/realComponents";
import PaymentsCheckoutAction from "./PaymentsCheckoutAction";

const paymentMethods = [
  {
    displayName: "Credit Card",
    InputComponent: mockComponents.StripePaymentInput,
    name: "stripe_card",
    shouldCollectBillingAddress: true
  },
  {
    displayName: "IOU",
    InputComponent: mockComponents.ExampleIOUPaymentForm,
    name: "iou_example",
    shouldCollectBillingAddress: true
  }
];

test("basic snapshot", () => {
  const component = renderer.create((
    <PaymentsCheckoutAction
      components={mockComponents}
      label="Payment"
      paymentMethods={paymentMethods}
      stepNumber={3}
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("snapshot with a partial payment", () => {
  const payments = [
    {
      displayName: "IOU from Fats Domino",
      payment: {
        amount: 15,
        data: {
          fullName: "Fats Domino"
        },
        method: "iou_example"
      }
    }
  ];

  const component = renderer.create((
    <PaymentsCheckoutAction
      components={mockComponents}
      label="Payment"
      paymentMethods={paymentMethods}
      payments={payments}
      stepNumber={3}
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("snapshot with an alert", () => {
  const alert = {
    alertType: "error",
    title: "The payment information you entered may be incorrect.",
    message: "Please review our error."
  };

  const component = renderer.create((
    <PaymentsCheckoutAction
      alert={alert}
      components={mockComponents}
      label="Payment"
      paymentMethods={paymentMethods}
      stepNumber={3}
    />
  ));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders a selectable list and the first method's input component", () => {
  const wrapper = mount((
    <ComponentsProvider value={realComponents}>
      <PaymentsCheckoutAction
        label="Payment"
        paymentMethods={paymentMethods}
        stepNumber={3}
      />
    </ComponentsProvider>
  ));

  expect(wrapper.find('input[value="stripe_card"]').length).toBe(1);
  expect(wrapper.find(mockComponents.StripePaymentInput).length).toBe(1);
});

test("does not render the SelectableList if there's only one method", () => {
  const wrapper = mount((
    <ComponentsProvider value={realComponents}>
      <PaymentsCheckoutAction
        label="Payment"
        paymentMethods={[paymentMethods[0]]}
        stepNumber={3}
      />
    </ComponentsProvider>
  ));

  expect(wrapper.find('input[value="stripe_card"]').length).toBe(0);
});

test("does not render the AddressForm if the method doesn't need it", () => {
  const wrapper = mount((
    <ComponentsProvider value={realComponents}>
      <PaymentsCheckoutAction
        label="Payment"
        paymentMethods={[{
          ...paymentMethods[0],
          shouldCollectBillingAddress: false
        }]}
        stepNumber={3}
      />
    </ComponentsProvider>
  ));

  expect(wrapper.find('input[name="address1"]').length).toBe(0);
});
