import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, CustomPropTypes } from "../../../utils";

const StyledDiv = styled.div`
  color: #333333;
`;

class AddressBook extends Component {
  static propTypes = {
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
    }).isRequired
  };

  static defaultProps = {};

  state = {};

  renderAddressSelect() {
    const { components: { AddressSelect } } = this.props;
    return <AddressSelect />;
  }

  renderAddressReview() {
    const { components: { AddressReview } } = this.props;
    return <AddressReview />;
  }

  renderAddressForm() {
    const { components: { AddressForm } } = this.props;
    return <AddressForm />;
  }

  render() {
    return this.renderAddressSelect();
  }
}

export default withComponents(AddressBook);
