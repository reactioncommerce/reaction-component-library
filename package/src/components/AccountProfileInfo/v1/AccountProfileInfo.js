import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { addTypographyStyles, applyTheme } from "../../../utils";

const AccountProfileInfoContainer = styled.div`
  display: flex;
  position: relative;
`;

const AccountProfileInfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const ViewerInitialsCircle = styled.div`
  background-color: ${applyTheme("viewerInfoInitialsBackgroundColor")};
  border-radius: 50%;
  height: ${applyTheme("accountProfileInfoInitialsSize")};
  text-align: center;
  width: ${applyTheme("accountProfileInfoInitialsSize")};
`;

const ViewerInitialsText = styled.div`
  ${addTypographyStyles("ViewerInfoInitials", "labelText")}
  color: ${applyTheme("viewerInfoInitialsColor")};
  line-height: 1;
  position: relative;
  top: calc(${applyTheme("viewerInfoInitialsSize")} / 4);
`;

const ViewerEmailText = styled.span`
  ${addTypographyStyles("ViewerInfoInitials", "labelText")}
  color: ${applyTheme("accountProfileInfoEmailFontColor")};
  font-size: ${applyTheme("accountProfileInfoEmailFontSize")};
  align-self: left;
  margin-bottom: 0.75rem;
  margin-left: 1.0rem;
`;

const ViewerNameText = styled.span`
  ${addTypographyStyles("ViewerInfoInitials", "labelText")}
  font-size: ${applyTheme("accountProfileInfoNameFontSize")};
  align-self: left;
  margin-bottom: 0.25rem;
  margin-left: 1.0rem;
`;

const ViewerProfileEditText = styled.span`
  ${addTypographyStyles("ViewerInfoInitials", "labelText")}
  color: ${applyTheme("accountProfileInfoEmailFontColor")};
  font-size: ${applyTheme("accountProfileInfoEmailFontSize")};
  align-self: left;
  margin-left: 1.0rem;
`;


class AccountProfileInfo extends Component {
  static propTypes = {
    /**
     * Enable this prop when you only want to display the Edit account link
     */
    editable: PropTypes.bool,
    /**
     * An object containing basic user information.
     */
    viewer: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      primaryEmailAddress: PropTypes.string.isRequired
    }).isRequired
  };

  static defaultProps = {
    editable: false
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
   * @name viewerEmail
   * @summary Return viewer email address
   * @return {String} the viewers email address.
   */
  get viewerPrimaryEmailAddress() {
    const { viewer: { primaryEmailAddress } } = this.props;
    return primaryEmailAddress;
  }

  /**
   *
   * @name viewerName
   * @summary If `firstName` is availible on the `viewer` object
   * return that else return the email address
   * @return {String} the viewers name.
   */
  get viewerName() {
    const { viewer: { name } } = this.props;
    return name;
  }

  viewerProfileEditLink = () => {
    const { editable } = this.props;

    if (editable) {
      return (
        <ViewerProfileEditText>
          Edit account
        </ViewerProfileEditText>
      );
    }
    return null;
  }

  render() {
    return (
      <AccountProfileInfoContainer>
        <ViewerInitialsCircle>
          <ViewerInitialsText>{this.viewerInitials}</ViewerInitialsText>
        </ViewerInitialsCircle>
        <AccountProfileInfoTextContainer>
          <ViewerNameText>
            {this.viewerName}
          </ViewerNameText>
          <ViewerEmailText>
            {this.viewerPrimaryEmailAddress}
          </ViewerEmailText>
          {this.viewerProfileEditLink()}
        </AccountProfileInfoTextContainer>
      </AccountProfileInfoContainer>
    );
  }
}

export default AccountProfileInfo;
