const fs = require("fs-extra");
const path = require("path");

const BASE_PATH = path.join(process.cwd(), "src/components");
const SRC_PATH = path.join(process.cwd(), "src");

const versions = {};
const directoryContents = fs.readdirSync(BASE_PATH);
directoryContents.forEach((componentName) => {
  if (componentName.indexOf(".") !== -1) return;
  const compDirectoryContents = fs.readdirSync(path.join(BASE_PATH, componentName));
  compDirectoryContents.forEach((versionName) => {
    if (!versionName.startsWith("v")) return;
    if (!versions[versionName]) versions[versionName] = [];
    versions[versionName].push(`export { default as ${componentName} } from "./components/${componentName}/v1/${componentName}";`)
  });
});

Object.keys(versions).forEach((version) => {
  const lines = versions[version];
  const filePath = path.join(SRC_PATH, `${version}.js`);
  fs.ensureFileSync(filePath);
  fs.writeFileSync(filePath, lines.join("\n") + "\n");
});

const indexFilePath = path.join(SRC_PATH, "index.js");
fs.ensureFileSync(indexFilePath);
let content = Object.keys(versions).map((version) => `import * as ${version} from "./${version}";`).join("\n") + "\n\n";
content += `export { ${Object.keys(versions).map((version) => version).join(", ")} };\n`
fs.writeFileSync(indexFilePath, content);
