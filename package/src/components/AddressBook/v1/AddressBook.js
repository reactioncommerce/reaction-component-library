import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import isEmpty from "lodash.isempty";
import isEqual from "lodash.isequal";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, addTypographyStyles, CustomPropTypes } from "../../../utils";

const AddressBookAddNewAddressAction = styled.div`
  border-color: ${applyTheme("addressBookBorderColor")};
  border-style: ${applyTheme("addressBookBorderStyle")};
  border-width: ${applyTheme("addressBookBorderWidth")};
  border-bottom-left-radius: ${applyTheme("addressBookBorderRadius")};
  border-bottom-right-radius: ${applyTheme("addressBookBorderRadius")};
  border-top: none;
  box-sizing: border-box;
  color: inherit;
  overflow: hidden;
  padding-bottom: ${applyTheme("addressBookAddActionPaddingBottom")};
  padding-left: ${applyTheme("addressBookAddActionPaddingLeft")};
  padding-right: ${applyTheme("addressBookAddActionPaddingRight")};
  padding-top: ${applyTheme("addressBookAddActionPaddingTop")};
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
  height: ${applyTheme("addressBookActionButtonIconHeight")};
  margin: 0;
  margin-right: ${applyTheme("addressBookActionButtonIconMarginRight")};
  width: ${applyTheme("addressBookActionButtonIconWidth")};
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
  padding-bottom: ${applyTheme("addressBookActionPaddingBottom")};
  padding-left: ${applyTheme("addressBookActionPaddingLeft")};
  padding-right: ${applyTheme("addressBookActionPaddingRight")};
  padding-top: ${applyTheme("addressBookActionPaddingTop")};

  > div:last-of-type {
    margin-left: ${applyTheme("checkoutActionsSpaceBetweenActiveActionButtons")};
  }
`;

const FormActionDelete = styled.div`
  flex: 1 1 auto;

  > div {
    border: none;
    &:hover {
      background-color: transparent;
      color: ${applyTheme("addressBookActionDeleteButtonHoverColor")};
    }
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
      /**
       * Users saved addresses
       */
      addressBook: PropTypes.arrayOf(PropTypes.object)
    }),
    /**
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
     */
    className: PropTypes.string,
    /**
     * If you've set up a components context using @reactioncommerce/components-context
     * (recommended), then this prop will come from there automatically. If you have not
     * set up a components context or you want to override one of the components in a
     * single spot, you can pass in the components prop directly.
     */
    components: PropTypes.shape({
      /**
       * Pass either the Reaction Accordion component or your own component that
       * accepts compatible props.
       */
      Accordion: CustomPropTypes.component.isRequired,
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
      iconPlus: PropTypes.node.isRequired
    }).isRequired,
    /**
     * Is data being saved
     */
    isSaving: PropTypes.bool,
    /**
     * Handles new address added to address book
     */
    onAddressAdded: PropTypes.func,
    /**
     * Handles address deletion from address book
     */
    onAddressDeleted: PropTypes.func,
    /**
     * Handles editing address in address book
     */
    onAddressEdited: PropTypes.func,
    /**
     * Validated entred value for the AddressReview
     */
    validatedValue: PropTypes.object,
    /**
     * Value for the AddressFrom
     */
    value: PropTypes.object
  };

  static defaultProps = {
    account: {
      addressBook: []
    },
    isSaving: false,
    onAddressAdded() {},
    onAddressDeleted() {},
    onAddressEdited() {}
  };

  state = {
    status: this.currentStatus
  };

  componentDidUpdate(prevProps) {
    const { account: { addressBook } } = this.props;
    const { account: { addressBook: prevAddressBook } } = prevProps;
    if (!isEqual(addressBook, prevAddressBook)) this.setState({ status: this.currentStatus });
  }

  _addressForm = null;
  _addressReview = null;
  _refs = {};

  //
  // Helper Methods
  //
  get currentStatus() {
    // eslint-disable-next-line
    return this.props.validatedValue ? REVIEW : this.hasAddress ? OVERVIEW : ENTRY;
  }

  get hasAddress() {
    const { account: { addressBook } } = this.props;
    return !isEmpty(addressBook);
  }

  addressToString({ address1, address2, city, country, postal, region }) {
    const addressString = `${address1}${address2 ? `, ${address2}` : ""}, ${city}, ${region} ${postal} ${country}`;
    return addressString;
  }

  //
  // Handler Methods
  //
  handleAddAddress = (value) => {
    const { onAddressAdded } = this.props;
    onAddressAdded(value);
  };

  handleDeleteAddress = (value, _id) => {
    const { onAddressDeleted } = this.props;
    onAddressDeleted(_id);
  };

  handleEditAddress = (value, _id) => {
    const { onAddressEdited } = this.props;
    onAddressEdited(_id, value).then(() => {
      this._refs[`accordion_${_id}`].toggle();
    });
  };

  handleAddressFormToggle = () => {
    const { status } = this.state;
    let newStatus;
    if (status === ENTRY && this.hasAddress) {
      newStatus = OVERVIEW;
    } else {
      newStatus = ENTRY;
    }
    this.setState({ status: newStatus });
  };

  //
  // Render Methods
  //
  renderAddressSelect() {
    const { account: { addressBook }, components: { Accordion, AddressForm, Button, iconPlus }, isSaving } = this.props;
    return (
      <Fragment>
        {addressBook.map(({ _id, ...address }) => {
          const name = `${address.firstName} ${address.lastName}`;
          return (
            <Accordion
              key={_id}
              label={name}
              detail={this.addressToString(address)}
              ref={(el) => {
                this._refs[`accordion_${_id}`] = el;
              }}
            >
              <AddressForm
                isSaving={isSaving}
                onSubmit={(value) => {
                  this.handleEditAddress(value, _id);
                }}
                ref={(el) => {
                  this._refs[`addressForm_${_id}`] = el;
                }}
                isOnDarkBackground
                value={address}
              />
              <FormActions>
                <FormActionDelete>
                  <Button
                    actionType="secondaryDanger"
                    isTextOnlyNoPadding
                    isShortHeight
                    onClick={() => {
                      this.handleDeleteAddress(address, _id);
                    }}
                  >
                    Delete address
                  </Button>
                </FormActionDelete>
                <Button
                  actionType="secondary"
                  isShortHeight
                  onClick={() => {
                    this._refs[`accordion_${_id}`].handleToggle();
                  }}
                >
                  Cancel
                </Button>
                <Button onClick={() => this._refs[`addressForm_${_id}`].submit()} isShortHeight isWaiting={isSaving}>
                  Save Changes
                </Button>
              </FormActions>
            </Accordion>
          );
        })}
        <AddressBookAddNewAddressAction>
          <AddressBookAddNewAddressActionButton onClick={this.handleAddressFormToggle} tabIndex={0}>
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
          isSaving={isSaving}
          onSubmit={this.handleAddAddress}
          ref={(el) => {
            this._addressForm = el;
          }}
        />
        <FormActions>
          {this.hasAddress ? (
            <Button actionType="secondary" onClick={this.handleAddressFormToggle}>
              Cancel
            </Button>
          ) : (
            ""
          )}
          <Button onClick={() => this._addressForm.submit()} isWaiting={isSaving}>
            Add address
          </Button>
        </FormActions>
      </Fragment>
    );
  }

  render() {
    const { className } = this.props;
    const { status } = this.state;
    return (
      <div className={className}>
        {// eslint-disable-next-line
        status === REVIEW
            ? this.renderAddressReview()
            : status === OVERVIEW ? this.renderAddressSelect() : this.renderAddressForm()}
      </div>
    );
  }
}

export default withComponents(AddressBook);
