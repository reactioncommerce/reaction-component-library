import React, { Component } from "react";
import PropTypes from "prop-types";
import uniqueId from "lodash.uniqueid";
import isEmpty from "lodash.isempty";
import { Form } from "reacto-form";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, CustomPropTypes, getRequiredValidator } from "../../../utils";

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

  @media (min-width: ${applyTheme("sm", "breakpoints")}px) {
    flex: 0 1 calc(50% - 9px);
  }
`;

class AddressForm extends Component {
  static propTypes = {
    /**
     * Place holder for Address Name field.
     */
    addressNamePlaceholder: PropTypes.string,
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
       * Pass either the Reaction Checkbox component or your own component that is
       * compatible with ReactoForm.
       */
      Checkbox: CustomPropTypes.component.isRequired,
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
      TextInput: CustomPropTypes.component.isRequired,
      /**
       * Pass either the Reaction Select component or your own component that is
       * compatible with ReactoForm.
       */
      Select: CustomPropTypes.component.isRequired,
      /**
       * Pass either the Reaction PhoneNumberInput component or your own component that is
       * compatible with ReactoForm.
       */
      PhoneNumberInput: CustomPropTypes.component.isRequired,
      /**
       * Pass either the Reaction RegionInput component or your own component that is
       * compatible with ReactoForm.
       */
      RegionInput: CustomPropTypes.component.isRequired
    }).isRequired,
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
     * Enable when using the form on a dark background, disabled by default
     */
    isOnDarkBackground: PropTypes.bool,
    /**
     * Is the shipping address being saved
     */
    isSaving: PropTypes.bool,
    /**
     * Locale options to populate the forms country and region fields
     */
    locales: PropTypes.objectOf(PropTypes.shape({
      name: PropTypes.string,
      native: PropTypes.string,
      phone: PropTypes.string,
      continent: PropTypes.string,
      capital: PropTypes.string,
      currency: PropTypes.string,
      languages: PropTypes.string,
      states: PropTypes.objectOf(PropTypes.shape({ name: PropTypes.string }))
    })),
    /**
     * Form name
     */
    name: PropTypes.string,
    /**
     * Cancel event callback
     */
    onCancel: PropTypes.func,
    /**
     * OnChange event callback
     */
    onChange: PropTypes.func,
    /**
     * Form submit event callback
     */
    onSubmit: PropTypes.func,
    /**
     * Should the AddressForm show the "Address Names" field.
     */
    shouldShowAddressNameField: PropTypes.bool,
    /**
     * Should the AddressForm show the "Is Commercial Address" field.
     */
    shouldShowIsCommercialField: PropTypes.bool,
    /**
     * Validator method
     */
    validator: PropTypes.func,
    /**
     * Address object to be edited
     */
    value: CustomPropTypes.address
  };

  static defaultProps = {
    addressNamePlaceholder: "Address Name",
    errors: [],
    locales: {},
    isOnDarkBackground: false,
    isSaving: false,
    name: "address",
    onCancel() {},
    onChange() {},
    onSubmit() {},
    shouldShowAddressNameField: false,
    shouldShowIsCommercialField: false,
    validator: getRequiredValidator("country", "fullName", "address1", "city", "phone", "postal", "region"),
    value: {
      addressName: "",
      address1: "",
      address2: "",
      country: "",
      city: "",
      fullName: "",
      postal: "",
      region: "",
      phone: "",
      isCommercial: false
    }
  };

  state = {
    // if the form has a value then try to use the value.country
    // if that is not set check to see if any locales are provided and use the first one
    // if no locales use "US"
    activeCountry:
      // eslint-disable-next-line
      this.props.value && this.props.value.country !== ""
        ? this.props.value.country
        : isEmpty(this.props.locales) ? "US" : Object.keys(this.props.locales)[0]
  };

  componentDidUpdate(prevProps) {
    const { locales: prevLocales } = prevProps;
    const { locales: nextLocales, value: nextValue } = this.props;
    const { activeCountry: prevCountry } = this.state;

    // Sometimes the AddressForm will render before locales are provided.
    // This is often the case when dynamically importing locales via a JSON file.
    // Once the file loads and the locales are provided the form needs to check
    // and correct the active country.
    if (isEmpty(prevLocales) && !isEmpty(nextLocales) && prevLocales !== nextLocales) {
      const nextCountry = Object.keys(nextLocales)[0];
      if (nextValue && nextValue.country === prevCountry) {
        return;
      } else if (nextCountry !== prevCountry) {
        // eslint-disable-next-line
        this.setState({ activeCountry: nextCountry });
      }
    }
  }

  _form = null;

  uniqueInstanceIdentifier = uniqueId("AddressForm_");

  get countryOptions() {
    const { locales } = this.props;
    if (!locales) return [];
    const options = Object.keys(locales).map((key) => ({ value: key, label: locales[key].name }));
    return options;
  }

  get regionOptions() {
    const { locales } = this.props;
    const { activeCountry } = this.state;
    const options = [];
    if (locales && locales[activeCountry] && locales[activeCountry].states) {
      Object.keys(locales[activeCountry].states).forEach((key) => {
        options.push({ value: key, label: locales[activeCountry].states[key].name });
      });
    }
    return options;
  }

  handleCountryChange = (country) => {
    if (!country) return;
    this.setState({
      activeCountry: country
    });
  };

  handleCancel = () => {
    const { onCancel } = this.props;
    onCancel();
  };

  getValue = () => this._form.getValue();

  submit = () => {
    this._form.submit();
  };

  validate = () => this._form.validate();

  render() {
    const {
      addressNamePlaceholder,
      value,
      className,
      components: { Checkbox, ErrorsBlock, Field, TextInput, Select, PhoneNumberInput, RegionInput },
      errors,
      isOnDarkBackground,
      isSaving,
      name,
      onChange,
      shouldShowAddressNameField,
      shouldShowIsCommercialField,
      validator
    } = this.props;

    const addressNameInputId = `addressName_${this.uniqueInstanceIdentifier}`;
    const countryInputId = `country_${this.uniqueInstanceIdentifier}`;
    const fullNameInputId = `fullName_${this.uniqueInstanceIdentifier}`;
    const address1InputId = `address1_${this.uniqueInstanceIdentifier}`;
    const address2InputId = `address2_${this.uniqueInstanceIdentifier}`;
    const cityInputId = `city_${this.uniqueInstanceIdentifier}`;
    const regionInputId = `region_${this.uniqueInstanceIdentifier}`;
    const postalInputId = `postal_${this.uniqueInstanceIdentifier}`;
    const phoneInputId = `phone_${this.uniqueInstanceIdentifier}`;
    const isCommercialInputId = `isCommercial_${this.uniqueInstanceIdentifier}`;

    return (
      <Form
        className={className}
        ref={(formEl) => {
          this._form = formEl;
        }}
        errors={errors}
        name={name}
        onChange={onChange}
        onSubmit={this.props.onSubmit}
        validator={validator}
        revalidateOn="changed"
        value={value}
      >
        <Grid>
          {shouldShowAddressNameField && (
            <ColFull>
              <Field name="addressName" label="Address Name" labelFor={addressNameInputId} isOptional>
                <TextInput
                  id={addressNameInputId}
                  name="addressName"
                  placeholder={addressNamePlaceholder}
                  isOnDarkBackground={isOnDarkBackground}
                  isReadOnly={isSaving}
                />
              </Field>
            </ColFull>
          )}

          <ColFull>
            <Field name="country" label="Country" labelFor={countryInputId} isRequired>
              {this.countryOptions && this.countryOptions.length > 1 ? (
                <Select
                  id={countryInputId}
                  alphabetize
                  isSearchable
                  name="country"
                  onChange={this.handleCountryChange}
                  options={this.countryOptions}
                  placeholder="Country"
                  isOnDarkBackground={isOnDarkBackground}
                  isReadOnly={isSaving}
                />
              ) : (
                <TextInput
                  id={countryInputId}
                  name="country"
                  placeholder="Country"
                  isOnDarkBackground={isOnDarkBackground}
                  isReadOnly={isSaving}
                />
              )}
              <ErrorsBlock names={["country"]} />
            </Field>
          </ColFull>

          <ColFull>
            <Field name="fullName" label="Name" labelFor={fullNameInputId} isRequired>
              <TextInput
                id={fullNameInputId}
                name="fullName"
                placeholder="Name"
                isOnDarkBackground={isOnDarkBackground}
                isReadOnly={isSaving}
              />
              <ErrorsBlock names={["fullName"]} />
            </Field>
          </ColFull>

          <ColFull>
            <Field name="address1" label="Address" labelFor={address1InputId} isRequired>
              <TextInput
                id={address1InputId}
                name="address1"
                placeholder="Address"
                isOnDarkBackground={isOnDarkBackground}
                isReadOnly={isSaving}
              />
              <ErrorsBlock names={["address1"]} />
            </Field>
          </ColFull>

          <ColFull>
            <Field name="address2" label="Address Line 2" labelFor={address2InputId} isOptional>
              <TextInput
                id={address2InputId}
                name="address2"
                placeholder="Address Line 2 (Optional)"
                isOnDarkBackground={isOnDarkBackground}
                isReadOnly={isSaving}
              />
            </Field>
          </ColFull>

          <ColFull>
            <Field name="city" label="City" labelFor={cityInputId}>
              <TextInput
                id={cityInputId}
                name="city"
                placeholder="City"
                isOnDarkBackground={isOnDarkBackground}
                isReadOnly={isSaving}
              />
              <ErrorsBlock names={["city"]} />
            </Field>
          </ColFull>

          <ColHalf>
            <Field name="region" label="Region" labelFor={regionInputId} isRequired>
              <RegionInput
                id={regionInputId}
                options={this.regionOptions}
                isOnDarkBackground={isOnDarkBackground}
                isReadOnly={isSaving}
                name="region"
                placeholder="Region"
              />
              <ErrorsBlock names={["region"]} />
            </Field>
          </ColHalf>
          <ColHalf>
            <Field name="postal" label="Postal Code" labelFor={postalInputId} isRequired>
              <TextInput
                id={postalInputId}
                name="postal"
                placeholder="Postal Code"
                isOnDarkBackground={isOnDarkBackground}
                isReadOnly={isSaving}
              />
              <ErrorsBlock names={["postal"]} />
            </Field>
          </ColHalf>

          <ColFull>
            <Field name="phone" label="Phone" labelFor={phoneInputId} isRequired>
              <PhoneNumberInput
                id={phoneInputId}
                name="phone"
                placeholder="Phone"
                isOnDarkBackground={isOnDarkBackground}
                isReadOnly={isSaving}
              />
              <ErrorsBlock names={["phone"]} />
            </Field>
          </ColFull>

          {shouldShowIsCommercialField && (
            <ColFull>
              <Field name="isCommercial" labelFor={isCommercialInputId}>
                <Checkbox
                  id={isCommercialInputId}
                  name="isCommercial"
                  label="This is a commercial address."
                  isOnDarkBackground={isOnDarkBackground}
                  isReadOnly={isSaving}
                />
              </Field>
            </ColFull>
          )}
        </Grid>
      </Form>
    );
  }
}

export default withComponents(AddressForm);
