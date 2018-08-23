import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { preventAccidentalDoubleClick } from "../../../utils";

const UnstyledLink = styled.a`
  text-decoration: none;
`;

class Link extends Component {
  static propTypes = {
    /**
     * The contents of the link, such as text, icons, or any combination of React and HTML components
     */
    children: PropTypes.node.isRequired,
    /**
     * The URL the link should navigate to
     */
    href: PropTypes.string.isRequired,
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
    const { children, href } = this.props;
    return (
      <UnstyledLink href={href} onClick={this.onClick}>{children}</UnstyledLink>
    );
  }
}

export default Link;
