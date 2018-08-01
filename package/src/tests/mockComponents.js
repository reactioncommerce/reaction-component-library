const mockComponents = {};

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
  "Button",
  "CartItem",
  "CartItemDetail",
  "CartItems",
  "CartSummary",
  "ErrorsBlock",
  "Field",
  "MiniCartSummary",
  "PhoneNumberInput",
  "Price",
  "QuantityInput",
  "Select",
  "StockWarning",
  "TextInput"
].forEach((componentName) => {
  mockComponents[componentName] = (props) => `${componentName}(${stringifyJSONCircularSafe(props)})`;
});

/**
 * Elements
 */
[
  "iconClear",
  "iconError",
  "iconValid",
  "spinner"
].forEach((componentName) => {
  mockComponents[componentName] = componentName;
});

export default mockComponents;
