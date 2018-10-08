import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { addTypographyStyles, applyTheme } from "../../../utils";

const ViewerInfoContainer = styled.div`
  display: flex;
  position: relative;
`;

const ViewerFirstNameText = styled.span`
  ${addTypographyStyles("ViewerInfo", "labelText")}
  display: ${({ compact, full }) => {
    if (full) {
      return compact ? "none" : "inline";
    }
    return "none";
  }};
  align-self: center;
  margin-left: 0.5rem;

  @media (min-width: ${applyTheme("md", "breakpoints")}px) {
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
     * If you've set up a components context using
     * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
     * (recommended), then this prop will come from there automatically. If you have not
     * set up a components context or you want to override one of the components in a
     * single spot, you can pass in the components prop directly.
     */
    components: PropTypes.shape({
      /**
     * Profile image component to display
     */
      ProfileImage: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    }),
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
      name: PropTypes.string,
      primaryEmailAddress: PropTypes.string.isRequired,
      profileImage: PropTypes.string
    }).isRequired
  };

  static defaultProps = {
    compact: false,
    full: false
  };

  /**
   *
   * @name viewerName
   * @summary If `firstName` is available on the `viewer` object, return that.
   *   Otherwise return the email address.
   * @return {String} Display name for the viewer
   */
  get viewerName() {
    const { viewer: { firstName, primaryEmailAddress } } = this.props;
    return (firstName && firstName) || primaryEmailAddress;
  }

  render() {
    const { compact, components: { ProfileImage }, full, viewer } = this.props;
    return (
      <ViewerInfoContainer>
        <ProfileImage size={30} viewer={viewer} />
        <ViewerFirstNameText compact={compact} full={full}>
          {this.viewerName}
        </ViewerFirstNameText>
      </ViewerInfoContainer>
    );
  }
}

export default withComponents(ViewerInfo);
