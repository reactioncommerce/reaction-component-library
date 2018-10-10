import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { addTypographyStyles, applyTheme } from "../../../utils";

const ViewerImageCircle = styled.div`
  align-items: center;
  background-color: ${applyTheme("ProfileImage.backgroundColor")};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const ViewerInitialsText = styled.div`
  ${addTypographyStyles("ProfileImageInitials", "labelText")}
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
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
     */
    className: PropTypes.string,
    /**
     * Size of profile image, in pixels
     */
    size: PropTypes.number,
    /**
     * An object containing basic user information.
     */
    viewer: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      name: PropTypes.string,
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
   * If those props are not available use the first letter of the primary email address.
   * @return {String} the viewers initials. (Patricia Smith => PS, Olamide => O, james.booker@ponderosafarms.com => J)
   */
  get viewerInitials() {
    const { viewer: { firstName, lastName, primaryEmailAddress } } = this.props;
    const firstInitial = (firstName && firstName.charAt()) || primaryEmailAddress.charAt().toUpperCase();
    const lastInitial = (lastName && lastName.charAt()) || "";
    return `${firstInitial}${lastInitial}`;
  }

  viewerProfileImage = () => {
    const { size, viewer: { name, profileImage } } = this.props;

    if (profileImage) {
      return (
        <ViewerImage alt={name} src={profileImage} />
      );
    }

    return <ViewerInitialsText style= {{ fontSize: size / 2 }}>{this.viewerInitials}</ViewerInitialsText>;
  }


  render() {
    const { className, size } = this.props;

    return (
      <ViewerImageCircle className={className} style={{ height: `${size}px`, width: `${size}px` }}>
        {this.viewerProfileImage()}
      </ViewerImageCircle>
    );
  }
}

export default ProfileImage;
