import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Form } from "reacto-form";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

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
  flex: 0 1 calc(50% - 9px);
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
        countryCode: PropTypes.string
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

  render() {
    return (
      <Fragment>
        <Form onSubmit={(data) => console.log("form submit", data)}>
          <Grid>
            <ColFull>
              <Field>
                <Select />
              </Field>
            </ColFull>
            <ColHalf>
              <Field>
                <TextInput />
              </Field>
            </ColHalf>
            <ColHalf>
              <Field>
                <TextInput />
              </Field>
            </ColHalf>
          </Grid>
        </Form>
      </Fragment>
    );
  }
}

export default AddressForm;
