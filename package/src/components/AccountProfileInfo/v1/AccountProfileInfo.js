import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { addTypographyStyles, applyTheme, CustomPropTypes } from "../../../utils";

const AccountProfileInfoContainer = styled.div`
  display: flex;
  position: relative;
`;

const AccountProfileInfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: ${applyTheme("AccountProfileInfo.spacingBetweenImageAndContent")};
  position: relative;
`;

const ViewerEmailText = styled.span`
  ${addTypographyStyles("AccountProfileInfoEmail", "labelText")}
  align-self: left;
  margin-bottom: ${applyTheme("AccountProfileInfo.spacingAfterEmail")};
`;

const ViewerNameText = styled.span`
  ${addTypographyStyles("AccountProfileInfoName", "titleTextBold")}
  align-self: left;
  margin-bottom: ${applyTheme("AccountProfileInfo.spacingAfterName")};
`;

class AccountProfileInfo extends Component {
  static propTypes = {
    /**
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
     */
    className: PropTypes.string,
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
      Button: CustomPropTypes.component,
      /**
     * Profile image component to display
     */
      ProfileImage: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    }),
    /**
     * The text for the "Edit Account" text, if it is shown.
     */
    editAccountButtonText: PropTypes.string,
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
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      name: PropTypes.string,
      primaryEmailAddress: PropTypes.string.isRequired,
      profileImage: PropTypes.string
    }).isRequired
  };

  static defaultProps = {
    editAccountButtonText: "Edit Account",
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
   * @summary If `name` is availible on the `viewer` object
   * return that else return `fistName` and `lastName`,
   * else return `firstName`, else return null
   * @return {String} the viewers name.
   */
  get viewerName() {
    const { viewer: { firstName, lastName, name } } = this.props;

    return name || (firstName && lastName && `${firstName} ${lastName}`) || firstName || null;
  }

  viewerProfileEditLink = () => {
    const { components: { Button }, onClickEdit, shouldShowEditButton, editAccountButtonText } = this.props;

    if (shouldShowEditButton) {
      return (
        <Button isShortHeight isTextOnly isTextOnlyNoPadding onClick={onClickEdit}>{editAccountButtonText}</Button>
      );
    }
    return null;
  }

  render() {
    const { className, components: { ProfileImage }, viewer } = this.props;

    return (
      <AccountProfileInfoContainer className={className}>
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
