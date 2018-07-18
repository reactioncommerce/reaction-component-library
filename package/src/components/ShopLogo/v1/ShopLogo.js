import React, { Component } from "react";
import PropTypes from "prop-types";

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
      <div>
        {
          shopLogoUrl ? (
            <img src={shopLogoUrl} alt={shopName} />
          ) : (
            shopName
          )
        }
      </div>
    );
  }
}

