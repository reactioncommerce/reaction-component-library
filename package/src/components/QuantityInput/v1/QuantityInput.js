import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import { applyTheme } from "../../../utils";

const styles = (theme) => ({
  incrementButton: {
    backgroundColor: "#fafafa",
    color: "#3c3c3c",
    fontSize: "12px",
    padding: 6
  },
  quantityContainer: {
    padding: 0,
    border: `1px solid #d9d9d9`,
    backgroundColor: theme.palette.common.white,
    borderRadius: "2px"
  },
  quantityInput: {
    color: "#3c3c3c",
    fontSize: "12px",
    width: "40px",
    textAlign: "center",
    "&:focus": {
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    },
    borderLeft: `1px solid #d9d9d9`,
    borderRight: `1px solid #d9d9d9`
  }
});

class QuantityInput extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const { classes: { incrementButton, quantityContainer, quantityInput } } = this.props;
    return (
      <TextField
        id="addToCartQuantityInput"
        value={2}
        onChange={this.handleQuantityInputChange}
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <ButtonBase
                color="default"
                variant="outlined"
                onClick={this.handleDecrementButton}
                className={incrementButton}
              >
                -
              </ButtonBase>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment>
              <ButtonBase
                variant="outlined"
                color="default"
                onClick={this.handleIncrementButton}
                className={incrementButton}
              >
                +
              </ButtonBase>
            </InputAdornment>
          ),
          disableUnderline: true,
          classes: {
            root: quantityContainer,
            input: quantityInput
          }
        }}
      />
    );
  }
}

export default withStyles(styles)(QuantityInput);

//export default QuantityInput;
