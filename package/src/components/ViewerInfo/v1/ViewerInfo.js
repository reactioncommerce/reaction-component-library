import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { addTypographyStyles, applyTheme } from "../../../utils";

const ViewerInfoContainer = styled.div`
  display: flex;
  position: relative;
`;

const ViewerInitialsCircle = styled.div`
  background-color: ${applyTheme("viewerInfoInitialsBackgroundColor")};
  border-radius: 50%;
  height: ${applyTheme("viewerInfoInitialsSize")};
  text-align: center;
  width: ${applyTheme("viewerInfoInitialsSize")};
`;

const ViewerInitialsText = styled.div`
  ${addTypographyStyles("ViewerInfoInitials", "labelText")}
  color: ${applyTheme("viewerInfoInitialsColor")};
  line-height: 1;
  position: relative;
  top: calc(${applyTheme("viewerInfoInitialsSize")} / 4);
`;

const ViewerFirstNameText = styled.span`
  ${addTypographyStyles("ViewerInfoInitials", "labelText")}
  display: ${({ compact, full }) => {
    if (full) {
      return compact ? "none" : "inline";
    }
    return "none";
  }};
  align-self: center;
  margin-left: 0.5rem;

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
