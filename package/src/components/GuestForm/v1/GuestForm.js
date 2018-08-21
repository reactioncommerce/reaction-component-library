import React, { Component } from "react";
import PropTypes from "prop-types";
import uniqueId from "lodash.uniqueid";
import { Form } from "reacto-form";
import { withComponents } from "@reactioncommerce/components-context";
import { CustomPropTypes, getRequiredValidator } from "../../../utils";

class GuestForm extends Component {
  static propTypes = {
    /**
     * If you've set up a components context using @reactioncommerce/components-context
     * (recommended), then this prop will come from there automatically. If you have not
     * set up a components context or you want to override one of the components in a
     * single spot, you can pass in the components prop directly.
     */
    components: PropTypes.shape({
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
     * Errors array
     */
    errors: PropTypes.arrayOf(
      PropTypes.shape({
        /**
         * Error message
         */
        message: PropTypes.string.isRequired,
        /**
         * Error name
         */
        name: PropTypes.string.isRequired
      })
    ),
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
    errors: [],
    name: "address",
    onSubmit() {},
    validator: getRequiredValidator("email"),
    value: {
      eamil: ""
    }
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
    const { components: { ErrorsBlock, Field, TextInput }, errors, name, onSubmit, validator, value } = this.props;

    const emailInputId = `email_${this.uniqueInstanceIdentifier}`;

    //    return "hey";

    return (
      <Form
        ref={(formEl) => {
          this._form = formEl;
        }}
        errors={errors}
        name={name}
        onSubmit={onSubmit}
        validator={validator}
        value={value}
      >
        <Field name="email" label="Email Address" isRequired>
          <TextInput id={emailInputId} name="email" placeholder="Email address" type="email" />
          <ErrorsBlock names={["email"]} />
        </Field>
      </Form>
    );
  }
}

export default withComponents(GuestForm);
