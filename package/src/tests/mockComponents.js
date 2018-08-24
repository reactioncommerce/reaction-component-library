const mockComponents = {};

import { Component } from "react";

function makeMockedComponent(name) {
  return (
    class mockedComponent extends Component {
      render() {
        return (
          `${name}(${stringifyJSONCircularSafe(this.props)})`
        );
      }
    }
  );
}

function stringifyJSONCircularSafe(obj) {
  const cache = [];
  JSON.stringify(obj, (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (cache.indexOf(value) !== -1) {
        // Circular reference found, discard key
        return;
      }
      // Store value in our collection
      cache.push(value);
    }
    return value;
  });
}

/**
 * Components
 */
[
  "AddressForm",
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
  "Field",
  "Link",
  "MiniCartSummary",
  "PhoneNumberInput",
  "Price",
  "ProgressiveImage",
  "QuantityInput",
  "Select",
  "StockWarning",
  "TextInput",
  "SelectableItem",
  "SelectableList",
  "StripeForm"
].forEach((componentName) => {
  mockComponents[componentName] = makeMockedComponent(componentName);
});

/**
 * Elements
 */
[
  "iconClear",
  "iconError",
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
