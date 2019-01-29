import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Minus from "mdi-material-ui/Minus";
import Plus from "mdi-material-ui/Plus";

const styles = () => ({
  incrementButton: {
    backgroundColor: "#fafafa",
    boxSizing: "inherit",
    color: "#666666",
    padding: 6
  },
  quantityContainer: {
    border: "1px solid #d9d9d9",
    borderRadius: "2px",
    boxSizing: "border-box",
    height: "30px",
    overflow: "hidden",
    padding: 0
  },
  quantityInput: {
    "appearance": "none",
    "borderLeft": "1px solid #d9d9d9",
    "borderRight": "1px solid #d9d9d9",
    "borderRadius": 0,
    "boxSizing": "inherit",
    "color": "#3c3c3c",
    "fontSize": "12px",
    "lineHeight": "2",
    "height": "30px",
    "maxWidth": "40px",
    "textAlign": "center",
    "&:focus": {
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
});

class QuantityInput extends Component {
  static propTypes = {
    /**
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
     */
    className: PropTypes.string,
    /**
     * MUI theme classes
     */
    classes: PropTypes.object,
    /**
     * On change hanlder for input
     */
    onChange: PropTypes.func,
    /**
     * Prepopulate the input's value.
     */
    value: PropTypes.number
  };

  static defaultProps = {
    classes: {},
    onChange() { }
  };

  constructor(props) {
    super(props);

    const value = props.value || 0;

    this.state = {
      initialValue: props.value,
      value
    };
  }

  handleChanged(value) {
    const { onChange } = this.props;
    onChange(value);
  }

  handleQuantityInputChange = (event) => {
    const { value } = event.target;

    const numericValue = Math.floor(Number(value));

    if (Number.isNaN(numericValue)) return;

    this.setState({ value: numericValue });
    this.handleChanged(numericValue);
  };

  handleIncrementButton = () => {
    const value = this.state.value + 1;

    this.setState({ value });
    this.handleChanged(value);
  };

  handleDecrementButton = () => {
    const value = this.state.value - 1;

    if (value >= 0) {
      this.setState({ value });
      this.handleChanged(value);
    }
  };

  render() {
    const { className, classes: { incrementButton, quantityContainer, quantityInput } } = this.props;
    const { value } = this.state;
    return (
      <TextField
        id="addToCartQuantityInput"
        className={className}
        value={value}
        onChange={this.handleQuantityInputChange}
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <ButtonBase
                color="default"
                variant="outlined"
                onClick={this.handleDecrementButton}
                className={incrementButton}
                disableRipple
                disableTouchRipple
              >
                <Minus style={{ fontSize: "14px" }} />
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
                disableRipple={true}
                disableTouchRipple={true}
              >
                <Plus style={{ fontSize: "14px" }} />
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
