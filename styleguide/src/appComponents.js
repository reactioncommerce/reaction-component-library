import React from "react";
import styled from "styled-components";
import Button from "../../package/src/components/Button/v1";
import CartItem from "../../package/src/components/CartItem/v1";
import CartItemDetail from "../../package/src/components/CartItemDetail/v1";
import CartItems from "../../package/src/components/CartItems/v1";
import CartSummary from "../../package/src/components/CartSummary/v1";
import ErrorsBlock from "../../package/src/components/ErrorsBlock/v1";
import Field from "../../package/src/components/Field/v1";
import MiniCartSummary from "../../package/src/components/MiniCartSummary/v1";
import PhoneNumberInput from "../../package/src/components/PhoneNumberInput/v1";
import Price from "../../package/src/components/Price/v1";
import QuantityInput from "../../package/src/components/QuantityInput/v1";
import Select from "../../package/src/components/Select/v1";
import StockWarning from "../../package/src/components/StockWarning/v1";
import spinner from "../../package/src/utils/spinner";
import TextInput from "../../package/src/components/TextInput/v1";

const FontIcon = styled.i`
  font-size: 1em;
  vertical-align: middle;
`;

/* eslint-disable max-len */

const iconClear = (
  // credit: https://fontawesome.com/icons/times-circle?style=regular
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    style={{ height: "100%", maxHeight: "100%", verticalAlign: "middle" }}
  >
    <path d="M9.926 9.105l-2.105-2.105 2.105-2.105-0.82-0.82-2.105 2.105-2.105-2.105-0.82 0.82 2.105 2.105-2.105 2.105 0.82 0.82 2.105-2.105 2.105 2.105zM7 1.176c3.227 0 5.824 2.598 5.824 5.824s-2.598 5.824-5.824 5.824-5.824-2.598-5.824-5.824 2.598-5.824 5.824-5.824z" />
  </svg>
);

const iconError = (
  // credit: https://fontawesome.com/icons/exclamation-triangle?style=solid
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
  >
    <path
      fill="currentColor"
      d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
    />
  </svg>
);

const iconValid = (
  // credit: https://fontawesome.com/icons/check-circle?style=regular
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{ height: "0.875em", verticalAlign: "middle" }}
  >
    <path
      fill="currentColor"
      d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
    />
  </svg>
);

/* eslint-enable max-len */

export default {
  Button,
  CartItem,
  CartItemDetail,
  CartItems,
  CartSummary,
  ErrorsBlock,
  Field,
  iconClear,
  iconError,
  iconValid,
  MiniCartSummary,
  PhoneNumberInput,
  Price,
  QuantityInput,
  Select,
  spinner,
  StockWarning,
  TextInput
};
