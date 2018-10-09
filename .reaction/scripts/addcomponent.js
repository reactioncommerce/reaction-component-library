const fs = require("fs-extra");
const path = require("path");

// Arguments are positional: componentName [componentVersion]
let componentName;
let shouldBumpVersion = false;
process.argv.forEach(function (value, index) {
  switch (index) {
    case 2:
      componentName = value;
      break;

    case 3:
      shouldBumpVersion = (value === "next");
      break;

    default:
      break;
  }
});

function errorAndExit(message) {
  console.error(`\n${message}\n`);
  process.exit(1);
}

if (!componentName) {
  errorAndExit("You must include the name of the component to create as the first argument of this script");
}

const BASE_PATH = path.join(process.cwd(), "package/src/components");
const componentDirectory = path.join(BASE_PATH, componentName);

function createComponentIndexFile(name) {
  const filePath = path.join(componentDirectory, "v1", `index.js`);
  let template = fs.readFileSync(".reaction/scripts/templates/index.js.template", { encoding: "utf8" });
  template = template.replace(/COMPONENT/g, name);
  fs.ensureFileSync(filePath);
  fs.writeFileSync(filePath, template);
}

function createComponentFile(name) {
  const filePath = path.join(componentDirectory, "v1", `${name}.js`);
  let template = fs.readFileSync(".reaction/scripts/templates/Component.js.template", { encoding: "utf8" });
  template = template.replace(/COMPONENT/g, name);
  template = template.replace(/cOMPONENT/g, name.charAt(0).toLowerCase() + name.slice(1));
  fs.ensureFileSync(filePath);
  fs.writeFileSync(filePath, template);
}

function createComponentTestFile(name) {
  const filePath = path.join(componentDirectory, "v1", `${name}.test.js`);
  let template = fs.readFileSync(".reaction/scripts/templates/Component.test.js.template", { encoding: "utf8" });
  template = template.replace(/COMPONENT/g, name);
  fs.ensureFileSync(filePath);
  fs.writeFileSync(filePath, template);
}

function createComponentMarkdownFile(name) {
  const filePath = path.join(componentDirectory, "v1", `${name}.md`);
  let template = fs.readFileSync(".reaction/scripts/templates/Component.md.template", { encoding: "utf8" });
  template = template.replace(/COMPONENT/g, name);
  fs.ensureFileSync(filePath);
  fs.writeFileSync(filePath, template);
}

/**
 * Main logic below
 */

if (shouldBumpVersion) {
  // We're copying an existing component to make a new version of it

  // Make sure it exists
  if (!fs.existsSync(componentDirectory)) errorAndExit(`${componentDirectory} does not exist. Can't make a new version of it.`);

  // Find highest current version
  const directoryContents = fs.readdirSync(componentDirectory);
  const latestVersion = directoryContents.length ? directoryContents[directoryContents.length - 1] : null;
  if (!latestVersion) errorAndExit(`${componentDirectory} contains no version subfolders`);
  const latestVersionNumber = parseInt(latestVersion.slice(1), 10);
  if (isNaN(latestVersionNumber)) errorAndExit(`Can't parse ${latestVersion} to an integer`);

  fs.copySync(path.join(componentDirectory, latestVersion), path.join(componentDirectory, `v${latestVersionNumber + 1}`))
} else {
  if (fs.existsSync(componentDirectory)) errorAndExit(`${componentDirectory} already exists`);

  createComponentIndexFile(componentName);
  createComponentFile(componentName);
  createComponentTestFile(componentName);
  createComponentMarkdownFile(componentName);
}
