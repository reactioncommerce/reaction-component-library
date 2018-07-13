import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const StyledDiv = styled.div`
  color: #333333;
`;

const ActionTitle = styled.div`
  color: ${applyTheme("color_coolGrey500")};
  display: flex;
  font-size: ${applyTheme("font_size_small")};
  font-weight: ${applyTheme("font_weight_bold")};
  justify-content: flex-start;
  order: 1;

  @media (max-width: 959px) {
    flex: 0 0 50%;
  }
`;

const ActionDetail = styled.div`
  display: flex;
  justify-content: flex-start;
  order: 2;

  @media (max-width: 959px) {
    flex: 0 0 100%;
    order: 3;
  }
`;

const ActionButton = styled.div`
  display: flex;
  justify-content: flex-end;
  order: 3;

  @media (max-width: 959px) {
    flex: 0 0 50%;
    order: 2;
  }
`;

class CheckoutActionComplete extends Component {
  static propTypes = {

  };

  static defaultProps = {

  };

  render() {
    return (
      <StyledDiv>TEST</StyledDiv>
        <ActionTitle>
          {label}
        </ActionTitle>
        <ActionDetail>
          ActionDetail
        </ActionDetail>
        <ActionButton>
          <ChangeButton actionType="important" onClick={this.handleOnChange} isShortHeight isTextOnly>Change</ChangeButton>
        </ActionButton>
    );
  }
}

export default CheckoutActionComplete;
