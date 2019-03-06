import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { addTypographyStyles, applyTheme } from "../../../utils";

const Container = styled.div`
  ${addTypographyStyles("ShopLogo", "titleTextBold")}
`;

const Logo = styled.img`
  height: ${applyTheme("ShopLogo.height")};
`;

export default class ShopLogo extends Component {
  static propTypes = {
    /**
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
     */
    className: PropTypes.string,
    /**
     * The primary shop's logo url
     */
    shopLogoUrl: PropTypes.string,
    /**
     * The primary shop's name
     */
    shopName: PropTypes.string.isRequired
  }

  render() {
    const { className, shopLogoUrl, shopName } = this.props;

    return (
      <Container className={className}>
        {
          shopLogoUrl ? (
            <Logo src={shopLogoUrl} alt={shopName} />
          ) : (
            shopName
          )
        }
      </Container>
    );
  }
}

