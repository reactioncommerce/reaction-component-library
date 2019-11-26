import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import uniqueId from "lodash.uniqueid";
import { Form } from "reacto-form";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, CustomPropTypes, getRequiredValidator } from "../../../utils";

const FormAction = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 0 0 0;

  > * {
    width: 100%;

    @media (min-width: ${applyTheme("sm", "breakpoints")}px) {
      width: auto;
    }
  }
`;

class GuestForm extends Component {
  static propTypes = {
    /**
     * Button text
     */
    buttonText: PropTypes.string,
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
       * Pass either the Reaction Button component or your own component that is
       * compatible.
       */
      Button: CustomPropTypes.component.isRequired,
      /**
       * Pass either the Reaction ErrorsBlock component or your own component that is
       * compatible with ReactoForm.
       */
      ErrorsBlock: CustomPropTypes.component.isRequired,
      /**
       * Pass either the Reaction Field component or your own component that is
       * compatible with ReactoForm.
       */
      Field: CustomPropTypes.component.isRequired,
      /**
       * Pass either the Reaction TextInput component or your own component that is
       * compatible with ReactoForm.
       */
      TextInput: CustomPropTypes.component.isRequired
    }).isRequired,
    /**
     * The text for the "Email address" label text.
     */
    emailLabelText: PropTypes.string,
    /**
     * The text for the "Email address" placeholder text.
     */
    emailPlaceholderText: PropTypes.string,
    /**
     * Errors array
     */
    errors: PropTypes.arrayOf(PropTypes.shape({
      /**
         * Error message
         */
      message: PropTypes.string.isRequired,
      /**
         * Error name
         */
      name: PropTypes.string.isRequired
    })),
    /**
     * Help Test message
     */
    helpText: PropTypes.string,
    /**
     * Is the shipping address being saved
     */
    isSaving: PropTypes.bool,
    /**
     * Form name
     */
    name: PropTypes.string,
    /**
     * Form submit event callback
     */
    onSubmit: PropTypes.func,
    /**
     * Validator method
     */
    validator: PropTypes.func,
    /**
     * Guest email address
     */
    value: PropTypes.shape({
      email: PropTypes.string
    })
  };

  static defaultProps = {
    buttonText: "Continue as guest",
    errors: [],
    helpText: "You will have the option to create an account and save your details after checkout.",
    isSaving: false,
    name: "address",
    onSubmit() {},
    validator: getRequiredValidator("email"),
    value: {
      email: ""
    },
    emailLabelText: "Email address",
    emailPlaceholderText: "Email address"
  };

  _form = null;

  uniqueInstanceIdentifier = uniqueId("GuestForm_");

  submit() {
    this._form.submit();
  }

  validate() {
    return this._form.validate();
  }

  render() {
    const {
      buttonText,
      className,
      components: { Button, ErrorsBlock, Field, TextInput },
      emailLabelText,
      emailPlaceholderText,
      errors,
      helpText,
      isSaving,
      name,
      onSubmit,
      validator,
      value
    } = this.props;
    const emailInputId = `email_${this.uniqueInstanceIdentifier}`;

    return (
      <Form className={className}
        ref={(formEl) => {
          this._form = formEl;
        }}
        errors={errors}
        name={name}
        onSubmit={onSubmit}
        validator={validator}
        value={value}
      >
        <Field name="email" label={emailLabelText} isRequired helpText={helpText}>
          <TextInput id={emailInputId} isReadOnly={isSaving} name="email" placeholder={emailPlaceholderText}
            type="email"
          />
          <ErrorsBlock names={["email"]} />
        </Field>
        <FormAction>
          <Button
            actionType="secondary"
            isWaiting={isSaving}
            onClick={() => {
              this.submit();
            }}
          >
            {buttonText}
          </Button>
        </FormAction>
      </Form>
    );
  }
}

export default withComponents(GuestForm);
