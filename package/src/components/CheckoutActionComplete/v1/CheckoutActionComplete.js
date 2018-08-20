import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, CustomPropTypes } from "../../../utils";

const ActionContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 0;
  width: 100%;
`;

const ActionTitle = styled.div`
  color: ${applyTheme("color_coolGrey500")};
  display: flex;
  flex: 1 0 auto;
  font-family: ${applyTheme("font_family")};
  font-size: ${applyTheme("font_size_small")};
  font-weight: ${applyTheme("font_weight_bold")};
  justify-content: flex-start;
  order: 1;

  @media (max-width: 959px) {
    flex: 0 0 50%;
    margin-bottom: ${applyTheme("checkoutActionCompleteMobileMargin")};
  }
`;

const ActionDetail = styled.div`
  color: ${applyTheme("color_black65")};
  display: flex;
  flex: 2 0 auto;
  font-family: ${applyTheme("font_family")};
  font-size: ${applyTheme("font_size_small")};
  justify-content: flex-start;
  order: 2;

  @media (max-width: 959px) {
    flex: 0 0 100%;
    order: 3;
  }
`;

const ActionButton = styled.div`
  display: flex;
  flex: 1 0 auto;
  font-family: ${applyTheme("font_family")};
  font-size: ${applyTheme("font_size_small")};
  justify-content: flex-end;
  order: 3;

  @media (max-width: 959px) {
    flex: 0 0 50%;
    margin-bottom: ${applyTheme("checkoutActionCompleteMobileMargin")};
    order: 2;
  }
`;

class CheckoutActionComplete extends Component {
  static propTypes = {
    /**
     * If you've set up a components context using @reactioncommerce/components-context
     * (recommended), then this prop will come from there automatically. If you have not
     * set up a components context or you want to override one of the components in a
     * single spot, you can pass in the components prop directly.
     */
    components: PropTypes.shape({
      /**
       * Pass either the Reaction Button component or your own component that
       * accepts compatible props.
       */
      Button: CustomPropTypes.component.isRequired
    }).isRequired,
    /**
     * Component to pass down to show as content
     */
    content: PropTypes.node,
    /**
     * Label of Action
     */
    label: PropTypes.string.isRequired,
    /**
     * Onclick function to pass to the Button component. Not handled internally, directly passed
     */
    onClickChangeButton: PropTypes.func.isRequired,
    /**
     * Checkout process step number
     */
    stepNumber: PropTypes.number
  };

  handleOnChange = () => this.props.onClickChangeButton();

  render() {
    const { components: { Button }, content, label, stepNumber } = this.props;

    const step = stepNumber ? <Fragment>{stepNumber}.&nbsp;</Fragment> : null;

    return (
      <ActionContainer>
        <ActionTitle>
          {step}{label}
        </ActionTitle>
        <ActionDetail>
          {content}
        </ActionDetail>
        <ActionButton>
          <Button actionType="important" onClick={this.handleOnChange} isShortHeight isTextOnly>Change</Button>
        </ActionButton>
      </ActionContainer>
    );
  }
}

export default withComponents(CheckoutActionComplete);
