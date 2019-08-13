import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { ComponentsProvider } from "@reactioncommerce/components-context";
import mockComponents from "../../../tests/mockComponents";
import realComponents from "../../../tests/realComponents";
import ExampleIOUPaymentForm from "./ExampleIOUPaymentForm";

test("basic snapshot", () => {
  const component = renderer.create(<ExampleIOUPaymentForm components={mockComponents} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("calls onReadyForSaveChange on mount and change", () => {
  const onReadyForSaveChange = jest.fn();

  const wrapper = mount((
    <ComponentsProvider value={realComponents}>
      <ExampleIOUPaymentForm onReadyForSaveChange={onReadyForSaveChange} />
    </ComponentsProvider>
  ));

  expect(onReadyForSaveChange).toHaveBeenCalledTimes(1);
  expect(onReadyForSaveChange).toHaveBeenLastCalledWith(false);

  onReadyForSaveChange.mockClear();

  wrapper.find('input[name="fullName"]').simulate("blur", { target: { value: "Bill" } });

  expect(onReadyForSaveChange).toHaveBeenCalledTimes(1);
  expect(onReadyForSaveChange).toHaveBeenLastCalledWith(true);
});

test("calls onChange on mount and change", () => {
  const onChange = jest.fn();

  const wrapper = mount((
    <ComponentsProvider value={realComponents}>
      <ExampleIOUPaymentForm onChange={onChange} />
    </ComponentsProvider>
  ));

  expect(onChange).toHaveBeenCalledWith({
    amount: null,
    data: { fullName: null },
    displayName: null
  });

  onChange.mockClear();

  wrapper.find('input[name="fullName"]').simulate("blur", { target: { value: "Bill" } });

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenLastCalledWith({
    amount: null,
    data: { fullName: "Bill" },
    displayName: "IOU from Bill"
  });

  onChange.mockClear();

  wrapper.find('input[name="amount"]').simulate("blur", { target: { value: "5.95" } });

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenLastCalledWith({
    amount: 5.95,
    data: { fullName: "Bill" },
    displayName: "IOU from Bill"
  });
});

test("calls onSubmit when submit method is called", (done) => {
  const onSubmit = jest.fn();

  let formEl;
  const wrapper = mount((
    <ComponentsProvider value={realComponents}>
      <ExampleIOUPaymentForm ref={(ref) => { formEl = ref; }} onSubmit={onSubmit} />
    </ComponentsProvider>
  ));

  expect(onSubmit).not.toHaveBeenCalled();

  wrapper.find('input[name="fullName"]').simulate("blur", { target: { value: "Bill" } });
  formEl.submit();

  setTimeout(() => {
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenLastCalledWith({
      amount: null,
      data: { fullName: "Bill" },
      displayName: "IOU from Bill"
    });
    done();
  }, 0);
});
