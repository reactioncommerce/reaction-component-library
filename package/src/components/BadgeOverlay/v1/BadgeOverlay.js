import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { addTypographyStyles, applyTheme } from "../../../utils";
import {
  BADGE_TYPES,
  BADGE_LABELS,
  badgeStatus,
  isProductBestseller,
  isProductLowQuantity
} from "./utils";

// font-size and line-height here are used to set the height of the badge, and not
// the badge text. Badge text typography is set in `BadgeLabel` below.
const baseBadgeStyles = css`
  font-size: 11px;
  height: auto;
  line-height: 16px;
  position: absolute;
  z-index: 1200;
`;

const PrimaryBadge = styled.div`
  ${baseBadgeStyles}

  border-bottom-left-radius: ${applyTheme("BadgeOverlayPrimaryBadge.borderBottomLeftRadius")};
  border-bottom-right-radius: ${applyTheme("BadgeOverlayPrimaryBadge.borderBottomRightRadius")};
  border-top-left-radius: ${applyTheme("BadgeOverlayPrimaryBadge.borderTopLeftRadius")};
  border-top-right-radius: ${applyTheme("BadgeOverlayPrimaryBadge.borderTopRightRadius")};
  bottom: ${applyTheme("BadgeOverlayPrimaryBadge.offsetBottom")};
  left: ${applyTheme("BadgeOverlayPrimaryBadge.offsetLeft")};
  padding-bottom: ${applyTheme("BadgeOverlayPrimaryBadge.paddingBottom")};
  padding-left: ${applyTheme("BadgeOverlayPrimaryBadge.paddingLeft")};
  padding-right: ${applyTheme("BadgeOverlayPrimaryBadge.paddingRight")};
  padding-top: ${applyTheme("BadgeOverlayPrimaryBadge.paddingTop")};
  right: ${applyTheme("BadgeOverlayPrimaryBadge.offsetRight")};
  top: ${applyTheme("BadgeOverlayPrimaryBadge.offsetTop")};

  ${(props) => {
    const { type } = props;
    switch (type) {
      case BADGE_TYPES.BACKORDER:
        return css`
  background-color: ${applyTheme("BadgeOverlayPrimaryBadge.backgroundColor_backorder")};
  color: ${applyTheme("BadgeOverlayPrimaryBadge.color_backorder")};
`;
      case BADGE_TYPES.BESTSELLER:
        return css`
  background-color: ${applyTheme("BadgeOverlayPrimaryBadge.backgroundColor_bestseller")};
  color: ${applyTheme("BadgeOverlayPrimaryBadge.color_bestseller")};
`;
      case BADGE_TYPES.LOW_QUANTITY:
        return css`
  background-color: ${applyTheme("BadgeOverlayPrimaryBadge.backgroundColor_lowQuantity")};
  color: ${applyTheme("BadgeOverlayPrimaryBadge.color_lowQuantity")};
`;
      case BADGE_TYPES.SOLD_OUT:
        return css`
  background-color: ${applyTheme("BadgeOverlayPrimaryBadge.backgroundColor_soldOut")};
  color: ${applyTheme("BadgeOverlayPrimaryBadge.color_soldOut")};
`;
      case BADGE_TYPES.SALE:
        return css`
  background-color: ${applyTheme("BadgeOverlayPrimaryBadge.backgroundColor_sale")};
  color: ${applyTheme("BadgeOverlayPrimaryBadge.color_sale")};
`;
      default:
        return "";
    }
  }}
`;

const SecondaryBadge = styled.div`
  ${baseBadgeStyles}
  border-bottom-left-radius: ${applyTheme("BadgeOverlaySecondaryBadge.borderBottomLeftRadius")};
  border-bottom-right-radius: ${applyTheme("BadgeOverlaySecondaryBadge.borderBottomRightRadius")};
  border-top-left-radius: ${applyTheme("BadgeOverlaySecondaryBadge.borderTopLeftRadius")};
  border-top-right-radius: ${applyTheme("BadgeOverlaySecondaryBadge.borderTopRightRadius")};
  bottom: ${applyTheme("BadgeOverlaySecondaryBadge.offsetBottom")};
  color: ${applyTheme("BadgeOverlaySecondaryBadge.color")};
  left: ${applyTheme("BadgeOverlaySecondaryBadge.offsetLeft")};
  padding-bottom: ${applyTheme("BadgeOverlaySecondaryBadge.paddingBottom")};
  padding-left: ${applyTheme("BadgeOverlaySecondaryBadge.paddingLeft")};
  padding-right: ${applyTheme("BadgeOverlaySecondaryBadge.paddingRight")};
  padding-top: ${applyTheme("BadgeOverlaySecondaryBadge.paddingTop")};
  right: ${applyTheme("BadgeOverlaySecondaryBadge.offsetRight")};
  top: ${applyTheme("BadgeOverlaySecondaryBadge.offsetTop")};
`;

const Overlay = styled.div`
  position: relative;
  ${(props) => {
    if (props.isFaded) {
      return `opacity: ${applyTheme("BadgeOverlay.fadedOpacity")(props)};`;
    }
    return "";
  }}
`;

const BadgeLabel = styled.span`
  ${addTypographyStyles("BadgeOverlayBadgeLabel", "labelText")}
  padding: 0;
  position: relative;
  white-space: nowrap;
`;

class BadgeOverlay extends Component {
  static propTypes = {
    /**
     * Labels to use for the various badges
     */
    badgeLabels: PropTypes.shape({
      BACKORDER: PropTypes.string,
      BESTSELLER: PropTypes.string,
      LOW_QUANTITY: PropTypes.string,
      SOLD_OUT: PropTypes.string,
      SALE: PropTypes.string
    }),
    /**
     * The contents wrapped in the overlay, such as text, icons, or any combination of React and HTML components
     */
    children: PropTypes.node,
    /**
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
     */
    className: PropTypes.string,
    /**
     * Only show badge if status is of a certain type
     * Types: BACKORDER, BESTSELLER, LOW\_QUANTITY, SALE, SOLD\_OUT
     */
    filterOnly: PropTypes.string,
    /**
     * The product, whose properties determine which badge(s) to display
     */
    product: PropTypes.shape({
      isBackorder: PropTypes.bool,
      isBestseller: PropTypes.bool,
      isLowQuantity: PropTypes.bool,
      isOnSale: PropTypes.bool,
      isSoldOut: PropTypes.bool
    }),
    /**
     * Whether to only display the primary badge
     */
    shouldShowPrimaryOnly: PropTypes.bool
  };

  static defaultProps = {
    badgeLabels: BADGE_LABELS,
    filterOnly: "",
    shouldShowPrimaryOnly: false
  };

  renderBadges = () => {
    const { badgeLabels, filterOnly, product, shouldShowPrimaryOnly } = this.props;
    const status = badgeStatus(product, badgeLabels);

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
    const { badgeLabels, product } = this.props;

    if (primaryBadgeType === BADGE_TYPES.SALE) {
      if (isProductLowQuantity(product)) {
        return this.renderSecondaryBadge(badgeLabels.LOW_QUANTITY);
      }
      if (isProductBestseller(product)) {
        return this.renderSecondaryBadge(badgeLabels.BESTSELLER);
      }
    }

    if (primaryBadgeType === BADGE_TYPES.LOW_QUANTITY) {
      if (isProductBestseller(product)) {
        return this.renderSecondaryBadge(badgeLabels.BESTSELLER);
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
    const { className, badgeLabels, children, product } = this.props;
    const status = badgeStatus(product, badgeLabels) || {};

    return (
      <Overlay className={className} isFaded={status.type === BADGE_TYPES.SOLD_OUT}>
        {this.renderBadges()}
        {children}
      </Overlay>
    );
  }
}

export default BadgeOverlay;
