import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const ViewerInfoContainer = styled.div`
  position: relative;
  display: flex;
`;

const ViewerInitialsCircle = styled.div`
  background: ${applyTheme("color_teal")};
  border-radius: 50%;
  height: ${applyTheme("viewerInfo_initials_size")};
  text-align: center;
  width: ${applyTheme("viewerInfo_initials_size")};
`;

const ViewerInitialsText = styled.div`
  font-family: ${applyTheme("font_family")};
  font-weight: ${applyTheme("font_weight_normal")};
  font-size: ${applyTheme("font_size_small")};
  color: ${applyTheme("color_white")};
  line-height: 1;
  position: relative;
  top: calc(${applyTheme("viewerInfo_initials_size")} / 4);
`;

const ViewerFirstNameText = styled.span`
  font-family: ${applyTheme("font_family")};
  font-size: ${applyTheme("font_size_small")};
  color: ${applyTheme("color_coolGrey500")};
  display: ${({ compact, full }) => {
    if (full) {
      return compact ? "none" : "inline";
    }
    return "none";
  }};
  align-self: center;
  margin-left: 0.5rem;
  letter-spacing: 0.2px;

  @media (min-width: ${applyTheme("breakpoint_md")}px) {
    display: ${({ compact }) => (compact ? "none" : "inline")};
  }
`;

class ViewerInfo extends Component {
  static propTypes = {
    /**
     * Enable this prop when you only want to display the initials/avatar on all screens
     */
    compact: PropTypes.bool,
    /**
     * Enable this prop when you want to display the initials and first name on all screens
     */
    full: PropTypes.bool,
    /**
     * An object containing basic user information.
     */
    viewer: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      primaryEmailAddress: PropTypes.string.isRequired
    }).isRequired
  };

  static defaultProps = {
    compact: false,
    full: false
  };

  /**
   *
   * @name viewerInitials
   * @summary Build the initials string from the `viewer` first and last name
   * If those props are not availible use the first letter of the primary email address.
   * @return {String} the viewers initials. (Patricia Smith => PS, Olamide => O, james.booker@ponderosafarms.com => J)
   */
  get viewerInitials() {
    const { viewer: { firstName, lastName, primaryEmailAddress } } = this.props;
    const firstInitial = (firstName && firstName.charAt()) || primaryEmailAddress.charAt().toUpperCase();
    const lastInitial = (lastName && lastName.charAt()) || "";
    return `${firstInitial}${lastInitial}`;
  }

  /**
   *
   * @name viewerName
   * @summary If `firstName` is availible on the `viewer` object
   * return that else return the email address
   * @return {String} the viewers name.
   */
  get viewerName() {
    const { viewer: { firstName, primaryEmailAddress } } = this.props;
    return (firstName && firstName) || primaryEmailAddress;
  }

  render() {
    const { compact, full } = this.props;
    return (
      <ViewerInfoContainer>
        <ViewerInitialsCircle>
          <ViewerInitialsText>{this.viewerInitials}</ViewerInitialsText>
        </ViewerInitialsCircle>
        <ViewerFirstNameText compact={compact} full={full}>
          {this.viewerName}
        </ViewerFirstNameText>
      </ViewerInfoContainer>
    );
  }
}

export default ViewerInfo;
