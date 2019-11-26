import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { addTypographyStyles, applyTheme, CustomPropTypes } from "../../../utils";

const ActionContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const ActionTitle = styled.div`
  ${addTypographyStyles("CheckoutActionCompleteTitle", "labelText")}
  display: flex;
  flex: 1 0 auto;
  justify-content: flex-start;
  order: 1;

  @media (max-width: ${applyTheme("md", "breakpoints")}px) {
    flex: 0 0 50%;
    margin-bottom: ${applyTheme("CheckoutActionComplete.mobileMargin")};
  }
`;

const ActionDetail = styled.div`
  ${addTypographyStyles("CheckoutActionCompleteDetail", "labelText")}
  display: flex;
  flex: 2 0 auto;
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
  justify-content: flex-end;
  order: 3;

  @media (max-width: 959px) {
    flex: 0 0 50%;
    margin-bottom: ${applyTheme("CheckoutActionComplete.mobileMargin")};
    order: 2;
  }
`;

class CheckoutActionComplete extends Component {
  static propTypes = {
    /**
     * The text for the "Change" button text.
     */
    changeButtonText: PropTypes.string,
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

  static defaultProps = {
    changeButtonText: "Change"
  }

  handleOnChange = () => this.props.onClickChangeButton();

  render() {
    const { className, components: { Button }, content, label, stepNumber, changeButtonText } = this.props;

    const step = stepNumber ? <Fragment>{stepNumber}.&nbsp;</Fragment> : null;

    return (
      <ActionContainer className={className}>
        <ActionTitle>
          {step}{label}
        </ActionTitle>
        <ActionDetail>
          {content}
        </ActionDetail>
        <ActionButton>
          <Button actionType="important" onClick={this.handleOnChange} isShortHeight isTextOnly>{changeButtonText}</Button>
        </ActionButton>
      </ActionContainer>
    );
  }
}

export default withComponents(CheckoutActionComplete);
