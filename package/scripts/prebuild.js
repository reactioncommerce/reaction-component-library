const path = require("path");
const fs = require("fs-extra");

const SRC_PATH = path.join(process.cwd(), "src");
const BASE_PATH = path.join(SRC_PATH, "components");

const directoryContents = fs.readdirSync(BASE_PATH);
directoryContents.forEach((componentName) => {
  if (componentName.indexOf(".") !== -1) return;
  const compDirectoryContents = fs.readdirSync(path.join(BASE_PATH, componentName));
  compDirectoryContents.forEach((versionName) => {
    if (!versionName.startsWith("v")) return;
    const filePath = path.join(BASE_PATH, componentName, versionName, "index.js");
    fs.ensureFileSync(filePath);
    fs.writeFileSync(filePath, `export { default } from "./${componentName}";\n`);
  });
});
