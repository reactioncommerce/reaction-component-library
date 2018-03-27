import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactSelect from "react-select";
import styled from "styled-components";
import { applyTheme, CustomPropTypes } from "helpers";

const nullDefaultEquals = (value1, value2) => ((value1 || null) === (value2 || null));

// Rather than pass through all props to react-select, we'll keep a whitelist
// to better control the usage and appearance of this component.
const supportedPassthroughProps = [
  "autoFocus",
  "backspaceRemovesValue",
  "blurInputOnSelect",
  "captureMenuScroll",
  "closeMenuOnSelect",
  "components",
  "escapeClearsValue",
  "formatGroupLabel",
  "formatOptionLabel",
  "getOptionLabel",
  "getOptionValue",
  "hideSelectedOptions",
  "inputValue",
  "isClearable",
  "isDisabled",
  "isLoading",
  "isOptionDisabled",
  "isOptionSelected",
  "isMulti",
  "isRtl",
  "isSearchable",
  "loadingMessage",
  "minMenuHeight",
  "maxMenuHeight",
  "maxValueHeight",
  "menuIsOpen",
  "menuPlacement",
  "noOptionsMessage",
  "onBlur",
  "onFocus",
  "onInputChange",
  "onKeyDown",
  "onMenuOpen",
  "onMenuClose",
  "onMenuScrollToTop",
  "onMenuScrollToBottom",
  "pageSize",
  "placeholder",
  "screenReaderStatus",
  "scrollMenuIntoView",
  "tabSelectsValue"
];

class Select extends Component {
  static propTypes = {
    className: PropTypes.string,
    isReadOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    name: PropTypes.string,
    onChange: PropTypes.func,
    onChanging: PropTypes.func,
    options: CustomPropTypes.options,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),

    /* Focus the control when it is mounted */
    autoFocus: PropTypes.bool,
    /* Remove the currently focused option when the user presses backspace */
    backspaceRemovesValue: PropTypes.bool,
    /* Remove focus from the input when the user selects an option (handy for dismissing the keyboard on touch devices) */
    blurInputOnSelect: PropTypes.bool,
    /* When the user reaches the top/bottom of the menu, prevent scroll on the scroll-parent  */
    captureMenuScroll: PropTypes.bool,
    /* Close the select menu when the user selects an option */
    closeMenuOnSelect: PropTypes.bool,
    /* Custom components to use */
    components: PropTypes.object,
    /* Clear all values when the user presses escape AND the menu is closed */
    escapeClearsValue: PropTypes.bool,
    /* Formats group labels in the menu as React components */
    formatGroupLabel: PropTypes.func,
    /* Formats option labels in the menu and control as React components */
    formatOptionLabel: PropTypes.func,
    /* Resolves option data to a string to be displayed as the label by components */
    getOptionLabel: PropTypes.func,
    /* Resolves option data to a string to compare options and specify value attributes */
    getOptionValue: PropTypes.func,
    /* Hide the selected option from the menu */
    hideSelectedOptions: PropTypes.bool,
    /* The value of the search input */
    inputValue: PropTypes.string,
    /* Is the select value clearable */
    isClearable: PropTypes.bool,
    /* Is the select disabled */
    isDisabled: PropTypes.bool,
    /* Is the select in a state of loading (async) */
    isLoading: PropTypes.bool,
    /* Override the built-in logic to detect whether an option is disabled */
    isOptionDisabled: PropTypes.func,
    /* Override the built-in logic to detect whether an option is selected */
    isOptionSelected: PropTypes.func,
    /* Support multiple selected options */
    isMulti: PropTypes.bool,
    /* Is the select direction right-to-left */
    isRtl: PropTypes.bool,
    /* Whether to enable search functionality */
    isSearchable: PropTypes.bool,
    /* Async: Text to display when loading options */
    loadingMessage: PropTypes.func,
    /* Minimum height of the menu before flipping */
    minMenuHeight: PropTypes.number,
    /* Maximum height of the menu before scrolling */
    maxMenuHeight: PropTypes.number,
    /* Maximum height of the value container before scrolling */
    maxValueHeight: PropTypes.number,
    /* Whether the menu is open */
    menuIsOpen: PropTypes.bool,
    /**
     * Default placement of the menu in relation to the control. 'auto' will flip
     * when there isn't enough space below the control.
     */
    menuPlacement: PropTypes.oneOf(["auto", "bottom", "top"]),
    /* Text to display when there are no options */
    noOptionsMessage: PropTypes.func,
    /* Handle blur events on the control */
    onBlur: PropTypes.func,
    /* Handle focus events on the control */
    onFocus: PropTypes.func,
    /* Handle change events on the input */
    onInputChange: PropTypes.func,
    /* Handle key down events on the select */
    onKeyDown: PropTypes.func,
    /* Handle the menu opening */
    onMenuOpen: PropTypes.func,
    /* Handle the menu closing */
    onMenuClose: PropTypes.func,
    /* Fired when the user scrolls to the top of the menu */
    onMenuScrollToTop: PropTypes.func,
    /* Fired when the user scrolls to the bottom of the menu */
    onMenuScrollToBottom: PropTypes.func,
    /* Number of options to jump in menu when page{up|down} keys are used */
    pageSize: PropTypes.number,
    /* Placeholder text for the select value */
    placeholder: PropTypes.string,
    /* Status to relay to screen readers */
    screenReaderStatus: PropTypes.func,
    /* Whether the menu should be scrolled into view when it opens */
    scrollMenuIntoView: PropTypes.bool,
    /* Select the currently focused option when the user presses tab */
    tabSelectsValue: PropTypes.bool
  };

  static defaultProps = {
    isReadOnly: false,
    onChange() {},
    onChanging() {},
    options: [],
  };

  static isFormInput = true;

  constructor(props) {
    super(props);

    this.validateOptions(props.options);

    this.state = {
      value: props.value || null,
    };
  }

  componentWillMount() {
    this.handleChanged(this.state.value);
  }

  componentWillReceiveProps(nextProps) {
    const { options, value } = this.props;
    const { options: nextOptions, value: nextValue } = nextProps;

    // Whenever a changed value prop comes in, we reset state to that, thus becoming clean.
    if (!nullDefaultEquals(value, nextValue)) {
      this.setValue(nextValue);
    }

    if (!isEqual(options, nextOptions)) {
      this.validateOptions(nextOptions);
    }
  }

  onChange = (event) => {
    let { value } = event.target;

    if (value !== undefined && value !== null) {
      switch (this.dataType) {
        case 'string':
          value = String(value);
          break;
        case 'number':
          value = value === '' ? null : Number(value);
          break;
        case 'boolean':
          value = value === '' ? null : Boolean(value);
          break;
        default:
          // do nothing
      }
    }

    this.setValue(value);
  };

  getValue() {
    return this.state.value;
  }

  setValue(value) {
    this.setState({ value });
    this.handleChanged(value);
  }

  resetValue() {
    this.setValue(this.props.value);
  }

  handleChanged(value) {
    const { onChange, onChanging } = this.props;
    if (value !== this.lastValue) {
      this.lastValue = value;
      onChanging(value);
      onChange(value);
    }
  }

  // Input is dirty if value prop doesn't match value state. Whenever a changed
  // value prop comes in, we reset state to that, thus becoming clean.
  isDirty() {
    return (this.state.value || null) !== (this.props.value || null);
  }

  // Make sure all option values have the same data type, and record what that is
  validateOptions(options) {
    (options || []).forEach((option) => {
      if (option.optgroup) {
        this.validateOptions(option.options);
      } else {
        const checkDataType = typeof option.value;
        if (!this.dataType) {
          this.dataType = checkDataType;
        } else if (checkDataType !== this.dataType) {
          throw new Error(`All option values must have the same data type. The data type of the first option is "${this.dataType}" while the data type of the ${option.label} option is "${checkDataType}"`);
        }
      }
    });
  }

  render() {
    const { options } = this.props;

    // Unfortunately right now, react-select optgroup support is just a tad different from the
    // composable form spec. Might be able to do a PR to get react-select updated.
    const reactSelectOptions = options.map((opt) => {
      if (opt.options) {
        return {
          label: opt.optgroup,
          options: opt.options
        }
      }
      return opt;
    });

    const passthroughProps = {};
    supportedPassthroughProps.forEach((prop) => {
      passthroughProps[prop] = this.props[prop];
    });

    return (
      <ReactSelect
        {...passthroughProps}
        onChange={this.handleChange}
        options={reactSelectOptions}
      />
    );
  }
}

export default Select;
