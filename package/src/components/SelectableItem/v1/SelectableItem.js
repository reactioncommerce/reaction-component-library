import React, { Component } from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
// import { applyTheme } from "../../../utils";

const StyledItem = styled.div`
  color: #333333;
  input {
    cursor: pointer;
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
    visibility: visible;
    white-space: nowrap;
  }
  input:checked + label span::before {
    content: " ";
    display: inline-block;
    position: relative;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #505558;
   }
  label {
    font-family: Source Sans Pro;
    color: #505558;
    font-size: 14px;
    letter-spacing: 0.3px;
    line-height: 17.5px;
    cursor: pointer;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: #505558;
    background-color: white;
    border: 2px solid #505558;
    height: 20px;
    width: 20px;
    margin-right: 10px;
    border-radius: 50%;
    box-sizing: border-box;
  }
`;

class SelectableItem extends Component {
  render() {
    return (
      <StyledItem>
        <input
          id="radio-button-1"
          className="bx--radio-button"
          type="radio"
          name="radio-button"
          tabIndex="0"
        />
        <label
          htmlFor="radio-button-1"
          className="bx--radio-button-1"
        >
          <span />
          One shot
        </label>
        {/* <span>Detail</span> */}
      </StyledItem >
    );
  }
}

export default SelectableItem;
