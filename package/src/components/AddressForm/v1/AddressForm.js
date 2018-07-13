import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Form } from "reacto-form";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

import Button from "../../Button/v1";
import Field from "../../Field/v1";
import ErrorsBlock from "../../ErrorsBlock/v1";
import TextInput from "../../TextInput/v1";
import Select from "../../Select/v1";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ColFull = styled.div`
  flex: 1 1 100%;
`;

const ColHalf = styled.div`
  flex: 1 1 100%;

  @media (${applyTheme("bp_sm")}) {
    flex: 0 1 calc(50% - 9px);
  }
`;

class AddressForm extends Component {
  static propTypes = {
    address: PropTypes.shape({
      address1: PropTypes.string,
      address2: PropTypes.string,
      country: PropTypes.string,
      city: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      postal: PropTypes.string,
      region: PropTypes.string,
      phone: PropTypes.string
    }),
    countries: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string
      })
    ),
    isCancellable: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
    regions: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string
      })
    ),
    saveButtonText: PropTypes.string
  };

  static defaultProps = {};

  _form = null;

  state = {};

  render() {
    return (
      <Fragment>
        <Form
          ref={(formEl) => {
            this._form = formEl;
          }}
          onSubmit={(data) => console.log("form submit", data)}
        >
          <Grid>
            <ColFull>
              <Field name="country" label="Country" isRequired>
                <Select name="country" />
              </Field>
            </ColFull>

            <ColHalf>
              <Field name="firstName" label="First Name" isRequired>
                <TextInput name="firstName" placeholder="First Name" />
              </Field>
            </ColHalf>
            <ColHalf>
              <Field name="lastName" label="Last Name" isRequired>
                <TextInput name="lastName" placeholder="Last Name" />
              </Field>
            </ColHalf>

            <ColFull>
              <Field name="address1" label="Address" isRequired>
                <TextInput name="address1" placeholder="Address" />
              </Field>
            </ColFull>

            <ColFull>
              <Field name="address2" label="Address">
                <TextInput name="address2" placeholder="Address" />
              </Field>
            </ColFull>

            <ColFull>
              <Field name="city" label="City">
                <TextInput name="city" placeholder="City" />
              </Field>
            </ColFull>

            <ColHalf>
              <Field name="region" label="Region" isRequired>
                <TextInput name="region" placeholder="Region" />
              </Field>
            </ColHalf>
            <ColHalf>
              <Field name="postal" label="Postal Code" isRequired>
                <TextInput name="postal" placeholder="Postal Code" />
              </Field>
            </ColHalf>

            <ColFull>
              <Field name="phone" label="Phone">
                <TextInput name="phone" placeholder="Phone" />
              </Field>
            </ColFull>
          </Grid>
          <Button
            onClick={() => {
              this._form.submit();
            }}
          >
            {"Submit and Continue"}
          </Button>
        </Form>
      </Fragment>
    );
  }
}

export default AddressForm;
