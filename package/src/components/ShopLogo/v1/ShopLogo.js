import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const Container = styled.div`
  font-family: ${applyTheme("font_family")};
  font-weight: ${applyTheme("font_weight_bold")};
  font-size: ${applyTheme("font_size_h2")};
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

