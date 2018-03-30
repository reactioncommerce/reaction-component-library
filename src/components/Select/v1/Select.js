import React, { Component } from "react";
import isEqual from "lodash.isequal";
import PropTypes from "prop-types";
import ReactSelect from "react-select";
// import styled from "styled-components";
import { CustomPropTypes } from "helpers";

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
    /**
     * Passed through to react-select package. Focus the control when it is mounted
     */
    autoFocus: PropTypes.bool,

    /**
     * Passed through to react-select package. Remove the currently focused option when the user presses backspace
     */
    backspaceRemovesValue: PropTypes.bool,

    /**
     * Passed through to react-select package.
     * Remove focus from the input when the user selects an option (handy for dismissing the keyboard on touch devices)
     */
    blurInputOnSelect: PropTypes.bool,

    /**
     * Passed through to react-select package. When the user reaches the top/bottom of the menu, prevent scroll on the scroll-parent
     */
    captureMenuScroll: PropTypes.bool,

    /**
     * Passed through to react-select package. Close the select menu when the user selects an option
     */
    closeMenuOnSelect: PropTypes.bool,

    /**
     * Passed through to react-select package. Custom components to use
     */
    components: PropTypes.object,

    /**
     * Passed through to react-select package. Clear all values when the user presses escape AND the menu is closed
     */
    escapeClearsValue: PropTypes.bool,

    /**
     * Passed through to react-select package. Formats group labels in the menu as React components
     */
    formatGroupLabel: PropTypes.func,

    /**
     * Passed through to react-select package. Formats option labels in the menu and control as React components
     */
    formatOptionLabel: PropTypes.func,

    /**
     * Passed through to react-select package. Resolves option data to a string to be displayed as the label by components
     */
    getOptionLabel: PropTypes.func,

    /**
     * Passed through to react-select package. Resolves option data to a string to compare options and specify value attributes
     */
    getOptionValue: PropTypes.func,

    /**
     * Passed through to react-select package. Hide the selected option from the menu
     */
    hideSelectedOptions: PropTypes.bool,

    /**
     * Passed through to react-select package. The value of the search input
     */
    inputValue: PropTypes.string,

    /**
     * Passed through to react-select package. Is the select value clearable
     */
    isClearable: PropTypes.bool,

    /**
     * Passed through to react-select package. Is the select in a state of loading (async)
     */
    isLoading: PropTypes.bool,

    /**
     * Passed through to react-select package. Support multiple selected options
     */
    isMulti: PropTypes.bool,

    /**
     * Passed through to react-select package. Override the built-in logic to detect whether an option is disabled
     */
    isOptionDisabled: PropTypes.func,

    /**
     * Passed through to react-select package. Override the built-in logic to detect whether an option is selected
     */
    isOptionSelected: PropTypes.func,

    /**
     * Passed through to react-select package as `isDisabled`. Should the user be able to edit this value?
     */
    isReadOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

    /**
     * Passed through to react-select package. Is the select direction right-to-left
     */
    isRtl: PropTypes.bool,

    /**
     * Passed through to react-select package. Whether to enable search functionality
     */
    isSearchable: PropTypes.bool,

    /**
     * Passed through to react-select package. Async: Text to display when loading options
     */
    loadingMessage: PropTypes.func,

    /**
     * Passed through to react-select package. Maximum height of the menu before scrolling
     */
    maxMenuHeight: PropTypes.number,

    /**
     * Passed through to react-select package. Maximum height of the value container before scrolling
     */
    maxValueHeight: PropTypes.number,

    /**
     * Passed through to react-select package. Whether the menu is open
     */
    menuIsOpen: PropTypes.bool,

    /**
     * Passed through to react-select package. Default placement of the menu in relation to the control. 'auto' will flip
     * when there isn't enough space below the control.
     */
    menuPlacement: PropTypes.oneOf(["auto", "bottom", "top"]),

    /**
     * Passed through to react-select package. Minimum height of the menu before flipping
     */
    minMenuHeight: PropTypes.number,

    /**
     * A name or object path that determines where in the closest form object this will appear.
     */
    name: PropTypes.string,

    /**
     * Passed through to react-select package. Text to display when there are no options
     */
    noOptionsMessage: PropTypes.func,

    /**
     * Passed through to react-select package. Handle blur events on the control
     */
    onBlur: PropTypes.func,

    /**
     * Called with the new selected value each time the user changes the selection
     */
    onChange: PropTypes.func,

    /**
     * Called with the new selected value each time the user changes the selection
     */
    onChanging: PropTypes.func,

    /**
     * Passed through to react-select package. Handle focus events on the control
     */
    onFocus: PropTypes.func,

    /**
     * Passed through to react-select package. Handle change events on the input
     */
    onInputChange: PropTypes.func,

    /**
     * Passed through to react-select package. Handle key down events on the select
     */
    onKeyDown: PropTypes.func,

    /**
     * Passed through to react-select package. Handle the menu closing
     */
    onMenuClose: PropTypes.func,

    /**
     * Passed through to react-select package. Handle the menu opening
     */
    onMenuOpen: PropTypes.func,

    /**
     * Passed through to react-select package. Fired when the user scrolls to the bottom of the menu
     */
    onMenuScrollToBottom: PropTypes.func,

    /**
     * Passed through to react-select package. Fired when the user scrolls to the top of the menu
     */
    onMenuScrollToTop: PropTypes.func,

    /**
     * The options to show, in Composable Form Spec format.
     * @see http://forms.dairystatedesigns.com/user/input/#selection-inputs
     */
    options: CustomPropTypes.options,

    /**
     * Passed through to react-select package. Number of options to jump in menu when page{up|down} keys are used
     */
    pageSize: PropTypes.number,

    /**
     * Passed through to react-select package. Placeholder text for the select value
     */
    placeholder: PropTypes.string,

    /**
     * Passed through to react-select package. Status to relay to screen readers
     */
    screenReaderStatus: PropTypes.func,

    /**
     * Passed through to react-select package. Whether the menu should be scrolled into view when it opens
     */
    scrollMenuIntoView: PropTypes.bool,

    /**
     * Passed through to react-select package. Select the currently focused option when the user presses tab
     */
    tabSelectsValue: PropTypes.bool,

    /**
     * Set this to the current saved value, if editing, or a default value if creating. The closest form implementing
     * the Composable Forms spec will pass this automatically.
     */
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool
    ])
  };

  static defaultProps = {
    isReadOnly: false,
    onChange() {},
    onChanging() {},
    options: []
  };

  static isFormInput = true;

  constructor(props) {
    super(props);

    this.validateOptions(props.options);

    this.state = {
      value: props.value || null
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
        case "string":
          value = String(value);
          break;
        case "number":
          value = value === "" ? null : Number(value);
          break;
        case "boolean":
          value = value === "" ? null : Boolean(value);
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
          throw new Error(`All option values must have the same data type. The data type of the first option is "${this.dataType}" while the` +
            ` data type of the ${option.label} option is "${checkDataType}"`);
        }
      }
    });
  }

  render() {
    const { isReadOnly, options } = this.props;

    // Unfortunately right now, react-select optgroup support is just a tad different from the
    // composable form spec. Might be able to do a PR to get react-select updated.
    const reactSelectOptions = options.map((opt) => {
      if (opt.options) {
        return {
          label: opt.optgroup,
          options: opt.options
        };
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
        isDisabled={isReadOnly}
        onChange={this.handleChange}
        options={reactSelectOptions}
      />
    );
  }
}

export default Select;
