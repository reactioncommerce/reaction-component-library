import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Form } from "reacto-form";
import styled from "styled-components";
import { applyTheme, getRequiredValidator } from "../../../utils";

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

const Actions = styled.div`
  display: block;
  margin: ${applyTheme("fieldMargin")};
  width: 100%;

  @media (${applyTheme("bp_sm")}) {
    display: flex;
    justify-content: flex-end;
  }
`;

const ActionsSpacer = styled.div`
  height: 10px;
  width: 10px;
`;

const validator = getRequiredValidator(
  "country",
  "firstName",
  "lastName",
  "address1",
  "city",
  "country",
  "postal",
  "region"
);

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
        label: PropTypes.string,
        value: PropTypes.string
      })
    ),
    isCancellable: PropTypes.bool,
    onCancel: PropTypes.func,
    onCountryChange: PropTypes.func,
    onSubmit: PropTypes.func,
    regions: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string
      })
    ),
    saveButtonText: PropTypes.string
  };

  static defaultProps = {
    address: {
      address1: "",
      address2: "",
      country: "",
      city: "",
      firstName: "",
      lastName: "",
      postal: "",
      region: "",
      phone: ""
    },
    onCancel() {},
    onCountryChange() {},
    onSubmit() {},
    saveButtonText: "Save and continue"
  };

  _form = null;

  state = {};

  handleCountryChange = (country) => {
    const { onCountryChange } = this.props;
    onCountryChange(country);
  };

  handleCancel = () => {
    const { onCancel } = this.props;
    onCancel();
  };

  handleSubmit = (address) => {
    const { onSubmit } = this.props;
    onSubmit(address);
  };

  render() {
    const { address, countries, isCancellable, regions, saveButtonText } = this.props;
    return (
      <Fragment>
        <Form
          ref={(formEl) => {
            this._form = formEl;
          }}
          onSubmit={this.handleSubmit}
        >
          <Grid>
            <ColFull>
              <Field name="country" label="Country" isRequired>
                <Select
                  name="country"
                  onChange={this.handleCountryChange}
                  options={countries}
                  placeholder="Country"
                  isSearchable
                  value={address.country}
                />
                <ErrorsBlock names={["country"]} />
              </Field>
            </ColFull>

            <ColHalf>
              <Field name="firstName" label="First Name" isRequired>
                <TextInput name="firstName" placeholder="First Name" value={address.firstName} />
                <ErrorsBlock names={["firstName"]} />
              </Field>
            </ColHalf>
            <ColHalf>
              <Field name="lastName" label="Last Name" isRequired>
                <TextInput name="lastName" placeholder="Last Name" value={address.lastName} />
                <ErrorsBlock names={["lastName"]} />
              </Field>
            </ColHalf>

            <ColFull>
              <Field name="address1" label="Address" isRequired>
                <TextInput name="address1" placeholder="Address" value={address.address1} />
                <ErrorsBlock names={["address1"]} />
              </Field>
            </ColFull>

            <ColFull>
              <Field name="address2" label="Address">
                <TextInput name="address2" placeholder="Address" value={address.address2} />
              </Field>
            </ColFull>

            <ColFull>
              <Field name="city" label="City">
                <TextInput name="city" placeholder="City" value={address.city} />
                <ErrorsBlock names={["city"]} />
              </Field>
            </ColFull>

            <ColHalf>
              <Field name="region" label="Region" isRequired>
                {regions && regions.length > 1 ? (
                  <Select name="region" options={regions} placeholder="Region" isSearchable value={address.region} />
                ) : (
                  <TextInput name="region" placeholder="Region" value={address.region} />
                )}
                <ErrorsBlock names={["region"]} />
              </Field>
            </ColHalf>
            <ColHalf>
              <Field name="postal" label="Postal Code" isRequired>
                <TextInput name="postal" placeholder="Postal Code" value={address.postal} />
                <ErrorsBlock names={["postal"]} />
              </Field>
            </ColHalf>

            <ColFull>
              <Field name="phone" label="Phone" isRequired>
                <TextInput name="phone" placeholder="Phone" value={address.phone} />
                <ErrorsBlock names={["phone"]} />
              </Field>
            </ColFull>
          </Grid>
          <Actions>
            {isCancellable ? (
              <Fragment>
                <Button actionType="secondary" onClick={this.handleCancel} isFullWidth isShortHeight>
                  Cancel
                </Button>
                <ActionsSpacer />
              </Fragment>
            ) : null}
            <Button
              onClick={() => {
                this._form.submit();
              }}
              isFullWidth
              isShortHeight
            >
              {saveButtonText}
            </Button>
          </Actions>
        </Form>
      </Fragment>
    );
  }
}

export default AddressForm;