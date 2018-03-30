const fs = require("fs-extra");
const path = require("path");

const BASE_PATH = path.join(process.cwd(), "src/components");

const versions = {};
const directoryContents = fs.readdirSync(BASE_PATH);
directoryContents.forEach((componentName) => {
  console.log("componentName", componentName);
  if (componentName.indexOf(".") !== -1) return;
  const compDirectoryContents = fs.readdirSync(path.join(BASE_PATH, componentName));
  compDirectoryContents.forEach((versionName) => {
    if (!versionName.startsWith("v")) return;
    if (!versions[versionName]) versions[versionName] = [];
    versions[versionName].push(`export { default as ${componentName} } from "./${componentName}/v1/${componentName}";`)
  });
});

Object.keys(versions).forEach((version) => {
  const lines = versions[version];
  const filePath = path.join(BASE_PATH, `${version}.js`);
  fs.ensureFileSync(filePath);
  fs.writeFileSync(filePath, lines.join("\n") + "\n");
});

const indexFilePath = path.join(BASE_PATH, "index.js");
fs.ensureFileSync(indexFilePath);
fs.writeFileSync(indexFilePath, Object.keys(versions).map((version) => `export * as ${version} from "./${version}";`).join("\n") + "\n");
