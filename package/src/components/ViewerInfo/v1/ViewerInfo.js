import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const Container = styled.div`
  position: relative;
  display: flex;
`;

const Circle = styled.div`
  background: ${applyTheme("color_teal")};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: inline-block;
`;

const ViewerInitials = styled.div`
  font-family: ${applyTheme("font_family")};
  font-weight: ${applyTheme("font_weight_bold")};
  font-size: ${applyTheme("font_size_small")};
  color: ${applyTheme("color_white")};
  position: absolute;
  top: 5px;
  left: 8px;
  z-index: 10;
`;

const FirstName = styled.span`
  font-family: ${applyTheme("font_family")};
  font-size: ${applyTheme("font_size_small")};
  color: ${applyTheme("color_coolGrey500")};
  align-self: center;
  margin-left: 0.5rem;
  letter-spacing: 0.2px;
`;

class ViewerInfo extends Component {
  static propTypes = {
    /**
     * An object containing basic user information.
     */
    viewer: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string
    }).isRequired
  };

  render() {
    const { viewer: { firstName, lastName } } = this.props;

    return (
      <Container>
        <Circle />
        <ViewerInitials>
          {`${firstName.charAt()}${lastName.charAt()}`}
        </ViewerInitials>
        <FirstName>{firstName}</FirstName>
      </Container>
    );
  }
}

export default ViewerInfo;
