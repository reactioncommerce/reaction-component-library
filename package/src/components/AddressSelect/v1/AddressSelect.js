import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { CustomPropTypes } from "../../../utils";

const AddressSelectWrapper = styled.div``;

class AddressSelect extends Component {
  static propTypes = {
    addressBook: PropTypes.arrayOf(PropTypes.object),
    /**
     * If you've set up a components context using
     * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
     * (recommended), then this prop will come from there automatically. If you have not
     * set up a components context or you want to override one of the components in a
     * single spot, you can pass in the components prop directly.
     */
    components: PropTypes.shape({
      Accordion: CustomPropTypes.component.isRequired,
      AddressForm: CustomPropTypes.component.isRequired
    }).isRequired
  };

  static defaultProps = {};

  addressToString({ address1, address2, city, country, postal, region }) {
    const addressString = `${address1}${address2 ? ", " + address2 : ""}, ${city}, ${region} ${postal} ${country}`;
    return addressString;
  }

  renderAddressAccordion = (address) => {
    const { components: { Accordion, AddressForm } } = this.props;
    const name = `${address.firstName} ${address.lastName}`;
    return (
      <Accordion label={name} detail={this.addressToString(address)}>
        <AddressForm value={address} />
      </Accordion>
    );
  };

  render() {
    const { addressBook } = this.props;
    return <AddressSelectWrapper>{addressBook.map(this.renderAddressAccordion)}</AddressSelectWrapper>;
  }
}

export default withComponents(AddressSelect);
