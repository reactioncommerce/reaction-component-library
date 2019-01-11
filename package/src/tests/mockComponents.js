const mockComponents = {};

import { Component } from "react";

/**
 * @summary Creates a React component with given name, that simply renders its own name + props as a string
 * @param {String} name A component name
 * @returns {String} The object as a JSON string
 */
function makeMockedComponent(name) {
  return (
    class mockedComponent extends Component {
      static displayName = name;

      render() {
        return (
          `${name}(${stringifyJSONCircularSafe(this.props)})`
        );
      }
    }
  );
}

/**
 * @summary JSON.stringify, but only top-level props
 * @param {Object} obj The object
 * @returns {String} The object as a JSON string
 */
function stringifyJSONCircularSafe(obj) {
  let isFirst = true;
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === "object" && value !== null && !isFirst) {
      return "[Object]";
    }
    isFirst = false;
    return value;
  });
}

/**
 * Components
 */
[
  "Accordion",
  "AccordionFormList",
  "Address",
  "AddressBook",
  "AddressCapture",
  "AddressChoice",
  "AddressForm",
  "AddressReview",
  "AddressSelect",
  "BadgeOverlay",
  "Button",
  "CartItem",
  "CartItemDetail",
  "CartItems",
  "CartSummary",
  "CatalogGrid",
  "CatalogGridItem",
  "Checkbox",
  "CheckoutAction",
  "CheckoutActionComplete",
  "CheckoutActionIncomplete",
  "ErrorsBlock",
  "ExampleIOUPaymentForm",
  "Field",
  "InlineAlert",
  "InPageMenuItem",
  "ItemAddForm",
  "ItemEditForm",
  "Link",
  "MiniCartSummary",
  "PaymentsCheckoutAction",
  "PhoneNumberInput",
  "Price",
  "ProgressiveImage",
  "ProfileImage",
  "QuantityInput",
  "RegionInput",
  "Select",
  "StockWarning",
  "TextInput",
  "SelectableItem",
  "SelectableList",
  "StripeForm",
  "StripePaymentInput"
].forEach((componentName) => {
  mockComponents[componentName] = makeMockedComponent(componentName);
});

/**
 * Elements
 */
[
  "iconClear",
  "iconDismiss",
  "iconError",
  "iconExpand",
  "iconPlus",
  "iconValid",
  "spinner",
  "iconVisa",
  "iconAmericanExpress",
  "iconMastercard",
  "iconDiscover"
].forEach((componentName) => {
  mockComponents[componentName] = componentName;
});

export default mockComponents;
