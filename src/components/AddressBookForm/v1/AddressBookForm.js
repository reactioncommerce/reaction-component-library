import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Field, ErrorsBlock, Form } from "reacto-form";
import { applyTheme } from "helpers";
import TextInput from "./../../TextInput/v1/TextInput";
import Button from "./../../Button/v1/Button";

const StyledDiv = styled.div`
  color: #333333;
`;

class AddressBookForm extends Component {
  static propTypes = {
    /**
     * add addess callback
     */
    add: PropTypes.func,
    /**
     * cancel address entry and render AddressBookGrid
     */
    cancel: PropTypes.func,
    /**
     * country options for select
     */
    countries: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.String,
      value: PropTypes.String
    })),
    /**
     * address object
     */
    editAddress: PropTypes.object,
    /**
     * has address in addressBook
     */
    hasAddress: PropTypes.bool,
    /**
     * regions by county
     */
    regionsByCountry: PropTypes.object
  }

  static defaultProps = {
    countries: [],
    editAddress: {},
    regionsByCountry: {}
  }

  state = {
    regions: [],
    fields: {
      _id: this.props.editAddress._id,
      country: this.props.editAddress.country || "US", // defaults to United States
      fullName: this.props.editAddress.fullName || "",
      address1: this.props.editAddress.address1 || "",
      address2: this.props.editAddress.address2 || "",
      postal: this.props.editAddress.postal || "",
      city: this.props.editAddress.city || "",
      region: this.props.editAddress.region || "",
      phone: this.props.editAddress.phone || "",
      isShippingDefault: this.props.editAddress.isShippingDefault || (!this.props.hasAddress), // no address, default to true
      isBillingDefault: this.props.editAddress.isBillingDefault || (!this.props.hasAddress), // no addres, default to true
      isCommercial: this.props.editAddress.isCommercial || false
    }
  }

  componentWillMount() {
    const { fields: { country } } = this.state;

    // if selected country has region options set those too
    // this.setRegionOptions(country);
  }
  // Address Book Form helpers

  /**
   * @method setRegionOptions
   * @summary creates an array of region options for the regions select field.
   * @since 2.0.0
   * @param {String} country - country code "US" "CA" "JP"
   */
  setRegionOptions(country) {
    const { regionsByCountry, editAddress } = this.props;
    const { fields } = this.state;
    const regions = regionsByCountry[country];

    // if the region field is empty
    if (Object.keys(editAddress).length) {
      this.setState({ regions });
    } else {
      // setting the fields region to be the
      // first region in options array
      const [firstRegion] = regions;
      fields.region = firstRegion;
      this.setState({ regions, fields });
    }
  }

  // Address Book Form Actions

  /**
   * @method onSubmit
   * @summary takes the entered address and adds or updates it to the addressBook.
   * @since 2.0.0
   */
  onSubmit = (data) => {
    // event.preventDefault();
    // const { add } = this.props;
    // const { fields: enteredAddress } = this.state; // fields object as enteredAddress
    // TODO: field validatiion
    // add(enteredAddress);
    console.log("form submit", data)
  }

  /**
   * @method onFieldChange
   * @summary when field values change update the value in state
   * @since 2.0.0
   */
  onFieldChange = (data) => {
    console.log("on field change", data)
    // const { fields } = this.state;
    // fields[name] = value;
    // this.setState({ fields });
    // // if country changed set new region options
    // if (name === "country") this.setRegionOptions(value);
  }

  /**
   * @method onSelectChange
   * @summary normalizes the select components onChange.
   * @since 2.0.0
   */
  onSelectChange = (value, name) => {
    // the reaction select component doesn't return
    // the same values as the other field components
    // this updates that return and calls the
    // typical on field change handler
    this.onFieldChange(new Event("onSelect"), value, name);
  }

  // Address Book Form JSX

  /**
   * @method renderAddressOptiions
   * @summary renders address options at the bottom of the address book form
   * if no address in addressBook array only show the isCommercial option
   * since a first address will always be the default shipping/billing address.
   * @since 2.0.0
   * @return {Object} - JSX and Checkbox components.
   */
  // renderAddressOptions() {
  //   const { hasAddress } = this.props;
  //   const { fields } = this.state;
  //   let defaultOptions;
  //   if (hasAddress) {
  //     defaultOptions = (
  //       <div>
  //         <div className="form-group">
  //           <div className="checkbox">
  //             <Components.Checkbox
  //               i18nKeyLabel="address.isShippingDefault"
  //               label="Make this your default shipping address."
  //               name="isShippingDefault"
  //               onChange={this.onFieldChange}
  //               checked={fields.isShippingDefault}
  //             />
  //           </div>
  //         </div>
  //         <div className="form-group">
  //           <div className="checkbox">
  //             <Components.Checkbox
  //               i18nKeyLabel="address.isBillingDefault"
  //               label="Make this your default billing address."
  //               name="isBillingDefault"
  //               onChange={this.onFieldChange}
  //               checked={fields.isBillingDefault}
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }

  //   return (
  //     <div className="row address-options" style={{ paddingLeft: "5px" }}>
  //       <div className="col-md-12">
  //         {defaultOptions}
  //         <div className="form-group">
  //           <div className="checkbox">
  //             <Components.Checkbox
  //               i18nKeyLabel="address.isCommercial"
  //               label="This is a commercal address."
  //               name="isCommercial"
  //               onChange={this.onFieldChange}
  //               checked={fields.isCommercial}
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  /**
   * @method renderButtons
   * @summary renders submit and cancel buttons for address book form
   * if no address in addressBook array don't show the cancel button
   * since the user needs to add a default address.
   * @since 2.0.0
   * @return {Object} - JSX
   */
  // renderButtons() {
  //   const { cancel, hasAddress } = this.props;
  //   const cancelBtn = (
  //     <button type="reset" className="btn btn-default" style={{ marginLeft: "5px" }} onClick={cancel}>
  //       <Components.Translation defaultValue="Cancel" i18nKey="app.cancel" />
  //     </button>
  //   );
  //   return (
  //     <div className="row text-right">
  //       <button type="submit" className="btn btn-primary">
  //         <Components.Translation defaultValue="Save and continue" i18nKey="app.saveAndContinue" />
  //       </button>
  //       {(hasAddress) ? cancelBtn : ""}
  //     </div>
  //   );
  // }

  testValidator = (data) => {
    return Promise.resolve([{name: "thing", message: "is wrong"}]);
  }

  render() {
    const { countries } = this.props;
    const { regions, fields } = this.state;
    // let regionField;
    // if (regions.length === 0) {
    //   // if no region optioins
    //   // render a TextField
    //   regionField = (
    //     <Components.TextField
    //       i18nKeyLabel="address.region"
    //       label="Region"
    //       name="region"
    //       onChange={this.onFieldChange}
    //       value={fields.region}
    //     />
    //   );
    // } else {
    //   // if region optioins
    //   // render a Select
    //   regionField = (
    //     <Components.Select
    //       i18nKeyLabel="address.region"
    //       label="Region"
    //       name="region"
    //       options={regions}
    //       onChange={this.onSelectChange}
    //       value={fields.region}
    //     />
    //   );
    // }
    return (
      <Form ref={i => { this.form = i; }}  onSubmit={this.onSubmit} onChange={this.onFieldChange} validator={this.testValidator} value={{ fullName: "Nat Hamilton" }}>
        <div className="row">
          <div className="col-md-6">
            {/* <Components.Select
              i18nKeyLabel="address.country"
              label="Country"
              name="country"
              options={countries}
              onChange={this.onSelectChange}
              placeholder="Country"
              value={fields.country}
                  /> */}
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Field name="fullName" label="Full Name">
              <TextInput
                name="fullName"
              />
              <ErrorsBlock names={["fullName"]} />
            </Field>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Field label="Address">
              <TextInput
                name="address1"
                onChange={this.onFieldChange}
                value={fields.address1}
              />
              <ErrorsBlock names={["address1"]}/>
            </Field>

          </div>
          <div className="col-md-6">
            <Field label="Address">
              <TextInput
                name="address2"
                onChange={this.onFieldChange}
                value={fields.address2}
              />
              <ErrorsBlock names={["address2"]}/>
            </Field>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <Field label="Postal">
              <TextInput
                name="postal"
                value={fields.postal}
              />
            </Field>
          </div>
          <div className="col-md-4">
            <TextInput

              label="City"
              name="city"
              onChange={this.onFieldChange}
              value={fields.city}
            />
          </div>
          <div className="col-md-4">

          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <TextInput

              label="Phone"
              name="phone"
              onChange={this.onFieldChange}
              value={fields.phone}
            />
          </div>
        </div>

        <Button onClick={() => this.form.submit()}>Submit</Button>
      </Form>
    );
  }
}

export default AddressBookForm;
