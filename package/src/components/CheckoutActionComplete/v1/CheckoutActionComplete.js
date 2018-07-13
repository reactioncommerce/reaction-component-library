import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const ActionContainer = styled.div`
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
     * On object of component children to pass into this component
     */
    components: PropTypes.shape({
      ChangeButton: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    }),
    /**
     * Component to pass down to show as content
     */
    content: PropTypes.instanceOf(Element),
    /**
     * Label of Action
     */
    label: PropTypes.string,
    /**
     * Onclick function to pass to the Button component. Not handled internally, directly passed
     */
    onChange: PropTypes.func.isRequired
  };

  handleOnChange = () => {
    return this.props.onChange();
  }

  render() {
    const { components: { ChangeButton }, content, label } = this.props;

    return (
      <ActionContainer>
        <ActionTitle>
          {label}
        </ActionTitle>
        <ActionDetail>
          {content}
        </ActionDetail>
        <ActionButton>
          <ChangeButton actionType="important" onClick={this.handleOnChange} isShortHeight isTextOnly>Change</ChangeButton>
        </ActionButton>
      </ActionContainer>
    );
  }
}

export default CheckoutActionComplete;
