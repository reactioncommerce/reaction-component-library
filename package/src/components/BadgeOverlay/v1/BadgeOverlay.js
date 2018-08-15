import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { applyTheme } from "../../../utils";
import {
  BADGE_TYPES,
  BADGE_LABELS,
  badgeStatus,
  isProductBestseller,
  isProductLowQuantity
} from "./utils";

const baseBadgeStyles = css`
  line-height: 1.375em;
  font-family: ${applyTheme("font_family")};
  font-weight: 400;
  border-radius: 4px;
  height: auto;
  font-size: 0.7rem;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  position: absolute;
  z-index: 1200;
`;

const PrimaryBadge = styled.div`
  ${baseBadgeStyles}
  color: ${applyTheme("color_white")};
  top: 8px;
  left: 8px;
  ${(props) => {
    const { type } = props;
    switch (type) {
      case BADGE_TYPES.BACKORDER:
        return css`background-color: ${applyTheme("color_coolGrey")};`;
      case BADGE_TYPES.BESTSELLER:
        return css`background-color: ${applyTheme("color_success")};`;
      case BADGE_TYPES.LOW_QUANTITY:
        return css`background-color: ${applyTheme("color_coolGrey")};`;
      case BADGE_TYPES.SOLD_OUT:
        return css`background-color: ${applyTheme("color_coolGrey")};`;
      case BADGE_TYPES.SALE:
        return css`background-color: ${applyTheme("color_red300")};`;
      default:
        return "";
    }
  }}
  `;

const SecondaryBadge = styled.div`
  ${baseBadgeStyles}
  color: ${applyTheme("color_coolGrey")};
  top: 8px;
  right: 8px;
  `;

const Overlay = styled.div`
  position: relative;
  ${({ isFaded }) => {
    if (isFaded) {
      return "opacity: 0.5;";
    }
    return "";
  }}
  `;

const BadgeLabel = styled.span`
  font-weight: 700;
  position: relative;
  white-space: nowrap;
  padding: 0;
  letter-spacing: 0.5px;
  font-size: 11px;
  `;

class BadgeOverlay extends Component {
  static propTypes = {
    /**
     * The contents wrapped in the overlay, such as text, icons, or any combination of React and HTML components
     */
    children: PropTypes.node,
    /**
     * Only show badge if status is of a certain type
     * Types: BACKORDER, BESTSELLER, LOW_QUANTITY, SALE, SOLD_OUT
     */
    filterOnly: PropTypes.string,
    /**
     * The product, whose properties determine which badge(s) to display
     */
    product: PropTypes.shape({
      isSoldOut: PropTypes.bool,
      isBackorder: PropTypes.bool,
      isOnSale: PropTypes.bool,
      isLowQuantity: PropTypes.bool,
      isBestseller: PropTypes.bool
    }),
    /**
     * Whether to only display the primary badge
     */
    shouldShowPrimaryOnly: PropTypes.bool
  };

  static defaultProps = {
    filterOnly: "",
    shouldShowPrimaryOnly: false
  };

  renderBadges = () => {
    const { filterOnly, product, shouldShowPrimaryOnly } = this.props;
    const status = badgeStatus(product);

    if (!status) return null;

    const { type, label } = status;

    if (filterOnly) {
      if (type === filterOnly) {
        return this.renderPrimaryBadge(type, label);
      }

      return null;
    }

    // If status type is "BACKORDER" or "SOLD_OUT", only show primary badge
    if (type === BADGE_TYPES.BACKORDER || type === BADGE_TYPES.SOLD_OUT || shouldShowPrimaryOnly) {
      return this.renderPrimaryBadge(type, label);
    }

    // If any other status, check to see if secondary badges are needed
    return (
      <Fragment>
        {this.renderPrimaryBadge(type, label)}
        {this.renderSecondaryBadgeIfNeeded(status.type)}
      </Fragment>
    );
  }

  renderPrimaryBadge = (type, label) => (
    <PrimaryBadge type={type}>
      <BadgeLabel>{label}</BadgeLabel>
    </PrimaryBadge>
  );

  renderSecondaryBadgeIfNeeded = (primaryBadgeType) => {
    const { product } = this.props;

    if (primaryBadgeType === BADGE_TYPES.SALE) {
      if (isProductLowQuantity(product)) {
        return this.renderSecondaryBadge(BADGE_LABELS.LOW_QUANTITY);
      }
      if (isProductBestseller(product)) {
        return this.renderSecondaryBadge(BADGE_LABELS.BESTSELLER);
      }
    }

    if (primaryBadgeType === BADGE_TYPES.LOW_QUANTITY) {
      if (isProductBestseller(product)) {
        return this.renderSecondaryBadge(BADGE_LABELS.BESTSELLER);
      }
    }

    return null;
  }

  renderSecondaryBadge = (label) => (
    <SecondaryBadge>
      <BadgeLabel>{label}</BadgeLabel>
    </SecondaryBadge>
  );

  render() {
    const { children, product } = this.props;
    const status = badgeStatus(product) || {};

    return (
      <Overlay isFaded={status.type === BADGE_TYPES.SOLD_OUT}>
        {this.renderBadges()}
        {children}
      </Overlay>
    );
  }
}

export default BadgeOverlay;
