/**
 * This script auto-creates an `index.js` file in each components/Component/v*
 * directory. It runs just before we do the Babel build for publishing.
 */

const path = require("path");
const fs = require("fs-extra");

const SRC_PATH = path.join(process.cwd(), "src");
const BASE_PATH = path.join(SRC_PATH, "components");

// Loop through each item in the /package/src/components directory
const directoryContents = fs.readdirSync(BASE_PATH);
directoryContents.forEach((componentName) => {
  // Ignore files
  if (componentName.indexOf(".") !== -1) return;

  // For directories, loop through each item in them
  const compDirectoryContents = fs.readdirSync(path.join(BASE_PATH, componentName));
  compDirectoryContents.forEach((versionName) => {
    // Ignore anything that isn't a version directory
    if (!versionName.startsWith("v")) return;

    // In all version directories, auto-create an index.js file if there isn't one
    const filePath = path.join(BASE_PATH, componentName, versionName, "index.js");
    fs.ensureFileSync(filePath);
    fs.writeFileSync(filePath, `export { default } from "./${componentName}";\n`);
  });
});
