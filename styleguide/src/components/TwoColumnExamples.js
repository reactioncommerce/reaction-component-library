import React, { Component } from "react";
import PropTypes from "prop-types";

class TwoColumnExamples extends Component {
  static propTypes = {
    /**
     * Requires two children, which are the left and right examples
     */
    children: PropTypes.arrayOf(PropTypes.node),
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
      <div style={{ display: "flex" }}>
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
