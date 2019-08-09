import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useReactoForm } from "reacto-form";
import { uniqueId } from "lodash";
import { withComponents } from "@reactioncommerce/components-context";
import { CustomPropTypes } from "../../../utils";

/**
 * Convert the form document to the object structure
 * expected by `PaymentsCheckoutAction`
 * @param {Object} Form object
 * @returns {Object} Transformed object
 */
function buildResult({ amount, fullName = null }) {
  let floatAmount = amount ? parseFloat(amount) : null;
  if (isNaN(floatAmount)) floatAmount = null;

  return {
    amount: floatAmount,
    data: { fullName },
    displayName: fullName ? `IOU from ${fullName}` : null
  };
}

/**
 * @summary ExampleIOUPaymentForm component
 * @param {Object} props Props
 * @param {Object} ref Ref
 * @return {Object} React render
 */
function ExampleIOUPaymentForm(props, ref) {
  const lastDocRef = useRef();
  const isReadyRef = useRef();

  const [uniqueInstanceIdentifier, setUniqueInstanceIdentifier] = useState();
  if (!uniqueInstanceIdentifier) {
    setUniqueInstanceIdentifier(uniqueId("ExampleIOUPaymentForm"));
  }

  const {
    className,
    components: {
      ErrorsBlock,
      Field,
      TextInput
    },
    isSaving,
    onChange,
    onReadyForSaveChange,
    onSubmit
  } = props;

  const {
    getErrors,
    getInputProps,
    submitForm
  } = useReactoForm({
    isReadOnly: isSaving,
    onChange(formData) {
      const resultDoc = buildResult(formData);
      const stringDoc = JSON.stringify(resultDoc);
      if (stringDoc !== lastDocRef.current) {
        onChange(resultDoc);
      }
      lastDocRef.current = stringDoc;

      const isReady = !!formData.fullName;
      if (isReady !== isReadyRef.current) {
        onReadyForSaveChange(isReady);
      }
      isReadyRef.current = isReady;
    },
    onSubmit: (formData) => onSubmit(buildResult(formData))
  });

  useImperativeHandle(ref, () => ({
    submit() {
      submitForm();
    }
  }));

  const fullNameInputId = `fullName_${uniqueInstanceIdentifier}`;
  const amountInputId = `amount_${uniqueInstanceIdentifier}`;

  return (
    <div className={className}>
      <Field name="fullName" errors={getErrors(["fullName"])} label="Full name" labelFor={fullNameInputId}>
        <TextInput id={fullNameInputId} {...getInputProps("fullName")} />
        <ErrorsBlock errors={getErrors(["fullName"])} />
      </Field>
      <Field name="amount" errors={getErrors(["amount"])} label="Amount (optional)" labelFor={amountInputId}>
        <TextInput id={amountInputId} {...getInputProps("amount")} />
        <ErrorsBlock errors={getErrors(["amount"])} />
      </Field>
    </div>
  );
}

// There is currently some issue with combining hoist-non-react-statics (used by
// withComponents) with forwardRef. Until that's resolved, reassigning
// ExampleIOUPaymentForm to the wrapped component here, before setting the statics.
/* eslint-disable-next-line no-func-assign */
ExampleIOUPaymentForm = withComponents(forwardRef(ExampleIOUPaymentForm));

ExampleIOUPaymentForm.propTypes = {
  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: PropTypes.string,
  /**
   * If you've set up a components context using
   * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
   * (recommended), then this prop will come from there automatically. If you have not
   * set up a components context or you want to override one of the components in a
   * single spot, you can pass in the components prop directly.
   */
  components: PropTypes.shape({
    /**
     * Pass either the Reaction ErrorsBlock component or your own component that
     * accepts compatible props.
     */
    ErrorsBlock: CustomPropTypes.component.isRequired,
    /**
     * Pass either the Reaction Field component or your own component that
     * accepts compatible props.
     */
    Field: CustomPropTypes.component.isRequired,
    /**
     * Pass either the Reaction TextInput component or your own component that
     * accepts compatible props.
     */
    TextInput: CustomPropTypes.component.isRequired
  }),
  /**
   * Pass true while the input data is in the process of being saved.
   * While true, the form fields are disabled.
   */
  isSaving: PropTypes.bool,
  /**
   * Called as the form fields are changed
   */
  onChange: PropTypes.func,
  /**
   * When this action's input data switches between being
   * ready for saving and not ready for saving, this will
   * be called with `true` (ready) or `false`
   */
  onReadyForSaveChange: PropTypes.func,
  /**
   * Called with an object value when this component's `submit`
   * method is called. The object may have `data`, `displayName`,
   * and `amount` properties.
   */
  onSubmit: PropTypes.func
};

ExampleIOUPaymentForm.defaultProps = {
  isSaving: false,
  onChange() {},
  onReadyForSaveChange() {},
  onSubmit() {}
};

export default ExampleIOUPaymentForm;
