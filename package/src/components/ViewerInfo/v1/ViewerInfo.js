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
  font-weight: ${applyTheme("font_weight_normal")};
  font-size: ${applyTheme("font_size_small")};
  color: ${applyTheme("color_white")};
  position: absolute;
  top: 6px;
  left: 9px;
  z-index: 10;
`;

const FirstName = styled.span`
  font-family: ${applyTheme("font_family")};
  font-size: ${applyTheme("font_size_small")};
  color: ${applyTheme("color_coolGrey500")};
  display: none;
  align-self: center;
  margin-left: 0.5rem;
  letter-spacing: 0.2px;

  @media (min-width: 768px) {
    display: inline;
  }
`;

class ViewerInfo extends Component {
  static propTypes = {
    /**
     * An object containing basic user information.
     */
    viewer: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string
    })
  };

  static defaultProps = {
    viewer: {}
  };

  render() {
    const { viewer: { firstName, lastName } } = this.props;
    const initials = firstName && lastName ? `${firstName.charAt()}${lastName.charAt()}` : "";

    return (
      <Container>
        <Circle />
        <ViewerInitials>{initials}</ViewerInitials>
        <FirstName>{firstName && firstName}</FirstName>
      </Container>
    );
  }
}

export default ViewerInfo;
