import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const StyledDiv = styled.div`
  color: #333333;
`;

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
    /**
     * On object of component children to pass into this component
     */
    components: PropTypes.shape({
      ChangeButton: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    }),
    /**
     * On object of component children to pass into this component
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
    return (
      <ActionContainer>
        <ActionTitle>
          {label}
        </ActionTitle>
        <ActionDetail>
          ActionDetail
        </ActionDetail>
        <ActionButton>
          <ChangeButton actionType="important" onClick={this.handleOnChange} isShortHeight isTextOnly>Change</ChangeButton>
        </ActionButton>
      </ActionContainer>
    );
  }
}

export default CheckoutActionComplete;
