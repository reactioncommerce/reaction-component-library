import debounce from "lodash.debounce";

// For most OS, it seems 600ms is the slowest you can set to be a "double click"
const DEBOUNCE_MS = 600;

/**
 * @summary Wraps a function to prevent accidental double-clicks from executing it too often.
 * @param {Function} func - The onClick function to return, debounced
 * @returns {undefined}
 */
export default function preventAccidentalDoubleClick(func) {
  return debounce(func, DEBOUNCE_MS, {
    leading: true,
    trailing: false
  });
}
