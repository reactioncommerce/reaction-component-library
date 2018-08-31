import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
// import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { CustomPropTypes } from "../../../utils";

// onst StyledDiv = styled.div`
//   color: #333333;
// `;

class AddressBook extends Component {
  static propTypes = {
    /**
     * User account data.
     */
    account: PropTypes.object,
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
       * Pass either the Reaction AddressSelect component or your own component that
       * accepts compatible props.
       */
      AddressSelect: CustomPropTypes.component.isRequired
    }).isRequired,
    /**
     * Value for the AddressFrom
     * needed for editing anonymous cart shipping addresses
     */
    value: PropTypes.object
  };

  static defaultProps = {};

  state = {};

  _addresForm = null;
  _addressSelect = null;
  _addressReview = null;

  //
  // Handler Methods
  //

  //
  // Render Methods
  //

  renderAddressSelect() {
    const { components: { AddressSelect } } = this.props;
    return (
      <AddressSelect
        ref={(el) => {
          this._addressSelect = el;
        }}
      />
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
    const { components: { AddressForm } } = this.props;
    return (
      <AddressForm
        ref={(el) => {
          this._addressForm = el;
        }}
      />
    );
  }

  render() {
    const { components: { Button } } = this.props;
    return (
      <Fragment>
        {this.renderAddressForm()}
        <Button>Save</Button>
      </Fragment>
    );
  }
}

export default withComponents(AddressBook);
