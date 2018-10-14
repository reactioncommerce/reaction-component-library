import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { preventAccidentalDoubleClick } from "../../../utils";

const UnstyledLinkHref = styled.a`
  text-decoration: none;
`;

const UnstyledLinkOnClick = styled.div`
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
`;

class Link extends Component {
  static propTypes = {
    /**
     * The contents of the link, such as text, icons, or any combination of React and HTML components
     */
    children: PropTypes.node.isRequired,
    /**
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
     */
    className: PropTypes.string,
    /**
     * The URL the link should navigate to
     */
    href: PropTypes.string,
    /**
     * Called with a single event parameter when a user clicks the link
     */
    onClick: PropTypes.func
  };

  static defaultProps = {
    onClick() {}
  };

  onClick = preventAccidentalDoubleClick((event) => {
    this.props.onClick(event);
  });

  render() {
    const { className, children, href } = this.props;

    if (href) {
      return (
        <UnstyledLinkHref className={className} href={href} onClick={this.onClick}>{children}</UnstyledLinkHref>
      );
    }

    return (
      <UnstyledLinkOnClick className={className} onClick={this.onClick} role="button">{children}</UnstyledLinkOnClick>
    );
  }
}

export default Link;
