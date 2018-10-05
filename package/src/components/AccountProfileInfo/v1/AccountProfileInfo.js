import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
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

const ViewerEmailText = styled.span`
  ${addTypographyStyles("AccountProfileInfoEmail", "labelText")}
  align-self: left;
  margin-bottom: ${applyTheme("accountProfileInfoSpacingAfterEmail")};
  margin-left: ${applyTheme("accountProfileInfoSpacingBetweenImageAndContent")};
`;

const ViewerNameText = styled.span`
  ${addTypographyStyles("AccountProfileInfoName", "titleTextBold")}
  align-self: left;
  margin-bottom: ${applyTheme("accountProfileInfoSpacingAfterName")};
  margin-left: ${applyTheme("accountProfileInfoSpacingBetweenImageAndContent")};
`;

class AccountProfileInfo extends Component {
  static propTypes = {
    /**
     * If you've set up a components context using
     * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
     * (recommended), then this prop will come from there automatically. If you have not
     * set up a components context or you want to override one of the components in a
     * single spot, you can pass in the components prop directly.
     */
    components: PropTypes.shape({
      /**
       * An element to show to link to the edit profile page
       */
      Button: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      /**
     * Profile image component to display
     */
      ProfileImage: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    }),
    /**
     * Function to pass to button onClick
     */
    onClickEdit: PropTypes.func,
    /**
     * Enable this prop when you only want to display the Edit account link
     */
    shouldShowEditButton: PropTypes.bool,
    /**
     * An object containing basic user information.
     */
    viewer: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      primaryEmailAddress: PropTypes.string.isRequired,
      profileImage: PropTypes.string
    }).isRequired
  };

  static defaultProps = {
    shouldShowEditButton: false
  };

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
    const { components: { Button }, onClickEdit, shouldShowEditButton } = this.props;

    if (shouldShowEditButton) {
      return (
        <Button isShortHeight isTextOnly isTextOnlyNoPadding onClick={onClickEdit}>Edit Account</Button>
      );
    }
    return null;
  }

  render() {
    const { components: { ProfileImage }, viewer } = this.props;

    return (
      <AccountProfileInfoContainer>
        <ProfileImage size={80} viewer={viewer} />
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

export default withComponents(AccountProfileInfo);
