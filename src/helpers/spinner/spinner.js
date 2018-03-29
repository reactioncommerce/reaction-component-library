import React from "react";
import styled from "styled-components";

const SpinnerSvg = styled.svg`
  width: 1.125em;
  height: 1.125em;
`;

const spinner = (
  <SpinnerSvg
    version="1.1"
    x="0px"
    y="0px"
    width="40px"
    height="40px"
    viewBox="0 0 50 50"
    style={{ enableBackground: "new 0 0 50 50" }}
  >
    <path
      fill="#000"
      d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" // eslint-disable-line
    >
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="1s"
        repeatCount="indefinite"
      />
    </path>
  </SpinnerSvg>
);

export default spinner;
