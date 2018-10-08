import React, { Component } from "react";
import PropTypes from "prop-types";

class TwoColumnExamples extends Component {
  static propTypes = {
    /**
     * Requires two children, which are the left and right examples
     */
    children: PropTypes.arrayOf(PropTypes.node),
    /**
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
     */
    className: PropTypes.string,
    hasDarkLeftBackground: PropTypes.bool,
    hasDarkRightBackground: PropTypes.bool
  };

  static defaultProps = {
    hasDarkLeftBackground: false,
    hasDarkRightBackground: false
  };

  render() {
    const { children, hasDarkLeftBackground, hasDarkRightBackground } = this.props;
    const leftBackgroundColor = hasDarkLeftBackground ? "#f5f5f5" : "transparent";
    const rightBackgroundColor = hasDarkRightBackground ? "#f5f5f5" : "transparent";
    const leftBorderColor = hasDarkLeftBackground ? "transparent" : "#cccccc";
    const rightBorderColor = hasDarkRightBackground ? "transparent" : "#cccccc";

    const leftStyle = {
      backgroundColor: leftBackgroundColor,
      borderColor: leftBorderColor,
      borderStyle: "solid",
      borderWidth: 1,
      flex: "1 1 50%",
      padding: "1rem"
    };

    const rightStyle = {
      backgroundColor: rightBackgroundColor,
      borderColor: rightBorderColor,
      borderStyle: "solid",
      borderWidth: 1,
      flex: "1 1 50%",
      margin: "0 1rem",
      padding: "1rem"
    };

    return (
      <div className={this.props.className} style={{ display: "flex" }}>
        <div style={leftStyle}>
          {children[0]}
        </div>
        <div style={rightStyle}>
          {children[1]}
        </div>
      </div>
    );
  }
}

export default TwoColumnExamples;
