import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const Detail = styled.div`
  flex: 0 0 fit;

  h3 {
    font-family: ${applyTheme("font_family")};
    letter-spacing: 0.3px;
    line-height: 1;
    margin: 0 0 10px;
  }

  a {
    color: ${applyTheme("color_coolGrey500")};
    text-decoration: none;
    &:focus,
    &:hover {
      color: ${applyTheme("color_coolGrey300")};
    }
  }
`;

const Attributes = styled.div`
  margin-bottom: 0.5rem;

  p {
    color: ${applyTheme("color_black65")};
    font-family: ${applyTheme("font_family")};
    font-size: ${applyTheme("font_size_small")};
    margin: 0;
  }
`;

class CartItemDetail extends Component {
  static propTypes = {
    attributes: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string
      })
    ),
    productSlug: PropTypes.string,
    title: PropTypes.string
  };

  static defaultProps = {};

  render() {
    const { attributes, productSlug, title } = this.props;
    return (
      <Detail>
        <h3>
          <a href={productSlug}>{title}</a>
        </h3>
        <Attributes>
          {attributes &&
            attributes.map(({ label, value }) => (
              <p key={label}>
                {label ? `${label}:` : ""} {value}
              </p>
            ))}
        </Attributes>
      </Detail>
    );
  }
}

export default CartItemDetail;
