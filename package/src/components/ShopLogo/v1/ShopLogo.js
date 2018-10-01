import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { addTypographyStyles } from "../../../utils";

const Container = styled.div`
  ${addTypographyStyles("ShopLogo", "titleTextBold")}
`;

export default class ShopLogo extends Component {
  static propTypes = {
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
    const { shopLogoUrl, shopName } = this.props;

    return (
      <Container>
        {
          shopLogoUrl ? (
            <img src={shopLogoUrl} alt={shopName} />
          ) : (
            shopName
          )
        }
      </Container>
    );
  }
}

