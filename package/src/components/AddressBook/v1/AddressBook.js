import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, addTypographyStyles, CustomPropTypes } from "../../../utils";

const AddressBookAddNewAddressAction = styled.div`
  border-color: ${applyTheme("accordionBorderColor")};
  border-style: ${applyTheme("accordionBorderStyle")};
  border-width: ${applyTheme("accordionBorderWidth")};
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top: none;
  box-sizing: border-box;
  color: inherit;
  overflow: hidden;
  padding: 20px;
`;

const AddressBookAddNewAddressActionButton = styled.div`
  ${addTypographyStyles("ActionButton", "labelText")};
  color: ${applyTheme("addressBookActionButtonColor")};
  cursor: pointer;
  display: table;
  &:hover {
    color: ${applyTheme("addressBookActionButtonHoverColor")};
    svg {
      color: inherit !important;
    }
  }
`;

const AddressBookAddNewAddressActionIcon = styled.span`
  color: inherit;
  height: 20px;
  margin: 0;
  margin-right: 10px;
  width: 20px;
  svg {
    color: ${applyTheme("addressBookActionButtonIconColor")};
    fill: currentColor;
    height: 1em;
    width: 1em;
    vertical-align: middle;
  }
`;

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: ${applyTheme("checkoutActionsItemPaddingBottom")};
  padding-left: ${applyTheme("checkoutActionsItemPaddingLeft")};
  padding-right: ${applyTheme("checkoutActionsItemPaddingRight")};
  padding-top: ${applyTheme("checkoutActionsItemPaddingTop")};

  > div:last-of-type {
    margin-left: ${applyTheme("checkoutActionsSpaceBetweenActiveActionButtons")};
  }
`;

const ENTRY = "entry";
const OVERVIEW = "overview";
const REVIEW = "review";

class AddressBook extends Component {
  static propTypes = {
    /**
     * User account data.
     */
    account: PropTypes.shape({
      addressBook: PropTypes.arrayOf(PropTypes.object)
    }),
    /**
     * If you've set up a components context using @reactioncommerce/components-context
     * (recommended), then this prop will come from there automatically. If you have not
     * set up a components context or you want to override one of the components in a
     * single spot, you can pass in the components prop directly.
     */
    components: PropTypes.shape({
      /**
       * Pass either the Reaction AddressForm component or your own component that
       * accepts compatible props.
       */
      AddressForm: CustomPropTypes.component.isRequired,
      /**
       * Pass either the Reaction AddressReview component or your own component that
       * accepts compatible props.
       */
      AddressReview: CustomPropTypes.component.isRequired,
      /**
       * Pass either the Reaction iconPlus component or your own component that
       * accepts compatible props.
       */
      iconPlus: CustomPropTypes.component.isRequired
    }).isRequired,
    isSaving: PropTypes.bool,
    validatedValue: PropTypes.object,
    /**
     * Value for the AddressFrom
     */
    value: PropTypes.object
  };

  static defaultProps = {
    account: {
      addressBook: []
    }
  };

  state = {
    // eslint-disable-next-line
    status: this.props.validatedValue ? REVIEW : this.hasAddress ? OVERVIEW : ENTRY
  };

  _addressForm = null;
  _addressReview = null;

  //
  // Helper Methods
  //
  get hasAddress() {
    const { account: { addressBook } } = this.props;
    return addressBook.length > 0;
  }

  addressToString({ address1, address2, city, country, postal, region }) {
    const addressString = `${address1}${address2 ? `, ${address2}` : ""}, ${city}, ${region} ${postal} ${country}`;
    return addressString;
  }

  //
  // Handler Methods
  //
  handleAddAddress = (value) => {
    console.log("added new address", value);
  };

  handleDeleteAddress = (value) => {
    console.log("deleted address", value);
  };

  handleEditAddress = (value) => {
    console.log("edit address", value);
  };

  handleAddNewAddressClick = () => {
    const { status } = this.state;
    console.log("add address clicked!", status);
    this.setState({ status: ENTRY });
  };

  //
  // Render Methods
  //
  renderAddressSelect() {
    const { account: { addressBook }, components: { Accordion, AddressForm, iconPlus } } = this.props;
    return (
      <Fragment>
        {addressBook.map((address) => {
          const name = `${address.firstName} ${address.lastName}`;
          return (
            <Accordion label={name} detail={this.addressToString(address)}>
              <AddressForm value={address} />
            </Accordion>
          );
        })}
        <AddressBookAddNewAddressAction>
          <AddressBookAddNewAddressActionButton onClick={this.handleAddNewAddressClick} tabIndex={0}>
            <AddressBookAddNewAddressActionIcon>{iconPlus}</AddressBookAddNewAddressActionIcon>
            Add a new address
          </AddressBookAddNewAddressActionButton>
        </AddressBookAddNewAddressAction>
      </Fragment>
    );
  }

  renderAddressReview() {
    const { components: { AddressReview } } = this.props;
    return (
      <AddressReview
        ref={(el) => {
          this._addressReview = el;
        }}
      />
    );
  }

  renderAddressForm() {
    const { components: { AddressForm, Button }, isSaving } = this.props;
    return (
      <Fragment>
        <AddressForm
          onSubmit={this.handleAddAddress}
          ref={(el) => {
            this._addressForm = el;
          }}
        />
        <FormActions>
          {this.hasAddress ? <Button actionType="secondary">Cancel</Button> : ""}
          <Button onClick={() => this._addressForm.submit()} isWaiting={isSaving}>
            Add address
          </Button>
        </FormActions>
      </Fragment>
    );
  }

  render() {
    const { status } = this.state;
    // eslint-disable-next-line
    return status === REVIEW
      ? this.renderAddressReview()
      : status === OVERVIEW ? this.renderAddressSelect() : this.renderAddressForm();
  }
}

export default withComponents(AddressBook);
