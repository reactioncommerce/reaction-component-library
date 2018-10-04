import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { addTypographyStyles, applyTheme } from "../../../utils";

const ViewerImageCircle = styled.div`
  align-items: center;
  background-color: ${applyTheme("profileImageBackgroundColor")};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const ViewerInitialsText = styled.div`
  ${addTypographyStyles("ProfileImageInitials", "labelText")}
  color: ${applyTheme("profileImageInitialsColor")};
  display: flex;
  line-height: 1;
`;

const ViewerImage = styled.img`
  border-radius: 50%;
  height: 100%;
  width: 100%;
`;

class ProfileImage extends Component {
  static propTypes = {
    /**
     * Size of profile image, in pixels
     */
    size: PropTypes.number,
    /**
     * An object containing basic user information.
     */
    viewer: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      primaryEmailAddress: PropTypes.string,
      profileImage: PropTypes.string
    }).isRequired
  };

  static defaultProps = {
    size: 80
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

  viewerProfileImage = () => {
    const { viewer: { name, profileImage } } = this.props;

    if (profileImage) {
      return (
        <ViewerImage alt={name} src={profileImage} />
      );
    }

    return <ViewerInitialsText>{this.viewerInitials}</ViewerInitialsText>;
  }


  render() {
    const { size } = this.props;

    return (
      <ViewerImageCircle style={{ height: `${size}px`, width: `${size}px` }}>
        {this.viewerProfileImage()}
      </ViewerImageCircle>
    );
  }
}

export default ProfileImage;
